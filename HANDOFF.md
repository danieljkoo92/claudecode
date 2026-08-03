# Second Brain — Handoff

**Repo:** `danieljkoo92/claudecode` · **Branch:** `claude/setup-second-brain-mnUBQ` · **Working dir:** `/home/user/claudecode`
**Owner:** Daniel (danieljkoo92@gmail.com) — runs Christmas Karaoke + Beats Karaoke in Brooklyn, freelance web dev, stand-up comedy, app/business ideas.

**Status: the skeleton is built and solid. The content inside it is roughly half-broken.** Do not tell Daniel this is finished.

---

## Read This First

1. Read `/home/user/claudecode/CLAUDE.md`. It is the canonical spec — folder map, the two commands, the mandatory note format. Everything below is measured against it.
2. Read the **Open Problems** section below before touching anything. A prior session generated 28 notes with a Python script; 25 of them have titles that have nothing to do with their contents.
3. Check `00-Inbox` — currently empty (only `.gitkeep`).
4. Do not start a long silent processing run. See **Working With Daniel**.

**Working tree is clean. Nothing is committed by this handoff.**

---

## What Actually Exists

| Item | State |
|---|---|
| Folder structure (`00-Inbox` … `04-Config`) | Good |
| `CLAUDE.md` operating rules | Good (one minor path bug, see #6) |
| `README.md` user guide | Good, plain-English, accurate |
| `04-Config/schema.md` | Stale — says "18 notes", never updated after the bulk split |
| `01-Wiki/.obsidian/` vault config | Present (app.json, appearance.json, core-plugins.json, graph.json) — opens as a preconfigured vault |
| 8 topic folders | Good |
| 48 notes total | **20 good, 28 bad** |
| `02-Answers` | Empty — the question command has never been run |
| `03-Archive` | 20 PDFs + `2026-05-17-allnotes.txt` (12,423 lines). Read-only. |

### Topic folders

`karaoke-operations` (8) · `karaoke-business` (3) · `app-ideas` (14) · `business-ideas` (4) · `web-dev-business` (2) · `personal-finance` (1) · `comedy` (2) · `personal` (14)

### The 20 good notes

Everything created in commit `bb39f24` from the 20 PDFs. These **do** follow the CLAUDE.md format — real summary, Key Points, topic sections, Related Notes. Use `01-Wiki/karaoke-operations/christmas-opening-checklist.md` as the gold-standard reference when rewriting anything.

---

## Open Problems

### 1. 25 notes are mislabeled chunks of one unrelated document — CRITICAL

Commit `7633a3e` split `allnotes.txt` with a script. The script invented plausible titles from a topic list, then pasted in text that does not match. Twenty-five notes are consecutive chunks of a single **"NBA Rotation Clock" step-by-step build guide** (STEP 1 → STEP 25), scattered across six topic folders under fabricated names.

| File | Title claims | Actually contains |
|---|---|---|
| `personal/claude-code-setup.md` | Claude Code Setup Guide | STEP 1 — Create the project in Codex |
| `personal/playwright-install.md` | Playwright Installation | STEP 2 — Install Playwright |
| `personal/project-folders.md` | Project Data Folders Setup | STEP 3 — Create the data folders |
| `app-ideas/database-schema.md` | Database Schema — Postgres/Supabase | STEP 4 — Empty app states (basketball) |
| `app-ideas/api-endpoints.md` | API Endpoints Specification | STEP 5 — TypeScript types for basketball data |
| `app-ideas/event-flow.md` | Event Flow Architecture | STEP 6 — Playwright play-by-play collector |
| `business-ideas/pricing-strategy.md` | Pricing Strategy — SMB Growth | STEP 7 — Data adapters |
| `business-ideas/customer-acquisition.md` | First Customers Strategy | STEP 8 — Data collector page |
| `app-ideas/priority-features.md` | What Matters Most | STEP 9 — Import system |
| `app-ideas/parking-tracker.md` | Parking Tracker App | STEP 10 — Rotation engine |
| `karaoke-operations/beer-inventory.md` | Beer Inventory List | STEP 11 — Lead bucket logic |
| `karaoke-business/beats-partnership-email.md` | Partnership Email | STEP 12 — Energy Save Score |
| `karaoke-business/revenue-optimization.md` | Revenue Optimization | STEP 13 — Plain English explanations |
| `app-ideas/menu-ui-mockup.md` | Menu UI Mockup | STEP 14 — Build the dashboard |
| `app-ideas/feature-ui.md` | UI Feature Requests | STEP 15 — Team rotation page |
| `app-ideas/trading-terminal.md` | Trading Terminal Design | STEP 16 — Player rotation page |
| `personal/character-birthday-girl.md` | Character — Birthday Girl | STEP 17 — Live watch page |
| `personal/dialogue-ringleader.md` | Character Dialogue — Ringleader | STEP 18 — Playoff energy page |
| `personal/dialogue-big-swinger.md` | Character Dialogue — Big Swinger | STEP 19 — Settings page |
| `personal/dialogue-follower.md` | Character Dialogue — Follower | STEP 20 — Package scripts |
| `personal/dialogue-sister.md` | Character Dialogue — Sister | STEP 21 — Test empty state |
| `web-dev-business/claude-use-cases.md` | Claude Use Cases | STEP 22 — Test with a real play-by-play URL |
| `personal/ai-builder-path.md` | Independent AI Builder Path | STEP 23 — Connect GitHub |
| `app-ideas/base44-voice.md` | Base44 Voice Control | STEP 24 — Deploy to Vercel later |
| `personal/animation-bigfoot-yeti.md` | Bigfoot & Yeti Animation | STEP 25 — Future upgrades |

Every one of them opens with the placeholder header `**Summary:** Extracted from bulk notes file.` — no Key Points, no sections, no Related Notes. **These 25 files should be deleted, not repaired.** Their real subject is one document that belongs in a single note (suggested: `app-ideas/nba-rotation-clock-build-guide.md`). The topics their titles promise (beer inventory, partnership email, pricing strategy, etc.) are real subjects that do exist in `allnotes.txt` — just never extracted. See #3.

The other 3 script-generated notes:

| File | State |
|---|---|
| `personal/one-character-canon.md` | Content **is** the character canon — correct subject, just needs reformatting to CLAUDE.md structure |
| `app-ideas/base44-complete-spec.md` | 1,511 lines. Genuine Base44 POS spec, but only the first slice of an 8,000-line source section, and it trails off mid-React-component |
| `personal/animation-entrance.md` | 3,622 lines. Garbage catch-all — see #2 |

### 2. `personal/animation-entrance.md` is a 3,622-line dumping ground

Titled "Entrance Animation." Contains no entrance animation. Sampling across its length turns up at least ten unrelated documents:

- NBA Rotation Clock Codex instructions (again)
- Academic servicescape / customer-satisfaction research notes with citations
- Korean-language conflict messages with a karaoke manager
- Compound-interest math worked out longhand
- A partner dispute about BYOB vs. packages and whether to stop selling food
- Comic/storyboard panels for the "One" character project
- A resume / CV section
- Clinical trial and nutritional research notes
- Bar inventory counts (water, chamisul, jinro)
- A manager-automation system spec ("managers press one button instead of repeating instructions")
- A compensation/raise negotiation proposal

This needs to be read through and split into separate properly formatted notes across the right topic folders. It is the single largest piece of unrecovered value in the wiki.

### 3. Roughly half of `allnotes.txt` never made it into any note

Line-level comparison: 10,595 non-blank source lines, ~5,215 present somewhere in `01-Wiki`. **About 51% of the dump is unprocessed.** Largest missing runs, with what they hold:

| Source lines | Content |
|---|---|
| 6750–7386 | NBA player/roster data |
| 2506–3082 | Weekday-traffic strategy brief for Christmas Karaoke (15 rooms, pricing, hours) |
| 1821–2233 | Detailed closing procedure — receipts, envelope ordering, photo steps |
| 3124–3525 | Full liquor and soju list with mix/rock/shot pricing |
| 5708–6066 | HTML/JS code |
| 5025–5327 | Staff promo outreach script + influencer contact list |
| 3527–3811 | NDA / cofounder agreement text with signature blocks |
| 5406–5653 | Misc |
| 7727–7965 | HTML/JS code |
| 4672–4885 | Venue rental contract — Heart Productions film shoot, contact details |
| 6544–6720 | Cocktail menu with recipes (Negroni, Mistletoe Margarita, shooters) |
| 2239–2403 | Reservation deposit policy — $40 deposit, non-refundable, 21+ rule |

Most of this is genuinely useful operational material for the bars. Section 1 of the dump was ~8,000 lines and only the first ~1,500 were captured into `base44-complete-spec.md`.

### 4. Every wikilink in the vault is broken

93 wikilinks, 49 unique targets, **zero resolve.** Links are written Title Case With Spaces (`[[Database Schema]]`, `[[Beer Inventory]]`) but files are lowercase-with-dashes (`database-schema.md`, `beer-inventory.md`). Obsidian resolves `[[X]]` against the **filename**, not the `#` heading, and does not convert spaces to dashes. In Obsidian every link in every `index.md` and every Related Notes block renders as an unresolved link. The graph view will be a field of disconnected dots.

Note the spec contradicts itself: `CLAUDE.md` says use `[[Note Name]]`; `04-Config/schema.md` says use `[[note-filename-without-extension]]`. Pick the filename form (it works), fix all links, and reconcile the two files so this doesn't recur.

### 5. `main` does not have the second brain — this blocks Daniel's setup

All four commits sit on `claude/setup-second-brain-mnUBQ`, unmerged. `origin/main` contains only `README.md` and `auto-repair-mockup.html`. **If Daniel clones the repo he gets nothing**, because clone checks out the default branch. Merge to `main` (or tell him the exact branch to check out) before giving him any clone instructions. No PR was found from this environment — verify on GitHub.

### 6. Smaller items

- **Source path is off by one level.** Notes are at `01-Wiki/<topic>/<note>.md`, so the archive is `../../03-Archive/`, but the template in `CLAUDE.md` says `../../../03-Archive/` and all 48 notes inherit it. Fix the template, then the notes.
- **`04-Config/schema.md` is stale.** Last-updated line still reads "20 files → 8 topic folders → 18 notes created" — it was never touched by the bulk split, and the real first-batch count was 20 notes, not 18.
- **`auto-repair-mockup.html`** (30KB, repo root) is leftover from an unrelated earlier project (commit `fbcc01a`, PR #1). Not part of the second brain. Ask Daniel before deleting.

---

## Cleanup To-Do, In Order

| # | Task | Why this order |
|---|---|---|
| 1 | Fix all 93 wikilinks to filename form; reconcile `CLAUDE.md` vs `schema.md` on link style | Cheap, mechanical, and it's the difference between a working vault and a broken one |
| 2 | Merge to `main` (or hand Daniel the branch name) | He is blocked on this right now |
| 3 | Delete the 25 mislabeled STEP notes; rebuild them as one `nba-rotation-clock-build-guide.md`; update the 6 affected `index.md` files | Removes 25 actively misleading files |
| 4 | Split `personal/animation-entrance.md` into real notes across topics | Biggest recoverable value |
| 5 | Re-extract the ~51% of `allnotes.txt` that was skipped — start with the karaoke operational material (liquor list, cocktail menu, deposit policy, closing detail, rental contract) | Highest day-to-day usefulness to Daniel |
| 6 | Reformat `one-character-canon.md` and `base44-complete-spec.md` to the CLAUDE.md structure | Correct content, wrong shape |
| 7 | Fix the `../../../` source path in `CLAUDE.md` and all notes | Low impact, quick |
| 8 | Rewrite `schema.md` last-updated line with real counts | Do last, once counts are stable |

**Rule going forward: never script-split a source file.** Read the content, decide the topic, write the note. That is what `CLAUDE.md` requires and it is exactly the step the script skipped.

---

## Working With Daniel

- **He is not technical.** No jargon, no git terminology unless explained. Plain English, short.
- **He gets impatient with long silent runs.** He interrupted a prior processing session with *"build only the second brain."* Tell him what you're doing and roughly how long, work in visible chunks, report as you go.
- **Act, then explain** — `CLAUDE.md` is explicit about not asking permission before routine processing. Don't stall him with questions he can't evaluate.
- **Don't declare victory.** The previous handoff said "Ready for daily use" and "46 organized notes," which is how the problems above went unreported. Say what's done and what isn't.

### His actual blocker: getting this onto his devices

This is unresolved and it is what he cares about most.

- He has **not** confirmed cloning to `C:\SecondBrain`. Assume it hasn't happened.
- He asked about Obsidian mobile sync. The answer is that he must put the folder inside Google Drive or Dropbox himself, then open it in Obsidian mobile.
- He replied **"you do it."** He had to be told this environment is a cloud container with no access to his PC or phone. He may not have fully absorbed that — expect it to come up again.
- Before giving any setup steps, resolve #5 (main branch), or the instructions will fail on him and he'll lose confidence in the system.

Suggested framing when he asks: this container can build and fix files in the repo; moving them onto his own machines is a few steps only he can do, and you'll walk him through them one at a time.

---

## Commands (from CLAUDE.md)

| Command | What it does |
|---|---|
| `process inbox` | Read every file in `00-Inbox`, write formatted notes into the right `01-Wiki` topic folder, update that folder's `index.md`, move originals to `03-Archive` with a `YYYY-MM-DD-` prefix, update `schema.md` if a new topic folder was created, then summarize |
| `answer this from my brain: [question]` | Search `01-Wiki`, answer only from what's there, save to `02-Answers/YYYY-MM-DD-short-description.md` with the question, answer, and sources |

Audio/video files: don't process. Tell him to transcribe first (otter.ai or Windows 11 built-in), archive the original with a date prefix, and flag it in the summary.

Never edit or delete anything in `03-Archive`.
