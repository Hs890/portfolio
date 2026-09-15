const ROW_1 = [
  "Python", "TypeScript", "React", "Next.js", "Vue.js", "React Native",
  "Tailwind CSS", "TanStack Query",
];

const ROW_2 = [
  "Django", "FastAPI", "Bun", "Elysia.js", "PostgreSQL", "Supabase",
  "Drizzle ORM", "REST APIs",
];

const ROW_3 = [
  "OpenAI", "Gemini", "Ollama", "LangChain", "RAG", "FAISS", "Qdrant", "Sentence Transformers",
];

function Chip({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={`shrink-0 px-5 py-2.5 rounded-full font-code text-xs md:text-sm uppercase tracking-wide border transition-colors duration-300 ${
        accent
          ? "border-tertiary/30 bg-tertiary/10 text-on-tertiary-container"
          : "border-border-subtle bg-surface-container/50 text-on-surface-variant"
      }`}
    >
      {label}
    </span>
  );
}

function Row({
  items,
  reverse = false,
  accent = false,
  ariaHidden = false,
}: {
  items: string[];
  reverse?: boolean;
  accent?: boolean;
  ariaHidden?: boolean;
}) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={`flex items-center gap-4 px-2 shrink-0 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {items.map((item, i) => (
        <Chip key={i} label={item} accent={accent} />
      ))}
    </div>
  );
}

function MarqueeLine({ items, reverse = false, accent = false }: { items: string[]; reverse?: boolean; accent?: boolean }) {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex whitespace-nowrap">
        <Row items={items} reverse={reverse} accent={accent} />
        <Row items={items} reverse={reverse} accent={accent} ariaHidden />
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section id="stack" className="py-12 md:py-16 border-y border-border-subtle -mx-margin-mobile md:-mx-gutter relative bg-background/50">
      <div className="flex flex-col gap-4 md:gap-5">
        <MarqueeLine items={ROW_1} />
        <MarqueeLine items={ROW_2} reverse />
        <MarqueeLine items={ROW_3} accent />
      </div>
    </section>
  );
}
