import { contact } from "@/lib/data";
import Reveal from "./Reveal";

const ICONS = {
  email:
    "M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2.5 7.8 5.6 7.8-5.6H4.2Zm15.8 1.28-7.4 5.32a1 1 0 0 1-1.2 0L4 7.28V18.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5V7.28Z",
  github:
    "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z",
  linkedin:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.114 20.452H3.558V9h3.556v11.452Z",
  fiverr:
    "M6.75 3v2.25H3.375A2.625 2.625 0 0 0 .75 7.875v3.75c0 .621.504 1.125 1.125 1.125h20.25c.621 0 1.125-.504 1.125-1.125v-3.75A2.625 2.625 0 0 0 20.625 5.25H17.25V3a2.25 2.25 0 0 0-2.25-2.25h-6A2.25 2.25 0 0 0 6.75 3Zm8.25 2.25v-2.25a.75.75 0 0 0-.75-.75h-6a.75.75 0 0 0-.75.75v2.25h7.5ZM21.75 14.25a2.625 2.625 0 0 1-1.125 2.157v3.093a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25v-3.093a2.625 2.625 0 0 1-1.125-2.157v-.577c.298.104.617.16.949.16h18.502c.332 0 .651-.056.949-.16v.577Z",
};

const ROWS = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: ICONS.email },
  { label: "GitHub", value: "My GitHub", href: contact.github.href, icon: ICONS.github },
  { label: "LinkedIn", value: "My LinkedIn", href: contact.linkedin.href, icon: ICONS.linkedin },
  { label: "Fiverr", value: "Available for freelance work", href: contact.fiverr.href, icon: ICONS.fiverr },
];

export default function Contact() {
  return (
    <section id="contact" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-start">
        {/* Left — editorial headline */}
        <div className="lg:col-span-5">
          <Reveal>
            <a href={contact.fiverr.href} target="_blank" rel="noopener noreferrer" className="group inline-block">
              <h2 className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold text-on-background tracking-tight leading-[0.92] mb-7 group-hover:text-tertiary transition-colors duration-300">
                LET&apos;S
                <br />
                TALK.
              </h2>
            </a>
            <p className="font-display text-xl md:text-2xl font-bold text-on-surface tracking-tight mb-2">
              Have an idea worth building?
            </p>
            <p className="font-body text-sm md:text-base text-on-surface-variant mb-12">
              Tell me what you&apos;re working on.
            </p>
            <a
              href={contact.fiverr.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-code text-xs uppercase tracking-widest text-on-background"
            >
              <span className="border-b border-white/20 group-hover:border-tertiary pb-0.5 transition-colors whitespace-nowrap">
                Start a Conversation
              </span>
              <span className="group-hover:translate-x-1 group-hover:text-tertiary transition-all duration-300">
                &rarr;
              </span>
            </a>
          </Reveal>
        </div>

        {/* Right — contact panel */}
        <div className="lg:col-span-7 relative">
          <div className="relative flex flex-col">
            {ROWS.map((row, i) => (
              <Reveal key={row.label} delay={0.05 * i}>
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative flex items-center justify-between gap-8 py-7 sm:py-8 px-2 -mx-2 border-t border-white/10 last:border-b transition-all duration-300 hover:px-4"
                >
                  <span
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(700px circle at 0% 50%, rgba(252,255,212,0.07), transparent 60%)",
                    }}
                  />
                  <span className="relative flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0 group-hover:border-tertiary/40 transition-colors duration-300">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 text-on-surface-variant group-hover:text-tertiary transition-colors duration-300"
                      >
                        <path d={row.icon} />
                      </svg>
                    </span>
                    <span className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-8 min-w-0">
                      <span className="font-code text-[11px] uppercase tracking-widest text-on-surface-variant/50 w-20 shrink-0">
                        {row.label}
                      </span>
                      <span className="font-display text-lg sm:text-xl md:text-2xl font-bold text-on-background group-hover:text-tertiary transition-colors tracking-tight whitespace-nowrap">
                        {row.value}
                      </span>
                    </span>
                  </span>
                  <span className="relative font-display text-xl text-on-surface-variant/30 group-hover:text-tertiary group-hover:translate-x-2 transition-all duration-300 shrink-0">
                    &rarr;
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
