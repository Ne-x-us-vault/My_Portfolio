import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

/** Outline CTA that fills from the bottom on hover and nudges its arrow. */
export default function LiveProjectButton({
  href,
  label = "View Repo",
  className = "",
}: LiveProjectButtonProps) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="hover"
      data-cursor-label="open"
      whileHover={reducedMotion ? undefined : { scale: 1.04 }}
      whileTap={reducedMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-[#D7E2EA] px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] no-underline ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-bottom scale-y-0 bg-[#D7E2EA] transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 motion-reduce:hidden"
      />
      <span className="relative transition-colors duration-300 group-hover:text-[#0C0C0C]">
        {label}
      </span>
      <ArrowUpRight className="relative h-4 w-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0C0C0C]" />
    </motion.a>
  );
}