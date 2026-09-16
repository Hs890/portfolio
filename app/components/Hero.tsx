"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#") || href === "#") return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-28 sm:pt-36 pb-16 md:pb-section-gap-desktop relative">
      <div className="accent-glow w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] -top-20 sm:-top-40 -left-20 sm:-left-40" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        <div className="lg:col-span-8 flex flex-col items-start gap-5 sm:gap-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden glass-panel lg:hidden shadow-xl"
          >
            <Image src="/profile.jpg" alt="Portrait" fill sizes="112px" className="object-cover" priority />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <p className="font-code text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-tertiary font-semibold">
              AI Engineer & Full-Stack Developer
            </p>
            <a
              href="https://www.9tsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 font-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 hover:text-tertiary transition-colors pl-3 border-l border-border-subtle"
            >
              <span className="relative w-4 h-4 rounded-sm overflow-hidden shrink-0">
                <Image src="/9t.jpeg" alt="9T Solutions" fill sizes="16px" className="object-cover" />
              </span>
              Currently at 9T Solutions
            </a>
          </motion.div>

          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.1] font-extrabold tracking-tight text-gradient">
            {"Software that solves real problems.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-sm sm:text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed"
          >
            I build AI & RAG intelligence systems, full-stack web platforms, enterprise ERP/POS software, and mobile apps — from architecture to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto"
          >
            <a
              href="#work"
              onClick={handleAnchorClick}
              className="px-8 py-3.5 sm:py-4 rounded-full bg-primary text-background font-code text-xs uppercase tracking-widest font-semibold transition-all duration-300 text-center transform hover:scale-105"
              style={{ boxShadow: '0 0 30px var(--glass-hover-shadow)' }}
            >
              View Work
            </a>
            <a
              href="#contact"
              onClick={handleAnchorClick}
              className="px-8 py-3.5 sm:py-4 rounded-full glass-panel text-on-surface font-code text-xs uppercase tracking-widest font-semibold transition-all duration-300 text-center transform hover:scale-105"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 relative h-[420px] w-full hidden lg:flex items-center justify-center"
        >
          <div className="w-80 h-80 border border-white/10 rounded-full absolute animate-[spin_28s_linear_infinite]" />
          <div className="w-64 h-64 border border-tertiary/30 rounded-full absolute animate-[spin_20s_linear_infinite_reverse]" />
          <div className="relative w-72 h-72 rounded-full overflow-hidden glass-panel">
            <Image src="/profile.jpg" alt="Portrait" fill sizes="288px" className="object-cover" priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
