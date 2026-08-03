# Ops Flow — Voice-First Operations App

**Summary:** A complete build prompt for a mobile-first SaaS called Ops Flow, where managers run daily operations by talking instead of typing. A microphone button sits on every screen; spoken training gets converted into formatted SOPs automatically; employees see one task at a time and complete it by saying "done". This is the productized version of the staff task system, with the voice layer as the core idea.

## Key Points
- **Voice-first**: a persistent mic button in the top right of every main screen.
- Speak a training session out loud → the app turns the transcript into a **complete SOP** with purpose, steps, standards, mistakes and a checklist.
- Employee main screen is **"Next Task"** — one thing at a time, nothing else.
- Completion by **saying "done"** or tapping a button; photo upload if verification is required.
- Every major page must have a **Help button** with short, simple explanations.
- Core principle: *"extremely simple, voice-first, and require minimal thinking."*

## Purpose
> This app allows business owners and managers to run daily operations, train employees, and manage tasks using voice instead of typing. The system converts real-world spoken training into SOPs and checklists, and allows employees to complete and manage tasks using a global microphone button.

> **Core principle:** The app must be extremely simple, voice-first, and require minimal thinking. It should reduce repetition, enforce accountability, and allow managers to see exactly what was completed or missed.

## Global UI
A persistent microphone button in the top right corner on all main screens. It must:
- Start recording on tap, stop on second tap
- Show a **live transcription preview** while speaking
- After recording, display **"I heard: [transcript]"**, the suggested action, and **Confirm / Edit / Cancel**

It works everywhere: dashboard, task screen, SOP screen, manager dashboard.

## Voice Command Pipeline
1. Record audio
2. Convert speech to text via external API
3. Send transcript to an AI parser
4. Return a structured action
5. Confirm with the user before executing

## SOP Capture — The Best Idea in Here
Audio is transcribed, then the AI converts the transcript into:
- SOP title
- Purpose
- When to use
- Role responsible
- Tools needed
- Step-by-step instructions
- Standards / rules
- Common mistakes
- Checklist version

Then: show the editable SOP → save to the SOP library.

**Why this matters:** the [[complete-sop-system|complete SOP system]] took real effort to write down. Most managers never do it, because writing procedures is the job nobody has time for. Talking through a task while doing it takes no extra time at all — and that is the whole product.

## Task System
Managers can create tasks manually or by voice, and assign to an individual or a role.

Set: due time · recurrence · verification mode (off / required)

Task types: one-time · recurring · scheduled · event-triggered (basic MVP optional)

Each task generates **task instances**.

## Employee Experience
Main screen = **"Next Task"**, showing task title, due time, and checklist steps if any.

Actions:
- Press mic → say "done"
- Tap "Done"
- If verification is required → prompt for photo upload

## Manager Dashboard
Shows tasks completed today, missed tasks, overdue tasks, flagged tasks, and an employee performance summary.

Allows quick task creation, flagging a task as incorrect, and requiring verification for a task type.

## Help Button
Every major page includes one. When tapped it shows a short explanation of how to use the page, best practices, and how to get the fastest results. **Keep explanations simple and short.**

## How This Relates to the Other Spec
[[staff-task-system-blueprint|The staff task system blueprint]] is the same product seen from the business side — database schema, trust scores, anti-cheat, pricing tiers. This document is the same product seen from the interface side. Built together they are one app: Ops Flow is what the user touches, the blueprint is what runs underneath.

The blueprint's pricing already assumes this: **$99 starter / $249 pro / $599+ multi-location**, with SOP generation listed as a Pro feature. That is exactly the voice-capture described here.

## Related Notes
- [[staff-task-system-blueprint|Staff Task System — Full Blueprint]]
- [[complete-sop-system|Complete SOP System]]
- [[universal-voice-command-system|Universal Voice Command System]]
- [[pos-app-feature-list|POS App — Feature List]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
