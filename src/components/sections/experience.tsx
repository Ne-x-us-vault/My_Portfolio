"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { EXPERIENCE } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="section-container">
        <SectionHeading title="Experience" subtitle="Entrepreneurial and professional experience" />

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
              <div className="absolute left-0 top-1 h-4 w-4 -translate-x-[7px] rounded-full border-2 border-accent-primary bg-background md:left-1/2 md:-translate-x-[9px]" />

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className="mb-3 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent-primary" />
                  <span className="text-xs text-gray-500">{exp.period}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{exp.title}</h3>
                <p className="mt-1 text-sm text-accent-primary">{exp.company}</p>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{exp.description}</p>

                <div className="mt-4 space-y-2">
                  {exp.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                      <span className="text-xs text-gray-400">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
