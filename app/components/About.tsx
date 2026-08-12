import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <Reveal>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-on-background tracking-tight leading-snug max-w-2xl">
          CS graduate building full-stack products with React, Python, Django
          and AI.
        </h2>
        <p className="font-body text-base md:text-lg text-on-surface-variant mt-4 max-w-xl">
          Currently focused on AI-powered applications, SaaS and business
          systems.
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
