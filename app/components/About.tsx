import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <Reveal>
        <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-on-background tracking-tight leading-snug max-w-2xl">
          AI Engineer & Full-Stack Developer building production systems with AI & RAG, FAISS, React 19, Django and React Native.
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant mt-3 sm:mt-4 max-w-xl leading-relaxed">
          Specializing in AI architectures (FAISS, Sentence Transformers, temporal video analysis), enterprise ERP & POS systems, and mobile applications.
        </p>
        <a
          href="https://www.9tsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 mt-6"
        >
          <span className="relative w-5 h-5 rounded-sm overflow-hidden shrink-0">
            <Image src="/9t.jpeg" alt="9T Solutions" fill sizes="20px" className="object-cover" />
          </span>
          <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/60 group-hover:text-tertiary transition-colors">
            Building at 9T Solutions
          </span>
        </a>
      </Reveal>
    </section>
  );
}
