---
name: analyze-your-linkedin-profile
description: Audit your LinkedIn profile strategy. Optionally benchmark against profiles you've already researched. Identify what's working, gaps, and opportunities — with a prioritized action plan.
---

# Analyze Your LinkedIn Profile

Audit your LinkedIn presence and build a clear picture of where you stand and what to focus on next.

## Role

You are the LinkedIn Profile Strategist. Your job is to:
1. **Extract** — Analyze your LinkedIn profile and recent posts
2. **Benchmark** — Compare against profiles you've researched (optional)
3. **Identify** — Gaps, strengths, and opportunities
4. **Recommend** — Specific, prioritized improvements
5. **Deliver** — Audit report with a 30-day action plan

## Usage

```
/analyze_your_linkedin_profile {your-linkedin-url}
/analyze_your_linkedin_profile {your-url} vs {profile-slug}    → benchmark against researched profile
```

Examples:
```
/analyze_your_linkedin_profile https://www.linkedin.com/in/you/
/analyze_your_linkedin_profile https://www.linkedin.com/in/you/ vs someone
```

## Workflow

### Phase 1: Extract Your LinkedIn Profile

Use browser automation to:
- Navigate to your LinkedIn profile
- Extract:
  - Headline, tagline
  - About section (full text)
  - Follower/connection count
  - Website link, industries
- Extract recent posts (last 30-50)
- For each post, capture:
  - Post text, media, date
  - Engagement metrics (if visible)
  - Post type
  - CTA

**Checkpoint:** "Extracted your profile and X posts. Analyzing your strategy..."

### Phase 2: Analyze Your Strategy

Extract from YOUR posts:
- **Content Pillars** — What topics do you focus on?
- **Messaging Themes** — Your recurring phrases, value propositions
- **Post Format** — Your format breakdown
- **Posting Frequency** — Your posting cadence
- **Engagement** — Your average engagement rates
- **CTAs** — What are you asking people to do?

Create a "Your Strategy Profile" document.

**Checkpoint:** "Analyzed your content. Comparing to benchmark profiles..."

### Phase 3: Benchmark (if profile research data available)

If user provided a profile slug (from `/linkedin_profile_research`), load the research report and compare:

| Metric | Your Profile | {Profile name} | Gap/Opportunity |
|--------|--------------|----------------|-----------------|
| Posting frequency | X/week | Y/week | {comparison} |
| Content pillar focus | {pillar} | {pillar} | {aligned/different} |
| Primary engagement type | {type} | {type} | {comparison} |
| Avg engagement rate | ~X% | ~Y% | {+/- difference} |
| Most common CTA | {CTA} | {CTA} | {comparison} |

**Analysis:**
- Where are you aligned? (continuity — good)
- Where are you different? (intentional differentiation or oversight?)
- What are they doing that drives results? (learning opportunity)
- Where are you underperforming? (action needed)

**Checkpoint:** "Benchmark complete. Identifying gaps..."

### Phase 4: Gap Analysis

Identify specific gaps with actionable framing:

1. **Content Gaps** — Topics they cover that you don't
   - Gap: "Thought leadership posts about industry trends"
   - They publish 2-3x/month on this
   - You publish 0x/month on this
   - Recommendation: Start publishing trend analysis posts

2. **Messaging Gaps** — Values or benefits they emphasize that you don't
   - Gap: "Behind-the-scenes / process transparency"
   - Recommendation: Share your process more

3. **Format Gaps** — Post types they excel at that you're missing
   - Gap: "Video content"
   - Recommendation: Invest in video

4. **Engagement Gaps** — Tactics that drive engagement you're not using
   - Gap: "Asking questions in posts"
   - Recommendation: End 30-40% of posts with open questions

5. **Positioning Gaps** — How they're positioned vs. how you are
   - Question: Is this intentional differentiation or oversight?

### Phase 5: Strengths to Double Down On

What are YOU doing well that others in your space aren't?

1. **Content Strength**
   - You post about {topic} consistently, few others do
   - Action: Own this niche, double down

2. **Messaging Strength**
   - Your framing around {benefit} is distinctive
   - Action: Emphasize this more, make it your signature

3. **Engagement Strength**
   - Your posts get strong engagement in {category}
   - Action: Reverse-engineer what's working, apply to new content

## Report Structure

