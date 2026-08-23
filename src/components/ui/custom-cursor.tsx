"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(dotX, { stiffness: 420, damping: 32, mass: 0.6 });
  const ringY = useSpring(dotY, { stiffness: 420, damping: 32, mass: 0.6 });
  const trailX = useSpring(dotX, { stiffness: 180, damping: 28, mass: 0.8 });
  const trailY = useSpring(dotY, { stiffness: 180, damping: 28, mass: 0.8 });

  const [hover, setHover] = useState<"default" | "hover" | "view">("default");
  const [hidden, setHidden] = useState(true);
  const [isTouch, setIsTouch] = useState(true); // start true to avoid flash, then detect

  useEffect(() => {
    const touch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;
    setIsTouch(touch);
    if (touch) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      setHidden(false);
    };
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      if (t.closest("[data-cursor='view']")) setHover("view");
      else if (t.closest("a, button, [data-cursor='hover']")) setHover("hover");
      else setHover("default");
    };
    const onDown = () => {
      // click feedback
      setHover((h) => h);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousemove", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [dotX, dotY]);

  if (isTouch) return null;

  return (
    <>
      {/* trailing glow — passion: subtle */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.045] backdrop-blur-md lg:block"
        style={{ x: trailX, y: trailY, opacity: hidden ? 0 : 0.85 }}
      />

      {/* ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border lg:flex"
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : 1 }}
        animate={{
          width: hover === "view" ? 88 : hover === "hover" ? 54 : 26,
          height: hover === "view" ? 88 : hover === "hover" ? 54 : 26,
          borderColor: hover === "view" ? "rgba(255,255,255,0.95)" : hover === "hover" ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.22)",
          backgroundColor: hover === "view" ? "rgba(255,255,255,0.98)" : hover === "hover" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <motion.span animate={{ opacity: hover === "view" ? 1 : 0, scale: hover === "view" ? 1 : 0.85 }} className="font-mono text-[10px] font-semibold tracking-[0.14em] text-black">
          VIEW
        </motion.span>
        <motion.span animate={{ opacity: hover === "hover" ? 1 : 0 }} className="absolute text-[13px] font-light text-white/75">
          ↗
        </motion.span>
      </motion.div>

      {/* dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.95),0_0_22px_rgba(122,124,255,0.55)] lg:block"
        style={{ x: dotX, y: dotY, opacity: hidden ? 0 : 1 }}
        animate={{ scale: hover !== "default" ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />

      {/* crosshair — only default */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden -translate-x-1/2 -translate-y-1/2 lg:block"
        style={{ x: ringX, y: ringY, opacity: hidden ? 0 : hover === "default" ? 0.32 : 0 }}
      >
        <div className="relative h-7 w-7">
          <span className="absolute left-1/2 top-0 h-1 w-px -translate-x-1/2 bg-white/45" />
          <span className="absolute bottom-0 left-1/2 h-1 w-px -translate-x-1/2 bg-white/45" />
          <span className="absolute left-0 top-1/2 h-px w-1 -translate-y-1/2 bg-white/45" />
          <span className="absolute right-0 top-1/2 h-px w-1 -translate-y-1/2 bg-white/45" />
        </div>
      </motion.div>
    </>
  );
}
