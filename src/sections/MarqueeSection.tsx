import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";

const ROW1_IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
];

const ROW2_IMAGES = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
];

/** Seconds for one full pass of a row, so slower rows feel more relaxed. */
const BASE_DURATION = 46;

function Tile({ src }: { src: string }) {
  return (
    <motion.img
      src={src}
      alt="Work preview"
      width={420}
      height={270}
      loading="lazy"
      className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

/**
 * Infinite marquee row. The list is duplicated once so the -50% keyframe loops
 * seamlessly, and scroll velocity adds a skew so fast scrolling visibly bends
 * the strip.
 */
function ImageRow({
  images,
  duration,
  reverse = false,
  skew,
}: {
  images: string[];
  duration: number;
  reverse?: boolean;
  skew: MotionValue<number> | number;
}) {
  const doubled = [...images, ...images];
  const from = reverse ? "-50%" : "0%";
  const to = reverse ? "0%" : "-50%";

  return (
    <motion.div
      className="flex w-max gap-3 will-change-transform"
      style={{ skewX: skew }}
      animate={{ x: [from, to] }}
      transition={{
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {doubled.map((src, i) => (
        <Tile key={`${src}-${i}`} src={src} />
      ))}
    </motion.div>
  );
}

export default function MarqueeSection() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), {
    stiffness: 260,
    damping: 40,
    restDelta: 1,
  });
  const skew = useTransform(velocity, [-2000, 0, 2000], [-4, 0, 4]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3 [perspective:1400px]">
        <ImageRow
          images={ROW1_IMAGES}
          duration={BASE_DURATION}
          skew={reducedMotion ? 0 : skew}
        />
        <ImageRow
          images={ROW2_IMAGES}
          duration={BASE_DURATION * 1.3}
          reverse
          skew={reducedMotion ? 0 : skew}
        />
      </div>
    </section>
  );
}