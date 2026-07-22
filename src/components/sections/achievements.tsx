"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { ACHIEVEMENTS } from "@/lib/data";
import {
  Crown,
  Rocket,
  Puzzle,
  Users,
  Target,
  Music,
} from "lucide-react";

const iconMap: Record<string, typeof Crown> = {
  leadership: Crown,
  entrepreneurship: Rocket,
  "problem-solving": Puzzle,
  teaching: Users,
  strategy: Target,
  music: Music,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="section-container">
        <SectionHeading title="Achievements" subtitle="Skills and accomplishments beyond academics" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Crown;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlowCard className="group h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-primary/10 transition-all group-hover:scale-110 group-hover:bg-accent-primary/20">
                    <Icon className="h-5 w-5 text-accent-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{achievement.title}</h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">{achievement.description}</p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
