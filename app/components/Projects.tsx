import { projects } from "@/lib/data";
import ProjectShowcase from "./ProjectShowcase";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="accent-glow w-[600px] h-[600px] top-1/3 right-0 -translate-y-1/2" />
      <Reveal>
        <p className="font-code text-xs uppercase tracking-widest text-tertiary mb-4">Selected Work</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-on-background mb-16 tracking-tight max-w-2xl">
          Products I&apos;ve architected, built and shipped.
        </h2>
      </Reveal>
      <ProjectShowcase projects={projects} />
    </section>
  );
}
