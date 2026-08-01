"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { EXPERIENCE } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="section-container">
        <SectionHeading index={4} title="Experience" subtitle="Entrepreneurial and professional experience" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-highlight md:left-1/2 md:-translate-x-[1px]" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              <div className="group absolute left-0 top-1 h-4 w-4 -translate-x-[7px] rounded-full border-2 border-accent-primary bg-background md:left-1/2 md:-translate-x-[9px]">
                <div className="absolute inset-0 rounded-full bg-accent-primary/40 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-accent-primary" />
              </div>

              <GlowCard>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20">
                    <Briefcase className="h-4 w-4 text-accent-primary" />
                  </div>
                  <span className="rounded-md bg-accent-primary/10 border border-accent-primary/20 px-2.5 py-1 text-[10px] font-medium text-accent-primary">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{exp.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent-primary">{exp.company}</p>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{exp.description}</p>

                <div className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-accent-primary to-accent-highlight flex-shrink-0" />
                      <span className="text-xs text-gray-400 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
