import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.group} delay={0.06 * gi}>
            <div className="glass-panel rounded-xl p-6 h-full">
              <h3 className="font-code text-xs uppercase tracking-widest text-tertiary mb-5">{group.group}</h3>
              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-body text-sm text-on-surface-variant hover:text-on-background hover:translate-x-1 transition-all duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
