import { journey } from "@/lib/data";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <Reveal>
        <p className="font-code text-xs uppercase tracking-widest text-tertiary mb-4">Journey</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-on-background mb-16 tracking-tight max-w-2xl">
          From Computer Science to real-world software systems.
        </h2>
      </Reveal>

      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-tertiary/60 via-white/10 to-transparent" />
        <div className="flex flex-col gap-12">
          {journey.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i} y={24}>
              <div className="relative">
                <span className="absolute -left-8 md:-left-12 top-1.5 w-3 h-3 rounded-full bg-tertiary shadow-[0_0_12px_rgba(252,255,212,0.7)]" />
                <p className="font-code text-[11px] uppercase tracking-widest text-tertiary mb-2">{item.year}</p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-on-background mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="font-body text-sm md:text-base text-on-surface-variant max-w-2xl">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
