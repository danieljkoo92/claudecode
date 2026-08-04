# Handoff — Current State

**Last updated:** 2026-08-04
**Repo:** `danieljkoo92/claudecode` · everything is merged to `main`

---

## State: 108 notes, working — reorganization pending

The vault was rebuilt from scratch on 2026-05-17. Both source batches (20 PDFs + 12,423-line allnotes.txt) are fully processed. No new inbox files have been added since.

| Item | State |
|---|---|
| Top level | Exactly 7 items — five folders, `CLAUDE.md`, `README.md` |
| `01-Wiki` | 108 notes, 12 topic folders, each with `index.md`, plus `home.md` |
| Links | 457 internal links, all verified to resolve |
| `.obsidian/` | Vault config present — opens preconfigured |
| `00-Inbox` | Empty |
| `02-Answers` | Empty — the question command has not been run yet |
| `03-Archive` | 20 PDFs + `2026-05-17-allnotes.txt`. Read-only — never edit |
| `main` branch | Has everything |

---

## PRIORITY 1 — Reorganize the wiki folders

Daniel asked for this and it has NOT been done yet. His exact words:

> "forget all christmas karaoke and karaoke related things. put them in one folder. except all marketing related information. i want ANYTHING related to marketing of any kind separated into its own folder. something related to marketing gets priority into this folder over any other folder"

### What to do

**Create `01-Wiki/karaoke/`** — merge all notes from `karaoke-operations/` and `karaoke-business/` into one folder, EXCEPT anything marketing-related.

**Create `01-Wiki/marketing/`** — move ALL marketing-related notes here. Marketing takes priority: if a note is both karaoke and marketing, it goes to marketing.

**Delete the now-empty folders:** `karaoke-operations/`, `karaoke-business/`, `content-creation/`

### Which notes go to `marketing/`

From `karaoke-business/`:
- `marketing-and-byob-strategy.md` — marketing strategy
- `marketing-economics-argument.md` — marketing ROI argument
- `google-ads-customer-match-guide.md` — Google Ads
- `website-listing-copy.md` — website/SEO copy
- `corporate-holiday-party-email.md` — outreach email
- `school-field-trip-quote-email.md` — outreach email
- `wythe-hotel-partnership-email.md` — partnership outreach
- `beats-weekly-specials-email.md` — promotional email
- `reservation-winback-call-script.md` — sales/retention script
- `influencer-outreach-dm.md` — influencer marketing
- `outreach-contact-list.md` — marketing contact list
- `nearby-restaurants-list.md` — partnership targets for outreach

From `karaoke-operations/`:
- `how-did-you-find-us-card.md` — marketing attribution tracking

From `content-creation/` (the ENTIRE folder — all 8 notes are marketing):
- `bigfoot-reel-production-guide.md`
- `bigfoot-yeti-beer-sneak-video-prompt.md`
- `birthday-bill-storyboard.md`
- `reel-ideas-list.md`
- `karaoke-content-and-seo-prompts.md`
- `instagram-faceless-content-prompt.md`
- `instagram-prompt-pack.md`
- `saved-reference-reels.md`

**Total: 21 notes to marketing**

### Which notes go to `karaoke/`

Everything else from `karaoke-operations/` (24 notes) and `karaoke-business/` (17 notes):

From `karaoke-operations/`:
- `complete-sop-system.md`, `christmas-opening-checklist.md`, `closing-checklist-master.md`, `closing-checklist-april.md`, `downtime-checklist.md`, `organizing-checklist.md`, `front-desk-shift-notes.md`, `staff-schedule.md`, `house-drinks-menu.md`, `liquor-and-beer-price-list.md`, `beats-drinks-menu.md`, `cocktail-recipes.md`, `menu-change-list.md`, `daily-sales-sheet.md`, `reservation-confirmation-email.md`, `beats-reservation-confirmation-email.md`, `kitchen-notes.md`, `cafe-tasks-and-recipes.md`, `cafe-inventory-and-supply-orders.md`, `health-inspection-checklist.md`, `employee-rules.md`, `waste-and-recycling-contract.md`, `venue-master-todo-list.md`, `song-issues-to-report.md`

From `karaoke-business/`:
- `venue-pricing-and-targets.md`, `venue-details.md`, `package-tiers-and-design.md`, `birthday-packages-and-themed-rooms.md`, `large-party-quote-example.md`, `chargeback-dispute-letter-template.md`, `chargeback-dispute-case-202528100557.md`, `chargeback-dispute-case-2026083002682.md`, `chargeback-dispute-case-2025294052293.md`, `chargeback-dispute-case-2025328010397.md`, `ultimatum-letter.md`, `letter-to-manager-store-performance.md`, `manager-argument-the-numbers.md`, `vip-room-rule-and-staff-defense.md`, `employment-negotiation-position.md`, `labor-law-violation-estimate.md`, `korean-job-posting.md`

