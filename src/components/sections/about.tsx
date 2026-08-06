"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  { value: "5+", label: "Years Building" },
  { value: "20+", label: "Team Members Led" },
  { value: "85%", label: "Pass Rate Achieved" },
  { value: "10+", label: "Technologies" },
];

const focusAreas = [
  "Full Stack Development",
  "Mobile Apps",
  "IoT & AI/ML",
  "Game & Desktop",
];

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Coimbatore, India" },
  { icon: GraduationCap, label: "Degree", value: "Integrated M.Tech CSE" },
  { icon: Briefcase, label: "Role", value: "Founder & Full Stack Dev" },
  { icon: BadgeCheck, label: "Status", value: "Open to opportunities" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="section-container">
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <SectionHeading
              index={1}
              title="About Me"
              subtitle="Building the bridge between hardware and software"
              centered={false}
              className="mb-10"
            />

            <div className="space-y-5 text-[15px] leading-relaxed text-gray-400">
              <p>
                I&apos;m an <span className="font-medium text-white">Integrated M.Tech Computer Science</span>{" "}
                student in Coimbatore, Tamil Nadu, India. I&apos;m passionate about{" "}
                <span className="font-medium text-accent-primary">software engineering</span>,{" "}
                <span className="font-medium text-accent-highlight">mobile app development</span>, and
                building polished, user-focused products.
              </p>
              <p>
                I enjoy building complete end-to-end products — from full stack web applications and
                mobile experiences to desktop extensions and game-based tools. My projects combine clean
                architecture, modern frameworks, and thoughtful UI/UX to create software people actually
                want to use.
              </p>
              <p>
                Beyond technology, I&apos;m a <span className="font-medium text-white">founder and entrepreneur</span>,
                having built <span className="font-medium text-white">JR Tunes</span> from the ground up —
                managing a team of 20+ students, achieving 85%+ examination pass rates, and developing
                comprehensive music education programs.
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Focus Areas
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-gray-300 transition-colors hover:border-accent-primary/40 hover:text-white"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-4 py-5 text-center"
                >
                  <p className="font-display text-2xl font-bold gradient-text-static">{stat.value}</p>
                  <p className="mt-1 text-[11px] leading-tight text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <GlowCard className="flex h-full flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-highlight blur-lg opacity-40" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-highlight p-[2px]">
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-background">
                      <span className="font-display text-2xl font-bold gradient-text">JR</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">Jaswa J.R</h3>
                  <p className="mt-0.5 text-sm text-gray-400">Full Stack Developer & Engineer</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-xs text-green-400">Available for work</span>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-gradient-to-r from-accent-primary/30 via-white/[0.06] to-transparent" />

              <div className="space-y-3">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
                      <fact.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wider text-gray-500">{fact.label}</p>
                      <p className="truncate text-sm text-gray-300">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="group mt-auto flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-gray-300 transition-all hover:border-accent-primary/40 hover:bg-accent-primary/10 hover:text-white"
              >
                Let&apos;s work together
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </GlowCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
