# Handoff — Current State

**Last updated:** 2026-05-17
**Repo:** `danieljkoo92/claudecode` · everything is merged to `main`

---

## State: complete and verified

The vault was rebuilt from scratch on 2026-05-17. Both source batches are fully processed.

| Item | State |
|---|---|
| Top level | Exactly 7 items — five folders, `CLAUDE.md`, `README.md` |
| `01-Wiki` | 108 notes, 12 topic folders, each with `index.md`, plus `home.md` |
| Links | **457 internal links, all verified to resolve** |
| `.obsidian/` | Vault config present — opens preconfigured |
| `00-Inbox` | Empty |
| `02-Answers` | Empty — the question command has not been run yet |
| `03-Archive` | 20 PDFs + `2026-05-17-allnotes.txt`. Read-only |
| `main` branch | Has everything |

---

## What was rebuilt and why

An earlier pass split `allnotes.txt` with a Python script that assigned titles from a topic list without reading the content. It produced 25 notes whose titles had nothing to do with their contents — "Beer Inventory List" contained step 11 of an NBA app build guide, "Character Dialogue — Sister" contained a test instruction. All 93 wikilinks were also broken, because they used `[[Title Case]]` while the files are `lowercase-with-dashes`.

Everything was deleted and rewritten by reading each source in full. **Never generate notes with a script that assigns titles without reading content** — this is now rule one in `CLAUDE.md`.

The NBA build guide that got scattered across those 25 files is now correctly filed as a single note: `sports-betting/nba-rotation-clock-build-guide.md`.

---

## Conventions in use

- Filenames: `lowercase-with-dashes.md`
- Links: `[[exact-filename|Display Name]]` — left side matches the **filename**, never the heading
- In tables, escape the pipe: `[[filename\|Display]]`
- Folder index links are path-qualified: `[[folder/index|Name]]`, because all twelve share the basename `index`
- Source line: `` `../../03-Archive/filename` `` — two levels up, not three

---

## Open items for Daniel — not for Claude to decide

These were found in the source material and need a human answer:

1. **`info@karaokexmas@gmail.com` has two @ signs** — not a valid address. Appears on the reservation email template and the film rental invoice. The chargeback letters use `Info@karaokexmas.com`.
2. **Website hours wrong** — site says Fri–Sun opens 4pm, the listing copy says 3pm.
3. **Room QR codes point at the old website.**
4. **"Here to Stay" birthday package has no price.**
5. **Shooters $10 vs $9**, and **Long Island $15 vs $16**, across menu versions.
6. **Card fee 3% in the SOP, 3.5% everywhere else.** 3.5% is the figure that checks out against the worked example.
7. **VIP rates disagree** — $250/$200 per hour in the SOP vs $240 in the field trip quote.

All seven are listed on `01-Wiki/home.md` so he sees them when he opens the vault.

---

## Working with Daniel

- **Not technical.** Explain in plain English, no jargon, and give exact click-by-click steps for anything on his phone or PC.
- **Dislikes long silent stretches.** Report progress in batches rather than going quiet for a long run.
- He asks "are you done" — answer with a real percentage, not a summary of activity.
- He works from his **phone** a lot. The vault to open in Obsidian is `01-Wiki`, not the top folder.

---

## Next session

1. Read `/home/user/claudecode/CLAUDE.md` — it is the spec.
2. Check `00-Inbox`. If files are there, run **process inbox**.
3. If he asks a question, use **answer this from my brain: [question]** and save to `02-Answers`.
4. Keep `04-Config/schema.md` accurate after every batch.
