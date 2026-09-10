import { useEffect, useRef, useState, type RefObject } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import ContactButton from "../components/ContactButton";
import FadeIn from "../components/FadeIn";
import portrait from "../assets/me.png";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

function Navbar({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, -60]);
  const opacity = useTransform(progress, [0, 0.5], [1, 0]);
  return (
    <motion.div style={{ y, opacity }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex w-full items-center justify-between gap-8 px-6 md:px-10 pt-6 md:pt-8">
          <a
            href="#"
            className="hero-heading hidden sm:block shrink-0 font-bold uppercase tracking-widest text-base md:text-xl lg:text-2xl"
          >
            Jaswa<span className="text-[#D7E2EA]">.</span>
          </a>
          <ul className="flex flex-1 items-center justify-between sm:justify-end sm:gap-8 lg:gap-12">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
                >
                  {link.label}
                  <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#646973] to-[#BBCCD7] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </FadeIn>
    </motion.div>
  );
}

function HeroHeading({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, -120]);
  const scale = useTransform(progress, [0, 1], [1, 0.95]);
  const opacity = useTransform(progress, [0, 0.5], [1, 0]);
  return (
    <motion.div
      style={{ y, scale, opacity, transformPerspective: 1200 }}
      className="overflow-hidden mt-6 sm:mt-4 md:-mt-5"
    >
      <FadeIn delay={0.15} y={40}>
        <h1 className="hero-heading w-full text-center font-black uppercase leading-none tracking-tight whitespace-nowrap text-[15vw] sm:text-[15.5vw] lg:text-[16vw]">
          Hi, i&apos;m jaswa
        </h1>
      </FadeIn>
    </motion.div>
  );
}

function BottomBar({ progress }: { progress: MotionValue<number> }) {
  const y = useTransform(progress, [0, 1], [0, 80]);
  const opacity = useTransform(progress, [0, 0.4], [1, 0]);
  return (
    <motion.div style={{ y, opacity }}>
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            a mobile app developer &amp; ui/ux designer crafting striking, unforgettable digital experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </motion.div>
  );
}

function HeroPortrait({
  progress,
  sectionRef,
}: {
  progress: MotionValue<number>;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const rotateX = useTransform(progress, [0, 1], [0, -55]);
  const rotateY = useTransform(progress, [0, 1], [0, -12]);
  const scale = useTransform(progress, [0, 1], [1, 0.55]);
  const y = useTransform(progress, [0, 1], [0, -160]);
  const [fade, setFade] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const progress = clamp(-rect.top / section.offsetHeight, 0, 1);
      setFade(progress <= 0.4 ? 1 - progress / 0.4 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [sectionRef]);

  return (
    <FadeIn delay={0.6} y={0}>
      <motion.div
        style={{ opacity: fade }}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-[75%] -translate-y-1/2 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <motion.img
          src={portrait}
          alt="Jaswa J R portrait"
          className="w-full h-auto origin-center"
          style={{ y, rotateX, rotateY, scale, transformPerspective: 1000 }}
        />
      </motion.div>
    </FadeIn>
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
      <Navbar progress={scrollYProgress} />
      <HeroHeading progress={scrollYProgress} />
      <BottomBar progress={scrollYProgress} />
      <HeroPortrait progress={scrollYProgress} sectionRef={sectionRef} />
    </section>
  );
}