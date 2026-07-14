# Event Flow Architecture

**Summary:** Extracted from bulk notes file.

STEP 6 — CREATE THE PLAYWRIGHT COLLECTOR

Tell Codex:

“Create a Playwright collector that can open a public basketball play-by-play URL and extract substitution events.”

Codex should create:

/scripts/collectGame.ts
/scripts/collectSampleGames.ts
/scripts/processData.ts

Commands to add:

npm run collect:game -- --url="PASTE_GAME_URL_HERE"
npm run process:data
npm run analyze:rotations

The collector should:
1. Open the URL.
2. Wait for the play-by-play table or event list.
3. Read event text.
4. Detect substitution events.
5. Extract: 
◦ quarter
◦ clock
◦ team
◦ player in
◦ player out
◦ score if available
◦ source URL
6. Save raw page data.
7. Save processed substitution events.

Important rules:
• Do not bypass logins.
• Do not bypass CAPTCHAs.
• Do not bypass paywalls.
• Do not use stealth evasion.
• Add delays between page visits.
• Save a screenshot if extraction fails.
• Save failed HTML if extraction fails.

---
**Source:** `../../../03-Archive/2026-05-17-allnotes.txt`
