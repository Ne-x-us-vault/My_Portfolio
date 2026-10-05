import { useRef, type RefObject } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import RevealHeading from "../components/RevealHeading";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import AnimatedText from "../components/AnimatedText";

interface DecorImage {
  url: string;
  alt: string;
  className: string;
  delay: number;
  x: number;
  /** Continuous float offsets, in pixels. */
  float: { y: number; duration: number };
  /** Depth multiplier for scroll parallax. */
  depth: number;
}

const DECOR: DecorImage[] = [
  {
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    alt: "Moon icon",
    className:
      "w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    delay: 0.1,
    x: -80,
    float: { y: -22, duration: 7.5 },
    depth: 1.4,
  },
  {
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    alt: "3D object",
    className:
      "w-[100px] sm:w-[140px] md:w-[180px] absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    delay: 0.25,
    x: -80,
    float: { y: 18, duration: 8.5 },
    depth: 0.8,
  },
  {
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    alt: "Lego icon",
    className:
      "w-[120px] sm:w-[160px] md:w-[210px] absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    delay: 0.15,
    x: 80,
    float: { y: 20, duration: 6.8 },
    depth: 1.1,
  },
  {
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    alt: "3D group",
    className:
      "w-[130px] sm:w-[170px] md:w-[220px] absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    delay: 0.3,
    x: 80,
    float: { y: -18, duration: 9.2 },
    depth: 0.7,
  },
];

const ABOUT_TEXT =
  "i build across mobile applications, ui/ux, and embedded systems, with a growing focus on robotics and devops. i favor practical, bolt-on solutions over full system rebuilds, and i work fastest under a deadline -- most of my shipped projects started as hackathon builds. based in tamil nadu, india.";

const FACTS = [
  { value: "03", label: "shipped products" },
  { value: "08", label: "service areas" },
  { value: "∞", label: "hackathon builds" },
];

function DecorImage({
  item,
  sectionRef,
}: {
  item: DecorImage;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y = useSpring(
    useTransform(drift, (value) => value * item.depth),
    { stiffness: 90, damping: 26, restDelta: 0.5 },
  );

  return (
    <motion.div
      className={item.className}
      initial={{ opacity: 0, x: item.x, scale: 0.8 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div style={reducedMotion ? undefined : { y }}>
        <motion.img
          src={item.url}
          alt={item.alt}
          className="w-full h-auto will-change-transform"
          animate={
            reducedMotion
              ? undefined
              : { y: [0, item.float.y, 0], rotate: [0, 5, -5, 0] }
          }
          transition={{
            duration: item.float.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {DECOR.map((item) => (
        <DecorImage key={item.url} item={item} sectionRef={sectionRef} />
      ))}

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          <RevealHeading text="About me" delay={0} />
        </h2>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatedText
              text={ABOUT_TEXT}
              className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            />
          </motion.div>

          <motion.ul
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }}
          >
            {FACTS.map((fact) => (
              <motion.li
                key={fact.label}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                className="flex min-w-[140px] flex-col items-center gap-1 rounded-3xl border border-[#D7E2EA]/12 bg-white/[0.02] px-6 py-4 text-center"
              >
                <span
                  className="hero-heading font-black leading-none"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.6rem)" }}
                >
                  {fact.value}
                </span>
                <span className="text-[#D7E2EA]/55 font-light uppercase tracking-[0.2em] text-[0.6rem]">
                  {fact.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Magnet strength={0.24} padding={80}>
              <ContactButton />
            </Magnet>
          </motion.div>
        </div>
      </div>
    </section>
  );
}