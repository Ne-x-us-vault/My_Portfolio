import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Radius of the radial highlight in pixels. */
  radius?: number;
  /** Highlight colour as an "r, g, b" triplet. */
  color?: string;
  /** Maximum highlight opacity (0-1). */
  intensity?: number;
  /** Perspective distance for the tilt effect. */
  perspective?: number;
  /** Maximum tilt in degrees on each axis. */
  maxTilt?: number;
  /** Lift scale applied while hovered. */
  hoverScale?: number;
  /** Text shown in the custom cursor while hovering the card. */
  cursorLabel?: string;
  style?: CSSProperties;
}

const SPRING = { stiffness: 240, damping: 26, mass: 0.4 };

/**
 * Card that tracks the pointer to drive a radial highlight plus a subtle 3D
 * tilt. Pointer maths runs through motion values, so moving the mouse never
 * triggers a React re-render.
 */
export default function SpotlightCard({
  children,
  className = "",
  radius = 340,
  color = "215, 226, 234",
  intensity = 0.13,
  perspective = 1200,
  maxTilt = 4,
  hoverScale = 1.008,
  cursorLabel,
  style,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const pointerX = useMotionValue(-9999);
  const pointerY = useMotionValue(-9999);
  const tiltXValue = useMotionValue(0);
  const tiltYValue = useMotionValue(0);
  const glowValue = useMotionValue(0);

  const pointerXSmooth = useSpring(pointerX, SPRING);
  const pointerYSmooth = useSpring(pointerY, SPRING);
  const tiltX = useSpring(tiltXValue, SPRING);
  const tiltY = useSpring(tiltYValue, SPRING);
  const glow = useSpring(glowValue, SPRING);

  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${pointerXSmooth}px ${pointerYSmooth}px, rgba(${color}, ${intensity}), transparent 70%)`;

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      pointerX.set(localX);
      pointerY.set(localY);

      const halfWidth = rect.width / 2 || 1;
      const halfHeight = rect.height / 2 || 1;
      tiltYValue.set(((localX - halfWidth) / halfWidth) * maxTilt);
      tiltXValue.set(-((localY - halfHeight) / halfHeight) * maxTilt);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => {
      setHovered(false);
      tiltXValue.set(0);
      tiltYValue.set(0);
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerenter", onEnter);
    node.addEventListener("pointerleave", onLeave);
    return () => {
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerenter", onEnter);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [maxTilt, pointerX, pointerY, reducedMotion, tiltXValue, tiltYValue]);

  useEffect(() => {
    glowValue.set(hovered ? 1 : 0);
  }, [glowValue, hovered]);

  return (
    <motion.div
      ref={ref}
      data-cursor={cursorLabel ? "hover" : undefined}
      data-cursor-label={cursorLabel}
      style={{
        ...style,
        rotateX: reducedMotion ? 0 : tiltX,
        rotateY: reducedMotion ? 0 : tiltY,
        transformPerspective: perspective,
      }}
      whileHover={reducedMotion ? undefined : { scale: hoverScale }}
      transition={SPRING}
      className={`relative ${className}`}
    >
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background, opacity: glow }}
      />
      {children}
    </motion.div>
  );
}