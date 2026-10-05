import { motion, useReducedMotion, type Variants } from "framer-motion";

interface RevealHeadingProps {
  /** Heading text, split on spaces. Each word slides up inside a clip mask. */
  text: string;
  className?: string;
  /** Delay before the first word animates. */
  delay?: number;
  /** Seconds between each word. */
  stagger?: number;
  duration?: number;
  /** Slide downward instead of the default upward reveal. */
  direction?: "up" | "down";
}

const HIDDEN_OFFSET = "105%";

/**
 * Word-by-word heading reveal.
 *
 * The in-view trigger lives on the wrapper rather than on each word: a word
 * starts translated a full line height below its slot, so watching the word
 * itself would mean the observer never sees it enter the viewport.
 */
export default function RevealHeading({
  text,
  className = "",
  delay = 0,
  stagger = 0.06,
  duration = 0.85,
  direction = "up",
}: RevealHeadingProps) {
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { delayChildren: delay, staggerChildren: stagger },
    },
  };

  const word: Variants = {
    hidden: reducedMotion
      ? { opacity: 0 }
      : { y: direction === "up" ? HIDDEN_OFFSET : `-${HIDDEN_OFFSET}`, opacity: 0 },
    visible: reducedMotion
      ? { opacity: 1 }
      : { y: "0%", opacity: 1 },
  };

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -10% 0px" }}
      variants={container}
    >
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((item, index) => (
          <span key={`${item}-${index}`} className="reveal-mask">
            <motion.span
              className="inline-block will-change-transform"
              variants={word}
              transition={{
                duration: reducedMotion ? 0.3 : duration,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {item}
              {index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.span>
  );
}