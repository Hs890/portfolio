"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, type SpringOptions } from "framer-motion";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, [role='button']";
const TRAIL_COUNT = 5;
const BASE_DOT_SIZE = 10;

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
  const scale = (Math.max(3, 8 - index * 0.6) / BASE_DOT_SIZE) * (hovering ? 1.4 : 1);
  const opacity = (1 - index / (TRAIL_COUNT + 2)) * (hovering ? 0.7 : 1);

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[99] pointer-events-none rounded-full bg-tertiary"
      style={{
        x,
        y,
        width: BASE_DOT_SIZE,
        height: BASE_DOT_SIZE,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ scale, opacity }}
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

    let ticking = false;
    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const target = e.target as HTMLElement;
          setHovering(Boolean(target.closest(INTERACTIVE_SELECTOR)));
          ticking = false;
        });
      }
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
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
          width: 150,
          height: 150,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(252,255,212,0.35) 0%, rgba(252,255,212,0) 70%)",
        }}
        animate={{ scale: hovering ? 1 : 0.6, opacity: hovering ? 0.6 : 0.4 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <TrailDot key={i} sourceX={x} sourceY={y} index={i} hovering={hovering} />
      ))}

      <motion.div
        aria-hidden
        className="fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-tertiary"
        style={{ x, y, width: 12, height: 12, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovering ? 1 : 0.75 }}
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
