# LinkedIn Growth Kit

Study the LinkedIn profiles you admire, audit your own, and walk away with a 30-day content plan — all by running a single command in Claude Code.

---

## What this does

Most people guess at what works on LinkedIn. This kit takes a different approach: it reads the actual posts of creators doing well in your space, compares that to what you've been posting, and builds you a personalised content strategy based on real patterns — not generic advice.

There are four skills. You can run them all at once with one command, or step through them individually.

---

## The skills

### `/linkedin-full-pipeline` — Do everything at once

The simplest way to use the kit. Give it your LinkedIn URL and the URLs of a few people you want to learn from, and it handles everything end-to-end: research, audit, and content plan, in one go.

```
/linkedin-full-pipeline https://www.linkedin.com/in/you/ https://www.linkedin.com/in/someone/
```

You can add as many inspiration profiles as you like. The first URL is always yours.

When it's done, you'll have:
- A research report on every inspiration profile
- A full audit of your own LinkedIn presence
- A 30-day content calendar with a detailed brief for every post

This typically takes 20–40 minutes depending on how active the profiles are.

---

### `/linkedin-profile-research` — Study any LinkedIn profile

Point this at any public LinkedIn profile — a creator you follow, someone doing well in your industry, a colleague whose content you admire. It reads their posts, figures out what's working, and writes you a report.

```
/linkedin-profile-research https://www.linkedin.com/in/someone/
```

**What it extracts:**
- Their main content topics (what percentage of posts cover what)
- How often they post and in what formats (text, video, carousel, etc.)
- The phrases and angles they repeat most
- Which posts got the most engagement and why
- Who their audience appears to be based on what they write about
- A breakdown of their top 5 posts — what made each one work

**What you get:** `output/linkedin-research/their-name/MASTER-REPORT.md` — a full strategy breakdown you can read and take notes from.

You can also go deeper:
```
/linkedin-profile-research https://www.linkedin.com/in/someone/ top 10   ← analyse top 10 posts
/linkedin-profile-research https://www.linkedin.com/in/someone/ all       ← analyse every post
```

---

### `/analyze-your-linkedin-profile` — Audit your own profile

Does the same analysis on your LinkedIn presence, then compares it to any profiles you've already researched. The result is an honest picture of where you stand and exactly what to focus on next.

```
/analyze-your-linkedin-profile https://www.linkedin.com/in/you/
/analyze-your-linkedin-profile https://www.linkedin.com/in/you/ vs someone   ← benchmark against research
```

**What it identifies:**
- Your current content pillars and how much you post on each
- Your average engagement and which post types perform best for you
- Topics you're not covering that your audience cares about
- Formats you're underusing (e.g. you mostly post text, but video drives more engagement in your space)
- Messaging angles you're missing
- What you're already doing well that you should double down on
- A prioritised 30-day action plan — what to change first, second, third

**What you get:** `output/linkedin-audit/your-name/` — your audit report and action plan.

---

### `/linkedin-content-planner` — Build your 30-day content strategy

Takes everything learned in the research and audit and turns it into a concrete month of content. Not vague themes — actual posts, with full copy written out.

```
/linkedin-content-planner
/linkedin-content-planner your-name
/linkedin-content-planner your-name vs someone
```

**What it builds:**
- 3–4 content pillars tailored to your goals and audience
- A day-by-day calendar for 4 weeks (typically 5 posts per week, Mon–Fri)
- A detailed brief for every single post:
  - What the post is about and why it's on the calendar
  - The opening line (the hook that stops the scroll)
  - The full post body, written in your voice, ready to publish or lightly edit
  - The call-to-action at the end
  - Why this specific post should perform well
- A messaging guide for your voice, tone, and the phrases that fit you
- An execution checklist for publishing and monitoring

**What you get:** `output/linkedin-strategy/your-name/` — your full content plan, ready to execute.

---

## What you need before you start

### Claude Code

This kit runs inside Claude Code, Anthropic's AI assistant for the terminal. If you don't have it:

1. Make sure you have [Node.js](https://nodejs.org) installed (it's free)
2. Open your terminal and run:
   ```
   npm install -g @anthropic-ai/claude-code
   ```
3. You'll need an Anthropic API key — get one at [console.anthropic.com](https://console.anthropic.com)

### Brave Browser with the Brave MCP

The kit browses LinkedIn the same way you would — by opening the page and reading it. It uses Brave to do this.

You need the **Brave MCP** configured in your Claude Code settings. This is a small plugin that lets Claude Code control the browser. If you're not sure whether you have it set up, check with whoever set up your Claude Code environment.

**Important:** Log into LinkedIn in Brave before running anything. The kit needs an active session to read profile pages.

---

## How to use it

### The easy way — use the visual helper

Open `app/index.html` in your browser (double-click it). Paste your LinkedIn URL and the URLs of people you want to learn from. The page generates the commands for you — copy the top one and paste it into Claude Code.

### The direct way — type in Claude Code

Open your terminal, navigate to this folder, and type `claude`. Then run:

```
/linkedin-full-pipeline https://www.linkedin.com/in/you/ https://www.linkedin.com/in/someone/
```

Sit back and let it run. Everything will be in the `output/` folder when it's done.

---

## Tips

**Research two or three people, not just one.** The more profiles the kit studies before your audit, the more patterns it can spot and the richer your content plan will be.

**You can skip the research phase.** Run `/analyze-your-linkedin-profile` directly on your own profile, then `/linkedin-content-planner`. You'll still get a solid plan — it just won't have comparison data.

**The output files are yours to edit.** Nothing gets posted automatically. Everything lands in your `output/` folder as plain text. Read it, adjust it, use what's useful.

**If something seems slow, let it run.** The kit is scrolling through posts the same way you would. Active profiles with hundreds of posts take longer. It will finish.

---

## Privacy

The kit only reads public LinkedIn profiles — the same pages anyone can see by visiting the URL. It does not access private messages, connection data, or anything behind a login wall beyond the standard visibility you get when logged in.

---

## License

MIT
