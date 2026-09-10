"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset image index whenever a new project is selected
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle keyboard events (esc to close, arrows for gallery navigation)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev + 1) % project.screenshots.length);
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
      }
    },
    [project, onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const numScreenshots = project.screenshots.length;

  const currentScreenshot = project.screenshots[activeImageIndex] || {
    url: project.heroImage,
    caption: project.name,
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + numScreenshots) % numScreenshots);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % numScreenshots);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="absolute inset-0 bg-background/90 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl max-h-[92vh] bg-surface-container-high/95 border border-white/10 rounded-2xl shadow-2xl overflow-y-auto flex flex-col z-10 custom-scrollbar"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface-container-high/95 backdrop-blur-md border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary font-code text-[11px] uppercase tracking-wider">
                {project.category}
              </span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-on-background tracking-tight">
                {project.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white transition-all"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="p-5 sm:p-7 md:p-9 flex flex-col gap-8">
            {/* Gallery View with prominent Left / Right sliding buttons */}
            <div className="flex flex-col gap-3">
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black/70 border border-white/10 flex items-center justify-center group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentScreenshot.url}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentScreenshot.url}
                      alt={currentScreenshot.caption}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1024px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Left Sliding Button */}
                {numScreenshots > 1 && (
                  <button
                    onClick={handlePrev}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/75 hover:bg-black/95 border border-white/25 hover:border-tertiary text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 transform hover:scale-110 shadow-2xl"
                    aria-label="Previous screenshot"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}

                {/* Right Sliding Button */}
                {numScreenshots > 1 && (
                  <button
                    onClick={handleNext}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/75 hover:bg-black/95 border border-white/25 hover:border-tertiary text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 transform hover:scale-110 shadow-2xl"
                    aria-label="Next screenshot"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}

                {/* Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 flex items-center justify-between z-20">
                  <p className="font-body text-xs sm:text-sm text-white/90 pr-4">
                    {currentScreenshot.caption}
                  </p>
                  <span className="font-code text-xs text-tertiary bg-black/50 px-2.5 py-1 rounded border border-white/10 shrink-0 font-medium">
                    {activeImageIndex + 1} / {numScreenshots}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {numScreenshots > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2 pt-1 custom-scrollbar">
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={s.url + idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 sm:w-24 aspect-[16/10] rounded-lg overflow-hidden shrink-0 border transition-all ${
                        idx === activeImageIndex
                          ? "border-tertiary ring-2 ring-tertiary/40 scale-[1.02]"
                          : "border-white/10 opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image src={s.url} alt={s.caption} fill sizes="96px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col"
                  >
                    <span className="font-code text-[11px] text-tertiary uppercase tracking-wider">
                      {m.label}
                    </span>
                    <span className="font-display text-base sm:text-lg font-bold text-on-background mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Project Overview */}
            <div className="flex flex-col gap-2">
              <h3 className="font-display text-sm uppercase tracking-wider text-on-surface-variant/80 font-semibold">
                Overview
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && (
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-sm uppercase tracking-wider text-on-surface-variant/80 font-semibold">
                  Key Engineering Highlights
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-2.5 font-body text-sm text-on-surface-variant"
                    >
                      <span className="text-tertiary font-code text-xs mt-0.5 shrink-0">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Summary */}
            {project.architectureSummary && (
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col gap-1.5">
                <span className="font-code text-xs text-tertiary uppercase tracking-wider font-medium">
                  Architecture Pipeline
                </span>
                <p className="font-code text-xs sm:text-sm text-on-surface-variant">
                  {project.architectureSummary}
                </p>
              </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-col gap-2.5">
              <h3 className="font-display text-sm uppercase tracking-wider text-on-surface-variant/80 font-semibold">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-code text-xs text-on-surface"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-white text-black font-code text-xs uppercase tracking-wider font-semibold hover:bg-white/90 transition-all flex items-center gap-2"
                >
                  GitHub Repository
                </a>
              )}
              {project.privateRepo && (
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 font-code text-xs uppercase tracking-wider text-on-surface-variant/60">
                  Client / Private Repository
                </span>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full glass-panel border border-white/20 text-on-surface font-code text-xs uppercase tracking-wider font-semibold hover:bg-white/10 transition-all"
                >
                  Live Deployment
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
