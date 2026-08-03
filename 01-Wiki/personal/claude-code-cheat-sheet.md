# Claude Code Cheat Sheet

**Summary:** A reference sheet of Claude Code commands and starter prompts, saved from the AI Basic Series. It lists the ten essential slash commands with what each one does, three proven starter prompts, and one piece of advice about being specific.

## Key Points
- **`/plan` before building anything complex** — review the approach before code gets written.
- **`/init`** sets up a CLAUDE.md file with project context — that is what runs this second brain.
- **`/compact`** compresses the conversation to free up context on long sessions.
- **`/resume`** picks up a previous session.
- The core advice: **be specific**. Describe exact features, data and outcome.

## The Commands
| Command | What it does |
|---|---|
| `claude` | Start a new session in the current folder |
| `/plan` | Ask Claude to outline a plan before building |
| `/init` | Set up a CLAUDE.md file with project context |
| `/resume` | Pick up where you left off in a previous session |
| `/clear` | Clear the conversation and start fresh |
| `/help` | Show all available commands and options |
| `/compact` | Compress the conversation to free up context |
| `/config` | View or change settings |
| `/cost` | Show how much the session has cost |
| `/quit` | Exit the session |

## Starter Prompts
> Build me a personal CRM web app where I can add contacts, log interactions, and set follow-up reminders. Use a simple SQLite database and a clean UI.

> Create a Python script that reads my Google Sheet of expenses, categorizes them, and generates a monthly summary PDF.

> Build a landing page for my consulting business. Include a hero section, 3 services, testimonials, and a contact form. Make it mobile-friendly.

## The Pro Tip
> Be specific. Instead of "build me an app," describe the exact features, data, and outcome you want. Claude Code performs best when it knows the full picture upfront. Use `/plan` first on complex projects to review the approach before any code gets written.

## Relevant to This Vault
`/init` is the command that creates the kind of instructions file this second brain runs on. The `CLAUDE.md` at the top of this folder is exactly that — it tells Claude how to process the inbox, how notes should be formatted, and where everything goes.

## Related Notes
- [[second-brain-idea|Second Brain — The Original Note]]
- [[collected-ai-jailbreak-prompts|Collected AI Jailbreak Prompts]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
