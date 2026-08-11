export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
      <div className="font-display text-lg font-bold text-on-background tracking-tighter">
        SAAD<span className="text-tertiary">.</span>DEV
      </div>
      <div className="flex gap-6">
        <a href="#projects" className="font-code text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors">
          Projects
        </a>
        <a href="#skills" className="font-code text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors">
          Skills
        </a>
        <a href="#contact" className="font-code text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors">
          Contact
        </a>
      </div>
      <div className="font-code text-[11px] uppercase tracking-widest text-on-surface-variant/60">
        &copy; 2026 &mdash; Built with Next.js
      </div>
    </footer>
  );
}
