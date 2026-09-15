"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

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
    let prev = false;
    const onScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== prev) {
        prev = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
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
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-container-max rounded-full backdrop-blur-xl z-50 flex justify-between items-center px-5 sm:px-8 py-3 ${
        scrolled ? "bg-background/90 shadow-2xl" : "bg-background/60"
      }`}
      style={{ border: '1px solid var(--glass-border)' }}
    >
      <a href="#" className="font-display text-lg sm:text-xl font-bold tracking-tighter text-on-background transition-transform duration-300 hover:scale-105 inline-block">
        SAAD<span className="text-tertiary">.</span>DEV
      </a>
      <div className="hidden md:flex items-center gap-8">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="group relative font-code text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-all duration-300 inline-block hover:-translate-y-0.5 py-1"
          >
            <span>{link.label}</span>
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-tertiary rounded-full transition-all duration-300 ease-out group-hover:w-full" />
          </a>
        ))}
      </div>
      <div className="hidden md:flex items-center gap-3">
        <ThemeToggle />
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-background font-code text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105"
          style={{ boxShadow: '0 0 20px var(--glass-hover-shadow)' }}
        >
          Let&apos;s Talk
        </a>
      </div>
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
        <div className="absolute top-full mt-3 left-0 w-full rounded-2xl glass-panel p-6 flex flex-col gap-4 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group flex items-center justify-between font-code text-sm uppercase tracking-widest text-on-surface-variant hover:text-on-background transition-all duration-300 hover:translate-x-1.5 py-1"
            >
              <span>{link.label}</span>
              <span className="text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-300">&rarr;</span>
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: 'var(--divider)' }}>
            <ThemeToggle />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex-1 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-background font-code text-xs uppercase tracking-widest font-semibold"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
