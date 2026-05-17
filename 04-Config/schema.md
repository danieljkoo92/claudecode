# Second Brain — Schema & Rulebook

This file is maintained automatically. Claude updates it whenever a new topic folder is created.

---

## Naming Conventions

- **Folder names:** lowercase-with-dashes. No spaces. No special characters. Example: `karaoke-venues`
- **Note filenames:** lowercase-with-dashes ending in `.md`. Example: `christmas-karaoke-fdny-violations.md`
- **Archived files:** prefixed with date in `YYYY-MM-DD` format. Example: `2025-11-14-venue-list.pdf`
- **Answer files:** `YYYY-MM-DD-short-description.md` inside `02-Answers`

---

## Topic Folders in 01-Wiki

| Folder Name | What Goes Here |
|---|---|
| `karaoke-operations` | Day-to-day running of Christmas Karaoke and Beats Karaoke: opening, closing, cleaning, sales tracking, staff checklists, customer email templates, inspection prep |
| `karaoke-business` | Legal, financial, and business-level matters for the karaoke venues: chargebacks, disputes, formal correspondence |
| `app-ideas` | Technology and app concepts at any stage: from one-sentence seeds to detailed feature lists |
| `business-ideas` | New company and service concepts that aren't specifically tech/app ideas |
| `web-dev-business` | Website development and consulting work: pitches, proposals, and client materials |
| `personal-finance` | Personal budgets, expenses, and financial notes |
| `comedy` | Stand-up material, joke drafts, Kill Tony prep, and performance notes |
| `personal` | Personal notes, miscellaneous items, and ideas that don't fit a specific business or project |

---

## How to Add a New Topic Folder

Claude does this automatically during "process inbox." If you ever want to manually add a topic:

1. Create the folder inside `01-Wiki` using lowercase-with-dashes naming.
2. Create an `index.md` inside it listing the notes it will contain.
3. Add a row to the table above with the folder name and a short description.

---

## Index File Format

Every topic folder in `01-Wiki` must have an `index.md` file. Format:

```markdown
# [Topic Name] — Index

Short description of what this topic covers.

## Notes
- [[note-filename-without-extension]]
- [[another-note]]
```

---

## Last Updated

*(Claude updates this line after each processing session.)*

Last updated: 2026-05-17 — First inbox batch processed. 20 files → 8 topic folders → 18 notes created.
