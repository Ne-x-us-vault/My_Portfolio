import { motion, useReducedMotion } from "framer-motion";

interface ContactButtonProps {
  className?: string;
  href?: string;
  label?: string;
}

/**
 * Primary gradient CTA. The surface keeps a moving highlight so it never reads
 * as a flat block of colour, and it lifts slightly on hover.
 */
export default function ContactButton({
  className = "",
  href = "#contact",
  label = "Contact Me",
}: ContactButtonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      data-cursor="hover"
      whileHover={reducedMotion ? undefined : { scale: 1.045 }}
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className={`group relative inline-block overflow-hidden rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base no-underline cursor-pointer select-none ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        backgroundSize: "200% 200%",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid #fff",
        outlineOffset: "-3px",
      }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.45),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full motion-reduce:hidden"
      />
      <span className="relative">{label}</span>
    </motion.a>
  );
}