"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#") || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-container-max rounded-full border border-white/10 backdrop-blur-xl z-50 flex justify-between items-center px-5 sm:px-8 py-3 transition-colors duration-500 ${
        scrolled ? "bg-background/90 shadow-2xl" : "bg-background/60"
      }`}
    >
      <a href="#" className="font-display text-lg sm:text-xl font-bold tracking-tighter text-on-background">
        SAAD<span className="text-tertiary">.</span>DEV
      </a>
      <div className="hidden md:flex items-center gap-8">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="font-code text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        onClick={(e) => handleNavClick(e, "#contact")}
        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black font-code text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_20px_rgba(252,255,212,0.35)] transition-all duration-300"
      >
        Let&apos;s Talk
      </a>
      <button
        aria-label="Toggle menu"
        onClick={() => setOpen((o) => !o)}
        className="md:hidden text-on-background flex flex-col gap-1.5 p-2"
      >
        <span className={`block w-5 h-px bg-current transition-transform ${open ? "rotate-45 translate-y-[3px]" : ""}`} />
        <span className={`block w-5 h-px bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-px bg-current transition-transform ${open ? "-rotate-45 -translate-y-[3px]" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full mt-3 left-0 w-full rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl p-6 flex flex-col gap-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-code text-sm uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-black font-code text-xs uppercase tracking-widest font-semibold"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </motion.nav>
  );
}
