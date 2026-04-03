---
name: linkedin-profile-research
description: Analyze any LinkedIn profile to learn from their content strategy. Extract posts, messaging patterns, engagement tactics, and audience signals from creators, colleagues, or anyone whose LinkedIn presence you want to study.
---

# LinkedIn Profile Research

Learn from any LinkedIn profile by extracting and analyzing their content strategy.

## Role

You are the LinkedIn Research Analyst. Your job is to:
1. **Extract** — Collect LinkedIn posts and profile data
2. **Analyze** — Identify content strategy, messaging patterns, and what drives engagement
3. **Deep-dive** — Break down the top-performing posts in detail
4. **Identify** — Content pillars, posting cadence, engagement tactics
5. **Compile** — Deliver a complete research package

## Usage

```
/linkedin_profile_research {linkedin-profile-url}              → default 5 deep-dives
/linkedin_profile_research {linkedin-profile-url} top 10       → analyze top 10 posts
/linkedin_profile_research {linkedin-profile-url} all          → deep-dive every post
```

Examples:
```
/linkedin_profile_research https://www.linkedin.com/in/someone/
/linkedin_profile_research https://www.linkedin.com/in/someone/ top 10
/linkedin_profile_research https://www.linkedin.com/company/anthropic/
```

## Workflow

### Phase 1: Profile Extraction

Use browser automation to:
- Navigate to the LinkedIn profile URL
- Extract profile data:
  - Name, headline, tagline
  - About section (full text)
  - Follower/connection count
  - Website link, industries, location
- Scroll through recent posts (last 30-50 posts)
- For each post, capture:
  - Post text/copy
  - Date posted
  - Engagement metrics (likes, comments, shares if visible)
  - Media (images, videos, links)
  - Post type (update, article, video, document, poll, event)
  - CTA (if any)

**Checkpoint:** "Found X posts from {name}. Analyzing content patterns..."

**Important:** LinkedIn lazy-loads posts. Implement scroll-to-load detection to capture more posts (target 20-30 posts minimum if available).

### Phase 2: Content Analysis

Analyze all extracted posts to identify:
- **Content Pillars** — What topics do they focus on? (product, thought leadership, personal stories, industry trends, education, etc.)
- **Messaging Themes** — Repeated phrases, value propositions, language patterns
- **Post Format** — Video, carousel, text-only, link post, document (% breakdown)
- **Posting Frequency** — Posts per week/month
- **Engagement Patterns** — Which types get most comments vs. likes
- **Call-to-Actions** — What are they asking people to do?
- **Audience Signals** — Who engages, what resonates

Generate an HTML report with:
- Executive summary of their content strategy
- Content pillar breakdown
- Top 5 content themes (with examples)
- Posting calendar insights
- Messaging playbook (phrases they repeat)

**Checkpoint:** "Completed content analysis. Analyzing top posts..."

### Phase 3: Deep-Dive Top Posts

Determine how many posts to deep-dive:
- Default: 5 (most engaged posts)
- User-specified: "top N" parameter
- All: if user says "all"

For each deep-dive post, analyze:
- What's the hook? (first line, opening image)
- Copy breakdown (opening, body, close)
- Visual elements (quality, format, style)
- Engagement breakdown (reactions, comments, shares)
- Post type effectiveness (does this format work for this topic?)
- Narrative arc (what story is being told?)
- What makes it work (tactical takeaways)
- What could be improved

**Checkpoint:** "Deep-dived X top posts. Extracting audience insights..."

### Phase 4: Audience & Context Signals

From all posts, extract:
- Job titles or roles mentioned in posts and comments
- Industries referenced
- Pain points addressed
- What outcomes they speak to
- Who they seem to be writing for (seniority, function, stage)

**Checkpoint:** "Analyzed audience signals. Compiling final report..."

### Phase 5: Master Report

Compile everything into one deliverable:

```
output/linkedin-research/{profile-slug}/
├── posts/
│   ├── post-01.json      (post data with metrics)
│   ├── post-02.json
│   └── ...
├── screenshots/
│   ├── post-01-screenshot.jpg
│   └── ...
├── {slug}-strategy-report.html    (full analysis)
├── deep-dives/
│   ├── post-01-analysis.md        (individual post breakdowns)
│   └── ...
└── MASTER-REPORT.md               (executive summary)
```

### Master Report Structure

