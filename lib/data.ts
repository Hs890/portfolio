export const contact = {
  fiverr: { label: "Hire Me on Fiverr", href: "https://www.fiverr.com/saad_dev2/", note: "Best response time & secure payments" },
  email: "hafizsaad010@gmail.com",
  whatsapp: "+92 309 8663850",
  whatsappHref: "https://wa.me/923098663850",
  github: { label: "github.com/hafizsaad5678", href: "https://github.com/hafizsaad5678" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/hafiz-saad-8a3853395" },
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  github?: string;
  live?: string;
  privateRepo?: boolean;
};

export const featuredProjects: Project[] = [
  {
    slug: "learnms",
    name: "LearnMS",
    tagline: "AI-powered Learning Management System",
    stack: ["Django", "Vue.js", "AI Chatbot", "Quiz Generator", "REST APIs"],
    github: "#",
  },
  {
    slug: "factory-erp",
    name: "Factory ERP",
    tagline: "Business management system for manufacturing workflows",
    stack: ["React", "Bun", "Elysia.js", "PostgreSQL", "Drizzle ORM"],
    privateRepo: true,
  },
  {
    slug: "gym-management",
    name: "Gym Management",
    tagline: "Offline-first mobile management application",
    stack: ["React Native", "Expo", "SQLite", "Drizzle ORM"],
    github: "#",
  },
  {
    slug: "local-rag",
    name: "Local RAG",
    tagline: "Private AI knowledge retrieval system",
    stack: ["Django", "Sentence Transformers", "FAISS", "Qdrant"],
  },
  {
    slug: "gyzer",
    name: "Gyzer",
    tagline: "Modern e-commerce application",
    stack: ["TanStack Start", "React", "Supabase", "Drizzle ORM"],
  },
  {
    slug: "m365-mail-backup",
    name: "Microsoft 365 Mail Backup",
    tagline: "TypeScript + Microsoft Graph application",
    stack: ["TypeScript", "Microsoft Graph API", "MSAL", "AES-256-GCM"],
    github: "#",
  },
];

export const moreProjects: Project[] = [
  {
    slug: "unity-ggw-academy",
    name: "Unity GGW Academy Integration",
    tagline: "Unity integration with animation bridge and backend data parsing",
    stack: ["Unity", "Animation Bridge", "JSON Retargeting", "API Integration"],
  },
  {
    slug: "daily-ayah",
    name: "Daily Ayah Experience",
    tagline: "Offline-first Quran companion app",
    stack: ["React Native", "Expo Router", "Offline-first", "Widget Support"],
  },
  {
    slug: "pos-system",
    name: "POS / Business Management",
    tagline: "Business management system for retail operations",
    stack: ["React", "Bun", "Elysia.js", "PostgreSQL", "Drizzle ORM"],
    privateRepo: true,
  },
  {
    slug: "ai-core",
    name: "AI Core / LLM Provider Architecture",
    tagline: "Provider-agnostic LLM architecture across OpenAI, Gemini, Ollama",
    stack: ["Django", "OpenAI", "Gemini", "Ollama", "Pollinations"],
  },
];

export const techStack = [
  "Python", "Django", "FastAPI", "React", "Next.js", "TypeScript",
  "PostgreSQL", "Supabase", "Bun", "Elysia", "Drizzle", "AI",
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
