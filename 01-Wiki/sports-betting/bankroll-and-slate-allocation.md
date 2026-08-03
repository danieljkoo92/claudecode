# Bankroll and Slate Allocation

**Summary:** A worked example allocating $1,000 across a single night's slate — three core positions, two small moneyline sprinkles — followed by an unusually honest reality check about what the allocation actually risks. The conclusion is that this sizing is short-term EV chasing, and the more conservative 10–15% exposure approach is mathematically better.

## Key Points
- $1,000 total across **5 positions**.
- Structure: **$900 core (lower variance), $100 high-variance sprinkles**.
- Anchor position gets the largest allocation because it has the strongest signal cluster.
- **Reality check: you can go 0–3 easily.** One bad shooting night wipes the slate.
- The structured **10–15% exposure per slate** approach is stated as mathematically superior for long-term profit.

## Core Positions (Lower Variance)
| Position | Bet | Reasoning |
|---|---|---|
| **Lakers +9.5** | $400 | Strongest signal cluster: market vs projection gap, public favorite inflation, spread cushion. **This is the anchor.** |
| **Trail Blazers +2.5** | $300 | Injury uncertainty mispricing, home dog value. Lower than Lakers due to volatility risk. |
| **Celtics vs 76ers Under 215.5** | $200 | Slower pace + playoff environment. Lower confidence than spreads → reduced allocation. |

## High-Variance Upside (Controlled Portion)
| Position | Bet |
|---|---|
| Lakers ML | $50 |
| Blazers ML | $50 |

## Final Breakdown
```
Lakers spread    $400
Blazers spread   $300
Under            $200
ML sprinkles     $100
                 -----
Total          $1,000
```

## The Reality Check
Written plainly in the source, and worth keeping attached to the allocation:

> Even with correct logic:
> - You can go 0–3 easily due to variance
> - One bad shooting night can wipe this slate
> - This sizing ignores optimal bankroll growth (purely short-term EV push)

> **If you care about long-term profit:** your original structured approach (~10–15% exposure per slate) is mathematically superior. This version is only justified if you accept high volatility and you're optimizing for short-term gain, not survival.

## Why That Matters
$1,000 on a single slate is a large fraction of most bankrolls. At 10–15% exposure, this same $1,000 night implies a bankroll of $6,500–10,000. Below that, the allocation above is not aggressive — it is a coin flip on a meaningful share of the roll, and the model's own qualification rule (two Tier 1 signals or pass) exists precisely to keep the number of qualifying bets low.

Two simulations were offered but not run: expected profit/loss distribution for this exact allocation, and probability of going broke vs doubling over 30 slates. Both are worth doing before repeating this sizing.

## Related Notes
- [[nba-edge-model-variables|NBA Edge Model — Variable Weights]]
- [[nba-edge-analyzer-app-prompt|NBA Edge Analyzer — App Build Prompt]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
