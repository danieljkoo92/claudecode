# Highlight Detector App

**Summary:** A working React app for finding the best moments in a long video. The user uploads a file or pastes a URL, picks which kinds of moments to look for, and the app calls Claude to return timestamped clips with titles, descriptions and a viral score from 1 to 10. The full source code is preserved in the archive; this note captures what it does and how it is built.

## Key Points
- Two input modes: **file upload with drag-and-drop**, or **paste a video URL**.
- User selects "signals" — the kinds of moments worth clipping — from presets or custom text.
- Returns **6–10 clips**, each with start/end timestamps, a 5-word title, a one-sentence description, and a **viral score 1–10**.
- Scores are colour-coded: green at 8+, amber at 6–7, grey below.
- Built as a single React component calling the Anthropic API directly from the browser.

## Signal Presets
**Default signals:** loud reaction / screaming, funny moment, dramatic tension, unexpected twist, hype / peak energy, emotional moment.

| Category | Signals |
|---|---|
| Gaming | Kill streak / big play, rage moment, clutch win, funny fail |
| Sports | Big hit / goal, crowd eruption, controversial call, comeback moment |
| Talk | Shocking statement, heated debate, burst of laughter, vulnerable moment |

Users can also type their own custom signal and add extra context instructions.

## How It Runs
The progress bar walks through six stages while the request is in flight:
1. Ingesting video
2. Analyzing audio peaks
3. Scanning for visual cues
4. Running AI highlight detection
5. Scoring moments
6. Finalizing clips

The response is stripped of markdown fences, then a JSON array is pulled out of the text even if the model wrapped it in commentary.

## The Prompt It Sends
```
You are a professional video clip analyst. Analyze "<video>" (duration: ~N
minutes) and identify the TOP 6-10 highlight moments.

The user wants clips triggered by these signals: <signal list>.

For each highlight, provide:
- A realistic timestamp (spread across the video duration of N seconds)
- A short punchy title (5 words max)
- A 1-sentence description of what happens
- A viral score from 1-10

Return ONLY valid JSON array. No markdown. No explanation. Example:
[{"start":45,"end":75,"title":"Insane clutch moment","description":"...",
"score":9},...]

Generate 7 clips spread realistically across the video. Make them feel real
and specific.
```

## Design
A dark, monospace, terminal-style interface:
| Token | Value |
|---|---|
| Accent | `#00ff87` (green) |
| Background | `#0a0a0f` |
| Surface | `#111118` |
| Border | `#1e1e2e` |
| Text | `#e2e8f0` |
| Muted | `#64748b` |

Fonts: DM Mono / Fira Code for body, Space Grotesk for headings. Cards fade up in sequence with a 60ms stagger.

## Known Issue to Fix
The code calls the Anthropic API straight from the browser using `anthropic-dangerous-direct-browser-access`, which means the API key ships to the client. Anyone who opens the page can read it. Before this goes anywhere public, the call needs to move behind a small backend endpoint.

## Where the Code Is
Full source is in the archive file, starting right after the personal to-do list.

## Related Notes
- [[media-translation-app|Media Translation App]]
- [[instagram-faceless-content-prompt|Instagram Faceless Content Prompt]]

---
**Source:** `../../03-Archive/2026-05-17-allnotes.txt`
