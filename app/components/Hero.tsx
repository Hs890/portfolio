"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-section-gap-mobile md:pb-section-gap-desktop relative">
      <div className="accent-glow w-[800px] h-[800px] -top-40 -left-40" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8 flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-panel px-4 py-2 rounded-full inline-flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse-slow" />
            <span className="font-code text-[11px] uppercase tracking-widest text-on-surface">
              Available for Work
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-code text-xs sm:text-sm uppercase tracking-[0.3em] text-tertiary"
          >
            Full-Stack &bull; AI &bull; Software Engineering
          </motion.p>

          <h1 className="font-display text-[36px] sm:text-[48px] md:text-[64px] leading-[1.15] font-extrabold tracking-tight text-gradient">
            {"I build software that turns complex ideas into real products.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-2xl"
          >
            I design and build web applications, AI-powered systems, SaaS
            products, REST APIs, and full-scale ERP/business systems — end to
            end, from architecture to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-white text-black font-code text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass-panel text-on-surface font-code text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 relative h-[360px] w-full hidden lg:flex items-center justify-center"
        >
          <div className="w-64 h-64 border border-white/10 rounded-full absolute animate-[spin_24s_linear_infinite]" />
          <div className="w-48 h-48 border border-tertiary/30 rounded-full absolute animate-[spin_18s_linear_infinite_reverse]" />
          <div className="w-32 h-32 glass-panel rounded-full absolute flex items-center justify-center backdrop-blur-xl">
            <span className="font-code text-[10px] uppercase tracking-widest text-tertiary">RAG / LLM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
