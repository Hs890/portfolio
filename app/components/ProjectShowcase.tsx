"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
      {/* Index */}
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32 flex flex-col">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className={`group text-left py-5 border-b border-white/5 flex items-center gap-4 transition-colors duration-300 ${
                i === active ? "border-white/20" : ""
              }`}
            >
              <span
                className={`font-code text-xs tabular-nums transition-colors duration-300 ${
                  i === active ? "text-tertiary" : "text-on-surface-variant/50"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-display text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
                  i === active
                    ? "text-on-background translate-x-1"
                    : "text-on-surface-variant/60 group-hover:text-on-surface-variant"
                }`}
              >
                {p.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <div className="lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel rounded-xl overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden bg-surface-container">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/25 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-5xl md:text-6xl font-extrabold text-white/[0.06] select-none tracking-tight text-center px-6">
                  {project.name}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <span className="absolute top-6 left-6 font-code text-[11px] uppercase tracking-widest text-tertiary">
                {project.tagline}
              </span>
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-on-background mb-4 tracking-tight">
                {project.name}
              </h3>
              <p className="font-body text-sm md:text-base leading-relaxed text-on-surface-variant mb-6">
                {project.problem}
              </p>

              <p className="font-code text-xs uppercase tracking-widest text-on-surface-variant/70 mb-2">
                My Role
              </p>
              <p className="font-body text-sm leading-relaxed text-on-surface mb-6">{project.role}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 mb-8">
                {project.features.map((f) => (
                  <div key={f} className="font-body text-sm text-on-surface-variant flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-tertiary shrink-0" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 font-code text-[11px] uppercase tracking-wide text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 border-t border-white/5 pt-5">
                {project.github && (
                  <a
                    href={project.github}
                    className="font-code text-xs uppercase tracking-widest text-on-surface hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.privateRepo && (
                  <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/60">
                    Private Repo
                  </span>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="font-code text-xs uppercase tracking-widest text-on-surface hover:text-white transition-colors ml-auto"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
