# LinkedIn Growth Kit

A Claude Code skill suite for LinkedIn growth — research creators who inspire you, audit your own profile, and build a 30-day content strategy. All powered by browser automation (no API keys required).

---

## What This Does

Three connected skills form a pipeline:

```
1. Research LinkedIn profiles of creators you admire
          ↓
2. Audit your own LinkedIn profile against those benchmarks
          ↓
3. Build a 30-day content strategy based on what you learn
```

All data comes from public LinkedIn profiles via browser automation. No Meta API, no LinkedIn API, no credentials beyond your own LinkedIn login.

---

## Prerequisites

### 1. Claude Code

Install Claude Code (the CLI):

```bash
npm install -g @anthropic-ai/claude-code
```

Requires an Anthropic API key. Get one at [console.anthropic.com](https://console.anthropic.com).

### 2. Chrome with Remote Debugging (Required)

The skills use browser automation via the Chrome DevTools MCP. Chrome must be launched with a remote debugging port — **regular Chrome will not work**.

**Mac:**
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --remote-debugging-port=9222 \
  --user-data-dir=/tmp/chrome-debug
```

**Windows:**
```cmd
"C:\Program Files\Google\Chrome\Application\chrome.exe" ^
  --remote-debugging-port=9222 ^
  --user-data-dir=C:\chrome-debug
```

**Linux:**
```bash
google-chrome --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug
```

Verify it's running:
```bash
curl -s http://127.0.0.1:9222/json/version
```

You should see a JSON response with browser version info.

> **Important:** Log into LinkedIn in this Chrome instance before running any skill. The skills need an active LinkedIn session to access profile data.

### 3. Chrome DevTools MCP

Add the Chrome DevTools MCP to your Claude Code settings. In your `~/.claude/settings.json` (or the project `.claude/settings.json`):

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"],
      "env": {
        "PUPPETEER_WS_ENDPOINT": "ws://127.0.0.1:9222"
      }
    }
  }
}
```

> **Alternative:** Some setups use `@anthropic-ai/mcp-server-puppeteer` or a direct CDP connection. Use whichever Chrome/CDP MCP server you have installed. The key is that it connects to `localhost:9222`.

---

## Quick Start

Clone this repo and open it in Claude Code:

```bash
git clone https://github.com/hamzafarooq/linkedin-growth.git
cd linkedin-growth
claude
```

Then run skills directly in the Claude Code session:

```
# Research a creator you admire
/linkedin_profile_research https://www.linkedin.com/in/someone/

# Audit your own profile
/analyze_your_linkedin_profile https://www.linkedin.com/in/you/

# Build your 30-day content plan
/linkedin_content_planner
```

---

## The Skills

### `/linkedin_profile_research {linkedin-url}`

Analyzes any LinkedIn profile — a creator you follow, someone whose content you want to learn from, or a colleague in your space. Extracts:

- Content pillars and posting frequency
- Post formats that get the most engagement
- Messaging patterns and recurring themes
- Audience signals (who engages, what resonates)
- Top-performing posts with deep-dive analysis

**Output:** `output/linkedin-research/{profile-slug}/MASTER-REPORT.md`

```bash
# Research a single profile
/linkedin_profile_research https://www.linkedin.com/in/someone/

# Go deeper on top posts
/linkedin_profile_research https://www.linkedin.com/in/someone/ top 10

# Analyze every post
/linkedin_profile_research https://www.linkedin.com/in/someone/ all
```

---

### `/analyze_your_linkedin_profile {your-linkedin-url}`

Audits your own LinkedIn profile. Compare your content strategy against any profiles you've already researched. Identifies:

- What you're doing well (double down on it)
- Gaps in content, format, and messaging
- Specific opportunities ranked by impact
- A 30-day action plan

**Output:** `output/linkedin-audit/{your-slug}/`

```bash
# Audit your profile standalone
/analyze_your_linkedin_profile https://www.linkedin.com/in/you/

# Benchmark against a profile you researched
/analyze_your_linkedin_profile https://www.linkedin.com/in/you/ vs someone
```

---

### `/linkedin_content_planner`

Builds a full 30-day content strategy. Synthesizes your audit + any profile research into:

- 3-4 content pillars with post allocation
- Day-by-day calendar (20-24 posts)
- Detailed brief for every single post (hook, copy, CTA, why it works)
- Messaging guidelines and voice notes
- Execution checklist

**Output:** `output/linkedin-strategy/{your-slug}/`

```bash
/linkedin_content_planner
/linkedin_content_planner your-slug              # auto-load your audit
/linkedin_content_planner you vs someone         # leverage profile research
```

---

## Suggested Workflows

### Quick benchmark (10 min)
```
/linkedin_profile_research https://www.linkedin.com/in/someone/
```
Read `output/linkedin-research/someone/MASTER-REPORT.md` — understand what's working for creators in your space.

### Full strategy (45-60 min)
```
/linkedin_profile_research https://www.linkedin.com/in/someone-you-admire/
/linkedin_profile_research https://www.linkedin.com/in/another-creator/
/analyze_your_linkedin_profile https://www.linkedin.com/in/you/
/linkedin_content_planner
```
You'll have a complete month of content ready to publish.

### Profile-first approach (30 min)
```
/analyze_your_linkedin_profile https://www.linkedin.com/in/you/
/linkedin_content_planner
```
Skip the research phase and go straight to auditing + planning.

---

## Output Structure

```
output/
├── linkedin-research/
│   └── {profile-slug}/
│       ├── MASTER-REPORT.md          ← start here
│       ├── {slug}-strategy-report.html
│       ├── deep-dives/               ← top post analyses
│       └── posts/                    ← raw post data
│
├── linkedin-audit/
│   └── {your-slug}/
│       ├── {slug}-linkedin-audit.md  ← your profile audit
│       ├── 30-DAY-ACTION-PLAN.md
│       └── BENCHMARK-COMPARISON.md
│
└── linkedin-strategy/
    └── {your-slug}/
        ├── STRATEGY.md
        ├── 30-DAY-CALENDAR.md
        ├── POST-BRIEFS.md            ← one brief per post
        ├── MESSAGING-GUIDE.md
        └── EXECUTION-CHECKLIST.md
```

---

## Frontend Dashboard

Open `app/index.html` in any browser for a visual interface. It lets you:

- Enter your LinkedIn URL and profiles you want to learn from
- See the pipeline steps in order
- Generate the exact Claude Code commands to run
- Track which steps you've completed

No server required — it's a static HTML file.

---

## Troubleshooting

**Chrome MCP not connecting:**
- Make sure Chrome was launched with `--remote-debugging-port=9222`
- Check: `curl -s http://127.0.0.1:9222/json/version`
- Regular Chrome (opened normally) will not work

**LinkedIn not loading / profile not found:**
- Make sure you're logged into LinkedIn in the debug Chrome instance
- Try navigating to the profile manually in that Chrome window first
- Some profiles have limited visibility — the skill will report what it can access

**No posts captured:**
- LinkedIn lazy-loads posts — the skill scrolls automatically, but very sparse profiles may have limited data
- Try appending `all` to capture everything available

**Rate limiting from LinkedIn:**
- Add pauses between runs if researching many profiles in sequence
- LinkedIn throttles heavy activity — space out your research sessions

---

## Notes

- All data is from **public LinkedIn profiles only**
- No private messages, gated content, or authenticated data is accessed
- Respects LinkedIn's public data visibility settings
- This tool is for personal research and content strategy, not bulk data collection

---

## License

MIT
