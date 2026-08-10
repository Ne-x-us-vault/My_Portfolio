"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";
import GlowCard from "@/components/ui/glow-card";
import Badge from "@/components/ui/badge";
import { PROJECTS } from "@/lib/data";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

const ACCENTS = ["#60A5FA", "#34D399", "#F472B6", "#FBBF24", "#A78BFA"];

function accentFor(project: Project) {
  const index = PROJECTS.findIndex((p) => p.slug === project.slug);
  return ACCENTS[index % ACCENTS.length] || ACCENTS[0];
}

function FeaturedProject({ project }: { project: Project }) {
  const accent = accentFor(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <GlowCard className="group">
        <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
          <div
            className="relative flex items-center justify-center overflow-hidden rounded-2xl p-12 md:min-h-[300px]"
            style={{
              background: `linear-gradient(135deg, ${accent}1F, transparent 55%, rgba(124,58,237,0.12))`,
            }}
          >
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: accent }}
            />
            <div
              className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
              style={{ boxShadow: `0 0 50px -5px ${accent}66` }}
            >
              <span className="font-display text-4xl font-bold text-white">{project.title.charAt(0)}</span>
            </div>
            <div className="absolute left-5 top-5">
              <Badge variant="accent">{project.category}</Badge>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <ArrowUpRight className="h-6 w-6 flex-shrink-0 text-accent-primary opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400">{project.shortDescription}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.06] bg-white/5 px-2.5 py-1 text-[10px] text-gray-400"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 5 && (
                <span className="rounded-md bg-white/5 px-2.5 py-1 text-[10px] text-gray-400">
                  +{project.techStack.length - 5}
                </span>
              )}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary px-4 py-2 text-xs font-medium text-white shadow-lg shadow-accent-primary/20 transition-all hover:shadow-accent-primary/40 hover:scale-[1.03] active:scale-[0.97]"
              >
                View Details
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 transition-all hover:bg-white/10 hover:text-white"
              >
                <Github className="h-3.5 w-3.5" />
                Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-lg border border-accent-primary/20 bg-accent-primary/10 px-4 py-2 text-xs text-accent-primary transition-all hover:bg-accent-primary/20"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const accent = accentFor(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="h-full"
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <GlowCard className="group flex h-full flex-col">
          <div
            className="relative mb-5 overflow-hidden rounded-xl p-8"
            style={{
              background: `linear-gradient(135deg, ${accent}1A, transparent 55%, rgba(124,58,237,0.1))`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
            <div
              className="absolute -right-6 -top-6 h-24 w-24 rounded-full blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-60"
              style={{ background: accent }}
            />
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
            <p className="text-sm leading-relaxed text-gray-400 line-clamp-3">
              {project.shortDescription}
            </p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {project.techStack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.06] bg-white/5 px-2 py-1 text-[10px] text-gray-400 transition-colors group-hover:border-white/10"
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
          </div>
        </GlowCard>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="relative py-20 md:py-28 lg:py-32">
      <div className="section-container">
        <SectionHeading index={3} title="Projects" subtitle="Selected work showcasing my technical capabilities" />

        <div className="space-y-6">
          <FeaturedProject project={featured} />
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
