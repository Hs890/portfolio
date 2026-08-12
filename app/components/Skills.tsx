import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="accent-glow w-[480px] h-[480px] top-0 left-0" />
      <Reveal>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-on-background mb-16 tracking-tight max-w-2xl">
          A stack built for full-stack + AI product work.
        </h2>
      </Reveal>

      <div className="flex flex-col gap-4">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.group} delay={0.05 * gi}>
            <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5">
              <div className="md:w-48 shrink-0 flex items-center gap-3">
                <span className="font-code text-xs text-tertiary tabular-nums">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold text-on-background tracking-tight">
                  {group.group}
                </h3>
              </div>
              <div className="hidden md:block w-px self-stretch bg-white/10" />
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 font-body text-sm text-on-surface-variant hover:border-tertiary/40 hover:bg-tertiary/[0.06] hover:text-on-background transition-all duration-300 cursor-default"
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
