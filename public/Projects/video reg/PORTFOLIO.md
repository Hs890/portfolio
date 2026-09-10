# 🎬 AI Video Explainer

> Upload any screen recording and instantly get an AI-powered timeline, OCR text extraction, error detection, and a conversational interface — all timestamped and seekable.

---

## 🔍 Overview

**AI Video Explainer** is a full-stack web application that transforms raw screen recordings into structured, searchable knowledge. Drop in a video and within seconds Gemini 2.5 Flash Vision analyzes every frame, surfaces errors, extracts on-screen text, and builds a navigable timeline. You can then chat with the video in natural language — asking *"Login page kis second par hai?"* — and jump straight to that moment.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🖼️ **Frame Extraction** | Samples up to 7,200 frames at 2 fps using the HTML5 Canvas API with no server upload |
| 🤖 **AI Vision Analysis** | Each frame batch is analyzed by Gemini 2.5 Flash — scene label, description, OCR text, UI elements, error detection, and keyword tags |
| 📋 **Auto Summary** | Generates a 2–4 sentence overview, a merged scene timeline (~5–15 entries), a full error log, and 2–5 actionable recommendations |
| 🕐 **Interactive Timeline** | Click any timeline event to seek the embedded video player to that exact second |
| 🔎 **Full-text Frame Search** | Search all analyzed frames by scene name, description, OCR text, or tags in real-time |
| 🚨 **Error Detection** | Flags frames containing broken UI, warning dialogs, or failed actions with a dedicated Issues tab and badge counter |
| 💬 **Chat with Video (RAG)** | Multi-turn conversational interface backed by all frame analyses; answers include clickable timestamp chips that seek the player |
| 📤 **Drag-and-drop Upload** | Supports MP4, MOV, WEBM, and AVI files up to 2 GB / 60 minutes |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** with **TypeScript**
- **TanStack Router** (file-based routing) + **TanStack Start** (SSR / server functions)
- **TanStack Query** for server-state management
- **Tailwind CSS v4** + **shadcn/ui** component library (Radix UI primitives)
- **Lucide React** icons, **Sonner** toast notifications
- **Recharts** for data visualization

### Backend / AI
- **TanStack Start server functions** — type-safe RPC, no separate API layer needed
- **Google Gemini 2.5 Flash** via Lovable AI Gateway (`google/gemini-2.5-flash`)
- **Zod** for end-to-end schema validation
- Exponential back-off retry on rate-limit (429) responses

### Tooling
- **Vite 7** + `@tanstack/router-plugin` for code-gen
- **Bun** as package manager
- **ESLint** + **Prettier** for code quality

---

## 🏗️ Architecture

```
src/
├── routes/
│   ├── index.tsx        # Main app page — upload, progress, results, chat
│   ├── dashboard.tsx    # Admin / usage dashboard
│   ├── login.tsx        # Auth — sign in
│   └── signup.tsx       # Auth — register
├── lib/
│   ├── video.ts         # Client-side frame extraction via HTML5 Canvas
│   └── analyze.functions.ts  # Server functions: analyzeFrames · summarizeVideo · chatWithVideo
└── components/ui/       # shadcn/ui component library
```

### Data Flow

```
User drops video
      │
      ▼
extractFramesFromFile()          ← runs in browser (Canvas API)
      │   up to 7,200 JPEG frames
      ▼
analyzeFrames() [server fn]      ← batches of 6 frames → Gemini Vision
      │   FrameAnalysis[]
      ▼
summarizeVideo() [server fn]     ← all analyses → Gemini text
      │   VideoSummary (timeline, errors, recommendations)
      ▼
chatWithVideo() [server fn]      ← user question + frame context → Gemini
      │   { answer, timestamps[] }
      ▼
UI updates (seekable video + chat)
```

---

## 📐 Core Modules

### `video.ts` — Frame Extraction
- Creates an in-memory `<video>` element, seeks frame-by-frame using `seeked` events
- Draws each frame onto a `<canvas>` (scaled to max 640 px wide, 72% JPEG quality)
- Returns `ExtractedFrame[]` with `{ index, timestamp, dataUrl }`

### `analyze.functions.ts` — AI Server Functions
- **`analyzeFrames`** — sends up to 12 frames per call with a structured vision prompt; parses JSON response into typed `FrameAnalysis` objects
- **`summarizeVideo`** — sends a compact frame manifest (≤400 entries) and returns a full `VideoSummary`
- **`chatWithVideo`** — multi-turn RAG chat; injects frame context as the first user message and streams a `{ answer, timestamps }` JSON response

### `index.tsx` — Application Shell
- State machine with four stages: `idle → extracting → analyzing → ready`
- `ProgressView` component shows live extraction / analysis progress bars with a preview of the latest analyzed frame
- `ChatPanel` is a sticky sidebar with pre-set example questions, message history, and timestamp chips
- Frame grid supports real-time search filtering with `useMemo`

---

## 🔒 Constraints & Limits

| Constraint | Value |
|---|---|
| Max video duration | 60 minutes |
| Max file size | 2 GB |
| Max frames extracted | 7,200 (at 0.5 s interval) |
| Frames per AI batch | 6 |
| Max frames sent to summarizer | 400 |
| Chat history window | Last 10 messages |

---

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Add your API key to .env
echo "LOVABLE_API_KEY=your_key_here" > .env

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000), drop in a screen recording, and let the AI do the rest.

---

## 📁 Project Status

**Version:** 1.0 — production-ready MVP  
**AI Model:** Google Gemini 2.5 Flash Vision  
**Built with:** TanStack Start · React 19 · Tailwind CSS v4  
