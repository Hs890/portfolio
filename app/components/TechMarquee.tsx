const STACK = [
  "Python", "Django", "FastAPI", "React", "Next.js", "TypeScript",
  "PostgreSQL", "Supabase", "Bun", "Elysia.js", "Drizzle ORM", "LangChain",
];

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="animate-marquee flex items-center gap-16 px-8 font-display text-2xl md:text-3xl text-on-surface-variant/40 shrink-0"
    >
      {STACK.map((item, i) => (
        <span key={i} className="flex items-center gap-16">
          <span className={item === "LangChain" ? "text-tertiary/60" : ""}>{item}</span>
          <span>&bull;</span>
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="py-10 border-y border-white/5 overflow-hidden -mx-margin-mobile md:-mx-gutter relative bg-background/50">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex whitespace-nowrap">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
