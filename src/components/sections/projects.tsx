"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import Badge from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="section-container">
        <SectionHeading title="Projects" subtitle="Selected work showcasing my technical capabilities" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="group flex h-full flex-col">
                <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-accent-primary/10 via-accent-secondary/5 to-accent-highlight/10 p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent" />
                  <div className="relative flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm transition-all group-hover:scale-110">
                      <span className="font-display text-2xl font-bold gradient-text-static">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-3 top-3">
                    <Badge variant="accent">{project.category}</Badge>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  <h3 className="font-display text-lg font-semibold text-white group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded-md bg-white/5 px-2 py-1 text-[10px] text-gray-400">
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
                      className="flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-xs text-gray-300 transition-all hover:bg-white/10 hover:text-white"
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
          ))}
        </div>
      </div>
    </section>
  );
}
