"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, type SpringOptions } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, [role='button']";
const TRAIL_COUNT = 8;

function TrailDot({
  sourceX,
  sourceY,
  index,
  hovering,
}: {
  sourceX: ReturnType<typeof useMotionValue<number>>;
  sourceY: ReturnType<typeof useMotionValue<number>>;
  index: number;
  hovering: boolean;
}) {
  const spring: SpringOptions = {
    stiffness: 320 - index * 18,
    damping: 22 + index * 2,
    mass: 0.4 + index * 0.05,
  };
  const x = useSpring(sourceX, spring);
  const y = useSpring(sourceY, spring);
  const size = Math.max(3, 8 - index * 0.6);
  const opacity = 1 - index / (TRAIL_COUNT + 2);

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[99] pointer-events-none rounded-full bg-tertiary"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovering ? size * 1.4 : size,
        height: hovering ? size * 1.4 : size,
        opacity: hovering ? opacity * 0.7 : opacity,
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsTouch(!hasFinePointer);
    if (!hasFinePointer) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-0 pointer-events-none rounded-full"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(252,255,212,0.35) 0%, rgba(252,255,212,0) 70%)",
        }}
        animate={{
          width: hovering ? 150 : 90,
          height: hovering ? 150 : 90,
          opacity: hovering ? 0.6 : 0.4,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <TrailDot key={i} sourceX={x} sourceY={y} index={i} hovering={hovering} />
      ))}

      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-tertiary"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ width: hovering ? 12 : 9, height: hovering ? 12 : 9 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      <style jsx global>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
