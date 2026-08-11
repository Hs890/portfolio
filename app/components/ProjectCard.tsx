"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/lib/data";
import Reveal from "./Reveal";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const reversed = index % 2 === 1;

  return (
    <Reveal delay={0.05 * (index % 3)}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        className={`glass-panel rounded-xl overflow-hidden grid grid-cols-1 ${
          project.size === "large" ? "lg:grid-cols-2" : "lg:grid-cols-5"
        } group relative`}
      >
        <div
          className={`relative overflow-hidden bg-surface-container aspect-video lg:aspect-auto ${
            reversed ? "lg:order-2" : ""
          } ${project.size === "large" ? "" : "lg:col-span-2"}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl md:text-7xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none tracking-tighter text-center px-6">
              {project.name}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>

        <div className={`p-8 md:p-10 relative z-10 flex flex-col ${project.size === "large" ? "" : "lg:col-span-3"}`}>
          <span className="font-code text-[11px] uppercase tracking-widest text-tertiary mb-3">
            {String(index + 1).padStart(2, "0")} &mdash; {project.tagline}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-on-background mb-4 tracking-tight">
            {project.name}
          </h3>
          <p className="font-body text-sm md:text-base text-on-surface-variant mb-6">{project.problem}</p>

          <p className="font-code text-xs uppercase tracking-widest text-on-surface-variant/70 mb-2">My Role</p>
          <p className="font-body text-sm text-on-surface mb-6">{project.role}</p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 mb-8">
            {project.features.map((f) => (
              <li key={f} className="font-body text-sm text-on-surface-variant flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-tertiary shrink-0" />
                {f}
              </li>
            ))}
          </ul>

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

          <div className="flex items-center gap-6 border-t border-white/5 pt-5 mt-auto">
            {project.github && (
              <a href={project.github} className="font-code text-xs uppercase tracking-widest text-on-surface hover:text-white transition-colors">
                GitHub
              </a>
            )}
            {project.privateRepo && (
              <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/60">Private Repo</span>
            )}
            {project.live && (
              <a href={project.live} className="font-code text-xs uppercase tracking-widest text-on-surface hover:text-white transition-colors ml-auto">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}
