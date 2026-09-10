import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

function Char({ char, progress, start, end }: CharProps) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p
      ref={ref}
      className={`relative ${className}`}
      style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
    >
      <span className="invisible">{text}</span>
      <span className="absolute inset-0">
        {chars.map((char, i) => (
          <Char
            key={i}
            char={char}
            progress={scrollYProgress}
            start={i / chars.length}
            end={(i + 1) / chars.length}
          />
        ))}
      </span>
    </p>
  );
}