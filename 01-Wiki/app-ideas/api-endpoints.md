# API Endpoints Specification

**Summary:** Extracted from bulk notes file.

STEP 5 — CREATE THE DATA TYPES

Tell Codex:

“Create TypeScript types for basketball data.”

Codex should create:

/src/lib/types/basketball.ts

Types needed:
• Team
• Player
• Game
• SubstitutionEvent
• Lineup
• RotationPattern
• EnergySavePrediction
• LeadBucket
• PlayoffContext

Each substitution event should include:

game_id
game_date
season
season_type
team
opponent
quarter
game_clock
seconds_remaining_in_quarter
total_game_seconds_elapsed
team_score
opponent_score
score_margin
lead_bucket
player_in
player_out
player_in_role
player_out_role
player_out_minutes_so_far
player_out_fouls
is_foul_trouble_substitution
is_playoff
is_elimination_game
is_closeout_game
source_url

Unknown fields should be null.
Do not guess.

---
**Source:** `../../../03-Archive/2026-05-17-allnotes.txt`
