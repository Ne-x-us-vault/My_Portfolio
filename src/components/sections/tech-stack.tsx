"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { SKILL_CATEGORIES } from "@/lib/data";
import { useState } from "react";

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0].name);

  return (
    <section id="skills" className="relative py-32">
      <div className="section-container">
        <SectionHeading title="Tech Stack" subtitle="Technologies I work with to build intelligent systems" />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`rounded-xl px-5 py-2.5 text-sm font-medium transition-all ${
                activeCategory === cat.name
                  ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/30"
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
              <GlowCard className="group cursor-default">
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-all group-hover:scale-110 group-hover:bg-white/10"
                    style={{ color: skill.color }}
                  >
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white text-sm">{skill.name}</h3>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
