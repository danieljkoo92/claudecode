# Parking Tracker App

**Summary:** Extracted from bulk notes file.

STEP 10 — CREATE THE ROTATION ENGINE

Tell Codex:

“Create the calculation engine for rotation timing.”

Codex should create:

/src/lib/engine/calculateRotationClock.ts
/src/lib/engine/calculateTeamRotationPattern.ts
/src/lib/engine/calculatePlayerRotationPattern.ts
/src/lib/engine/calculateLeadBucket.ts
/src/lib/engine/calculatePlayoffLeadBucket.ts
/src/lib/engine/calculateLeadSafety.ts
/src/lib/engine/calculateEnergySaveScore.ts
/src/lib/engine/calculateStarterRestProbability.ts
/src/lib/engine/calculateBenchHeavyProbability.ts
/src/lib/engine/calculateGarbageTimeProbability.ts
/src/lib/engine/calculateStarReturnProbability.ts
/src/lib/engine/detectBenchHeavyLineup.ts
/src/lib/engine/detectClosingLineup.ts
/src/lib/engine/generateLiveAlerts.ts
/src/lib/engine/generatePlainEnglishExplanation.ts

The engine should calculate:
• first bench substitution time
• starter rest window
• starter return window
• backup center window
• bench-heavy window
• closing lineup pattern
• substitution timing by quarter
• substitution timing by score margin
• playoff energy-saving behavior

---
**Source:** `../../../03-Archive/2026-05-17-allnotes.txt`
