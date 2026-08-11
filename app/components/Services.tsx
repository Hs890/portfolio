import { services } from "@/lib/data";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <Reveal>
        <p className="font-code text-xs uppercase tracking-widest text-tertiary mb-4">// what I offer</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-on-background mb-4 tracking-tight max-w-2xl">
          Services
        </h2>
        <p className="font-body text-sm md:text-base text-on-surface-variant mb-16 max-w-xl">
          End-to-end development solutions for your business needs.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={0.06 * i}>
            <div className="glass-panel rounded-xl p-8 h-full flex flex-col">
              <h3 className="font-display text-xl md:text-2xl font-bold text-on-background mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-on-surface-variant mb-6">
                {service.description}
              </p>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
                {service.points.map((point) => (
                  <li key={point} className="font-body text-sm text-on-surface flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-tertiary shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-auto inline-flex items-center justify-center px-6 py-3 rounded-full glass-panel font-code text-xs uppercase tracking-widest text-on-surface hover:bg-white/10 transition-all duration-300 self-start"
              >
                Get Started
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
