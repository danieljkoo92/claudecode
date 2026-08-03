# Health Claims Analysis Prompt

**Summary:** A structured prompt for rigorously testing a belief about health interventions — specifically the idea that cheap or natural remedies (turmeric, herbs, diet) get overlooked because they aren't profitable. Rather than arguing for or against, it breaks the claim into four separate types, grades the evidence for each on a three-tier scale, and checks the reasoning for specific logical errors.

## Key Points
- Splits the claim into **economic, biomedical, epistemic and philosophical** components — because they need different kinds of evidence.
- Grades each on three tiers: **well-supported / partially supported / weak**.
- Compares intervention types on mechanism strength, side effects, trial rigor and reproducibility.
- Explicitly checks its own reasoning for **selection bias, survivorship bias, false dichotomy**, and conflating toxicity with inefficacy.

## The Claim Being Tested
That low-cost or free interventions — diet, herbs, natural compounds like turmeric — are often presented as secondary to pharmaceutical options, and that this happens because they are non-commercial and low-profit rather than because they work less well.

## The Framework

**1. Reframe the claim into analyzable components**
- **Economic claim** — incentives, patents, profitability
- **Biomedical claim** — efficacy of the interventions
- **Epistemic claim** — how evidence is evaluated in medicine
- **Philosophical claim** — what "better health solution" even means

**2. Evaluate each component using evidence tiers**
| Tier | Means |
|---|---|
| **A. Well-supported** | Strong clinical trials, meta-analyses, regulatory consensus |
| **B. Partially supported** | Mixed evidence, small studies, condition-specific effects |
| **C. Weak or unsupported** | Anecdotal only, mechanistically speculative, non-replicated |

**3. Compare intervention types objectively**
- *Pharmaceutical:* mechanism strength, side effect profile, trial rigor, reproducibility
- *Nutritional / herbal / lifestyle:* bioavailability limitations, effect size, study quality variability, placebo contribution, population-level reproducibility

**4. Identify logical errors or assumptions**
- Selection bias — highlighting only the positive natural cases
- Survivorship bias
- False dichotomy — natural *versus* pharmaceutical
- Conflating toxicity with inefficacy
- Misunderstanding patent economics as scientific invalidation

## Why This Prompt Is Well Built
It is written by someone who holds the belief, and it is deliberately constructed to be capable of proving that belief wrong. Splitting the economic claim from the biomedical one is the key move: the pharmaceutical industry can have distorted incentives **and** turmeric can still have poor bioavailability. Both can be true, and most arguments on this topic collapse because they treat the two as the same question.

The bioavailability line in particular shows real self-awareness — it is the strongest counter-argument to the turmeric case, and it is in the prompt rather than left out.

## Related Notes
- [[universal-ai-prompt-templates|Universal AI Prompt Templates]]
- [[medical-notes|Medical Notes]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
