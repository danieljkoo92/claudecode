# Second Brain — Schema and Rulebook

Claude maintains this file. It is the master list of topic folders and the naming rules.

---

## Naming Conventions

- **Folder names:** lowercase-with-dashes. Example: `karaoke-operations`
- **Note filenames:** lowercase-with-dashes ending in `.md`. Example: `christmas-opening-checklist.md`
- **Archived files:** date prefix `YYYY-MM-DD-`. Example: `2026-05-17-allnotes.txt`
- **Answer files:** `YYYY-MM-DD-short-description.md` in `02-Answers`
- **Links:** `[[exact-filename|Display Name]]` — the left side must match the filename, not the heading
- **Source line:** `../../03-Archive/filename` — two levels up from a note

---

## Topic Folders in 01-Wiki

| Folder | Notes | What goes here |
|---|---|---|
| `karaoke` | 41 | Running the venues day to day — opening, closing, cleaning, menus, prices, staff rules, inspections, pricing, partnerships, chargebacks, management dispute |
| `marketing` | 21 | Strategy, outreach/sales scripts, ads, and content/video production — anything marketing-related, pulled out of karaoke and content-creation |
| `app-ideas` | 11 | Software concepts, from one-line seeds to full build specs |
| `sports-betting` | 5 | NBA edge model, betting apps, bankroll discipline |
| `personal` | 14 | Routines, journals, AI reference, anything not business |
| `comedy` | 4 | Stand-up premises and performance prep |
| `web-dev-business` | 3 | Freelance website work — pitches and scripts |
| `business-ideas` | 3 | Company and product concepts that aren't apps |
| `legal` | 3 | Contracts and agreements |
| `writing-projects` | 2 | The "One" manga — canon and scripts |
| `personal-finance` | 1 | Budgets and money owed |

**Total: 108 notes plus 12 folder indexes and `home.md`.**

---

## Index Files

Every topic folder has `index.md`. `01-Wiki/home.md` is the vault entry point and links to all eleven.

Format:
```markdown
# Topic Name — Index

One line on what this topic covers.

## Notes
- [[note-filename|Display Name]] — one-line description
```

---

## How to Add a Topic Folder

Claude does this automatically during "process inbox." Manually:
1. Create the folder in `01-Wiki`, lowercase-with-dashes.
2. Create `index.md` inside it.
3. Add a row to the table above.
4. Add it to `01-Wiki/home.md`.

---

## Processing History

| Date | What was processed | Result |
|---|---|---|
| 2026-05-17 | 20 PDFs | 20 notes |
| 2026-05-17 | `allnotes.txt` (12,423 lines) | 88 notes across 12 folders |

Every source file is preserved in `03-Archive`. Nothing was skipped.

---

| 2026-08-04 | Reorganized `karaoke-operations` + `karaoke-business` + `content-creation` into `karaoke` (41 notes) and `marketing` (21 notes) | No notes added or removed — same 108 total |

---

Last updated: 2026-08-04 — folder reorg complete (Priority 1 from the 2026-08-04 handoff). 108 notes, 11 topic folders, links re-verified.
