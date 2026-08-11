export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  role: string;
  stack: string[];
  features: string[];
  live?: string;
  github?: string;
  privateRepo?: boolean;
  size: "large" | "medium";
};

export const projects: Project[] = [
  {
    slug: "learnms",
    name: "LearnMS",
    tagline: "AI-Based Learning Management System",
    problem:
      "Traditional LMS platforms are static — no personalization, no AI assistance, no adaptive assessment. LearnMS (my Final Year Project) rebuilds the LMS around an AI-first learning experience.",
    role: "Full-stack developer — designed the Django backend, REST APIs, and integrated AI features end-to-end.",
    stack: ["Django", "Django REST Framework", "Vue.js", "OpenAI", "REST APIs"],
    features: [
      "AI chatbot for student support",
      "AI-powered quiz generator",
      "Conversational registration chatbot",
      "Course & content management",
      "AI-assisted learning experience",
    ],
    github: "#",
    size: "large",
  },
  {
    slug: "factory-erp",
    name: "Factory ERP System",
    tagline: "Business management system for manufacturing operations",
    problem:
      "A real factory needed one system to replace scattered spreadsheets across accounts, production, purchasing and dispatch — with roles and permissions that match how the business actually works.",
    role: "Sole developer — designed the schema, built the API and the full frontend, and mapped real business workflows into software.",
    stack: ["React", "Bun", "Elysia.js", "PostgreSQL", "Drizzle ORM"],
    features: [
      "Accounts & ledger module",
      "Production tracking",
      "Purchase management",
      "Dispatch & delivery",
      "Users, roles & permissions",
    ],
    privateRepo: true,
    size: "large",
  },
  {
    slug: "gym-management",
    name: "Gym Management System",
    tagline: "Offline-first mobile app for gym operations",
    problem:
      "Gyms need to manage members and collect fees even with unreliable internet — this app runs fully offline and syncs when possible, generating receipts and reports on the fly.",
    role: "Mobile developer — built the React Native app, local database layer and PDF reporting pipeline.",
    stack: ["React Native", "Expo", "SQLite", "Drizzle ORM"],
    features: [
      "Member dashboard",
      "Fee collection & receipts",
      "PDF generation",
      "Offline-first architecture",
      "Reports & analytics",
    ],
    github: "#",
    size: "medium",
  },
  {
    slug: "local-rag",
    name: "Local RAG System",
    tagline: "Provider-agnostic retrieval-augmented generation engine",
    problem:
      "Most AI features are just API calls to one vendor. This system implements RAG from the ground up — local embeddings, per-user vector indexes, and a provider abstraction so the LLM backend can be swapped freely.",
    role: "AI/backend developer — designed the embedding pipeline, vector search layer and LLM provider abstraction inside Django.",
    stack: ["Django", "Sentence Transformers", "FAISS", "Qdrant", "Ollama", "LangChain"],
    features: [
      "Local embedding generation",
      "User-specific vector indexes",
      "FAISS-based similarity search",
      "Swappable LLM provider layer",
      "Context-aware retrieval pipeline",
    ],
    size: "medium",
  },
  {
    slug: "gyzer",
    name: "Gyzer",
    tagline: "Modern e-commerce application",
    problem:
      "A fast, type-safe e-commerce stack built on TanStack Start — including a migration off Supabase-only data access toward a PostgreSQL + Drizzle ORM architecture for more control and performance.",
    role: "Full-stack developer — built the app and led the data-layer migration.",
    stack: ["TanStack Start", "React", "Vite", "TanStack Router", "TanStack Query", "Supabase", "PostgreSQL", "Drizzle ORM"],
    features: [
      "TanStack Router + Query architecture",
      "Supabase → PostgreSQL/Drizzle migration",
      "Type-safe end-to-end data layer",
      "Modern e-commerce UX",
    ],
    size: "medium",
  },
  {
    slug: "m365-mail-backup",
    name: "Microsoft 365 Mail Backup",
    tagline: "Secure email backup & sync via Microsoft Graph",
    problem:
      "Organizations need a reliable, secure way to back up and sync mailboxes outside of Microsoft's own retention tools — with strong authentication and encryption at rest.",
    role: "Backend/systems developer — implemented the auth flow, sync engine and encryption layer.",
    stack: ["TypeScript", "Microsoft Graph API", "MSAL", "OAuth 2.0", "AES-256-GCM"],
    features: [
      "OAuth 2.0 device code flow",
      "Token caching",
      "AES-256-GCM encrypted storage",
      "Mailbox backup & synchronization",
    ],
    github: "#",
    size: "medium",
  },
];

export const stats = [
  { label: "Full-Stack Development", value: "6+", suffix: "products shipped" },
  { label: "AI Systems", value: "3", suffix: "RAG/LLM systems built" },
  { label: "SaaS & APIs", value: "10+", suffix: "REST APIs designed" },
  { label: "Business Applications", value: "2", suffix: "ERP/management systems" },
];

export const skillGroups = [
  {
    group: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "React Native", "Expo", "Tailwind CSS", "shadcn/ui", "TanStack Query", "TanStack Router", "Vite"],
  },
  {
    group: "Backend",
    items: ["Django", "Django REST Framework", "FastAPI", "Elysia.js", "Bun", "REST APIs"],
  },
  {
    group: "Database",
    items: ["PostgreSQL", "Supabase", "SQLite", "Drizzle ORM"],
  },
  {
    group: "AI",
    items: ["OpenAI", "Gemini", "Ollama", "LangChain", "Sentence Transformers", "FAISS", "Qdrant", "RAG"],
  },
  {
    group: "Tools",
    items: ["Python", "TypeScript", "C#", "C++", "SQL", "Git"],
  },
];

export const journey = [
  {
    year: "Foundation",
    title: "Computer Science Degree",
    description: "Built a foundation across algorithms, systems and software engineering while shipping side projects.",
  },
  {
    year: "FYP",
    title: "LearnMS — AI Learning Management System",
    description: "Final Year Project combining Django, Vue.js and AI — an LMS with chatbots, quiz generation and adaptive learning.",
  },
  {
    year: "Business Systems",
    title: "Factory ERP & Gym Management",
    description: "Moved from academic projects to real business software — ERP for manufacturing, offline-first mobile apps for gyms.",
  },
  {
    year: "AI Depth",
    title: "Local RAG & Provider-Agnostic AI",
    description: "Went beyond calling AI APIs — built local embedding pipelines, vector search and swappable LLM provider architecture.",
  },
  {
    year: "Now",
    title: "Full-Stack + AI Product Engineering",
    description: "Building complete products end-to-end — web apps, APIs, AI features and business systems — from idea to deployment.",
  },
];
