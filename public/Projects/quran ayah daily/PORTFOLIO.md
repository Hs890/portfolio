# 📖 Quran Daily Ayah — Modern Islamic Mobile Application

> **A beautifully crafted, offline-first Quran companion mobile app built with React Native (Expo SDK 54), NativeWind (Tailwind CSS), Supabase, and Zustand.**

---

[![React Native](https://img.shields.io/badge/React_Native-0.81-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo SDK 54](https://img.shields.io/badge/Expo_SDK-54-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Tailwind / NativeWind](https://img.shields.io/badge/NativeWind-v4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://www.nativewind.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-Cloud_Sync-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Zustand](https://img.shields.io/badge/State-Zustand-433e38?style=for-the-badge)](https://github.com/pmndrs/zustand)
[![Offline First](https://img.shields.io/badge/Architecture-Offline_First-success?style=for-the-badge)](#)

---

## 📌 Executive Summary / Project Overview

**Quran Daily Ayah** is a feature-rich, high-performance mobile application designed to integrate Quranic wisdom into daily life. Engineered with an **offline-first philosophy**, it delivers an authentic reading experience (including a 16-line Indo-Pak Mushaf page reader and modern Surah reader), situational Quranic guidance based on real-life emotions, interactive MCQs, home screen widget synchronization, and customizable reminder notifications.

Whether users are completely offline or syncing across devices via Supabase, the app guarantees a seamless, instant-loading, and zero-latency user experience.

---

## ✨ Key Features & Highlights

### 1. 📖 Dual Reading Experiences
- **16-Line Indo-Pak Mushaf Page Reader**: Traditional, authentic page-by-page layout with high-fidelity typography, page slider, and quick navigation.
- **Surah & Ayah Modern Reader**: Streamlined verse-by-verse view with Arabic calligraphy (Amiri / Scheherazade New fonts), transliteration, multi-language translations, audio recitation integration, and font scaling.

### 2. 💡 Situational Quranic Guidance & Interactive MCQs
- **Emotion & Life Situation Selector**: Categorized guidance for real-world emotional states (Anxiety, Gratitude, Sadness, Seeking Patience, Forgiveness, Guidance).
- **Interactive MCQs & Reflections**: Contextual questions and reflections for each situation to deepen understanding of the Quranic verses, complete with score tracking and explanations.

### 3. 📱 Native Android Home Screen Widget Sync
- Custom widget provider service syncing daily ayahs, translations, and streak data straight to the Android home screen widgets for passive daily learning.

### 4. ⚡ Offline-First Architecture with Background Cloud Sync
- Built with **AsyncStorage** as the single source of truth for instant offline responsiveness.
- Background asynchronous bi-directional sync to **Supabase** with Row-Level Security (RLS) for device-based or authenticated cloud backups.

### 5. 🎨 Social Card Generator (`ViewShot` + Sharing)
- Converts any Ayah, translation, and reflection into customizable, aesthetic social share cards with custom backgrounds and gradients for Instagram, WhatsApp, and status sharing.

### 6. 📊 Habit Tracking, Reading Sessions & Gamified Stats
- **Reading Session Timer**: Focused session counter to log time spent in Quran recitation.
- **Streaks & Analytics**: Daily streaks, verses read counter, favorite verses tracker, and categorized personal notes.

### 7. 🔔 Intelligent Notification Scheduler
- Custom daily reminder windows (Morning, Afternoon, Evening, or exact Custom Times) powered by `expo-notifications`.

---

## 🛠️ Tech Stack & Technical Architecture

### 🚀 Frontend & Mobile Engine
| Category | Technology | Purpose |
|---|---|---|
| **Framework** | React Native 0.81 (Expo SDK 54) | Cross-platform native mobile performance |
| **Routing** | Expo Router v6 (File-based navigation) | Deep linking, typed routes, stack transitions |
| **Styling & Design System** | NativeWind v4 + Tailwind CSS | Fluid responsive design, dark mode, custom palettes |
| **Typography** | `@expo-google-fonts/amiri`, `scheherazade-new` | Authentic, scalable Arabic typography |
| **State Management** | Zustand & React Context | Lightweight global stores for user state & reading status |
| **Animations & Gestures** | React Native Reanimated 4 & Gesture Handler | 60/120fps smooth animations and micro-interactions |
| **Graphics & Export** | `react-native-svg`, `react-native-view-shot` | Dynamic vector rendering & image export |

### ☁️ Backend & Data Layer
| Category | Technology | Purpose |
|---|---|---|
| **Database & Cloud** | Supabase (PostgreSQL) | Cloud backup, MCQ repository, user sync |
| **Local Cache** | AsyncStorage | Offline-first zero-latency storage |
| **Security** | Row Level Security (RLS) | Device-bound and anonymous secure access control |
| **Notifications** | `expo-notifications` | Local background scheduled triggers |

---

## 🏗️ Architecture & Clean Code Design

```
quran-daily-ayah/
├── src/
│   ├── app/                 # Expo Router file-based route definitions
│   ├── screens/             # Dedicated feature screen components
│   │   ├── HomeScreen.jsx                   # Daily ayah, quick actions, streaks
│   │   ├── QuranPageReaderScreen.jsx        # 16-Line Mushaf page reader
│   │   ├── SurahReaderScreen.jsx            # Verse-by-verse modern reader
│   │   ├── SituationSelectorScreen.jsx      # Emotional state categories
│   │   ├── SituationDetailScreen.jsx        # Verse guidance + interactive MCQs
│   │   ├── ReadingSessionScreen.jsx         # Focused reading session timer
│   │   ├── StatsScreen.jsx                  # Streak analytics & reading habits
│   │   ├── CollectionsScreen.jsx            # Favorites, bookmarks & notes
│   │   └── WidgetSettingsScreen.jsx         # Android widget customizer
│   ├── components/          # Design system & reusable UI primitives
│   │   ├── ui/              # Buttons, Cards, Modals, Progress bars
│   │   └── quran/           # AyahDisplay, ShareCard, AudioPlayer
│   ├── services/            # Isolated business logic & third-party interfaces
│   │   ├── storageService.js       # Local AsyncStorage persistence layer
│   │   ├── userService.js          # Core user mutations & state handler
│   │   ├── cloudSyncService.js     # Supabase sync & conflict resolver
│   │   ├── widgetProvider.js       # Native Android widget bridge
│   │   └── notificationService.js  # Scheduled reminder engine
│   ├── constants/           # Curated Quran dataset, Situations, Translations
│   └── store/               # Zustand lightweight state management
└── supabase/
    └── migrations/          # PostgreSQL schema with RLS policies
```

---

## 🗄️ Database Schema & Cloud Model (Supabase)

- `app_devices`: Anonymous device identifier registration.
- `user_favorites`: Bookmarked ayahs and personal favorites.
- `user_notes`: Custom reflections and verse-specific notes.
- `user_streaks`: Daily reading streak counters and records.
- `user_history`: Chronological reading activity logs.
- `user_settings`: User theme, font scale, reminder times, and translation preferences.
- `mcq_questions` & `mcq_options`: Curated questions for situational learning.
- `mcq_attempts`: Quiz performance and learning progression.

---

## 🎯 Engineering Challenges & Solutions

### 1. Authentic 16-Line Mushaf Page Rendering on Mobile
- **Challenge**: Standard web/mobile text rendering struggles with classical Arabic Quranic glyphs, page alignments, and Indo-Pak 16-line Mushaf standards.
- **Solution**: Developed a specialized page-based renderer with dynamic line scaling and custom-tuned Arabic font stacks (`Amiri`, `Scheherazade New`), ensuring pixel-perfect layout across varying screen ratios.

### 2. Truly Resilient Offline-First Sync
- **Challenge**: Mobile users frequently read without an active internet connection. Cloud-dependent apps fail or lag under poor network conditions.
- **Solution**: Built an offline-first state pipeline where all reads/writes occur instantly in `AsyncStorage`. When connectivity is restored, a background `cloudSyncService` opportunistically pushes and reconciles mutations with Supabase.

### 3. Native Android Widget Integration from React Native
- **Challenge**: Passing dynamic daily content to native OS home screen widgets without heavy native boilerplate or blocking the JS thread.
- **Solution**: Engineered a clean service bridge (`widgetProvider.js` + `widgetSync.js`) that serializes current daily verse data into shared preferences for instant home screen widget updates.

---

## 🚀 Getting Started & Local Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm / yarn
- Expo Go or Android Emulator / Physical Device

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd quran-daily-ayah

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Fill in EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY

# Start the Expo development server
npm start

# Run on Android
npx expo run:android
```

---

## 💼 Portfolio & Resume Highlights

### Bullet Points for CV / Resume:
- **Engineered a production-ready Quran companion app** using React Native (Expo SDK 54), TypeScript, NativeWind, and Supabase with 100% offline-first capability.
- **Architected dual Quran readers**: A 16-line Indo-Pak Mushaf page reader and a dynamic verse reader with audio recitation and custom font scaling.
- **Built an emotion-based Quranic guidance module** with interactive MCQs, automated daily widget synchronization, and social card generation.
- **Implemented resilient background data synchronization** using AsyncStorage and Supabase with Row Level Security (RLS) for device-based anonymous sync.
