import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const HOVER_SELECTOR =
  'a, button, [data-cursor="hover"], input, textarea, select, [role="button"]';

const LABEL_SELECTOR = "[data-cursor-label]";

/**
 * Custom cursor: a lagging ring that reacts to interactive elements and can
 * display a label pulled from `data-cursor-label`. Pointer-driven values keep
 * the work off the React render path.
 */
export default function Cursor() {
  const reducedMotion = useReducedMotion();
  const [enabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: fine)").matches,
  );
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [label, setLabel] = useState<string | null>(null);

  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const dotX = useSpring(pointerX, { stiffness: 1400, damping: 80, mass: 0.2 });
  const dotY = useSpring(pointerY, { stiffness: 1400, damping: 80, mass: 0.2 });
  const ringX = useSpring(pointerX, { stiffness: 220, damping: 26, mass: 0.6 });
  const ringY = useSpring(pointerY, { stiffness: 220, damping: 26, mass: 0.6 });

  useEffect(() => {
    if (!enabled || reducedMotion) return;
    document.documentElement.dataset.customCursor = "true";

    const onMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      setVisible(true);

      const target = event.target as Element | null;
      setHovered(Boolean(target?.closest?.(HOVER_SELECTOR)));
      setLabel(
        target?.closest?.(LABEL_SELECTOR)?.getAttribute("data-cursor-label") ??
          null,
      );
    };

    const onLeave = () => setVisible(false);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    document.addEventListener("pointerleave", onLeave);

    return () => {
      document.documentElement.removeAttribute("data-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, pointerX, pointerY, reducedMotion]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[70] hidden md:block"
    >
      <motion.span
        className="absolute top-0 left-0 rounded-full bg-[#D7E2EA]"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: pressed ? 0.6 : hovered ? 0.35 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute top-0 left-0 flex items-center justify-center rounded-full border border-[#D7E2EA]/70 font-light uppercase tracking-[0.2em] text-[#D7E2EA] backdrop-blur-[2px]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: label ? 96 : hovered ? 44 : 28,
          height: label ? 96 : hovered ? 44 : 28,
          opacity: visible ? (label ? 0.95 : hovered ? 0.8 : 0.45) : 0,
          rotate: label ? 0 : 0,
          backgroundColor: label
            ? "rgba(12,12,12,0.55)"
            : "rgba(12,12,12,0)",
          transition: { type: "spring", stiffness: 320, damping: 28 },
        }}
      >
        <motion.span
          className="text-[0.6rem] whitespace-nowrap"
          animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.span>
      </motion.span>
    </div>
  );
}