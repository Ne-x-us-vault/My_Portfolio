"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/ui/magnetic-button";

const roles = [
  "Application Developer",
  "Mobile App Developer",
  "UI/UX Designer",
  "Embedded & Robotics",
  "DevOps Enthusiast",
];
const TYPING_SPEED = 90;
const ERASING_SPEED = 45;
const PAUSE_DURATION = 2200;

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_DURATION);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + (deleting ? -1 : 1))),
        deleting ? ERASING_SPEED : TYPING_SPEED
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(roles);

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="section-container relative z-10 w-full py-28 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 text-center sm:gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 rounded-full border border-green-500/25 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-highlight blur-xl opacity-40 animate-pulse-glow" />
            <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-highlight p-[2px] sm:h-28 sm:w-28">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <span className="font-display text-2xl font-bold gradient-text sm:text-3xl">JR</span>
              </div>
            </div>
            <div className="absolute -inset-3 rounded-full border border-dashed border-accent-primary/25 animate-spin-slow" />
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-[10px] shadow-lg shadow-green-500/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
            </div>
          </motion.div>

          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs font-medium uppercase tracking-[0.3em] text-accent-primary sm:text-sm"
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display text-[2.75rem] font-bold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="text-white">Jaswa </span>
              <span className="gradient-text">J.R</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3 font-medium text-lg text-gray-300 sm:text-2xl"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary sm:h-8 sm:w-8">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="min-h-[1.4em]">{typed}</span>
            <span className="h-6 w-[2px] rounded-full bg-accent-primary animate-caret" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mx-auto max-w-xl text-balance text-base text-gray-400 sm:text-lg"
          >
            Building across mobile apps, UI/UX, and embedded systems — with a growing focus on
            robotics and DevOps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <MagneticButton className="w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent-primary/25 transition-all hover:shadow-accent-primary/40 hover:scale-[1.02] active:scale-[0.98] sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                View My Work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, url: "https://github.com/Ne-x-us-vault", label: "GitHub" },
              { icon: Linkedin, url: "https://linkedin.com/in/jaswa-j-r", label: "LinkedIn" },
              { icon: Mail, url: "mailto:jaswa.personal.3617@outlook.com", label: "Email" },
            ].map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target={url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:text-accent-primary hover:-translate-y-0.5"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-gray-500"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/15 p-1">
                <motion.span
                  animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-1.5 w-1 rounded-full bg-accent-primary"
                />
              </span>
            </motion.div>
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
