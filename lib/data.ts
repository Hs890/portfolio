export const contact = {
  fiverr: { label: "Hire Me on Fiverr", href: "https://www.fiverr.com/saad_dev2/", note: "Best response time & secure payments" },
  email: "hafizsaad010@gmail.com",
  whatsapp: "+92 309 8663850",
  whatsappHref: "https://wa.me/923098663850",
  github: { label: "github.com/hafizsaad5678", href: "https://github.com/hafizsaad5678" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/hafiz-saad-8a3853395" },
};

export type ProjectScreenshot = {
  url: string;
  caption: string;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  category: "AI & RAG" | "Full-Stack Web" | "Mobile Apps" | "Enterprise Systems";
  tagline: string;
  overview: string;
  heroImage: string;
  screenshots: ProjectScreenshot[];
  stack: string[];
  metrics?: { label: string; value: string }[];
  highlights: string[];
  architectureSummary?: string;
  github?: string;
  live?: string;
  privateRepo?: boolean;
};

export const allProjects: Project[] = [
  {
    id: "local-rag",
    slug: "local-rag",
    name: "Local RAG & AI Chatbot Architecture",
    category: "AI & RAG",
    tagline: "Private On-Premise FAISS Vector Retrieval & Document Chatbot with Integrity Verification",
    overview: "An on-premise, zero-cloud-lock-in AI Chatbot and RAG architecture designed to deliver private, fast, and hallucination-free document querying. Combines local HuggingFace embeddings (all-MiniLM-L6-v2), disk-persisted FAISS vector indices with SHA-256 integrity verification, a hybrid Intent Router that routes deterministic questions directly to DB and document inquiries to vector search, and automated JSON Schema assessment repair.",
    heroImage: "/Projects/local reg/document given.png",
    screenshots: [
      { url: "/Projects/local reg/document given.png", caption: "Course Document Ingestion & Chunking Inspector" },
      { url: "/Projects/local reg/chatbot.png", caption: "Context-Aware Local RAG Chatbot Interface with Document Grounding" },
      { url: "/Projects/local reg/using reg answer given in document not using global ai.png", caption: "Strict Grounding: Answers Sourced Exclusively from Uploaded Document" },
      { url: "/Projects/local reg/quiz maked by ai.png", caption: "Automated Assessment Engine: JSON Schema-Enforced Quiz Synthesis" },
      { url: "/Projects/local reg/quiz attempting.png", caption: "Student Quiz Attempt View with Real-Time Validation" },
      { url: "/Projects/local reg/quiz title given.png", caption: "Topic & Document-to-Assessment Configuration Studio" },
    ],
    stack: ["Python 3.11", "Django 5 DRF", "FAISS", "Sentence Transformers", "all-MiniLM-L6-v2", "Ollama / Local LLM", "LangChain"],
    metrics: [
      { label: "Cloud Dependency", value: "0% External APIs" },
      { label: "Vector Store", value: "FAISS Local Index" },
      { label: "Query Routing", value: "Hybrid Intent Engine" },
    ],
    highlights: [
      "Zero API fee overhead using local CPU/CUDA embeddings (all-MiniLM-L6-v2) for all document chunks",
      "SHA-256 index integrity manifests ensuring FAISS index files cannot be corrupted or tampered with",
      "Hybrid intent classification routing symbolic queries directly to Django ORM and RAG queries to FAISS",
      "Strict JSON Schema validation with automatic markdown-fence repair for AI-generated assessments",
    ],
    architectureSummary: "Document Ingestion (PDF/DOCX) -> RecursiveCharacterTextSplitter -> Local SentenceTransformers -> FAISS Index with SHA-256 Checksum -> Multi-Tier Intent Router -> Contextual Synthesis.",
    github: "https://github.com/hafizsaad5678",
  },
  {
    id: "restaurant-pos",
    slug: "restaurant-pos",
    name: "Enterprise Restaurant POS & Management",
    category: "Enterprise Systems",
    tagline: "High-Speed Point of Sale & Kitchen Display Ecosystem for Web & Native Desktop",
    overview: "A full-stack Point of Sale and Restaurant Management solution built for high-traffic food businesses. Built with React 19, Bun, Elysia.js, Effect-TS, and Tauri 2.0 to compile down to a lightweight 15MB native desktop binary. Features touch-friendly rapid order processing, live kitchen order lifecycle tracking, table management, custom item modifiers, OpenTelemetry distributed diagnostics, and automated database snapshot sidecars.",
    heroImage: "/Projects/pos/dashboardadmin.png",
    screenshots: [
      { url: "/Projects/pos/dashboardadmin.png", caption: "Executive Admin Dashboard with Revenue & Peak-Hour Heatmaps" },
      { url: "/Projects/pos/staffside.png", caption: "Staff POS Terminal View: Rapid Order Processing & Quick-Pay" },
      { url: "/Projects/pos/products.png", caption: "Menu & Inventory Manager with Add-on Variation Matrices" },
      { url: "/Projects/pos/report.png", caption: "Financial Summaries & Daily Sales Audit Breakdown" },
    ],
    stack: ["React 19", "Tauri 2.0", "Bun", "Elysia.js", "Effect-TS", "Drizzle ORM", "PostgreSQL", "Tailwind CSS v4", "Zustand", "OpenTelemetry"],
    metrics: [
      { label: "Binary Size", value: "~15MB Tauri App" },
      { label: "Checkout Speed", value: "Sub-Second Response" },
      { label: "Type Safety", value: "Eden Treaty RPC" },
    ],
    highlights: [
      "Single codebase compiling to a lightweight 15MB Tauri desktop binary and a responsive web dashboard",
      "End-to-end type safety between client and server using Elysia Eden Treaty RPC",
      "Resilient error handling and monadic transactions via Effect-TS functional channels",
      "Automated background PostgreSQL snapshot sidecars for bulletproof on-premise disaster recovery",
    ],
    architectureSummary: "Tauri 2.0 Desktop / Web -> React 19 + TanStack -> Eden Treaty RPC -> Elysia.js on Bun -> Effect-TS Service Workflows -> Drizzle ORM + PostgreSQL.",
    privateRepo: true,
  },
  {
    id: "video-rag",
    slug: "video-rag",
    name: "AI Video Explainer & Local RAG",
    category: "AI & RAG",
    tagline: "Local Temporal RAG & AI Video Intelligence with Frame-Level Semantic Search",
    overview: "A specialized full-stack video intelligence platform that processes raw screen recordings locally using FFmpeg / Canvas frame sampling, Sentence Transformers embeddings, and FAISS vector indexing. Users can search video moments in real-time or converse with the video using local RAG, receiving precise clickable timestamp chips that seek the video directly to the answer moment.",
    heroImage: "/Projects/video reg/clear-result-rag-qa.png",
    screenshots: [
      { url: "/Projects/video reg/clear-result-rag-qa.png", caption: "High-Precision RAG Q&A with 100% Accurate Timestamp Grounding" },
      { url: "/Projects/video reg/homepage.png", caption: "AI Video Explainer Dashboard & Upload Interface" },
      { url: "/Projects/video reg/timeline.png", caption: "Automated Visual Timeline & Scene Segment Breakdown" },
      { url: "/Projects/video reg/summary.png", caption: "Executive Summary & Actionable Recommendations Report" },
      { url: "/Projects/video reg/steps.png", caption: "Step-by-Step Workflow & On-Screen UI Action Extractor" },
      { url: "/Projects/video reg/frame.png", caption: "Frame-by-Frame OCR and Visual Element Inspector" },
      { url: "/Projects/video reg/upload video.png", caption: "Zero-Latency Client-Side Frame Sampling Pipeline" },
      { url: "/Projects/video reg/what it does.png", caption: "System Feature Breakdown & Diagnostic Analysis" },
      { url: "/Projects/video reg/scanning etc.png", caption: "Batch Frame Processing & OCR Ingestion Engine" },
    ],
    stack: ["Local RAG", "FAISS", "Sentence Transformers", "FFmpeg / Canvas", "React 19", "TanStack Start", "TypeScript", "Tailwind CSS v4"],
    metrics: [
      { label: "Frame Sampling", value: "Up to 7,200 Frames" },
      { label: "Vector Search", value: "<15ms via FAISS" },
      { label: "Grounding", value: "100% Exact Timestamps" },
    ],
    highlights: [
      "Local vector embeddings & FAISS index for instant semantic retrieval across video frames",
      "Client-side frame extraction via Canvas / FFmpeg without heavy server bandwidth",
      "Conversational RAG assistant returning interactive timestamp chips that seek the player",
      "Automated OCR text extraction, UI element recognition, and error detection log",
    ],
    architectureSummary: "Client-side frame extraction (HTML5 Canvas / FFmpeg) -> Batch semantic embedding via Sentence Transformers -> FAISS vector persistence -> Multi-turn RAG Intent Router with temporal seekable citations.",
    github: "https://github.com/hafizsaad5678",
  },
  {
    id: "arif-poultry-erp",
    slug: "arif-poultry-erp",
    name: "Arif Poultry ERP & Farm Ecosystem",
    category: "Enterprise Systems",
    tagline: "Monorepo Industrial Farm Management & Multi-Party Accounting Platform",
    overview: "A cross-platform enterprise ERP managing industrial poultry operations. Coordinates shed batch lifecycles, feed recipe formulation, raw material inventories, automated weighbridge sales calculations, driver logistics, and double-entry financial accounting across Web and Mobile.",
    heroImage: "/Projects/polutry/accountant dashboard.png",
    screenshots: [
      { url: "/Projects/polutry/accountant dashboard.png", caption: "Executive Financial Dashboard & Real-Time Cash Flow Metrics" },
      { url: "/Projects/polutry/sale-and-purchase.png", caption: "Live Bird Sales, Weighbridge Deductions & Purchase Ledgers" },
      { url: "/Projects/polutry/transaction.png", caption: "Double-Entry Transaction History & Multi-Party Ledgers" },
      { url: "/Projects/polutry/sheds-and-forms.png", caption: "Flock Lifecycle Monitoring & Batch Mortality Logs" },
      { url: "/Projects/polutry/add transaction form.png", caption: "Fast Accounting Voucher & Expense Entry Interface" },
    ],
    stack: ["Bun", "Elysia.js", "Effect-TS", "React 19", "TanStack Router", "React Native Expo", "PostgreSQL", "Drizzle ORM", "OpenTelemetry"],
    metrics: [
      { label: "Runtime", value: "Bun + Elysia.js" },
      { label: "Architecture", value: "Effect-TS Concurrency" },
      { label: "Platforms", value: "Web + Mobile App" },
    ],
    highlights: [
      "Effect-TS functional programming engine ensuring type-safe error channels and resilient DB transactions",
      "Nutritional feed recipe engine calculating dynamic raw material proportions and real-time bag costing",
      "Precision weighbridge computation with gross, tare, net weight, and live market pricing rules",
      "Double-entry multi-party ledgers for hatcheries, feed suppliers, medicine vendors, and distributors",
    ],
    architectureSummary: "Bun Monorepo -> ElysiaJS + Effect-TS Backend Core -> Drizzle ORM + PostgreSQL -> Eden RPC -> React 19 TanStack Web & Expo 54 Mobile App.",
    privateRepo: true,
  },
  {
    id: "gyzer",
    slug: "gyzer",
    name: "Gyzer E-Commerce Platform",
    category: "Full-Stack Web",
    tagline: "Industrial HVAC & Appliance E-Commerce Web App with Enterprise Admin OS",
    overview: "A production-grade, high-performance E-Commerce platform built for HVAC and water heating appliances. Features sub-second SSR page loads, end-to-end type-safe routing, side-by-side technical product comparison matrix, live two-parameter order tracking (Order ID + Phone), client-side downloadable PDF tax invoices, and a comprehensive real-time Admin OS.",
    heroImage: "/Projects/gyzer e commecer site/Home page.png",
    screenshots: [
      { url: "/Projects/gyzer e commecer site/Home page.png", caption: "High-Converting Industrial Luxury Home & Hero Showcase" },
      { url: "/Projects/gyzer e commecer site/products.png", caption: "Faceted Product Catalog with Multi-Filter Attribute Engine" },
      { url: "/Projects/gyzer e commecer site/specific product or detalis.png", caption: "Conversion-Focused Product Detail Page with Technical Specs" },
      { url: "/Projects/gyzer e commecer site/admin site.png", caption: "Executive Admin Dashboard with Real-Time Recharts Analytics" },
      { url: "/Projects/gyzer e commecer site/admin site products.png", caption: "Admin Inventory Management & Stock Alert Triggers" },
      { url: "/Projects/gyzer e commecer site/admin site orders.png", caption: "Live Order Lifecycle Management & Audit Timestamps" },
      { url: "/Projects/gyzer e commecer site/admin site notification messges.png", caption: "Customer Inbox & Inquiries Center" },
      { url: "/Projects/gyzer e commecer site/admin site reviws.png", caption: "Customer Review Moderation & Rating Analytics" },
    ],
    stack: ["TanStack Start (SSR)", "React 19", "TanStack Router", "TanStack Query v5", "TypeScript", "Supabase", "Tailwind CSS v4", "Radix UI", "Recharts", "jsPDF"],
    metrics: [
      { label: "Performance", value: "Sub-Second SSR" },
      { label: "Type Safety", value: "100% End-to-End" },
      { label: "Invoicing", value: "Client-Side PDF" },
    ],
    highlights: [
      "Sub-second page transitions powered by TanStack Start SSR & TanStack Query caching",
      "Interactive multi-product technical comparison matrix (/compare) helping customers choose HVAC units",
      "Slide-over cart drawer with free shipping calculator, persistent wishlist, and frictionless checkout",
      "Enterprise Admin OS with real-time sales curves, abandoned cart recovery, and inventory triggers",
    ],
    architectureSummary: "React 19 + TanStack Start (SSR/Nitro) -> TanStack Router contracts -> Supabase PostgreSQL with RLS -> Recharts analytics engine -> jsPDF invoice synthesis.",
    github: "https://github.com/hafizsaad5678",
  },
  {
    id: "star-gym",
    slug: "star-gym",
    name: "Star Gym — Offline-First Fitness App",
    category: "Mobile Apps",
    tagline: "Production-Grade Local-First Mobile Gym Management System",
    overview: "A high-performance, 100% offline-first mobile application tailored for gym owners and fitness club managers. Operates with zero latency using embedded SQLite and Drizzle ORM, featuring an integer minor-units billing engine with credit banking, dynamic membership freezing with automated due-date extensions, printable PDF receipts, and Google Drive cloud backup.",
    heroImage: "/Projects/gym/home.jpeg",
    screenshots: [
      { url: "/Projects/gym/home.jpeg", caption: "Executive Dashboard: Active Members, Due Today & Monthly Revenue KPIs" },
      { url: "/Projects/gym/members.jpeg", caption: "Member Directory with Search, Quick Filters & Status Badges" },
      { url: "/Projects/gym/members form.jpeg", caption: "Member Registration & Custom Plan Enrollment Modal" },
      { url: "/Projects/gym/fee history.jpeg", caption: "Historical Financial Ledger & Snapshot Payment Records" },
    ],
    stack: ["React Native", "Expo SDK 54", "TypeScript", "Drizzle ORM", "Expo SQLite", "NativeWind", "Zustand", "Expo Print", "Google Drive API"],
    metrics: [
      { label: "Latency", value: "0ms Local SQLite" },
      { label: "Reliability", value: "100% Offline-First" },
      { label: "Backup", value: "Google Drive Sync" },
    ],
    highlights: [
      "Robust billing state machine handling full/partial/advance payments and credit banking with minor-unit math",
      "Intelligent membership freeze engine that automatically extends due dates without manual errors",
      "Instant branded PDF receipt generation and direct WhatsApp/SMS sharing via Expo Print & Sharing",
      "Encrypted SQLite and photo bundle backup directly to the owner's Google Drive via OAuth API",
    ],
    architectureSummary: "React Native (Expo SDK 54) -> NativeWind Tailwind UI -> Zustand global stores -> Drizzle ORM -> Embedded Expo SQLite -> JSZip Google Drive Backup Engine.",
    github: "https://github.com/hafizsaad5678",
  },
  {
    id: "learnms",
    slug: "learnms",
    name: "LearnMS — AI-Powered LMS",
    category: "AI & RAG",
    tagline: "Enterprise Learning Management System with Local RAG Tutoring & Dynamic Quiz Studio",
    overview: "An enterprise-grade, full-stack Learning Management System designed for educational institutions. Integrates an on-premise Retrieval-Augmented Generation (RAG) AI Tutor that grounds answers in course notes, an automated multi-format Quiz Generation Engine with per-question regeneration, and dedicated role-based portals for Admins, Teachers, and Students.",
    heroImage: "/Projects/LMS/Student dashboard.png",
    screenshots: [
      { url: "/Projects/LMS/Student dashboard.png", caption: "Student Portal: Interactive Quizzes, Timetable & Grade Analytics" },
      { url: "/Projects/LMS/Teacher dashboard.png", caption: "Teacher Hub: Attendance Ledger, Course Provisioning & Gradebook" },
      { url: "/Projects/LMS/admin dashboard.png", caption: "Admin Center: Multi-Department Provisioning & Institutional RBAC" },
      { url: "/Projects/LMS/Quiz.png", caption: "Timed Quiz Attempting Interface with Automated Score Breakdown" },
      { url: "/Projects/LMS/Quiz gen.png", caption: "Dynamic AI Quiz Studio with Granular Question Regeneration" },
    ],
    stack: ["Vue.js 3", "Django REST Framework", "Python 3.11", "FAISS / RAG", "Sentence Transformers", "Pinia", "Bootstrap 5 SCSS", "Chart.js"],
    metrics: [
      { label: "Architecture", value: "Multi-Tier RBAC" },
      { label: "Quiz Generator", value: "1-Click Publishing" },
      { label: "Data Integrity", value: "SHA-256 Vector Manifests" },
    ],
    highlights: [
      "Document-grounded RAG tutoring engine with zero cloud embedding lock-in (Sentence Transformers + FAISS)",
      "Automated AI Quiz Studio supporting MCQs, True/False, Short answers with instant single-question repair",
      "Three distinct role hierarchies (SuperAdmin, Teacher, Student) with frontend route guards and backend scoped querysets",
      "Dynamic client-side PDF attendance sheets and grade report cards via jsPDF",
    ],
    architectureSummary: "Vue 3 SPA client -> Django REST Framework API Gateway -> Local FAISS Vector Index + HuggingFace Embedder -> Intent Classifier -> PostgreSQL / SQLite Persistence Layer.",
    github: "https://github.com/hafizsaad5678",
  },
  {
    id: "quran-daily-ayah",
    slug: "quran-daily-ayah",
    name: "Quran Daily Ayah Companion",
    category: "Mobile Apps",
    tagline: "Modern Islamic Mobile Companion with 16-Line Indo-Pak Mushaf & Android Widget Sync",
    overview: "A beautifully crafted, offline-first Quran companion mobile app engineered with React Native and Expo SDK 54. Features dual reading modes (including an authentic 16-line Indo-Pak Mushaf page reader), emotion-based situational guidance, interactive MCQs with reflections, native Android home screen widget synchronization, and an aesthetic social card generator.",
    heroImage: "/Projects/quran ayah daily/home page.jpeg",
    screenshots: [
      { url: "/Projects/quran ayah daily/home page.jpeg", caption: "Aesthetic Home Screen with Daily Ayah & Quick Habit Streaks" },
      { url: "/Projects/quran ayah daily/home.jpeg", caption: "Situational Emotional Guidance & Quranic Verse Selector" },
      { url: "/Projects/quran ayah daily/streak.jpeg", caption: "Habit Tracking, Reading Session Timer & Analytics" },
      { url: "/Projects/quran ayah daily/widget.jpeg", caption: "Native Android Home Screen Widget Integration" },
      { url: "/Projects/quran ayah daily/widget form.jpeg", caption: "Widget Customization, Translation & Theme Preferences" },
    ],
    stack: ["React Native", "Expo SDK 54", "NativeWind", "Supabase", "AsyncStorage", "Zustand", "Reanimated 4", "Android Widgets"],
    metrics: [
      { label: "Mushaf Format", value: "16-Line Indo-Pak" },
      { label: "Storage", value: "100% Offline-First" },
      { label: "Widgets", value: "Native Android Sync" },
    ],
    highlights: [
      "Specialized 16-line Indo-Pak Mushaf page renderer with Amiri/Scheherazade Arabic typography",
      "Emotion-based Quranic guidance paired with interactive MCQs and contextual reflections",
      "Native Android home screen widget service syncing daily verses directly to user home screens",
      "Aesthetic social share card generator creating custom gradients and layouts for WhatsApp and Instagram",
    ],
    architectureSummary: "React Native (Expo SDK 54) -> NativeWind Tailwind -> AsyncStorage local truth -> Native Android Widget Provider Bridge -> Supabase cloud backup with RLS.",
    github: "https://github.com/hafizsaad5678",
  },
  {
    id: "smart-attendance",
    slug: "smart-attendance",
    name: "Smart Attendance (Smart A)",
    category: "Mobile Apps",
    tagline: "Mobile Academic Hierarchy & Real-Time Attendance Management System",
    overview: "A cross-platform mobile application solving manual attendance friction for schools and universities. Faithfully represents academic institutional hierarchies (Departments -> Teachers -> Subjects -> Students), providing 1-tap three-state attendance marking and automated synthesis of official, certified PDF & CSV reports.",
    heroImage: "/Projects/smart attendance/home.jpeg",
    screenshots: [
      { url: "/Projects/smart attendance/home.jpeg", caption: "Quick Action Dashboard: Departments & Faculty Hub" },
      { url: "/Projects/smart attendance/teachers.jpeg", caption: "Faculty Directory & Course/Subject Allocation" },
      { url: "/Projects/smart attendance/students.jpeg", caption: "1-Tap Attendance Marking & Real-Time Roster Ledger" },
    ],
    stack: ["React Native", "Expo SDK 54", "TypeScript", "AsyncStorage", "Expo Print", "Expo Sharing", "Reanimated", "Gesture Handler"],
    metrics: [
      { label: "Marking Speed", value: "1-Tap 3-State Cycle" },
      { label: "Reports", value: "Instant PDF / CSV" },
      { label: "Architecture", value: "Modular Hooks" },
    ],
    highlights: [
      "1-tap three-state attendance cycle (Present / Leave / Absent) with live percentage counters",
      "Full academic hierarchy nesting teachers, courses, and student rosters under institutional departments",
      "Automated official HTML-to-PDF report generator with college crests, date stamps, and principal signatures",
      "Decoupled custom business logic architecture (useAttendanceLogic) with offline AsyncStorage caching",
    ],
    architectureSummary: "React Native 0.81 (Expo SDK 54) -> Custom Hook Architecture (useAttendanceLogic) -> AsyncStorage Engine -> Expo Print PDF Vector Synthesis -> Native Share Sheet.",
    github: "https://github.com/hafizsaad5678",
  },
];

export const featuredProjects: Project[] = allProjects.slice(0, 5);
export const moreProjects: Project[] = allProjects.slice(5);

export const techStack = [
  "Local RAG", "FAISS", "Sentence Transformers", "Python", "Django",
  "React 19", "Next.js", "Vue.js", "React Native", "Expo SDK 54", "TypeScript",
  "Bun", "Elysia.js", "Effect-TS", "TanStack Start", "Drizzle ORM",
  "PostgreSQL", "Supabase", "SQLite", "Tauri 2.0"
];

export const skillGroups = [
  {
    group: "AI & Local RAG",
    items: [
      "Local RAG Architecture",
      "FAISS Vector Store",
      "Sentence Transformers (all-MiniLM-L6-v2)",
      "Temporal / Video RAG",
      "Document Chunking & Token Scoping",
      "JSON Schema Enforcement",
      "Ollama / Local LLMs",
      "LangChain",
    ],
  },
  {
    group: "Frontend & Web",
    items: [
      "React 19",
      "Next.js (App Router)",
      "TanStack Start (SSR)",
      "TanStack Router",
      "Vue.js 3 / Pinia",
      "TypeScript",
      "Tailwind CSS v4",
      "Radix UI / shadcn/ui",
      "TanStack Query v5",
      "Vite 7",
    ],
  },
  {
    group: "Mobile & Desktop",
    items: [
      "React Native",
      "Expo SDK 54",
      "NativeWind (Tailwind)",
      "Tauri 2.0 (Rust)",
      "AsyncStorage",
      "Expo SQLite",
      "Expo Print & Sharing",
      "Native Android Widgets",
      "Reanimated 4",
    ],
  },
  {
    group: "Backend & Systems",
    items: [
      "Python 3.11",
      "Django REST Framework",
      "Bun Runtime",
      "Elysia.js",
      "Effect-TS (Functional Concurrency)",
      "Eden Treaty (End-to-End RPC)",
      "FastAPI",
      "REST APIs & RBAC",
    ],
  },
  {
    group: "Database & Cloud",
    items: [
      "PostgreSQL",
      "Drizzle ORM",
      "Supabase (Auth & RLS)",
      "SQLite / Expo SQLite",
      "OpenTelemetry Tracing",
      "Google Drive API Backup",
    ],
  },
];
