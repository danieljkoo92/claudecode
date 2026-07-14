# Claude Use Cases

**Summary:** Extracted from bulk notes file.

STEP 22 — TEST WITH ONE REAL PUBLIC PLAY-BY-PLAY URL

You paste one public play-by-play URL into the Data Collector page or run:

npm run collect:game -- --url="PASTE_GAME_URL_HERE"

Then check:
• Did it collect substitution events?
• Did it save JSON?
• Did it save CSV?
• Did it calculate team rotation?
• Did the dashboard update?
• Did the Team page update?
• Did the Player page update?

If not, Codex should inspect:
• saved screenshot
• saved HTML
• parsing errors
• page selector logic

---
**Source:** `../../../03-Archive/2026-05-17-allnotes.txt`
