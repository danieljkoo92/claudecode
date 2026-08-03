# Second Brain — Standing Instructions

Read this file every time you open Claude Code in this folder. These are the operating rules.

---

## FOLDER MAP

| Folder | Purpose |
|---|---|
| `00-Inbox` | Raw files dropped in by the user. Process from here. |
| `01-Wiki` | Organized markdown notes. This is the Obsidian vault. |
| `02-Answers` | Saved answers to questions, one file per question, dated. |
| `03-Archive` | Original raw files after processing. **Read-only. Never edit.** |
| `04-Config` | Schema, topic registry, and handoff notes. |

Top level holds exactly these five folders plus `CLAUDE.md` and `README.md` — seven items. Do not add files at the top level.

---

## COMMAND: "process inbox"

For every file in `00-Inbox`:

1. **Read it completely.** Never guess a file's subject from its filename — open it.
2. **Decide the topic.** Check `04-Config/schema.md` for existing folders. Use one if it fits; create a new folder in `01-Wiki` if nothing fits.
3. **Write one note per distinct subject.** A file containing ten unrelated things becomes ten notes, not one.
4. **Update the topic's `index.md`** and `01-Wiki/home.md`.
5. **Move the original** to `03-Archive`, prefixed `YYYY-MM-DD-`.
6. **Update `04-Config/schema.md`** if a folder was added.
7. **Report** in plain English: how many files, which topics, anything skipped.

Tell the user what you are doing as you go. Do not run long silent stretches.

---

## NOTE FORMAT — MANDATORY

````
# Note Title

**Summary:** 3–5 sentences describing what this note covers.

## Key Points
- Point one
- Point two
- Point three

## [Section Heading]
Details. Use as many `##` sections as the material needs.

## Related Notes
- [[note-filename|Display Name]]

---
**Source:** `../../03-Archive/YYYY-MM-DD-original.ext`
````

### Hard rules

- **Filename:** lowercase-with-dashes, `.md`. Example: `christmas-opening-checklist.md`
- **Title:** plain English, Title Case, as the `#` heading.
- **Links:** always `[[exact-filename-without-extension|Display Name]]`.
  Obsidian resolves the left side against the **filename**, not the heading.
  `[[beer-inventory|Beer Inventory]]` ✅ — `[[Beer Inventory]]` ✗ (dead link).
- **Source path:** `../../03-Archive/…` — two levels up from `01-Wiki/topic/note.md`. Three levels is wrong.
- Every note gets a real summary. Never write a placeholder like "extracted from file."
- Title must match content. If you cannot describe the content, read it again.
- Plain language. No jargon unless it is in the source.

---

## INDEX FILES

Every topic folder has `index.md`:

````
# Topic Name — Index

One line on what this topic covers.

## Notes
- [[note-filename|Display Name]] — one-line description
````

`01-Wiki/home.md` is the vault entry point and links to every topic index.

---

## COMMAND: "answer this from my brain: [question]"

1. Search all of `01-Wiki`.
2. Answer only from what is there. If the notes do not cover it, say so plainly.
3. Save to `02-Answers/YYYY-MM-DD-short-description.md` — question at top, then the answer, then which notes it came from as links.

---

## AUDIO AND VIDEO

For `.mp4 .mov .avi .mkv .mp3 .m4a .wav .aac`: do not attempt to process. Tell the user it needs transcribing first (Otter.ai or Windows 11 built-in transcription), move it to `03-Archive` with a date prefix, and flag it in the summary.

---

## ARCHIVE RULES

Never edit, move, or delete anything in `03-Archive`. To answer a question about an archived file, read it and summarize — do not change it.

---

## GENERAL RULES

- Explain everything in plain English. The user is not technical.
- Never bulk-generate notes with a script that assigns titles without reading content. This produced 25 mislabeled notes once already.
- If a file is unreadable, say so and skip it — leave it in `00-Inbox`.
- If unsure which folder fits, pick the closest, act, then explain the reasoning.
- Keep `04-Config/schema.md` accurate after every batch.
