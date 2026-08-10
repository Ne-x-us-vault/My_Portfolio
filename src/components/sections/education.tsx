"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { EDUCATION } from "@/lib/data";
import { GraduationCap, Calendar, ArrowUpRight } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28 lg:py-32">
      <div className="section-container">
        <SectionHeading index={5} title="Education" subtitle="Academic journey and qualifications" />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <GlowCard className="group relative flex h-full flex-col overflow-hidden">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent-secondary/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-secondary/20 to-accent-highlight/20 transition-all duration-500 group-hover:scale-110 group-hover:from-accent-secondary/30 group-hover:to-accent-highlight/30">
                    <GraduationCap className="h-5 w-5 text-accent-secondary" />
                  </div>
                  <span className="flex items-center gap-1.5 rounded-md border border-accent-secondary/20 bg-accent-secondary/10 px-2.5 py-1 text-[10px] font-medium text-accent-secondary">
                    <Calendar className="h-3 w-3" />
                    {edu.period}
                  </span>
                </div>

                <div className="relative mt-5 flex-1">
                  <h3 className="font-display text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-accent-secondary">{edu.institution}</p>
                  {edu.cgpa && (
                    <p className="mt-2 inline-flex rounded-md bg-white/5 px-2.5 py-1 text-[11px] text-gray-400">
                      CGPA: {edu.cgpa}
                    </p>
                  )}
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{edu.details}</p>
                </div>

                <ArrowUpRight className="absolute bottom-4 right-4 h-4 w-4 text-accent-secondary opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
