# Your Personal Second Brain — How to Use It

Welcome. This is your second brain: a simple system where you drop in files, ask Claude to organize them, and then browse everything in a connected wiki. No technical skills needed to use it day to day.

---

## What Each Folder Does

| Folder | Plain-English Explanation |
|---|---|
| **00-Inbox** | Your drop zone. Drag any file here — PDFs, Word docs, text files, screenshots, notes. This is where everything starts. |
| **01-Wiki** | Your organized knowledge base. Claude reads your raw files and writes clean, connected notes here, sorted by topic. Open this folder in Obsidian to browse everything. |
| **02-Answers** | When you ask Claude a question, it saves the answer here with today's date in the filename so you can find it later. |
| **03-Archive** | Where original raw files go after Claude processes them. Think of it as a safe storage box — Claude never deletes your originals, just moves them here for safekeeping. |
| **04-Config** | The rulebook. Contains `schema.md`, which is the master list of topic folders and naming rules. Claude updates this automatically. You don't need to touch it. |

---

## Day-to-Day Use: Step by Step

### Step 1 — Add a new file

Drag any file into the **00-Inbox** folder. That's it. Claude won't touch it until you tell it to.

You can drop in:
- PDF documents
- Word (.docx) or text (.txt) files
- Screenshots or images with text you want organized
- Notes you've copied and pasted into a .txt file
- Transcripts of conversations or videos

**Note on video and audio files:** Claude cannot read video or audio directly. If you have a recording, transcribe it first (free tools: [Otter.ai](https://otter.ai), or use Windows 11's built-in transcription). Drop the transcript text file into 00-Inbox instead.

---

### Step 2 — Tell Claude to process your files

Open Claude Code in this folder. Type exactly:

> **process inbox**

Claude will go through every file in 00-Inbox one by one, decide what topic it belongs to, write a clean summary note in 01-Wiki, and move the original to 03-Archive. After it's done, it will tell you exactly what it processed and where everything went.

---

### Step 3 — Ask Claude a question

If you want to find something or get an answer based on what's in your brain, type:

> **answer this from my brain: [your question here]**

Example:
> answer this from my brain: What are the best karaoke venues I've looked into?

Claude will search across all your notes, give you a clear answer, and save it in 02-Answers with today's date in the filename.

---

### Step 4 — Browse your wiki in Obsidian

Obsidian is a free app that lets you browse, search, and navigate your notes beautifully — including on your phone and laptop. The notes Claude writes use Obsidian's link format, so everything connects together automatically.

#### How to install Obsidian:

1. Go to **[obsidian.md](https://obsidian.md)** and download the free app for Windows.
2. Run the installer.
3. Open Obsidian.
4. Click **"Open folder as vault"** and navigate to your `01-Wiki` folder.
5. That's it — all your notes will appear, fully linked.

#### On your phone:
- Download the free **Obsidian** app from the App Store or Google Play.
- To sync between your PC and phone, use **Obsidian Sync** (paid, ~$5/month) or put the `01-Wiki` folder inside a Dropbox or Google Drive folder and open that in Obsidian on your phone.

#### On your laptop:
- Install Obsidian the same way and open the same `01-Wiki` folder. If the folder is in Dropbox/Google Drive/OneDrive, it will sync automatically.

---

## Quick Reference Card

| What you want to do | What to type |
|---|---|
| Process all files in Inbox | `process inbox` |
| Ask a question | `answer this from my brain: [question]` |
| Add new files | Drag them into `00-Inbox` |

---

## What Claude Does Automatically

- Creates topic folders in 01-Wiki based on what your files are actually about (you don't pre-define topics)
- Keeps an `index.md` in each topic folder linking all notes inside it
- Writes notes that link to each other using `[[Note Name]]` format
- Moves raw files to 03-Archive after processing (originals are safe)
- Updates the `04-Config/schema.md` rulebook whenever a new topic is added

---

## If Something Goes Wrong

- **Claude can't read a file:** It will tell you and skip it. The file stays in 00-Inbox.
- **You dropped in a video or audio file:** Claude will tell you to transcribe it first and explain how.
- **A note is in the wrong topic folder:** Just tell Claude: "Move the note [note name] to [topic]" and it will move the note, update both indexes, and update the archive reference.

---

## Setting Up (One-Time Steps for a New PC)

If you're setting this up on a new machine or sharing this with someone:

1. Make sure **Claude Code** is installed (claude.ai/code)
2. Clone this repository or copy the folder to `C:\SecondBrain` on your PC
3. Open Claude Code and point it at the folder
4. Install Obsidian and point it at the `01-Wiki` subfolder as a vault
5. Drop files in `00-Inbox` and type `process inbox`

---

*This system was set up automatically by Claude Code. The rules that govern how Claude processes your files live in `CLAUDE.md` at the top of this folder.*
