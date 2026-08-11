import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SkillsShowcase from "./SkillsShowcase";

export default function Skills() {
  return (
    <section id="skills" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="accent-glow w-[500px] h-[500px] top-0 left-0" />
      <Reveal>
        <p className="font-code text-xs uppercase tracking-widest text-tertiary mb-4">Technology Ecosystem</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-on-background mb-16 tracking-tight max-w-2xl">
          A stack built for full-stack + AI product work.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <SkillsShowcase groups={skillGroups} />
      </Reveal>
    </section>
  );
}
