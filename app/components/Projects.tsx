import { featuredProjects, moreProjects } from "@/lib/data";
import FeaturedWork from "./FeaturedWork";
import MoreWork from "./MoreWork";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="work" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="accent-glow w-[560px] h-[560px] top-1/3 right-0 -translate-y-1/2" />

      <Reveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-on-background mb-16 tracking-tight max-w-2xl">
          Featured Work
        </h2>
      </Reveal>

      <FeaturedWork projects={featuredProjects} />

      <Reveal>
        <h3 className="font-display text-xl md:text-2xl font-bold text-on-background mt-24 mb-8 tracking-tight">
          More Work
        </h3>
      </Reveal>

      <MoreWork projects={moreProjects} />
    </section>
  );
}
