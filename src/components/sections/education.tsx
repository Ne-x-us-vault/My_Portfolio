"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { EDUCATION } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="section-container">
        <SectionHeading index={5} title="Education" subtitle="Academic journey and qualifications" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-highlight md:left-1/2 md:-translate-x-[1px]" />

          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 pl-8 md:pl-0 ${
                index % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              <div className="absolute left-0 top-1 h-4 w-4 -translate-x-[7px] rounded-full border-2 border-accent-secondary bg-background md:left-1/2 md:-translate-x-[9px]">
                <div className="absolute inset-0 rounded-full bg-accent-secondary/40 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-accent-secondary" />
              </div>

              <GlowCard>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-secondary/20 to-accent-highlight/20">
                    <GraduationCap className="h-4 w-4 text-accent-secondary" />
                  </div>
                  <span className="rounded-md bg-accent-secondary/10 border border-accent-secondary/20 px-2.5 py-1 text-[10px] font-medium text-accent-secondary">
                    {edu.period}
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="mt-1 text-sm font-medium text-accent-secondary">{edu.institution}</p>
                {edu.cgpa && (
                  <p className="mt-2 text-xs text-gray-500">CGPA: {edu.cgpa}</p>
                )}
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{edu.details}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
