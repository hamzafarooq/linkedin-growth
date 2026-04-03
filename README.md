# LinkedIn Growth Kit

Study the LinkedIn profiles you admire, audit your own, and walk away with a 30-day content plan — all by running a few commands in Claude Code.

---

## What this does

Most people guess at what works on LinkedIn. This kit takes a different approach: it reads the actual posts of creators doing well in your space, compares that to what you've been posting, and builds you a personalised content strategy based on real patterns — not generic advice.

There are three steps, and you can do all three in one session:

**Step 1 — Learn from creators you admire**
Point the kit at any public LinkedIn profile. It reads their posts, figures out what topics they cover, how they write, what kinds of posts get engagement, and packages all of that into a report for you.

**Step 2 — Audit your own profile**
The kit does the same analysis on your profile, then compares the two. You'll see exactly where the gaps are: topics you're not covering, formats you're not using, things that are working that you should do more of.

**Step 3 — Get your 30-day content plan**
Using everything it learned, the kit builds you a full month of content — a calendar with one post per slot, a detailed brief for each one (what to write, how to open it, what to ask at the end), and guidelines for your voice and tone.

---

## What you need before you start

### Claude Code

This kit runs inside Claude Code, Anthropic's AI coding assistant. If you don't have it yet:

1. Make sure you have [Node.js](https://nodejs.org) installed (it's free)
2. Open your terminal and run:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
3. You'll need an Anthropic API key — get one free at [console.anthropic.com](https://console.anthropic.com)

### Brave Browser with the Brave MCP

The kit browses LinkedIn the same way you would — by actually opening the page and reading it. It uses your Brave browser to do this.

You need the **Brave MCP** configured in your Claude Code settings. This is a small plugin that lets Claude Code control the browser. If you're not sure whether you have it set up, check with whoever set up your Claude Code environment, or follow the [Brave MCP setup guide](https://github.com/anthropics/claude-code).

**Important:** Before running any step, log into LinkedIn in Brave. The kit needs you to be logged in so it can read profile pages the way you normally would.

---

## How to use it

### The easy way — use the visual helper

Open the file `app/index.html` in your browser (just double-click it). You'll see a simple form:

1. Paste your LinkedIn profile URL
2. Paste the URLs of people you want to learn from
3. The page generates the exact commands for you to copy

Then paste those commands into Claude Code, one at a time, and let it run.

### The direct way — type commands in Claude Code

Open this folder in Claude Code (open your terminal, navigate to this folder, type `claude`). Then run:

```
/linkedin-profile-research https://www.linkedin.com/in/someone-you-admire/
```

Wait for it to finish, then:

```
/analyze-your-linkedin-profile https://www.linkedin.com/in/your-profile/
```

Then finally:

```
/linkedin-content-planner your-name vs someone-you-admire
```

Replace the URLs and names with your actual details.

---

## What you get out

Everything is saved as readable files in the `output/` folder:

**After Step 1 (research):**
`output/linkedin-research/their-name/MASTER-REPORT.md`
A breakdown of their content strategy — their topics, their writing patterns, their top posts, and what you can take from it.

**After Step 2 (your audit):**
`output/linkedin-audit/your-name/`
An honest look at your current LinkedIn presence, what's working, where the gaps are, and a 30-day action plan.

**After Step 3 (content plan):**
`output/linkedin-strategy/your-name/`
Your full 30-day content calendar, with a detailed brief for every single post — ready to write from.

---

## Tips

**Research more than one person.** The more profiles you study before your audit, the richer the comparison. Two or three is a good starting point.

**You can skip straight to the audit.** If you don't want to research anyone else first, just run Step 2 on your own profile and then Step 3. You'll still get a solid content plan.

**The output files are yours to edit.** Nothing gets posted automatically. Everything lands in your `output/` folder as plain text — read it, adjust it, use what's useful.

**LinkedIn can be slow to load.** If a step seems to hang, give it a moment. The kit is scrolling through posts the same way you would, and some profiles have a lot of them.

---

## Privacy

The kit only reads public LinkedIn profiles — the same pages anyone can see by visiting the URL. It does not access private messages, connection data, or anything behind a login wall other than the standard feed visibility you get when logged in.

---

## License

MIT