**Total: 41 notes to karaoke**

### After moving files

1. Write new `karaoke/index.md` and `marketing/index.md`
2. Delete old `karaoke-operations/index.md`, `karaoke-business/index.md`, `content-creation/index.md`
3. Update `01-Wiki/home.md` — replace the three old folder links with two new ones
4. Update `04-Config/schema.md` — replace the three old rows with two new ones, fix note counts
5. Update ALL wikilinks across the entire vault that reference moved notes (the filenames stay the same, so most wikilinks will still work — Obsidian resolves by filename not path — but any path-qualified links like `[[karaoke-operations/index|...]]` need updating)
6. Verify no broken links
7. Commit, push to branch, merge to `main`

### Folders that stay exactly as they are

| Folder | Notes |
|---|---|
| `app-ideas` | 11 |
| `sports-betting` | 5 |
| `web-dev-business` | 3 |
| `business-ideas` | 3 |
| `legal` | 3 |
| `writing-projects` | 2 |
| `comedy` | 4 |
| `personal` | 14 |
| `personal-finance` | 1 |

---

## PRIORITY 2 — Obsidian not showing notes on Daniel's device

Daniel said "my computer app does nothing" — Obsidian on his device is not displaying the notes.

Most likely cause: He downloaded the repo before the notes were merged to `main`. At the time, `main` only had the README. The notes were on a side branch.

**Fix:** He needs to re-download the ZIP and re-open the vault:
1. Download: `https://github.com/danieljkoo92/claudecode/archive/refs/heads/main.zip`
2. Extract, find `01-Wiki` inside the extracted folder
3. Open Obsidian, click "Open folder as vault", select `01-Wiki`

Important: Point Obsidian at `01-Wiki`, NOT the top-level folder. If he opens the top folder he'll see archive PDFs and config files mixed in with his notes.

If he's already done this and it still doesn't work, check:
- Is Obsidian pointing at `01-Wiki` or the top folder?
- Did the ZIP actually contain the notes? (Check if `home.md` exists in the extracted `01-Wiki`)
- On mobile: he may need to use Obsidian Sync or put the folder in Google Drive/Dropbox

---

## What was rebuilt and why (history)

An earlier pass split `allnotes.txt` with a Python script that assigned titles from a topic list without reading the content. It produced 25 notes whose titles had nothing to do with their contents. All 93 wikilinks were also broken because they used `[[Title Case]]` while the files are `lowercase-with-dashes`.

Everything was deleted and rewritten by reading each source in full. **Never generate notes with a script that assigns titles without reading content** — this is rule one in `CLAUDE.md`.

---

## Conventions in use

- Filenames: `lowercase-with-dashes.md`
- Links: `[[exact-filename|Display Name]]` — left side matches the **filename**, never the heading
- In tables, escape the pipe: `[[filename\|Display]]`
- Folder index links are path-qualified: `[[folder/index|Name]]`, because indexes share the basename `index`
- Source line: `` `../../03-Archive/filename` `` — two levels up from a note inside `01-Wiki/topic/`

---

## Open items for Daniel — not for Claude to decide

These were found in the source material and need a human answer:

1. **`info@karaokexmas@gmail.com` has two @ signs** — not a valid address. The chargeback letters use `Info@karaokexmas.com`.
2. **Website hours wrong** — site says Fri–Sun opens 4pm, the listing copy says 3pm.
3. **Room QR codes point at the old website.**
4. **"Here to Stay" birthday package has no price.**
5. **Shooters $10 vs $9**, and **Long Island $15 vs $16**, across menu versions.
6. **Card fee 3% in the SOP, 3.5% everywhere else.** 3.5% is the one that checks out.
7. **VIP rates disagree** — $250/$200 per hour in the SOP vs $240 in the field trip quote.

All seven are listed on `01-Wiki/home.md`.

---

## Working with Daniel

- **Not technical.** Explain in plain English, no jargon, and give exact click-by-click steps for anything on his phone or PC.
- **Dislikes long silent stretches.** Report progress in batches rather than going quiet for a long run.
- He asks "are you done" — answer with a real percentage, not a summary of activity.
- He works from his **phone** a lot. The vault to open in Obsidian is `01-Wiki`, not the top folder.

---

## Next session — step by step

1. Read `/home/user/claudecode/CLAUDE.md` — it is the spec.
2. Read this handoff document.
3. **Do the reorganization** (Priority 1 above). Move the files, write new indexes, update home.md, update schema.md, fix all links, commit and push to `main`.
4. **Help Daniel get Obsidian working** (Priority 2 above). Walk him through re-downloading the ZIP.
5. Check `00-Inbox`. If files are there, run **process inbox**.
6. If he asks a question, use **answer this from my brain: [question]** and save to `02-Answers`.
7. Keep `04-Config/schema.md` accurate after every change.
