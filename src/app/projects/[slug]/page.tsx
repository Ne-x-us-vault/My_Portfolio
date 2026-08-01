"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, CheckCircle } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import Badge from "@/components/ui/badge";
import { notFound } from "next/navigation";

const ACCENTS = ["#60A5FA", "#34D399", "#F472B6", "#FBBF24", "#A78BFA"];

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return notFound();

  const accent = ACCENTS[PROJECTS.findIndex((p) => p.slug === slug) % ACCENTS.length] || ACCENTS[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-24">
        <Link
          href="/#projects"
          className="group mb-12 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge variant="accent">{project.category}</Badge>
          </div>

          <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="gradient-text">{project.title}</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">{project.description}</p>

          <div className="mt-6 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-2.5 text-sm text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              <Github className="h-4 w-4" />
              View Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-accent-primary/10 border border-accent-primary/20 px-5 py-2.5 text-sm text-accent-primary transition-all hover:bg-accent-primary/20"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-12 overflow-hidden rounded-2xl p-12 text-center"
          style={{
            background: `linear-gradient(135deg, ${accent}1A, transparent 55%, rgba(124,58,237,0.12))`,
          }}
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-40" style={{ background: accent }} />
          <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm"
            style={{ boxShadow: `0 0 40px -5px ${accent}66` }}
          >
            <span className="font-display text-4xl font-bold text-white">
              {project.title.charAt(0)}
            </span>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="font-display text-xl font-semibold text-white mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-accent-primary/30 hover:bg-accent-primary/10 hover:text-white">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-display text-xl font-semibold text-white mb-4">Impact</h2>
            <p className="text-sm text-gray-400 leading-relaxed">{project.impact}</p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="font-display text-xl font-semibold text-white mb-4">Challenges</h2>
            <div className="space-y-3">
              {project.challenges.map((challenge) => (
                <div key={challenge} className="group flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-all duration-300 hover:border-red-500/20 hover:bg-white/[0.04]">
                  <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500 transition-transform group-hover:scale-125" />
                  <p className="text-sm text-gray-400">{challenge}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="font-display text-xl font-semibold text-white mb-4">Solutions</h2>
            <div className="space-y-3">
              {project.solutions.map((solution) => (
                <div key={solution} className="group flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-all duration-300 hover:border-green-500/20 hover:bg-white/[0.04]">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500 transition-transform group-hover:scale-110" />
                  <p className="text-sm text-gray-400">{solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16"
        >
          <h2 className="font-display text-xl font-semibold text-white mb-4">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="group flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-all duration-300 hover:border-accent-primary/20 hover:bg-white/[0.04]">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 text-xs font-bold text-accent-primary transition-all duration-300 group-hover:scale-110"
                  style={{ boxShadow: `0 0 20px -6px ${accent}66` }}
                >
                  {feature.charAt(0)}
                </div>
                <p className="text-sm text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
