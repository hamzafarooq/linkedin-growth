---
name: linkedin-full-pipeline
description: Run the complete LinkedIn growth pipeline in one command — research inspiration profiles, audit your own profile, then build your 30-day content strategy. All three steps, end to end.
---

# LinkedIn Full Pipeline

Run all three LinkedIn growth steps back-to-back from a single command.

## Usage

```
/linkedin-full-pipeline {your-url} {inspiration-url-1} {inspiration-url-2} ...
```

Examples:
```
/linkedin-full-pipeline https://www.linkedin.com/in/you/ https://www.linkedin.com/in/someone/
/linkedin-full-pipeline https://www.linkedin.com/in/you/ https://www.linkedin.com/in/person1/ https://www.linkedin.com/in/person2/
```

The first URL is always yours. Everything after that is a profile to learn from.

## What this does

Runs three skills in sequence, each feeding into the next:

```
Step 1 — Research inspiration profiles (one or more)
         ↓  saves reports to output/linkedin-research/
Step 2 — Audit your own profile, benchmarked against what was learned
         ↓  saves audit to output/linkedin-audit/
Step 3 — Build your 30-day content strategy
         ↓  saves plan to output/linkedin-strategy/
```

## Workflow

### Parse arguments

From the command arguments:
- First URL → your LinkedIn profile URL (`your_url`)
- Remaining URLs → inspiration profiles to research (`inspiration_urls[]`)
- Derive your slug from the last segment of your URL path (e.g. `https://linkedin.com/in/hamzafarooq/` → `hamzafarooq`)
- Derive each inspiration slug the same way

If no inspiration URLs are provided, skip Step 1 and go straight to Step 2.

If no URLs are provided at all, ask the user:
1. "What is your LinkedIn profile URL?"
2. "Are there any profiles you'd like to research first? (paste URLs, or press enter to skip)"

---

### Step 1: Research inspiration profiles

For each URL in `inspiration_urls[]`:

Execute the full `/linkedin-profile-research` workflow on that profile:
- Navigate to the profile using Brave MCP
- Extract profile data and posts
- Analyze content strategy, pillars, messaging, posting patterns
- Deep-dive top posts
- Save the master report to `output/linkedin-research/{slug}/MASTER-REPORT.md`

Tell the user after each one:
```
✓ Research complete: {name} → output/linkedin-research/{slug}/MASTER-REPORT.md
```

If there are multiple inspiration profiles, research them one at a time in the order provided.

**Checkpoint after Step 1:**
```
Research complete for {N} profile(s).
Moving to Step 2 — auditing your profile...
```

---

### Step 2: Audit your profile

Execute the full `/analyze-your-linkedin-profile` workflow on `your_url`:
- Navigate to your LinkedIn profile using Brave MCP
- Extract your profile data and posts
- Analyze your content strategy
- If inspiration profiles were researched, benchmark against the first one (primary inspiration)
- Identify gaps, strengths, and opportunities
- Save the audit to `output/linkedin-audit/{your-slug}/`

Tell the user:
```
✓ Audit complete → output/linkedin-audit/{your-slug}/
Moving to Step 3 — building your content plan...
```

---

### Step 3: Build content strategy

Execute the full `/linkedin-content-planner` workflow:
- Load your audit from `output/linkedin-audit/{your-slug}/`
- Load research reports from `output/linkedin-research/` (if available)
- Build the strategy framework, content pillars, and 30-day calendar
- Write detailed briefs for every post
- Save everything to `output/linkedin-strategy/{your-slug}/`

---

### Final handoff

When all three steps are complete, present a summary:

```
Pipeline complete.

Your outputs:
  Research:  output/linkedin-research/{slug}/MASTER-REPORT.md  (for each profile)
  Audit:     output/linkedin-audit/{your-slug}/
  Strategy:  output/linkedin-strategy/{your-slug}/

Where to start:
  1. Read your audit — output/linkedin-audit/{your-slug}/{your-slug}-linkedin-audit.md
  2. Open your content calendar — output/linkedin-strategy/{your-slug}/30-DAY-CALENDAR.md
  3. Write your first post — output/linkedin-strategy/{your-slug}/POST-BRIEFS.md
```

## Error handling

**A profile can't be accessed:**
- Log the issue, skip that inspiration profile, continue with the rest
- Note in the final summary which profiles were skipped and why

**Your profile can't be accessed:**
- Stop and ask the user to verify their URL and confirm they're logged into LinkedIn in Brave

**Audit data missing when reaching Step 3:**
- Continue anyway — the content planner can work with less context, it will ask for what it needs

## Notes

- All browser automation uses the Brave MCP (`mcp__brave-devtools__*` tools)
- LinkedIn requires an active session — user must be logged into LinkedIn in Brave before running
- The full pipeline typically takes 20-40 minutes depending on how many profiles are researched and how active each one is
- Each step saves its output independently — if something fails mid-way, you can resume from the last completed step using the individual skill commands
