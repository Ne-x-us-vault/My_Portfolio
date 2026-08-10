"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import { EXPERIENCE } from "@/lib/data";
import { Calendar, CheckCircle2, Users, Trophy } from "lucide-react";

export default function Experience() {
  const exp = EXPERIENCE[0];

  const metricHighlights = [
    { icon: Users, label: "Team Managed", value: "20+" },
    { icon: Trophy, label: "Pass Rate", value: "85%" },
  ];

  return (
    <section id="experience" className="relative py-20 md:py-28 lg:py-32">
      <div className="section-container">
        <SectionHeading index={4} title="Experience" subtitle="Entrepreneurial and professional experience" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <GlowCard className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-highlight" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-primary/10 blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:gap-8">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 rounded-md border border-accent-primary/20 bg-accent-primary/10 px-2.5 py-1 text-[10px] font-medium text-accent-primary">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold text-white">{exp.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent-primary">{exp.company}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{exp.description}</p>
              </div>

              <div className="hidden w-px self-stretch bg-gradient-to-b from-white/[0.08] to-transparent lg:block" />

              <div className="flex gap-4 lg:flex-col">
                {metricHighlights.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-1 flex-col items-start gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
                  >
                    <metric.icon className="h-5 w-5 text-accent-primary" />
                    <p className="font-display text-2xl font-bold text-white">{metric.value}</p>
                    <p className="text-[11px] uppercase tracking-wider text-gray-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 grid gap-3 sm:grid-cols-2">
              {exp.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3.5 transition-colors hover:border-white/[0.1]"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-primary" />
                  <span className="text-xs leading-relaxed text-gray-400">{highlight}</span>
                </div>
              ))}
            </div>
          </GlowCard>
        </motion.div>
      </div>
    </section>
  );
}
