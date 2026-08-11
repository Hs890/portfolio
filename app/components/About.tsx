import { stats } from "@/lib/data";
import Reveal from "./Reveal";

const FLOW = ["Idea", "Architecture", "Development", "AI Integration", "Deployment"];

export default function About() {
  return (
    <section id="about" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="font-code text-xs uppercase tracking-widest text-tertiary mb-4">About</p>
            <h2 className="font-display text-2xl md:text-4xl font-bold text-on-background mb-8 tracking-tight leading-tight">
              I enjoy taking an idea all the way to a working product &mdash;
              not just writing the code in the middle.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {FLOW.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="px-4 py-2 rounded-full glass-panel font-code text-xs uppercase tracking-widest text-on-surface">
                    {step}
                  </span>
                  {i < FLOW.length - 1 && <span className="text-tertiary">&rarr;</span>}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.08 * i}>
              <div className="glass-panel rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-gradient">{stat.value}</span>
                <div className="mt-4">
                  <p className="font-body text-sm text-on-surface">{stat.label}</p>
                  <p className="font-code text-[11px] uppercase tracking-wide text-on-surface-variant/70 mt-1">
                    {stat.suffix}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
