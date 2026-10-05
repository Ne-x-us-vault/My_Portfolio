import { motion, useReducedMotion } from "framer-motion";

interface AuroraProps {
  className?: string;
  /** Reduce the number of blobs for tighter layouts. */
  compact?: boolean;
}

interface Blob {
  color: string;
  size: string;
  top: string;
  left: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}

const BLOBS: Blob[] = [
  {
    color: "#B600A8",
    size: "min(70vw, 620px)",
    top: "-14%",
    left: "-12%",
    x: 60,
    y: 40,
    duration: 18,
    delay: 0,
    opacity: 0.3,
  },
  {
    color: "#7621B0",
    size: "min(55vw, 480px)",
    top: "18%",
    left: "48%",
    x: -50,
    y: 30,
    duration: 22,
    delay: 1.4,
    opacity: 0.26,
  },
  {
    color: "#BE4C00",
    size: "min(60vw, 520px)",
    top: "-6%",
    left: "62%",
    x: -40,
    y: 50,
    duration: 20,
    delay: 0.7,
    opacity: 0.22,
  },
];

/**
 * Slowly drifting colour fields behind the hero. Purely decorative, and
 * disabled entirely when the visitor asks for reduced motion.
 */
export default function Aurora({ className = "", compact = false }: AuroraProps) {
  const reducedMotion = useReducedMotion();
  const blobs = compact ? BLOBS.slice(0, 2) : BLOBS;

  if (reducedMotion) return null;

  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      {blobs.map((blob) => (
        <motion.div
          key={blob.color}
          className="absolute rounded-full"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 68%)`,
            filter: "blur(90px)",
            opacity: blob.opacity,
          }}
          animate={{ x: [0, blob.x, -blob.x * 0.6, 0], y: [0, blob.y, -blob.y * 0.5, 0] }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}