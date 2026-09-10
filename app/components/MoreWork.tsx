"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data";
import Reveal from "./Reveal";

interface MoreWorkProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

function ProjectCard({
  project,
  onSelectProject,
}: {
  project: Project;
  onSelectProject: (project: Project) => void;
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const numScreenshots = project.screenshots.length;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + numScreenshots) % numScreenshots);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % numScreenshots);
  };

  const currentScreenshot = project.screenshots[currentImgIndex] || {
    url: project.heroImage,
    caption: project.name,
  };

  return (
    <div
      onClick={() => onSelectProject(project)}
      className="group glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col h-full hover:border-tertiary/40 hover:shadow-[0_0_30px_rgba(252,255,212,0.08)] transition-all duration-300 cursor-pointer"
    >
      {/* Thumbnail Preview with Left/Right Sliding Buttons */}
      <div className="relative aspect-[16/10] bg-black/70 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreenshot.url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full"
          >
            <Image
              src={currentScreenshot.url}
              alt={currentScreenshot.caption}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 pointer-events-none" />

        {/* Category Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 font-code text-[10px] uppercase tracking-wider text-tertiary">
            {project.category}
          </span>
        </div>

        {/* Left Sliding Button */}
        {numScreenshots > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-black/95 border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 hover:border-tertiary transition-all duration-200 shadow-md"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Right Sliding Button */}
        {numScreenshots > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-black/95 border border-white/20 text-white flex items-center justify-center opacity-80 group-hover:opacity-100 hover:border-tertiary transition-all duration-200 shadow-md"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Slide Counter Badge */}
        {numScreenshots > 1 && (
          <div className="absolute bottom-2 right-2.5 z-10">
            <span className="font-code text-[10px] bg-black/70 text-tertiary px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
              {currentImgIndex + 1}/{numScreenshots}
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow gap-3">
        <div>
          <h4 className="font-display text-lg font-bold text-on-background group-hover:text-tertiary transition-colors tracking-tight">
            {project.name}
          </h4>
          <p className="font-body text-xs text-on-surface-variant mt-1 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/5 font-code text-[10px] text-on-surface-variant/80"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-1.5 py-0.5 rounded-full font-code text-[10px] text-on-surface-variant/40">
              +{project.stack.length - 4}
            </span>
          )}
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-[11px] font-code text-on-surface-variant/70">
          <span className="group-hover:text-white transition-colors flex items-center gap-1 font-semibold text-tertiary">
            Explore Case Study &rarr;
          </span>

          <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors uppercase tracking-wider"
              >
                GitHub
              </a>
            )}
            {project.privateRepo && (
              <span className="text-on-surface-variant/40 uppercase tracking-wider text-[10px]">
                Private
              </span>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tertiary transition-colors uppercase tracking-wider"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MoreWork({ projects, onSelectProject }: MoreWorkProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={0.06 * i}>
          <ProjectCard project={project} onSelectProject={onSelectProject} />
        </Reveal>
      ))}
    </div>
  );
}
