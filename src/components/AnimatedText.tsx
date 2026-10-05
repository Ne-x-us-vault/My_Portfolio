import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
  reduced: boolean;
}

/**
 * A single character lights up as the scroll position sweeps past it, with a
 * small lift and blur so the paragraph reads as a wave of light.
 */
function Char({ char, progress, start, end, reduced }: CharProps) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const y = useTransform(progress, [start, end], [reduced ? 0 : 14, 0]);
  const blur = useTransform(progress, [start, end], [reduced ? 0 : 5, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.span style={{ opacity, y, filter }} className="inline-block">
      {char}
    </motion.span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

/**
 * Scroll-scrubbed paragraph: each character fades from dim to full as it
 * enters the reading band, so the copy reveals itself top to bottom.
 */
export default function AnimatedText({
  text,
  className = "",
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reducedMotion = useReducedMotion();
  const reduced = Boolean(reducedMotion);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.25"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  const chars = text.split("");

  return (
    <p
      ref={ref}
      className={`relative ${className}`}
      style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
    >
      <span className="invisible" aria-hidden="true">
        {text}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {chars.map((char, i) => (
          <Char
            key={`${char}-${i}`}
            char={char}
            progress={progress}
            start={(i / chars.length) * 0.9}
            end={((i + 1) / chars.length) * 0.9 + 0.1}
            reduced={reduced}
          />
        ))}
      </span>
    </p>
  );
}