import { contact } from "@/lib/data";
import Reveal from "./Reveal";

const OTHER_CHANNELS = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "WhatsApp", value: contact.whatsapp, href: contact.whatsappHref },
  { label: "GitHub", value: contact.github.label, href: contact.github.href },
  { label: "LinkedIn", value: contact.linkedin.label, href: contact.linkedin.href },
];

export default function Contact() {
  return (
    <section id="contact" className="py-section-gap-mobile md:py-section-gap-desktop relative">
      <div className="accent-glow w-[700px] h-[700px] bottom-0 left-1/2 -translate-x-1/2" />
      <Reveal>
        <p className="font-code text-xs uppercase tracking-widest text-tertiary mb-4">Contact</p>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-gradient tracking-tight mb-16">
          Have an idea? <br className="hidden sm:block" /> Let&apos;s build it.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Channels */}
        <Reveal className="lg:col-span-5" delay={0.05}>
          <div className="flex flex-col gap-6 h-full">
            <div className="glass-panel rounded-xl p-8">
              <p className="font-code text-[11px] uppercase tracking-widest text-on-surface-variant/70 mb-3">
                Preferred Method
              </p>
              <a
                href={contact.fiverr.href}
                className="inline-flex items-center justify-center w-full px-6 py-4 rounded-full bg-white text-black font-code text-sm uppercase tracking-widest font-semibold hover:shadow-[0_0_30px_rgba(252,255,212,0.35)] transition-all duration-300"
              >
                {contact.fiverr.label}
              </a>
              <p className="font-body text-xs text-on-surface-variant/70 mt-3 text-center">{contact.fiverr.note}</p>
            </div>

            <div className="glass-panel rounded-xl p-8 flex-1">
              <p className="font-code text-[11px] uppercase tracking-widest text-on-surface-variant/70 mb-5">
                Other Channels
              </p>
              <div className="flex flex-col divide-y divide-white/5">
                {OTHER_CHANNELS.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between py-4 first:pt-0 last:pb-0"
                  >
                    <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/70 group-hover:text-tertiary transition-colors">
                      {channel.label}
                    </span>
                    <span className="font-body text-sm text-on-surface group-hover:text-white transition-colors">
                      {channel.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Message form */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <form className="glass-panel rounded-xl p-8 md:p-10 h-full flex flex-col gap-6">
            <p className="font-code text-[11px] uppercase tracking-widest text-tertiary mb-1">Send a Message</p>

            <label className="flex flex-col gap-2">
              <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/70">&gt; name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="bg-transparent border-b border-white/10 focus:border-tertiary outline-none py-2 font-body text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/70">&gt; email</span>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="bg-transparent border-b border-white/10 focus:border-tertiary outline-none py-2 font-body text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors"
              />
            </label>

            <label className="flex flex-col gap-2 flex-1">
              <span className="font-code text-xs uppercase tracking-widest text-on-surface-variant/70">&gt; message</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                className="bg-transparent border-b border-white/10 focus:border-tertiary outline-none py-2 font-body text-sm text-on-background placeholder:text-on-surface-variant/50 transition-colors resize-none"
              />
            </label>

            <button
              type="submit"
              className="mt-auto self-start px-8 py-4 rounded-full bg-white text-black font-code text-xs uppercase tracking-widest font-semibold hover:shadow-[0_0_30px_rgba(252,255,212,0.35)] transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
