"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { SKILL_CATEGORIES } from "@/lib/data";
import { useState, type CSSProperties } from "react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].name);

  return (
    <section id="skills" className="relative py-32">
      <div className="section-container">
        <SectionHeading index={2} title="Tech Stack" subtitle="Technologies I use to build modern software" />

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === cat.name
                  ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/30 shadow-lg shadow-accent-primary/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {SKILL_CATEGORIES.find((c) => c.name === activeCategory)?.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <GlowCard hover={false} className="group h-full">
                <div
                  className="flex flex-col items-center gap-4 py-2 text-center"
                  style={{ "--skill-color": skill.color } as CSSProperties}
                >
                  <div
                    className="skill-tile flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.04] border border-white/[0.06]"
                    style={{ color: skill.color }}
                  >
                    <skill.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                    {skill.name}
                  </h3>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
