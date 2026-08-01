"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  index?: number;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  index,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${centered ? "text-center" : ""} ${className || ""}`}
    >
      {index !== undefined && (
        <div className={`mb-5 flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-accent-primary/60" />
          <span className="font-mono text-sm font-semibold tracking-[0.25em] text-accent-primary">
            {String(index).padStart(2, "0")}
          </span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-accent-primary/60" />
        </div>
      )}
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-gray-400 ${centered ? "mx-auto max-w-2xl" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 flex items-center gap-1 ${centered ? "justify-center" : ""}`}>
        <span className="h-[2px] w-16 bg-gradient-to-r from-accent-primary to-accent-secondary" />
        <span className="h-[2px] w-2 bg-accent-highlight" />
      </div>
    </motion.div>
  );
}
