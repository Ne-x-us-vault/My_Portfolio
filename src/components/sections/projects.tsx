"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import Badge from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ACCENTS = ["#60A5FA", "#34D399", "#F472B6", "#FBBF24", "#A78BFA"];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="section-container">
        <SectionHeading index={3} title="Projects" subtitle="Selected work showcasing my technical capabilities" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => {
            const accent = ACCENTS[index % ACCENTS.length];
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlowCard className="group flex h-full flex-col">
                  <div
                    className="relative mb-4 overflow-hidden rounded-xl p-8"
                    style={{
                      background: `linear-gradient(135deg, ${accent}1A, transparent 55%, rgba(124,58,237,0.1))`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                    <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-60" style={{ background: accent }} />
                    <div className="relative flex items-center justify-center">
                      <div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                        style={{ boxShadow: `0 0 30px -5px ${accent}55` }}
                      >
                        <span className="font-display text-2xl font-bold text-white">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="absolute left-3 top-3">
                      <Badge variant="accent">{project.category}</Badge>
                    </div>
                    <div className="absolute right-3 top-3">
                      <ArrowUpRight className="h-5 w-5 text-white/60 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-accent-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-white/5 border border-white/[0.06] px-2 py-1 text-[10px] text-gray-400 transition-colors group-hover:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-gray-400">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="mt-auto flex gap-3 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-gray-300 transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 rounded-lg bg-accent-primary/10 border border-accent-primary/20 px-3 py-1.5 text-xs text-accent-primary transition-all hover:bg-accent-primary/20"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
