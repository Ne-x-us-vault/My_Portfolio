import { useEffect, useRef, useState, type RefObject } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Aurora from "../components/Aurora";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import portrait from "../assets/me.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

/** Floating pill nav that appears once the hero has scrolled out of view. */
function FloatingNav() {
  const reducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    return scrollY.on("change", (value) => {
      setShown(value > window.innerHeight * 0.9);
    });
  }, [reducedMotion, scrollY]);

  if (reducedMotion) return null;

  return (
    <motion.nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-5 z-40 mx-auto w-fit px-4"
      initial={false}
      animate={{
        y: shown ? 0 : 130,
        opacity: shown ? 1 : 0,
        scale: shown ? 1 : 0.92,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
    >
      <ul className="flex items-center gap-1 rounded-full border border-[#D7E2EA]/15 bg-[#0C0C0C]/70 px-3 py-2 backdrop-blur-xl">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              data-cursor="hover"
              className="block rounded-full px-3 py-1.5 text-[#D7E2EA]/70 font-medium uppercase tracking-wider text-[0.7rem] transition-colors duration-200 hover:bg-[#D7E2EA]/10 hover:text-[#D7E2EA] sm:px-4 sm:text-xs"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

function Navbar({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, -60]);
  const opacity = useTransform(progress, [0, 0.5], [1, 0]);
  const blur = useTransform(progress, [0, 1], ["blur(0px)", "blur(6px)"]);
  const filter = useTransform(blur, (value) => `blur(${value})`);

  return (
    <motion.div style={{ y, opacity, filter }} className="relative z-20">
      <motion.nav
        className="flex w-full items-center justify-between gap-8 px-6 md:px-10 pt-6 md:pt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.a
          href="#"
          data-cursor="hover"
          className="hero-heading hidden sm:block shrink-0 font-bold uppercase tracking-widest text-base md:text-xl lg:text-2xl"
          whileHover={{ scale: 1.04 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
        >
          Jaswa<span className="text-[#D7E2EA]">.</span>
        </motion.a>
        <ul className="flex flex-1 items-center justify-between sm:justify-end sm:gap-8 lg:gap-12">
          {NAV_LINKS.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={link.href}
                data-cursor="hover"
                className="group relative block text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]"
              >
                <span className="transition-opacity duration-200 group-hover:opacity-60">
                  {link.label}
                </span>
                <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#646973] to-[#BBCCD7] transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.nav>
    </motion.div>
  );
}

/** Oversized wordmark that masks upward and fades as the hero scrolls out. */
function HeroHeading({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, -120]);
  const scale = useTransform(progress, [0, 1], [1, 0.95]);
  const opacity = useTransform(progress, [0, 0.5], [1, 0]);
  const words = ["Hi,", "i'm", "jaswa"];

  return (
    <motion.div
      style={{ y, scale, opacity, transformPerspective: 1200 }}
      className="overflow-hidden mt-6 sm:mt-4 md:-mt-5"
    >
      <h1 className="heading-sheen w-full text-center font-black uppercase leading-none tracking-tight whitespace-nowrap text-[15vw] sm:text-[15.5vw] lg:text-[16vw]">
        {words.map((word, index) => (
          <span key={word} className="reveal-mask">
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 0.15 + index * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </h1>
    </motion.div>
  );
}

function BottomBar({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, 80]);
  const opacity = useTransform(progress, [0, 0.4], [1, 0]);

  return (
    <motion.div style={{ y, opacity }} className="relative z-20">
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <motion.p
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          a mobile app developer &amp; ui/ux designer working across ai, devops and embedded systems
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          <Magnet strength={0.22} padding={70}>
            <ContactButton />
          </Magnet>
        </motion.div>
      </div>
    </motion.div>
  );
}

/** Scroll cue that fades the moment the user starts scrolling. */
function ScrollCue({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.08], [1, 0]);
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <motion.a
      href="#about"
      aria-label="Scroll to about section"
      data-cursor="hover"
      style={{ opacity }}
      className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
    >
      <span className="text-[#D7E2EA]/50 font-light uppercase tracking-[0.3em] text-[0.6rem]">
        Scroll
      </span>
      <span className="relative flex h-9 w-5 justify-center rounded-full border border-[#D7E2EA]/30 pt-1.5">
        <span
          className="h-1.5 w-0.5 rounded-full bg-[#D7E2EA]/70"
          style={{ animation: "scroll-cue 1.9s ease-in-out infinite" }}
        />
      </span>
    </motion.a>
  );
}

/**
 * Portrait that tilts on scroll, drifts with the pointer for depth, and sits
 * over a pulsing halo so the hero keeps a clear focal point.
 */
function HeroPortrait({
  progress,
  sectionRef,
}: {
  progress: MotionValue<number>;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const reducedMotion = useReducedMotion();
  const rotateX = useTransform(progress, [0, 1], [0, -55]);
  const rotateY = useTransform(progress, [0, 1], [0, -12]);
  const scale = useTransform(progress, [0, 1], [1, 0.55]);
  const y = useTransform(progress, [0, 1], [0, -160]);
  const fade = useTransform(progress, [0, 0.4], [1, 0]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 110, damping: 20, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 110, damping: 20, mass: 0.6 });
  const shiftX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const shiftY = useTransform(smoothY, [-1, 1], [-12, 12]);
  const tiltX = useTransform(smoothY, [-1, 1], [5, -5]);
  const tiltY = useTransform(smoothX, [-1, 1], [-7, 7]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || reducedMotion) return;

    const onMove = (event: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      pointerX.set(
        clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1),
      );
      pointerY.set(
        clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1),
      );
    };

    const onLeave = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [pointerX, pointerY, reducedMotion, sectionRef]);

  return (
    <motion.div
      style={{ opacity: fade }}
      className="absolute left-1/2 -translate-x-1/2 z-10 top-[75%] -translate-y-1/2 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 48 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {!reducedMotion && (
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B600A8]/30 blur-[70px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
        <motion.img
          src={portrait}
          alt="Jaswa J R portrait"
          className="relative w-full h-auto origin-center will-change-transform"
          style={{
            y,
            x: reducedMotion ? 0 : shiftX,
            rotateX: reducedMotion ? rotateX : tiltX,
            rotateY: reducedMotion ? rotateY : tiltY,
            scale,
            translateY: reducedMotion ? 0 : shiftY,
            transformPerspective: 1000,
          }}
        />
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-8 bottom-0 h-8 rounded-[50%] bg-black/70 blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col overflow-x-clip"
    >
      <Aurora className="absolute inset-0 z-0" />
      <Navbar progress={scrollYProgress} />
      <HeroHeading progress={scrollYProgress} />
      <BottomBar progress={scrollYProgress} />
      <HeroPortrait progress={scrollYProgress} sectionRef={sectionRef} />
      <ScrollCue progress={scrollYProgress} />
      <FloatingNav />
    </section>
  );
}