# NBA Edge Analyzer — App Build Prompt

**Summary:** A complete, copy-paste build prompt for creating an NBA betting edge analyzer as a web app. It specifies the weighted variable engine, a separate engine that models how recreational bettors are likely betting each game, the edge score output format, historical pattern matching, live data requirements, and a deliberate design instruction: it should look like a quant trading terminal, not a sports app.

## Key Points
- Edge score is **0–10**. Above 6 = exploitable, above 8 = high confidence.
- Includes a **Public Exploitation Engine** that models recreational bettor behaviour and surfaces the counter-play.
- Outputs **Kelly Criterion bet sizing**, full and half.
- Requires a **plain-English explanation** of why each edge exists — not just a number.
- **Ten pre-loaded historical patterns** run against tonight's slate.
- UI instruction: *"a professional trading terminal — dark, data-dense, colour-coded alerts. Not a sports app. A quant tool."*

## The Prompt
```
Build an NBA sports betting edge analyzer web app. The app calculates real,
exploitable edges against sportsbook lines and public betting patterns. It must
account for the following variables in its edge scoring engine. Variables are
weighted 1-10 based on predictive significance and must only be applied in the
contexts specified.

TIER 1 — Weight 10/10 — Apply to every game, every calculation:
Rest days since last game (B2B = heavy penalty, especially road); Official
injury report status pulled and updated within 60 minutes of tip-off; Home vs
Away designation with court advantage factored into true probability; Sharp
money percentage vs public money percentage (flag divergence over 20 points);
Line movement direction from opening line (against-public movement = sharp
signal).

TIER 2 — Weight 8-9/10 — Apply to every game:
Offensive and defensive efficiency ratings and pace differential (especially for
totals); Opponent defensive rank vs offensive stars; Playoff positioning and
elimination/tanking status especially March-April; Team win/loss streak recency
bias (fade heavy favorites on 4+ win streaks); Star player usage rate over last
5 games (detect fatigue); Trade deadline acquisitions in first 10 games
(overbet, chemistry lag); Head-to-head record current season only.

TIER 3 — Weight 6-7/10 — Apply contextually:
National TV game status (casual bettor inflation, fade the favorite); Time zone
cross-country travel with early tip-off; Back-to-back games especially road B2B
(apply 38% cover rate baseline); Coaching adjustment tendencies after losses
(elite coaches cover +6% post-loss); Starting lineup and rotation changes (2+
changes shift true spread 2-4 pts); High-volume 3PT team vs elite 3PT defense
(unders hit 59%); Referee crew tendencies for pace and foul rate; Clutch
performance rating in close-spread games under 4 points.

TIER 4 — Weight 4-5/10 — Apply for high-confidence picks:
Calendar position (flag first 15 games and last 10 for high variance); Bench
depth quality when starters are questionable; Post-All-Star break first game
rust (46% cover rate); Load management history of primary star on B2B; MVP/award
race motivation in final 20 games; Altitude factor for all games in Denver;
Arena crowd factor for elite home environments; Starting five average age in B2B
and playoff push situations.

TIER 5 — Weight 2-3/10 — Use as baseline calibration only:
Historical ATS record over last 3 seasons discounted for roster turnover;
Coaching tenure and system maturity; Market size public betting bias
(LAL/NYK/GSW/BOS structurally overlined); Inter-conference familiarity
disadvantage; Travel delays or weather disruptions when present in news data.

PUBLIC EXPLOITATION ENGINE:
The app must separately calculate how the average recreational bettor is likely
betting each game based on: recency bias (overbetting teams on win streaks),
star player worship (LeBron/Curry/KD get disproportionate action regardless of
context), big market loyalty (2.3x more public action on LAL/NYK/GSW/BOS),
parlay chasing behavior (flag when a team is a popular parlay anchor), and
primetime overreaction (national TV favorites inflated avg 2.1 pts). When public
bias is detected, surface the counter-play and its historical cover rate.

EDGE SCORE OUTPUT:
For every game, output a composite edge score from 0-10 combining all weighted
variables. Scores above 6 = flag as exploitable. Scores above 8 = high-
confidence play. Display: true odds vs market odds, Kelly Criterion bet size
(full and half Kelly), public % vs sharp %, line movement history chart,
confidence percentage, and a plain-English explanation of exactly why the edge
exists and which specific variables are driving it.

HISTORICAL BASELINE:
Include 10 pre-loaded historical edge patterns derived from the last 10 years of
NBA data with roster/trade changes factored in. Each pattern must show 10-year
profit on 100 unit flat bets, ROI percentage, and win rate. These patterns must
run against tonight's slate and flag when current games match.

REAL-TIME:
Odds must update live. Line movement must be tracked from open. Public/sharp
split must refresh. Display a live timestamp on last data pull.

The UI should look like a professional trading terminal — dark, data-dense, with
color-coded alerts. Not a sports app. A quant tool.
```

## Infrastructure the App Needs
These carry no betting weight but the model cannot run in real time without them:

**Live data:** odds board, spread, moneyline, total, team totals, player props, injury feed, box score, play-by-play, lineup/rotation feed

**Market tracking:** line movement tracker (open / current / closing, direction, magnitude, velocity), public bet % and money %, divergence, steam move alerts, reverse line movement alerts, cross-book comparison, best available prices

**Recommendation output:** bet type, strength rating, bet/lean/pass label, confidence tier, required minimum line, expected value %, projected edge, risk rating, suggested unit size

**Tracking:** full betting log with odds taken vs closing odds, **closing line value**, result, P/L, ROI, win rate by bet type and confidence tier, model calibration score

**Bankroll:** starting and current bankroll, unit size, daily and weekly risk limits, max drawdown, Kelly fraction, P/L by day, week and strategy

**Alerts:** steam move threshold, injury status change, line crossing a key number, public money divergence, best price available, bet qualification, pass trigger

## The One Thing to Add
The variable list has a hard qualification rule — two Tier 1 signals must align before anything is a bet — but the build prompt does not state it. Without that rule the app will surface single-signal "edges" and score them above 6. Add it explicitly before building. See [[nba-edge-model-variables|NBA Edge Model — Variable Weights]].

## Related Notes
- [[nba-edge-model-variables|NBA Edge Model — Variable Weights]]
- [[bankroll-and-slate-allocation|Bankroll and Slate Allocation]]
- [[highlight-detector-app|Highlight Detector App]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
