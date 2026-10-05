import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  /** Explicit pixel offset; takes precedence over `direction`. */
  x?: number;
  y?: number;
  direction?: Direction;
  /** Start slightly scaled down/up for a softer entrance. */
  scale?: number;
  /** Blur the element on the way in. */
  blur?: boolean;
  className?: string;
  as?: "div" | "span" | "li" | "section";
}

const OFFSETS: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll-triggered entrance. Defaults to a soft rise, and supports directional,
 * scaled and blurred entrances for variety between sections.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  x,
  y,
  direction = "up",
  scale,
  blur = false,
  className = "",
  as = "div",
}: FadeInProps) {
  const reducedMotion = useReducedMotion();
  const fallback = OFFSETS[direction];
  const offsetX = x ?? fallback.x;
  const offsetY = y ?? fallback.y;

  const variants: Variants = {
    hidden: reducedMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          x: offsetX,
          y: offsetY,
          scale: scale ?? 1,
          filter: blur ? "blur(10px)" : "blur(0px)",
        },
    visible: reducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
        },
  };

  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -12% 0px", amount: 0.15 }}
      variants={variants}
      transition={{
        duration: reducedMotion ? 0.3 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </Component>
  );
}