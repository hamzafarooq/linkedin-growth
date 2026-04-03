const express = require('express');
const { spawn } = require('child_process');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app')));

const ALLOWED_PREFIXES = [
  '/linkedin-profile-research',
  '/analyze-your-linkedin-profile',
  '/linkedin-content-planner'
];

app.get('/api/status', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/run', (req, res) => {
  const { command } = req.body;

  if (!command || typeof command !== 'string') {
    return res.status(400).json({ error: 'Invalid command' });
  }

  const trimmed = command.trim();
  if (!ALLOWED_PREFIXES.some(p => trimmed.startsWith(p))) {
    return res.status(400).json({ error: 'Command not allowed' });
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const send = (obj) => res.write(`data: ${JSON.stringify(obj)}\n\n`);

  send({ type: 'start', command: trimmed });

  const proc = spawn('claude', [
    '--dangerously-skip-permissions',
    '--output-format', 'stream-json',
    '--include-partial-messages',
    '--verbose',
    '-p', trimmed
  ], {
    cwd: __dirname,
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env }
  });

  let buffer = '';
  let finished = false;

  const finish = (code) => {
    if (finished) return;
    finished = true;
    send({ type: 'done', code: code ?? 0 });
    res.end();
  };

  proc.stdout.on('data', (chunk) => {
    buffer += chunk.toString();
    const lines = buffer.split('\n');
    buffer = lines.pop();

    for (const line of lines) {
      const t = line.trim();
      if (!t) continue;
      try {
        const ev = JSON.parse(t);
        if (ev.type === 'assistant' && ev.message?.content) {
          for (const block of ev.message.content) {
            if (block.type === 'text' && block.text) {
              send({ type: 'text', text: block.text });
            } else if (block.type === 'tool_use') {
              send({ type: 'tool', text: block.name });
            }
          }
        } else if (ev.type === 'result') {
          if (ev.result) {
            send({ type: ev.is_error ? 'error' : 'text', text: ev.result });
          }
          finish(ev.is_error ? 1 : 0);
        } else if (ev.type === 'error') {
          send({ type: 'error', text: ev.error?.message || JSON.stringify(ev) });
        }
      } catch (e) {
        // non-JSON line, ignore
      }
    }
  });

  proc.stderr.on('data', (d) => {
    const t = d.toString().trim();
    if (t) send({ type: 'stderr', text: t });
  });

  proc.on('error', (err) => {
    if (err.code === 'ENOENT') {
      send({ type: 'error', text: 'Claude Code CLI not found. Install with: npm install -g @anthropic-ai/claude-code' });
    } else {
      send({ type: 'error', text: err.message });
    }
    finish(1);
  });

  proc.on('close', (code, signal) => {
    if (!finished) finish(signal ? 1 : (code ?? 1));
  });

  req.on('close', () => { if (!finished) proc.kill('SIGTERM'); });
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`\nLinkedIn Growth Kit running at http://localhost:${PORT}\n`);
  console.log('Open that URL in your browser.');
  console.log('Keep this terminal running while you use the app.\n');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\nPort ${PORT} is already in use.`);
    console.error(`Kill it with:  lsof -ti :${PORT} | xargs kill -9\n`);
  } else {
    console.error(err);
  }
  process.exit(1);
});
