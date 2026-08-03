# NBA Edge Model — Variable Weights

**Summary:** A calibrated model for finding exploitable edges against NBA betting lines. Variables are sorted into five tiers by predictive weight, with each one justified by what it actually does to the line and when it can be acted on. The final version assigns percentage weights summing to 100% and adds a hard qualification rule: no bet unless at least two Tier 1 signals agree.

## Key Points
- **The qualification rule is the most important part**: two aligned Tier 1 signals with no contradicting Tier 2 = BET. One signal + one Tier 2 confirmation = LEAN. Everything else = **PASS**.
- **Reverse line movement is the single strongest signal** — 9% weight on its own.
- Tier 1 carries **42%** of the total weight across just 6 variables.
- 95 weighted variables plus 60+ operational ones.
- The author cut several variables after honest re-evaluation, including some that were double-counting.

## How Weights Were Assigned
Three criteria:
1. **Predictive validity** — does research confirm it correlates with ATS outcomes?
2. **Actionability** — can you act before the market corrects?
3. **Independence** — does it add information not already captured elsewhere?

## Tier 1 — Core Signal (42%)
The only variables that can move you from PASS to BET on their own.

| Variable | Weight | Why |
|---|---|---|
| Reverse line movement (confirmed) | 9% | Strongest exploitable market signal. Line moving against public = sharp money on the other side. |
| Critical injury to primary player (Out/Doubtful, VORP >4.0) | 8% | Changes true line by 3–9 pts. Market lags 30–90 min on props. |
| Cross-book line discrepancy (2.5+ pts) | 7% | Highest pure-arbitrage signal. Act immediately, no modeling required. |
| Net rating differential (opponent-adjusted) | — | Core strength measure |
| Sharp vs public money divergence (20+ pts) | — | Sharp side covers 63%+ historically |
| Rest days / back-to-back | — | Heavy penalty, especially road |

## Tier 2 — High Signal (28%)
Confirms or kills the bet. Seven variables:
- Pace of play and offensive/defensive efficiency ratings — especially for totals
- Opponent defensive efficiency rank — public bets offensive output and ignores elite defenses
- Playoff positioning / tanking status — **tanking teams cover only 31% ATS in April**
- Win/loss streak recency bias — public overreacts by an average 2.3 pts; fade teams on 4+ win streaks as favorites
- Star player usage rate over last 5 games — 35+ minutes over 5 games predicts regression
- Trade deadline acquisitions — teams overbet by 14 pts on average; chemistry takes 10–15 games
- Head-to-head, **current season only**

## Tier 3 — Moderate Signal (18%)
Ten variables, applied contextually:
- **National TV games** — casual action inflates favorites by 2.1 pts. Fade.
- **Cross-country time zone travel** — 5am body-clock games cost −3.2% FG
- **Back-to-back** — cover only 44% overall, **38% on the road**
- **Coaching adjustment after losses** — elite coaches (Pop, Spoelstra, Brown) cover +6% post-loss
- **Rotation changes** — 2+ lineup changes shift the true spread 2–4 pts
- **High-volume 3PT team vs elite 3PT defense** — overs hit only 41%
- **Clutch rating** — more predictive than overall rating in games decided by 5 or fewer
- **Referee crew tendencies** — some crews average 8+ more free throws, affecting totals

## Tier 4 — Contextual (8%)
Eight variables for high-confidence picks:
- Calendar position — variance highest in first 15 and last 10 games
- Bench depth when starters are questionable
- **First game back from All-Star break** — covers at 46%
- Load management history — teams with load-managed stars cover at **61%**
- MVP race motivation in the final 20 games
- **Altitude in Denver** — Nuggets cover at home as a dog at an elite rate
- Arena crowd factors (MSG, TD Garden, Chase Center)
- Starting five average age in B2B and playoff push situations

## Tier 5 — Prop Track (4%)
Runs separately and does not affect the spread/total composite:

| Variable | Weight | Why |
|---|---|---|
| Prop market lag window (post-injury, 15–45 min) | 1.5% | **Highest-EV opportunity in all of sports betting.** Time-decaying — act before books catch up. |
| Backup usage rate spike | 1% | Missing star's usage redistributes. Bet the absorber's points/assists over immediately. |
| Multi-book prop price comparison | 0.75% | Props vary more across books than game lines |
| Prop-to-game-line arbitrage | 0.75% | Spread shifts 3 pts on injury but props haven't moved yet |

## Baseline Only (Tier 5 in the earlier version)
- Historical ATS over 3 seasons — discount heavily for roster turnover
- Coaching tenure — new systems take 40–60 games to stabilize
- **Market size bias** — LAL/NYK/GSW/BOS get 2.3x more casual action regardless of quality
- Inter-conference familiarity — 2% lower win rate than expected
- Travel delays — teams arriving day-of cover at 34%

## What Was Cut, and Why
This is the part that shows the model was actually stress-tested:

**Cut entirely:** nuclear power variables (reactor count, capacity factor) — "wrong domain, pasted in error from another document. Zero relevance."

**Demoted:**
- **Recency streak** — mostly already captured by net rating. Dropped to sub-1%.
- **Big market loyalty** — real, but already inside public bet%/money% divergence. Redundant.
- **Historical head-to-head** — near-zero predictive value once rosters change.
- **Vig/juice tracking** — matters for line shopping, not edge calculation. Moved to operational.
- **Home court advantage standalone** — already baked into the net rating home/away split. Removed to avoid double-counting.

## Final Count
| Tier | Variables | Weight |
|---|---|---|
| Tier 1 — Core Signal | 6 | 42% |
| Tier 2 — High Signal | 7 | 28% |
| Tier 3 — Moderate | 10 | 18% |
| Tier 4 — Contextual | 8 | 8% |
| Tier 5 — Prop Track | 4 | 4% |
| Platform / Operational | 60+ | 0% (infrastructure) |
| **Total** | **95 weighted + 60 operational** | **100%** |

## The Rule That Matters Most
> A bet only qualifies if at least **2 Tier 1 signals align**. One signal alone — even reverse line movement — is not sufficient.
>
> - Two confirming Tier 1 signals, no contradicting Tier 2 → **BET**
> - One Tier 1 + one Tier 2 confirmation → **LEAN**
> - Everything else → **PASS**

## Related Notes
- [[nba-edge-analyzer-app-prompt|NBA Edge Analyzer — App Build Prompt]]
- [[bankroll-and-slate-allocation|Bankroll and Slate Allocation]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
