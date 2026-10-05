import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Thin gradient progress bar pinned to the top of the viewport, plus a
 * percentage readout that fades in after the first scroll.
 */
export default function ScrollProgress() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    return scrollYProgress.on("change", (value) => {
      setPercent(Math.round(value * 100));
    });
  }, [reducedMotion, scrollYProgress]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[65]"
    >
      <motion.div
        className="h-[2px] origin-left"
        style={{
          scaleX: reducedMotion ? 0 : scaleX,
          background:
            "linear-gradient(90deg, #18011F 0%, #B600A8 35%, #7621B0 65%, #BE4C00 100%)",
          boxShadow: "0 0 12px rgba(182, 0, 168, 0.6)",
        }}
      />
      <motion.div
        className="flex justify-end pr-4 pt-2"
        animate={{ opacity: percent > 2 ? 0.85 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-[#D7E2EA]/60 font-light tracking-[0.3em] text-[0.6rem] tabular-nums">
          {percent}%
        </span>
      </motion.div>
    </div>
  );
}