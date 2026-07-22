"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-16 ${centered ? "text-center" : ""} ${className || ""}`}
    >
      <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg text-gray-400 ${centered ? "mx-auto max-w-2xl" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-[2px] w-20 bg-gradient-to-r from-accent-primary to-accent-secondary ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
