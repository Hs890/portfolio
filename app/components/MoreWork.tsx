import type { Project } from "@/lib/data";
import Reveal from "./Reveal";

export default function MoreWork({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={0.05 * i}>
          <div className="glass-panel rounded-xl p-6 h-full flex flex-col">
            <h4 className="font-display text-lg font-bold text-on-background mb-1.5 tracking-tight">
              {project.name}
            </h4>
            <p className="font-body text-sm text-on-surface-variant mb-4">{project.tagline}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-full bg-white/5 font-code text-[10px] uppercase tracking-wide text-on-surface-variant"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-5 mt-auto pt-4 border-t border-white/5">
              {project.github && (
                <a
                  href={project.github}
                  className="font-code text-[11px] uppercase tracking-widest text-on-surface hover:text-white transition-colors"
                >
                  GitHub
                </a>
              )}
              {project.privateRepo && (
                <span className="font-code text-[11px] uppercase tracking-widest text-on-surface-variant/50">
                  Private
                </span>
              )}
              {project.live && (
                <a
                  href={project.live}
                  className="font-code text-[11px] uppercase tracking-widest text-on-surface hover:text-white transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