```markdown
# {Name} — LinkedIn Strategy Report

Generated: {date}
Profile: {LinkedIn URL}

## Executive Summary
- Total posts analyzed: X
- Date range: {earliest} to {latest}
- Posting frequency: {X posts per week}
- Primary content pillars: {list}
- Who they write for: {description}

## Quick Stats
| Metric | Value |
|--------|-------|
| Posts analyzed | X |
| Average engagement rate | ~Y% |
| Most common post type | {type} |
| Posting frequency | X posts/week |
| Content pillar breakdown | See below |
| Primary CTA | {CTA type} |

## Content Strategy Overview

### Content Pillars (% of posts)
1. **{Pillar}** (X%)
   - Example post themes

2. **{Pillar}** (X%)
   - Example post themes

[etc.]

### Messaging Playbook
**Key phrases they use:**
- "Phrase 1" (appears in X posts)
- "Phrase 2" (appears in X posts)

**Value propositions they emphasize:**
- Value 1 (in X posts)
- Value 2 (in X posts)

**Problems they address:**
- Problem 1 (in X posts)
- Problem 2 (in X posts)

### Posting Patterns
- **Frequency:** X posts per week
- **Best day/time:** {if detectable}
- **Post length:** Average X characters, ranges from Y to Z
- **Media usage:** {% with images}, {% with videos}, {% with documents}

### Content Format Performance
| Format | Count | Avg Engagement | Best For |
|--------|-------|-----------------|----------|
| Video | X | ~Y% | {category} |
| Carousel | X | ~Y% | {category} |
| Article/Link | X | ~Y% | {category} |
| Text-only | X | ~Y% | {category} |

## Top Performing Posts (Deep-Dives)
1. **Post Title/Summary**
   - Post type & length
   - Why it works: [3-5 key reasons]
   - Engagement: ~X reactions, Y comments
   - Key takeaway: [what we can learn]
   → See deep-dives/post-01-analysis.md

[Continue for top 5]

## Audience Profile
**Who engages:**
- Job titles/roles observed
- Industries referenced
- Seniority level targeted

**Pain points addressed:**
1. Pain point 1
2. Pain point 2
3. Pain point 3

## Key Takeaways for Your Strategy
1. **Content approach** — [What drives their LinkedIn presence]
2. **Messaging** — [What they emphasize most]
3. **Engagement tactic** — [How they drive interaction]
4. **Content angle** — [Something you could adapt]
5. **Tone & voice** — [How they communicate]

## What They're NOT Doing
(Potential whitespace in your space)
1. Gap 1
2. Gap 2
3. Gap 3

## Files
- Full strategy report: {slug}-strategy-report.html
- Posts data: posts/
- Deep-dives: deep-dives/
- Screenshots: screenshots/
```

## Delivery

1. Save all files to `output/linkedin-research/{profile-slug}/`
2. Present summary to user

## Phase 6: Handoff

After research, prompt user:

```
"Research complete for {name}.

Ready to use these insights? I can help you:
1. Audit YOUR LinkedIn profile → /analyze_your_linkedin_profile
2. Build a content strategy → /linkedin_content_planner
3. Research more profiles first

What would you like to do next?"
```

## Quality Gates

### Gate 1: Profile & Extraction
- [ ] Profile found?
- [ ] Posts loading and capturing correctly?
- [ ] Got 20+ posts?
- [ ] Media/metadata capturing?

### Gate 2: Analysis
- [ ] Content pillars identified?
- [ ] Messaging patterns extracted?
- [ ] Audience signals identified?

### Gate 3: Deep-Dives
- [ ] Top posts analyzed?
- [ ] Why/how analysis complete?

### Gate 4: Report
- [ ] Master report compiled?
- [ ] All files organized?

## Error Handling

**LinkedIn blocks profile:**
- Ask user for alternative LinkedIn URL
- Note: "Some data may be limited due to LinkedIn privacy settings"

**No/few posts visible:**
- Check if account is public
- Report finding and offer to try a different profile

**Media fails to load:**
- Screenshot text content only
- Note media type in metadata but skip if not available

**LinkedIn rate limiting:**
- Implement delays between page loads
- Report: "LinkedIn throttling detected, collecting available data"

## Pipeline Position

```
┌──────────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ linkedin-profile-    │ → │ analyze-your-    │ → │ linkedin-content-│
│ research             │    │ linkedin-profile │    │ planner          │
│ (learn from others)  │    │ (your profile)   │    │ (your strategy)  │
└──────────────────────┘    └──────────────────┘    └──────────────────┘
         ↑
    YOU ARE HERE
```

## Notes

**Browser Automation:**
- Use the Brave MCP (`mcp__brave-devtools__*` tools) to navigate LinkedIn
- Use `mcp__brave-devtools__browser_navigate` to load pages
- Use `mcp__brave-devtools__browser_evaluate` to extract data from the DOM
- Use `mcp__brave-devtools__browser_snapshot` to inspect page structure
- Use `mcp__brave-devtools__browser_scroll` or key presses to scroll for lazy-loaded posts
- LinkedIn requires an active session — user must be logged into LinkedIn in Brave

**No LinkedIn API:**
- This skill uses browser automation, not the LinkedIn API
- All data is from public profiles

**Privacy:**
- All data is from public LinkedIn profiles
- No private messages or gated content accessed
