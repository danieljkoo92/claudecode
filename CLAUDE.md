# Second Brain — Standing Instructions for Claude Code

Read this file every time you open Claude Code in this folder. These are your operating rules.

---

## FOLDER MAP

| Folder | Purpose |
|---|---|
| `00-Inbox` | Raw files dropped in by the user. Process from here. |
| `01-Wiki` | Organized markdown notes. This is the knowledge base. |
| `02-Answers` | Saved answers to questions, one file per question with date in filename. |
| `03-Archive` | Original raw files after processing. Read-only. Never edit. |
| `04-Config` | Rules and schema. Update `schema.md` when you add a new topic folder. |

---

## COMMAND: "process inbox"

When the user says **"process inbox"**, do the following for every file inside `00-Inbox`:

1. **Read the file** completely.
2. **Decide the topic.** Check `04-Config/schema.md` for existing topic folders. If the file fits one, use it. If it doesn't fit any existing folder, create a new topic folder in `01-Wiki` with a clear, descriptive name (lowercase-with-dashes, e.g. `karaoke-venues`, `sports-betting`, `web-dev-business`).
3. **Write a markdown summary note** inside the correct topic folder in `01-Wiki`. See note format rules below.
4. **Update the topic's `index.md`** — every topic folder has an `index.md` that lists all notes inside it with `[[Note Name]]` links. Create `index.md` if it doesn't exist yet.
5. **Move the original raw file** from `00-Inbox` to `03-Archive`. Prefix the filename with today's date: `YYYY-MM-DD-original-filename.ext`.
6. **Update `04-Config/schema.md`** if you created a new topic folder — add it to the list with a short description.
7. After processing all files, give the user a brief summary: how many files were processed, what topics they went into, any issues.

---

## MARKDOWN NOTE FORMAT

Every note you write in `01-Wiki` must follow this structure:

```
# Note Title

**Summary:** 3–5 sentences describing what this file is about.

## Key Points
- Bullet point 1
- Bullet point 2
- Bullet point 3

## [Section heading for important details]
Write important details here. Use as many ## sections as needed.

## Related Notes
- [[Other Note Name]]
- [[Another Note Name]]

---
**Source:** `../../../03-Archive/YYYY-MM-DD-original-filename.ext`
```

**Rules for notes:**
- Title as `#` heading, plain English, title case.
- Filename: lowercase-with-dashes, no spaces, no special characters. Example: `christmas-karaoke-fdny-violations.md`
- Use Obsidian-style double-bracket links `[[Note Name]]` when referencing other notes. This connects the wiki.
- If a note references another topic's notes, add the link in the Related Notes section.
- Keep the language clear and plain. No jargon unless it's in the source material.

---

## COMMAND: "answer this from my brain: [question]"

When the user asks a question this way:

1. Search all files inside `01-Wiki` for relevant notes.
2. Compose a clear answer based only on what's in those notes. If you don't have enough information, say so honestly.
3. Save the answer as a new file in `02-Answers` with this filename format: `YYYY-MM-DD-short-description-of-question.md`
4. The answer file should include the original question at the top, then the answer, then a list of which notes you pulled from.

---

## AUDIO AND VIDEO FILES

If a file in `00-Inbox` is a video (`.mp4`, `.mov`, `.avi`, `.mkv`) or audio file (`.mp3`, `.m4a`, `.wav`, `.aac`):

- Do **not** attempt to process it directly.
- Tell the user: *"[filename] is a video/audio file. Please transcribe it first. You can use a free tool like [otter.ai](https://otter.ai) or the built-in Windows 11 transcription, then drop the transcript text file into 00-Inbox and I'll process that."*
- Move the original file to `03-Archive` with a date prefix and note in your summary that it needs a transcript.

---

## ARCHIVE RULES

- Never edit, modify, or delete any file inside `03-Archive`.
- Treat everything in `03-Archive` as read-only history.
- If the user asks about an archived file, read it and summarize — do not move or change it.

---

## SCHEMA MAINTENANCE

- `04-Config/schema.md` is the master list of topic folders.
- Every time you create a new topic folder in `01-Wiki`, immediately update `schema.md` to add it.
- Every time you process a batch, glance at `schema.md` to make sure it's accurate.

---

## GENERAL RULES

- Always tell the user what you did in plain English after any operation.
- If a file is corrupted, unreadable, or in a format you can't parse, tell the user and skip it.
- If you're unsure which topic folder a file belongs to, pick the closest one and tell the user your reasoning. Don't ask before acting — act, then explain.
- Keep everything consistent with the naming conventions in `04-Config/schema.md`.
