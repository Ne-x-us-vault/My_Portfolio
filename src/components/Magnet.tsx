import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

interface MagnetProps {
  children: ReactNode;
  /** Extra px around the element where the pull starts. */
  padding?: number;
  /** How far the element travels per px of pointer offset. */
  strength?: number;
  /** Scale applied while the pointer is inside the field. */
  activeScale?: number;
  className?: string;
}

/**
 * Magnetic wrapper: the child drifts toward the pointer while it is nearby and
 * springs back on exit. Uses motion values so pointer movement does not cause
 * React renders, and is a no-op for reduced-motion visitors.
 */
export default function Magnet({
  children,
  padding = 90,
  strength = 0.28,
  activeScale = 1.04,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const xValue = useMotionValue(0);
  const yValue = useMotionValue(0);
  const scaleValue = useMotionValue(1);
  const x = useSpring(xValue, { stiffness: 260, damping: 22, mass: 0.5 });
  const y = useSpring(yValue, { stiffness: 260, damping: 22, mass: 0.5 });
  const scale = useSpring(scaleValue, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const offsetX = event.clientX - centerX;
      const offsetY = event.clientY - centerY;
      const distance = Math.hypot(offsetX, offsetY);
      const reach =
        Math.hypot(rect.width, rect.height) / 2 + padding;

      if (distance < reach) {
        xValue.set(offsetX * strength);
        yValue.set(offsetY * strength);
        scaleValue.set(activeScale);
      } else {
        xValue.set(0);
        yValue.set(0);
        scaleValue.set(1);
      }
    };

    const onLeave = () => {
      xValue.set(0);
      yValue.set(0);
      scaleValue.set(1);
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [
    activeScale,
    padding,
    reducedMotion,
    scaleValue,
    strength,
    xValue,
    yValue,
  ]);

  return (
    <motion.div
      ref={ref}
      style={{ x, y, scale }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}