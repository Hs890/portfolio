"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/lib/data";

export default function FeaturedWork({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  const panelRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 25 });
  const glowX = useTransform(mx, [-0.5, 0.5], ["20%", "80%"]);
  const glowY = useTransform(my, [-0.5, 0.5], ["20%", "80%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = panelRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
      {/* Index */}
      <div className="lg:col-span-4 order-2 lg:order-1">
        <div className="lg:sticky lg:top-32 flex flex-col">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              className="group text-left py-4 border-b border-white/5 flex items-baseline gap-4"
            >
              <span
                className={`font-code text-xs tabular-nums transition-colors duration-300 ${
                  i === active ? "text-tertiary" : "text-on-surface-variant/40"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-display text-lg md:text-xl font-bold tracking-tight transition-all duration-300 ${
                  i === active
                    ? "text-on-background translate-x-1"
                    : "text-on-surface-variant/50 group-hover:text-on-surface-variant"
                }`}
              >
                {p.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Visual + detail */}
      <div className="lg:col-span-8 order-1 lg:order-2">
        <motion.div
          ref={panelRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="relative rounded-xl overflow-hidden aspect-[16/10] glass-panel"
        >
          <div
            aria-hidden
            className="absolute inset-0 rounded-xl pointer-events-none"
            style={{
              padding: 1,
              background: "linear-gradient(120deg, rgba(252,255,212,0.4), rgba(252,255,212,0) 40%, rgba(252,255,212,0) 60%, rgba(252,255,212,0.25))",
              WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          <motion.div
            aria-hidden
            className="absolute w-[70%] h-[70%] rounded-full pointer-events-none"
            style={{
              left: glowX,
              top: glowY,
              translateX: "-50%",
              translateY: "-50%",
              background: "radial-gradient(circle, rgba(252,255,212,0.14) 0%, rgba(252,255,212,0) 70%)",
            }}
          />

          <AnimatePresence mode="popLayout">
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-white/[0.06] select-none tracking-tight text-center px-8">
                {project.name}
              </span>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          <AnimatePresence mode="wait">
            <motion.div
              key={project.slug + "-info"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10"
            >
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-on-background mb-2 tracking-tight">
                {project.name}
              </h3>
              <p className="font-body text-sm sm:text-base text-on-surface-variant mb-5 max-w-md">
                {project.tagline}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/5 font-code text-[11px] uppercase tracking-wide text-on-surface-variant"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                {project.github && (
                  <a
                    href={project.github}
                    className="font-code text-xs uppercase tracking-widest text-on-surface hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.privateRepo && (
                  <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/50">
                    Private Repo
                  </span>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    className="font-code text-xs uppercase tracking-widest text-on-surface hover:text-white transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
