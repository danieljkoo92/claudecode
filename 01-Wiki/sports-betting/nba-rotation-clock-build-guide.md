# NBA Rotation Clock — 25-Step Build Guide

**Summary:** A complete 25-step guide for building an app called NBA Rotation Clock, written as instructions to give Codex one at a time. The app collects real substitution data from public play-by-play pages using Playwright, works out when each team rests and returns its starters, and predicts bench-heavy stretches using a 0–100 Energy Save Score. A hard rule runs through the whole thing: **no mock data, ever.**

## Key Points
- Stack: **Next.js, React, TypeScript, Tailwind, App Router**.
- **Playwright** opens public play-by-play pages and collects substitution events — it is the browser tool, not the app.
- **No fake data, no mock games, no mock players, no paid API keys.** Every page starts empty.
- Core output: **Energy Save Score 0–100**, predicting whether starters will rest.
- Seven pages: Dashboard, Data Collector, Team Rotation, Player Rotation, Live Watch, Playoff Energy, Settings.
- Test the empty state *before* testing with real data.

## The Rule That Shapes Everything
The guide opens by banning: paid API keys, fake demo data, mock games, mock players, mock teams. Every page must handle zero data correctly before any data logic gets built — Dashboard shows *"No data yet. Collect or import game data to start."*

That constraint is why Step 4 (empty states) comes before Step 5 (data types) and Step 6 (the collector).

## The 25 Steps
| # | Step |
|---|---|
| 1 | Create the project in Codex — Next.js + TypeScript + Tailwind, blank, file structure first |
| 2 | Install Playwright (`npm install -D playwright`, `npx playwright install`) |
| 3 | Create data folders — `/data/raw/playbyplay`, `/data/processed`, all starting empty |
| 4 | Create empty app states for every page |
| 5 | Create the data types |
| 6 | Create the Playwright collector |
| 7 | Create data adapters |
| 8 | Build the Data Collector page |
| 9 | Create the import system |
| 10 | **Create the rotation engine** |
| 11 | **Create lead bucket logic** |
| 12 | **Create the Energy Save Score** |
| 13 | Create plain-English explanations |
| 14 | Build the Dashboard |
| 15 | Build the Team Rotation page |
| 16 | Build the Player Rotation page |
| 17 | Build the Live Watch page |
| 18 | Build the Playoff Energy page |
| 19 | Build the Settings page |
| 20 | Add package scripts |
| 21 | **Test empty state first** |
| 22 | Test with one real public play-by-play URL |
| 23 | Connect GitHub |
| 24 | Deploy to Vercel later |
| 25 | Future upgrades |

## Data Files
```
/data
  /raw
    /playbyplay
  /processed
    substitution_events.json
    substitution_events.csv
    rotation_patterns.json
    energy_predictions.json
```
All start empty.

## The Rotation Engine (Step 10)
Sixteen calculation modules under `/src/lib/engine/`, including `calculateRotationClock`, `calculateLeadBucket`, `calculateEnergySaveScore`, `calculateStarterRestProbability`, `calculateBenchHeavyProbability`, `calculateGarbageTimeProbability`, `calculateStarReturnProbability`, `detectBenchHeavyLineup`, `detectClosingLineup`, `generateLiveAlerts`, and `generatePlainEnglishExplanation`.

It calculates:
- First bench substitution time
- Starter rest window and starter return window
- Backup center window
- Bench-heavy window
- Closing lineup pattern
- Substitution timing by quarter and by score margin
- Playoff energy-saving behaviour

## Lead Buckets (Step 11)
**Regular season:**
| Bucket | Margin |
|---|---|
| Close game | −5 to +5 |
| Small lead | +6 to +10 |
| Medium lead | +11 to +15 |
| Big lead | +16 to +20 |
| Blowout lead | +21 or more |
| Small deficit | −6 to −10 |
| Medium deficit | −11 to −15 |
| Big deficit | −16 or worse |

**Playoffs:**
| Bucket | Margin |
|---|---|
| Close playoff game | Within 8 |
| Moderate playoff lead | +9 to +14 |
| Strong playoff lead | +15 to +20 |
| Energy-save playoff lead | +21 or more |

The playoff buckets are wider, which is the right instinct — playoff teams keep starters in longer at margins where a regular-season team would already be resting.

## Energy Save Score (Step 12)
A 0–100 score:
| Range | Meaning |
|---|---|
| 0–25 | Normal rotation likely |
| 26–50 | Slight chance of extended bench minutes |
| 51–75 | Starter rest becoming likely |
| 76–100 | Energy saving / bench-heavy expected |

## Why This Connects to the Betting Model
This is the data engine behind several Tier 1 and Tier 2 variables in [[nba-edge-model-variables|the edge model]] — rotation changes shifting the true spread 2–4 points, star usage rate predicting fatigue, and bench depth mattering when starters sit. The prop-market lag window, described there as *"the highest-EV opportunity in all of sports betting,"* depends on knowing who absorbs a missing star's usage. That is exactly what `calculateStarterRestProbability` and the backup usage logic are for.

## A Note on the Old Filing
An earlier pass through these notes split this single document across 25 separate files with unrelated titles — "Beer Inventory List" containing Step 11, "Character Dialogue — Sister" containing Step 21, and so on. Those files have been deleted. This is the whole thing, in one place, correctly labelled.

## Related Notes
- [[nba-edge-model-variables|NBA Edge Model — Variable Weights]]
- [[nba-edge-analyzer-app-prompt|NBA Edge Analyzer — App Build Prompt]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