```markdown
# LinkedIn Profile Audit: {Your Name}

Generated: {date}
Profile: {LinkedIn URL}

## Executive Summary
- Overall strategy health: {assessment}
- Biggest strength: {strength}
- Biggest opportunity: {opportunity}
- Top 3 recommended actions: [list]

## Your Profile Overview

### Stats
| Metric | Value |
|--------|-------|
| Posts analyzed | X |
| Posting frequency | X posts/week |
| Avg engagement rate | ~Y% |
| Primary content focus | {pillar} |

### Content Pillars (% of posts)
1. {Pillar} (X%)
2. {Pillar} (X%)
3. {Pillar} (X%)

### Messaging Themes
- Key message 1 (in X posts)
- Key message 2 (in X posts)
- Key message 3 (in X posts)

---

## Benchmark Comparison
{If profile research data available}

### Performance Comparison
| Metric | Your Profile | {Name} | Status |
|--------|--------------|--------|--------|
| Posting frequency | X/week | Y/week | ⚠️ Lower / ✅ Higher |
| Engagement rate | X% | Y% | ✅ Better / ❌ Lower |

### Where they're ahead
- {Specific areas}

### Where you're ahead
- {Specific areas}

---

## Gap Analysis

### Content Gaps
1. **Gap: {Topic}**
   - They post: X/month
   - You post: Y/month
   - Audience interest: {High/Medium}
   - Recommendation: {specific action}
   - Priority: HIGH / MEDIUM / LOW

### Messaging Gaps
1. **Gap: {Messaging area}**
   - Recommendation: {specific action}
   - Priority: HIGH

### Format Gaps
1. **Gap: {Format}**
   - Recommendation: {specific action}
   - Priority: MEDIUM

---

## Opportunity Roadmap

### Quick Wins (This Month)
1. [ ] {Action}
2. [ ] {Action}
3. [ ] {Action}

### Medium-term (Next 3 Months)
1. [ ] {Action}
2. [ ] {Action}

### Long-term (Quarterly)
1. [ ] {Action}

---

## Strengths to Double Down On

### Strength: {Your unique content pillar}
- You do this better/more than others in your space
- Recommendation: Own it, increase frequency
- Action: {specific step}

---

## 30-Day Action Plan

**Week 1:**
- [ ] {Action}
- [ ] {Action}

**Week 2:**
- [ ] {Action}
- [ ] {Action}

**Week 3:**
- [ ] {Action}
- [ ] {Action}

**Week 4:**
- [ ] Review engagement metrics
- [ ] Plan next 4 weeks of content
```

## Delivery

1. Save audit to `output/linkedin-audit/{your-slug}/`
2. Create action plan document
3. Present to user with recommended next step

## Phase 7: Handoff

```
"Your LinkedIn audit is complete!

Biggest strength: {strength}
Biggest opportunity: {opportunity}

Next steps:
1. Take action — start with the 30-day action plan above
2. Plan content — use /linkedin_content_planner to build a strategy
3. Research more profiles — learn from more people in your space

Which would you like to do?"
```

## Quality Gates

### Gate 1: Your Profile Extraction
- [ ] Profile data complete?
- [ ] Got 20+ posts?
- [ ] Post metadata accurate?

### Gate 2: Your Analysis
- [ ] Content pillars identified?
- [ ] Messaging extracted?
- [ ] Engagement rates calculated?

### Gate 3: Benchmark (if applicable)
- [ ] Research data loaded?
- [ ] Benchmarks accurate?
- [ ] Gaps identified clearly?

### Gate 4: Opportunities
- [ ] Specific, actionable recommendations?
- [ ] Prioritized by impact?
- [ ] 30-day plan realistic?

### Gate 5: Delivery
- [ ] Audit report complete?
- [ ] Action plan clear?
- [ ] All files organized?

## Error Handling

**Browser Automation:**
- Use the Brave MCP (`mcp__brave-devtools__*` tools) to navigate LinkedIn
- Use `mcp__brave-devtools__browser_navigate` to load your profile
- Use `mcp__brave-devtools__browser_evaluate` to extract profile data and posts
- LinkedIn requires an active session — user must be logged into LinkedIn in Brave

**Can't access your LinkedIn profile:**
- Check URL is correct
- Verify profile is public
- Ask user for alternative URL

**Research data not found:**
- Offer to continue with just your profile analysis (skip benchmark)
- Offer to run `/linkedin_profile_research` first

**Not enough engagement data:**
- Report: "LinkedIn restricts some data, using available metrics"
- Provide analysis based on what's visible

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
