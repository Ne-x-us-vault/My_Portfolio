"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { EDUCATION } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-32">
      <div className="section-container">
        <SectionHeading title="Education" subtitle="Academic journey and qualifications" />

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
              <div className="absolute left-0 top-1 h-4 w-4 -translate-x-[7px] rounded-full border-2 border-accent-secondary bg-background md:left-1/2 md:-translate-x-[9px]" />

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-xl">
                <div className="mb-3 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-accent-secondary" />
                  <span className="text-xs text-gray-500">{edu.period}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="mt-1 text-sm text-accent-secondary">{edu.institution}</p>
                {edu.cgpa && (
                  <p className="mt-2 text-xs text-gray-500">CGPA: {edu.cgpa}</p>
                )}
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">{edu.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
