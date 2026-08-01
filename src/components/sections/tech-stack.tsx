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
        <SectionHeading index={2} title="Tech Stack" subtitle="Technologies I work with to build intelligent systems" />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {SKILL_CATEGORIES.find((c) => c.name === activeCategory)?.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <GlowCard
                className="group cursor-default"
                hover={false}
              >
                <div
                  className="flex items-center gap-4"
                  style={{ "--skill-color": skill.color } as CSSProperties}
                >
                  <div
                    className="skill-tile flex h-12 w-12 items-center justify-center rounded-xl bg-white/5"
                    style={{ color: skill.color }}
                  >
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm truncate">{skill.name}</h3>
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ background: skill.color }}
                      />
                    </div>
                  </div>
                  <span
                    className="text-[10px] font-semibold tabular-nums"
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
