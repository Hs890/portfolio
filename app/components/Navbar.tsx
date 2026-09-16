"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <>
      {/* Mobile Backdrop overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Navbar Header */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 w-[94%] sm:w-[92%] max-w-container-max rounded-full z-50 flex justify-between items-center px-4 sm:px-8 py-2.5 sm:py-3 glass-panel transition-shadow ${
          scrolled ? "shadow-2xl" : "shadow-md"
        }`}
      >
        <a
          href="#"
          onClick={(e) => {
            if (open) setOpen(false);
          }}
          className="font-display text-base sm:text-xl font-bold tracking-tighter text-on-background transition-transform duration-300 hover:scale-105 inline-block"
        >
          SAAD<span className="text-tertiary">.</span>DEV
        </a>

        {/* Desktop Navigation Links */}
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

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary text-background font-code text-xs uppercase tracking-widest font-semibold transition-all duration-300 hover:scale-105"
            style={{ boxShadow: "0 0 20px var(--glass-hover-shadow)" }}
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="text-on-background flex flex-col justify-center items-center w-9 h-9 rounded-full bg-surface-container border border-border-subtle gap-1 p-2 shadow-sm active:scale-95 transition-transform"
          >
            <span
              className={`block w-4 h-[1.5px] bg-current transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-current transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Sheet (Solid white in light mode / solid dark in dark mode) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-16 sm:top-20 left-3 right-3 sm:left-6 sm:right-6 rounded-3xl p-5 flex flex-col gap-2 shadow-2xl md:hidden z-50 bg-white dark:bg-[#151515] border border-black/10 dark:border-white/15"
            style={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.35)",
            }}
          >
            <div className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group flex items-center justify-between font-code text-xs uppercase tracking-widest text-neutral-800 dark:text-neutral-200 hover:text-tertiary dark:hover:text-tertiary transition-all duration-150 py-3 px-3.5 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 active:scale-[0.98]"
                >
                  <span className="font-semibold text-sm">{link.label}</span>
                  <span className="text-tertiary opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-sm">
                    &rarr;
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-3 mt-1 border-t border-black/10 dark:border-white/10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="w-full inline-flex items-center justify-center py-3.5 rounded-full bg-primary text-background font-code text-xs uppercase tracking-widest font-semibold text-center shadow-lg active:scale-[0.98] transition-transform"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
