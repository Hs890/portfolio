const QUICK_LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/10 relative z-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-sm">
          <div className="font-display text-lg font-bold text-on-background tracking-tight mb-3">
            saad<span className="text-tertiary">_</span>
          </div>
          <p className="font-body text-sm leading-relaxed text-on-surface-variant">
            Full Stack Developer specializing in MERN, React Native, Supabase &amp; Firebase.
            Turning ideas into production-ready applications.
          </p>
        </div>

        <div>
          <p className="font-code text-[11px] uppercase tracking-widest text-on-surface-variant/70 mb-4">
            Quick Links
          </p>
          <div className="flex flex-col gap-2">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-on-surface-variant hover:text-on-background transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="font-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mt-12 pt-8 border-t border-white/5">
        &copy; 2026 &mdash; Built with Next.js
      </div>
    </footer>
  );
}
