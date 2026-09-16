"use client";

import { useState, useMemo } from "react";
import { allProjects, type Project } from "@/lib/data";
import FeaturedWork from "./FeaturedWork";
import MoreWork from "./MoreWork";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";

const categories = ["All", "AI & RAG", "Full-Stack Web", "Mobile Apps", "Enterprise Systems"] as const;
type CategoryType = (typeof categories)[number];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return allProjects;
    return allProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featured = filteredProjects.slice(0, 4);
  const more = filteredProjects.slice(4);

  return (
    <section id="work" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="accent-glow w-[560px] h-[560px] top-1/3 right-0 -translate-y-1/2" />

      {/* Section Header & Category Filter */}
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-code text-xs uppercase tracking-[0.25em] text-tertiary mb-3">
              Portfolio & Engineering Showcase
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-on-background tracking-tight">
              Featured Work
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap w-full md:w-auto -mx-margin-mobile px-margin-mobile sm:mx-0 sm:px-0">
            {categories.map((cat) => {
              const count = cat === "All" ? allProjects.length : allProjects.filter((p) => p.category === cat).length;
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full font-code text-xs tracking-wider transition-all duration-300 flex items-center gap-1.5 shrink-0 ${
                    isSelected
                      ? "bg-primary text-background font-semibold scale-105"
                      : "glass-panel text-on-surface-variant hover:text-on-background"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] ${isSelected ? "text-background/60" : "text-on-surface-variant/40"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      {/* Featured Showcase */}
      <FeaturedWork
        key={activeCategory + "-featured"}
        projects={featured.length > 0 ? featured : allProjects.slice(0, 4)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* More Work Grid */}
      {more.length > 0 && (
        <>
          <Reveal>
            <div className="flex items-center justify-between mt-24 mb-8">
              <h3 className="font-display text-xl md:text-2xl font-bold text-on-background tracking-tight">
                Additional Projects ({more.length})
              </h3>
            </div>
          </Reveal>

          <MoreWork
            key={activeCategory + "-more"}
            projects={more}
            onSelectProject={(p) => setSelectedProject(p)}
          />
        </>
      )}

      {/* Project Deep Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
