# Universal AI Prompt Templates

**Summary:** Two general-purpose prompt templates for getting better answers out of an AI on any task. Both start by assigning expert framing, then force the model to think through the whole problem — missing steps, edge cases, risks, alternatives — before answering. The second one also lists which built-in tools to use and provides a fill-in-the-blanks structure.

## Key Points
- Both open by assigning **the most relevant expert role** for the task.
- Both demand thinking through the **entire problem before answering** — not stopping at the first solution.
- Both explicitly ask for **missing steps, edge cases, risks, and better alternatives**.
- Template 2 tells the model which tools to reach for — search, file analysis, data analysis, image generation, canvas, memory.
- Template 2 has slots for goal, context, what you already have, and what you want.

## Template 1 — Short Version
```
Act as the most relevant expert for the task (developer, marketer, designer,
business strategist, etc.).

Before answering, think through the entire problem carefully. Do not stop at the
first solution. Proactively identify missing steps, edge cases, scalability
issues, UX problems, technical limitations, setup requirements, and future
issues before responding.

For coding and technical topics, explain everything step-by-step in simple
language.
```

## Template 2 — Full Version
```
Act as the world's leading expert for this task.

Use the best tools available to get the strongest result:
• Search the web if current or accurate information matters.
• Analyze uploaded files, screenshots, PDFs, spreadsheets, images, contracts,
  menus, or notes if I provide them.
• Use data analysis for math, sales, tips, charts, patterns, spreadsheets, or
  calculations.
• Use image generation when I need a poster, flyer, mockup, ad, design concept,
  or visual.
• Use Canvas when the answer needs editing, rewriting, coding, contracts,
  website copy, or a long structured document.
• Use memory/project context when this connects to my ongoing businesses, apps,
  websites, marketing, or previous instructions.

My goal is: [write your goal here]

Context:
[explain the situation here]

What I already have:
[paste notes, links, screenshots, files, or details here]

What I want:
[explain the final result you want]

Before giving the final answer, think through:
• the best strategy
• missing steps
• risks
• better alternatives
• common mistakes
• technical limitations
```

## Why These Work
The single most useful line in both is **"do not stop at the first solution."** Most weak AI answers are not wrong — they are the first plausible thing, delivered without checking what it missed. Asking for missing steps and risks up front changes what comes back.

The "what I already have" slot is the other one that matters. Pasting the actual notes, prices, or screenshots rather than describing them is the difference between a generic answer and one that fits the business.

## Related Notes
- [[claude-code-cheat-sheet|Claude Code Cheat Sheet]]
- [[instagram-prompt-pack|Instagram Prompt Pack]]
- [[karaoke-content-and-seo-prompts|Karaoke Content and SEO Prompts]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
