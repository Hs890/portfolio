"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { skillGroups } from "@/lib/data";

export default function SkillsShowcase({ groups }: { groups: typeof skillGroups }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {groups.map((group, i) => (
          <button
            key={group.group}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full font-code text-xs uppercase tracking-widest border transition-all duration-300 ${
              i === active
                ? "border-tertiary/40 bg-tertiary/10 text-on-tertiary-container"
                : "border-white/10 text-on-surface-variant hover:border-white/20 hover:text-on-surface"
            }`}
          >
            {group.group}
          </button>
        ))}
      </div>

      <div className="glass-panel rounded-xl p-8 md:p-12 min-h-[260px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={groups[active].group}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            {groups[active].items.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 font-body text-sm text-on-surface hover:border-tertiary/40 hover:bg-tertiary/[0.06] hover:text-white transition-all duration-300 cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
