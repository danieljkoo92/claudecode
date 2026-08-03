# Second Brain System — Handoff Document

**Date:** 2026-05-17  
**Status:** Active — System built, initial content organized, ready for daily use  
**Repository:** `danieljkoo92/claudecode` (branch: `claude/setup-second-brain-mnUBQ`)

---

## What Was Built

A complete personal knowledge management system with:
- **Folder structure:** 00-Inbox, 01-Wiki (Obsidian vault), 02-Answers, 03-Archive, 04-Config
- **Obsidian vault config:** Pre-configured with .obsidian folder for immediate use
- **46 organized notes** across 8 topic folders
- **Standing instructions** in CLAUDE.md for automated processing
- **Schema rulebook** in 04-Config/schema.md

**Location on PC:** `C:\SecondBrain` (clone from: `https://github.com/danieljkoo92/claudecode`)

---

## Current State

### System Files (Complete)
- ✅ CLAUDE.md — Standing operating instructions for Claude (do not edit)
- ✅ README.md — User guide for daily use
- ✅ 04-Config/schema.md — Topic folder registry and naming conventions
- ✅ Obsidian vault config — .obsidian folder with app.json, core-plugins.json, appearance.json, graph.json

### Wiki Content (46 notes organized)

**karaoke-operations/** (7 notes)
- Christmas Opening Checklist
- Closing Checklist v1 (Updated 03/04)
- Closing Checklist v2 — Full Detail
- Downtime Checklist
- Health Inspection Checklist
- Reservation Email Template
- Daily Sales Sheet Template
- Beer Inventory

**karaoke-business/** (3 notes)
- Chargeback Dispute — Case 202528100557
- Beats Partnership Email
- Revenue Optimization

**app-ideas/** (14 notes)
- POS App Feature Requests — Base44
- Partner Intimacy Tracker App
- Media Auto-Translation and Dubbing App
- Karaoke Spotify Licensed App
- Base44 Complete Spec (1500 lines)
- Database Schema
- API Endpoints
- Event Flow
- Priority Features
- Parking Tracker
- Menu UI Mockup
- Feature UI
- Trading Terminal
- Base44 Voice

**business-ideas/** (4 notes)
- Streamer and Celebrity Gift Delivery Service
- Remake Beloved Brands Company
- Pricing Strategy — SMB Growth
- Customer Acquisition Strategy

**web-dev-business/** (2 notes)
- East Village Deli — Website Revenue Pitch
- Claude Use Cases

**personal-finance/** (1 note)
- Personal Budget Notes

**comedy/** (2 notes)
- Stand-Up Jokes — Draft Material
- Kill Tony — Japanese Bit

**personal/** (13 notes)
- Second Brain Idea Note
- Japanese Store Shopping List
- One Character Canon
- Character — Birthday Girl
- Character Dialogues (Ringleader, Big Swinger, Follower, Sister)
- Claude Code Setup Guide
- Playwright Installation
- Project Folders Setup
- AI Builder Career Path
- Bigfoot & Yeti Animation
- Entrance Animation Spec

### Archive (42 files)
- 20 original PDF files from first batch (2026-05-17 prefix)
- 1 large allnotes.txt file (12,400 lines, split into 28 notes)
- Total: 12,400+ lines of organized content

---

## How to Use Day-to-Day

### On PC
1. **Open Obsidian** → Open 01-Wiki folder as vault
2. **Add files to 00-Inbox** (drag & drop any PDFs, screenshots, text files)
3. **In Claude Code, say:** "process inbox"
4. **Claude will:**
   - Read each file
   - Create organized markdown notes
   - Place them in correct topic folders
   - Move originals to 03-Archive with date prefix
   - Update index.md files and schema.md

### On Phone
1. **Put 01-Wiki folder in Google Drive or Dropbox** (auto-syncs)
2. **Open Obsidian mobile** → Open that folder as vault
3. **Browse and search** all notes with full wikilink support

### Ask Questions
- In Claude Code, say: "answer this from my brain: [question]"
- Claude searches 01-Wiki, creates answer, saves to 02-Answers with date

---

## Commands (CLAUDE.md)

| Command | What it does |
|---|---|
| `process inbox` | Process all files in 00-Inbox, organize into wiki, archive originals |
| `answer this from my brain: [question]` | Search wiki for answer, compile response, save to 02-Answers |
| Manual notes | Drop .md files directly into topic folders, update index.md manually |

---

## Next Session Instructions

### If user brings new files:
1. **Check 00-Inbox** for unprocessed files
2. **Run `process inbox`** to organize them
3. **Update 04-Config/schema.md** if new topic folders are created

### If user asks questions:
1. **Use `answer this from my brain: [question]`** command
2. Search happens across all 01-Wiki files
3. Answer saved to 02-Answers with timestamp

### Ongoing maintenance:
- Update index.md files when new notes are added to folders
- Keep schema.md current with all topic folders
- Never edit 03-Archive files (read-only history)
- All notes use [[wikilinks]] for cross-referencing

---

## Technical Setup (Reference)

**Git branch:** `claude/setup-second-brain-mnUBQ`  
**Remote:** http://127.0.0.1:xxxxx/git/danieljkoo92/claudecode  

**Key files:**
- `.obsidian/` — Vault configuration (do not edit manually)
- `CLAUDE.md` — Standing instructions (canonical — read every session)
- `04-Config/schema.md` — Topic registry (update after new folders)
- `README.md` — User guide for non-technical reference

---

## Known Limitations

1. **Video/Audio files:** Claude cannot read directly. Requires transcript first (user responsibility).
2. **Large files:** Files >256KB may need to be read in chunks or split.
3. **Obsidian mobile sync:** Requires Google Drive/Dropbox setup by user (not automatic).
4. **Wikilinks in mobile:** Work perfectly once vault is open in Obsidian mobile.

---

## Last Activity

- **Processed:** 20 PDFs from first batch + 1 large allnotes.txt (28 sections)
- **Created:** 46 organized notes
- **Committed:** 2 commits (system setup + bulk note separation)
- **Status:** Ready for daily use

---

## For Next Chat

1. **Load CLAUDE.md** — It contains all operating rules
2. **Check git log** — Recent commits explain what was done
3. **Check 00-Inbox** — See if user has dropped new files
4. **If inbox has files:** Run "process inbox"
5. **If user asks questions:** Use "answer this from my brain: [question]"

**Remember:** The system is self-documenting through its folder structure and standing instructions in CLAUDE.md. Follow those instructions exactly.
