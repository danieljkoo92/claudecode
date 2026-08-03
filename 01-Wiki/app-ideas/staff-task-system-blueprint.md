# Staff Task System — Full Blueprint

**Summary:** A complete build plan for a software product that makes sure staff actually do their assigned work. Employees get tasks, complete them by voice or photo, and build a trust score that changes how much proof the system demands from them. It includes the database schema, the API endpoints, how the system runs moment to moment, a four-week MVP plan, pricing tiers, and how to land the first customers. This is a different product from the [[pos-app-feature-list|POS app]] — this one is about staff accountability, not taking orders.

## Key Points
- Core idea sold as **"reduce labor waste and enforce standards"** — not as checklists or training.
- Each employee carries a **trust score (0–100)** that sets how strictly the system verifies them.
- Tasks are completed by **voice** or **photo evidence**, with anti-cheat checks like file hashing and EXIF data.
- Main revenue tier is **Pro at $249 per location per month**.
- Ship in **4 weeks**; start with your own venue plus 2–5 nearby businesses at $49–$99 beta pricing.
- What matters is proving employees use it, tasks get done better, and managers rely on it daily — not features.

## Database Schema (Postgres / Supabase)

**Core tables**

`organizations` — id (pk), name, plan_tier (starter | pro | multi), created_at

`locations` — id (pk), organization_id (fk), name, timezone, created_at

`users` — id (pk), organization_id (fk), location_id (fk), role (owner | manager | employee), name, phone, trust_score (0–100, default 60), trust_tier (strict | normal | trusted | elite), penalty_level (none | warning | penalty | strict), created_at

**Tasks and SOPs**

`sops` — id (pk), organization_id, title, category (opening, closing, bar, cleaning, etc.), content_json (full SOP), checklist_json (micro-steps), quiz_json, created_at, updated_at

`tasks` — id (pk), organization_id, location_id, sop_id (nullable), title, type (time | recurring | event | manual), assigned_role (nullable), assigned_user_id (nullable), due_time (timestamp or rule), recurrence_rule (cron or interval), verification_mode (off | random | required), expected_duration_seconds, is_active

**Task execution**

`task_instances` — every occurrence of a task: id (pk), task_id (fk), location_id, assigned_user_id, status (pending | in_progress | completed | missed | flagged), due_at, started_at, completed_at, completion_method (voice | photo | manual), duration_seconds, created_at

`task_evidence` — id (pk), task_instance_id (fk), type (photo | video), file_url, hash (for duplicate detection), metadata_json (EXIF, timestamps), created_at

`task_flags` — id (pk), task_instance_id (fk), flagged_by (manager_id), reason (incomplete | fake | quality_issue), created_at

**Scoring and rewards**

`trust_events` — id (pk), user_id, task_instance_id, delta_score, reason, created_at

`user_stats_daily` — id (pk), user_id, date, tasks_assigned, tasks_completed, on_time, missed, flagged, verified, avg_time_ratio

`rewards` — id (pk), organization_id, type (break | meal | gift_card | custom), value (minutes or $), rules_json (thresholds), is_active

`reward_earnings` — id (pk), user_id, reward_id, status (pending | approved | claimed | denied), evidence_json, created_at

## Core API Endpoints
```
Auth / org
  POST /auth/login
  POST /orgs
  POST /locations

Tasks
  POST /tasks                      (manager creates)
  GET  /tasks/today?user_id=
  POST /tasks/:id/complete
  POST /tasks/:id/evidence
  POST /tasks/:id/flag

Voice completion
  POST /voice/complete             input: audio file
     pipeline: speech-to-text → intent match to task_instance
               → validate → mark complete or request proof

Trust and penalties
  POST /trust/recalculate
  GET  /users/:id/trust
  POST /penalty/escalate
  POST /penalty/clear

Rewards
  GET  /rewards
  POST /rewards/claim
  GET  /users/:id/rewards

Analytics
  GET /dashboard/manager
  GET /analytics/location
  GET /analytics/user/:id
```

## How It Runs

**A. Task lifecycle** — Scheduler creates a task_instance and assigns it to a user. The app shows "Next Task". The user completes it by voice (`/voice/complete`) or photo (`/tasks/:id/evidence`). The system validates timing, penalty level and verification requirement, then either marks it complete or asks for proof.

**B. Trust update** — On completion: write a trust_event, update user_stats_daily, recalculate the EWMA trust score, and adjust trust_tier and penalty_level.

**C. Anti-cheat trigger** — If signals cross a threshold: set penalty_level to warning or penalty, then modify future tasks to require a photo and disable batching.

**D. Reward engine** — On each clean completion: increment counters, check thresholds, create a pending reward_earning, auto-approve if the rules allow.

## 2–4 Week MVP Build Plan
| Week | Deliverable |
|---|---|
| 1 | Auth + org + users, task creation and assignment, basic UI (Next Task screen), manual completion |
| 2 | Voice-to-text integration, sequential task flow, basic trust score (no EWMA yet), simple manager dashboard |
| 3 | Photo upload and storage, penalty levels (warning/penalty), reward counters (simple streaks) |
| 4 | Full trust formula with EWMA, anti-cheat signals, rewards (break + meal), notifications for due and overdue |

Ship at the end of week 4.

## Pricing
| Tier | Price | Includes |
|---|---|---|
| **Starter** | $99 / location / month | Up to 10 employees, core task system, voice completion, basic trust score, limited analytics. Goal: easy entry. |
| **Pro** | $249 / location / month | Up to 30–40 employees, SOP generation, anti-cheat, photo verification, rewards, full analytics, notifications and escalation. **This is the main revenue plan.** |
| **Multi-location** | $599–$1,499 / month | Unlimited employees per location tier, centralized SOPs, cross-location analytics, advanced permissions, priority support. Target: franchises. |

**AI usage:** include 500–1,000 transcription minutes, overage ~$0.01–$0.02/min. Do not overcomplicate early.

**Add-ons (later):** AI photo validation +$29–$99/month, advanced analytics +$49/month, POS/HR integrations at enterprise level.

## Pricing Strategy
Anchor on value: if it saves **one bad shift a week**, or **one hour per employee per week**, it is easily worth **$200–$500 per month per location**.

Sales angle — do not say "task management app." Say: **"We make sure your staff actually does what they're supposed to do."**

## First Customers
Start with your own location plus 2–5 nearby businesses. Charge **$49–$99 beta pricing**. Get feedback, proof of results, and testimonials. Then raise the price.

## What Matters Most
Not features. You need to prove three things:
1. Employees actually use it.
2. Tasks actually get done better.
3. Managers rely on it daily.

If those are true, pricing becomes easy, buyers become obvious, and valuation follows.

## Open Next Steps
- Design the exact voice command logic — phrases mapped to task matching.
- Map how to build this in Base44 / no-code versus a real dev stack, step by step.

## Related Notes
- [[pos-app-feature-list|POS App — Feature List]]
- [[christmas-opening-checklist|Christmas Karaoke Opening Checklist]]
- [[downtime-checklist|Downtime Checklist]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
