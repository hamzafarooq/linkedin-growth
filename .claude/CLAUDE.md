# CLAUDE.md — LinkedIn Growth Kit

This file documents how to work with the LinkedIn Growth Kit skills.

## Run everything at once

```
/linkedin-full-pipeline {your-url} {inspiration-url-1} {inspiration-url-2} ...
```

One command. Researches the inspiration profiles, audits yours, builds the 30-day plan. End to end.

## Or run each step individually

```
/linkedin-profile-research {LinkedIn URL}
    ↓  learn from creators you admire
/analyze-your-linkedin-profile {your LinkedIn URL}
    ↓  benchmark your own profile
/linkedin-content-planner
    ↓  build your 30-day content strategy
```

## Skills

### `/linkedin-full-pipeline`
Runs all three steps in sequence from a single command. First URL is yours; remaining URLs are profiles to research.

```
/linkedin-full-pipeline {your-url} {inspiration-url-1} {inspiration-url-2}
```

Output: all three output folders populated in one run.

### `/linkedin-profile-research`
Research any LinkedIn profile — a creator you follow, a colleague, someone in your space whose content you want to learn from. Extracts content pillars, posting patterns, top posts, messaging themes, and audience signals.

```
/linkedin_profile_research {linkedin-url}
/linkedin_profile_research {linkedin-url} top 10
/linkedin_profile_research {linkedin-url} all
```

Output: `output/linkedin-research/{slug}/MASTER-REPORT.md`

### `/analyze_your_linkedin_profile`
Audit your own LinkedIn profile. Optionally benchmark against profiles you've already researched. Identifies what's working, gaps, and a prioritized opportunity roadmap.

```
/analyze_your_linkedin_profile {your-url}
/analyze_your_linkedin_profile {your-url} vs {slug}
```

Output: `output/linkedin-audit/{your-slug}/`

### `/linkedin_content_planner`
Create a 30-day content strategy with a post-by-post calendar, detailed briefs, messaging guidelines, and execution checklist.

```
/linkedin_content_planner
/linkedin_content_planner {your-slug}
/linkedin_content_planner {your-slug} vs {inspiration-slug}
```

Output: `output/linkedin-strategy/{your-slug}/`

## Brave MCP (Required)

Skills use the Brave MCP (`mcp__brave-devtools__*`) for browser automation. Make sure:

1. The Brave MCP server is configured in your Claude Code settings
2. You are **logged into LinkedIn** in Brave before running any skill

No Chrome setup needed — Brave MCP handles all browser navigation directly.

## Output Locations

```
output/linkedin-research/{slug}/MASTER-REPORT.md
output/linkedin-audit/{slug}/{slug}-linkedin-audit.md
output/linkedin-strategy/{slug}/30-DAY-CALENDAR.md
output/linkedin-strategy/{slug}/POST-BRIEFS.md
```

## Notes

- No API keys required — all browser automation
- All data is from public LinkedIn profiles only
- Every skill has built-in checkpoints
- Skills are in `.claude/skills/`
