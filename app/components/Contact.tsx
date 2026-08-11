import Reveal from "./Reveal";

const LINKS = [
  { label: "Email", value: "nafeelaaqib89@gmail.com", href: "mailto:nafeelaaqib89@gmail.com" },
  { label: "GitHub", value: "github.com/yourusername", href: "#" },
  { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "#" },
  { label: "Fiverr", value: "fiverr.com/yourusername", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="accent-glow w-[700px] h-[700px] bottom-0 left-1/2 -translate-x-1/2" />
      <Reveal>
        <div className="glass-panel rounded-2xl px-8 py-16 md:px-16 md:py-24 text-center relative overflow-hidden">
          <p className="font-code text-xs uppercase tracking-widest text-tertiary mb-6">Contact</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-gradient tracking-tighter mb-10">
            Have an idea? <br className="hidden sm:block" /> Let&apos;s build it.
          </h2>
          <a
            href="mailto:nafeelaaqib89@gmail.com"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-black font-code text-sm uppercase tracking-widest font-semibold hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:scale-105"
          >
            Start a Conversation
          </a>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-16 pt-10 border-t border-white/5">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex flex-col items-center gap-1 group"
              >
                <span className="font-code text-[11px] uppercase tracking-widest text-on-surface-variant/70 group-hover:text-tertiary transition-colors">
                  {link.label}
                </span>
                <span className="font-body text-sm text-on-surface group-hover:text-white transition-colors">
                  {link.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
