"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "@/lib/data";

interface FeaturedWorkProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function FeaturedWork({ projects, onSelectProject }: FeaturedWorkProps) {
  const [active, setActive] = useState(0);
  const [activeThumb, setActiveThumb] = useState(0);
  const project = projects[active] || projects[0];

  const panelRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 25 });
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

  const numScreenshots = project.screenshots.length;

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveThumb((prev) => (prev - 1 + numScreenshots) % numScreenshots);
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveThumb((prev) => (prev + 1) % numScreenshots);
  };

  const currentScreenshot = project.screenshots[activeThumb] || {
    url: project.heroImage,
    caption: project.name,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Index List */}
      <div className="lg:col-span-4 order-2 lg:order-1">
        <div className="lg:sticky lg:top-28 flex flex-col gap-2">
          {projects.map((p, i) => {
            const isSelected = i === active;
            return (
              <button
                key={p.slug}
                onClick={() => {
                  setActive(i);
                  setActiveThumb(0);
                }}
                onMouseEnter={() => {
                  setActive(i);
                  setActiveThumb(0);
                }}
                className="group text-left p-4 rounded-xl border transition-all duration-300 flex flex-col gap-1.5"
                style={{
                  background: isSelected ? 'var(--card-bg-active)' : 'var(--card-bg)',
                  borderColor: isSelected ? 'var(--card-border-active)' : 'var(--card-border)',
                  boxShadow: isSelected ? `0 0 25px var(--card-shadow-active)` : 'none',
                }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-code text-xs tabular-nums transition-colors duration-300 ${
                      isSelected ? "text-tertiary" : "text-on-surface-variant/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-code text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full text-on-surface-variant/70"
                    style={{ background: 'var(--pill-bg)' }}
                  >
                    {p.category}
                  </span>
                </div>

                <span
                  className={`font-display text-lg sm:text-xl font-bold tracking-tight transition-all duration-300 ${
                    isSelected
                      ? "text-on-background translate-x-1"
                      : "text-on-surface-variant/70 group-hover:text-on-surface-variant"
                  }`}
                >
                  {p.name}
                </span>

                <p className="font-body text-xs text-on-surface-variant/60 line-clamp-1">
                  {p.tagline}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual + Detail Showcase */}
      <div className="lg:col-span-8 order-1 lg:order-2">
        <motion.div
          ref={panelRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="relative rounded-2xl overflow-hidden glass-panel flex flex-col shadow-2xl"
        >
          {/* Subtle Glow */}
          <motion.div
            aria-hidden
            className="absolute w-[60%] h-[60%] rounded-full pointer-events-none z-10"
            style={{
              left: glowX,
              top: glowY,
              translateX: "-50%",
              translateY: "-50%",
              background: `radial-gradient(circle, var(--glass-hover-shadow) 0%, transparent 70%)`,
            }}
          />

          {/* Screenshot Preview Box with Left/Right Sliding Buttons */}
          <div
            className="relative aspect-[16/10] overflow-hidden group cursor-pointer"
            style={{ background: 'var(--img-overlay-bg)' }}
            onClick={() => onSelectProject(project)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={project.slug + activeThumb}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentScreenshot.url}
                  alt={currentScreenshot.caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent pointer-events-none" />

            {/* View Case Study pill button overlay */}
            <div className="absolute top-4 right-4 z-30">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(project);
                }}
                className="px-4 py-2 rounded-full backdrop-blur-md font-code text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-lg"
                style={{
                  background: 'var(--slider-btn-bg)',
                  border: `1px solid var(--slider-btn-border)`,
                  color: 'var(--slider-btn-color)',
                }}
              >
                <span>Full Case Study</span>
                <span className="text-tertiary font-bold">↗</span>
              </button>
            </div>

            {/* Left Sliding Button */}
            {numScreenshots > 1 && (
              <button
                onClick={handlePrevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 transform hover:scale-110 shadow-xl"
                style={{
                  background: 'var(--slider-btn-bg)',
                  border: `1px solid var(--slider-btn-border)`,
                  color: 'var(--slider-btn-color)',
                }}
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Sliding Button */}
            {numScreenshots > 1 && (
              <button
                onClick={handleNextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 transform hover:scale-110 shadow-xl"
                style={{
                  background: 'var(--slider-btn-bg)',
                  border: `1px solid var(--slider-btn-border)`,
                  color: 'var(--slider-btn-color)',
                }}
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Caption & Thumbnail Switcher at Bottom */}
            <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between gap-3">
              <span
                className="font-body text-xs line-clamp-1 px-3 py-1.5 rounded-lg backdrop-blur-md shadow"
                style={{
                  background: 'var(--caption-bg)',
                  color: 'var(--caption-color)',
                  border: '1px solid var(--glass-border)',
                }}
              >
                {currentScreenshot.caption}
              </span>

              {numScreenshots > 1 && (
                <div
                  className="flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-lg shrink-0"
                  style={{
                    background: 'var(--caption-bg)',
                    border: '1px solid var(--glass-border)',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="font-code text-[11px] text-tertiary font-medium mr-1.5">
                    {activeThumb + 1}/{numScreenshots}
                  </span>
                  <div className="flex gap-1">
                    {project.screenshots.slice(0, 6).map((s, idx) => (
                      <button
                        key={s.url + idx}
                        onClick={() => setActiveThumb(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          idx === activeThumb ? "bg-tertiary scale-125" : "opacity-40 hover:opacity-80"
                        }`}
                        style={{
                          backgroundColor: idx === activeThumb ? undefined : 'var(--on-surface-variant)',
                        }}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Details Panel */}
          <div className="p-6 sm:p-8 flex flex-col gap-5 relative z-10" style={{ background: 'var(--surface-container)' }}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary font-code text-[10px] uppercase tracking-wider">
                {project.category}
              </span>
              {project.metrics && project.metrics.length > 0 && (
                <span
                  className="px-2.5 py-0.5 rounded-full font-code text-[10px] uppercase tracking-wider text-on-surface-variant"
                  style={{ background: 'var(--pill-bg)', border: '1px solid var(--pill-border)' }}
                >
                  {project.metrics[0].label}: {project.metrics[0].value}
                </span>
              )}
            </div>

            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-on-background tracking-tight">
                {project.name}
              </h3>
              <p className="font-body text-sm sm:text-base text-on-surface-variant mt-2 leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Stack Pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full font-code text-[11px] text-on-surface-variant"
                  style={{ background: 'var(--pill-bg)', border: '1px solid var(--pill-border)' }}
                >
                  {tech}
                </span>
              ))}
              {project.stack.length > 6 && (
                <span className="px-2 py-1 rounded-full font-code text-[11px] text-on-surface-variant/50">
                  +{project.stack.length - 6} more
                </span>
              )}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--divider)' }}>
              <button
                onClick={() => onSelectProject(project)}
                className="px-6 py-2.5 rounded-full bg-primary text-background font-code text-xs uppercase tracking-widest font-semibold transition-all transform hover:scale-[1.02]"
              >
                Read Case Study
              </button>

              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-code text-xs uppercase tracking-widest text-on-surface hover:text-on-background transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.privateRepo && (
                  <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/40">
                    Private Repo
                  </span>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-code text-xs uppercase tracking-widest text-tertiary hover:text-on-background transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
