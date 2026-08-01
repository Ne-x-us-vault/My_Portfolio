"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/ui/magnetic-button";

const roles = ["Full Stack Developer", "IoT Engineer", "AI/ML Enthusiast", "Embedded Systems Developer"];
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
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
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
            <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-highlight p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <span className="font-display text-3xl font-bold gradient-text">JR</span>
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
              className="text-sm font-medium uppercase tracking-[0.3em] text-accent-primary"
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="text-white">Jaswa </span>
              <span className="gradient-text">J.R</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-3 font-medium text-xl text-gray-300 sm:text-2xl"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-primary/10 text-accent-primary">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="min-h-[1.4em]">{typed}</span>
            <span className="h-6 w-[2px] rounded-full bg-accent-primary animate-caret" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mx-auto max-w-xl text-lg text-gray-400 text-balance"
          >
            Building intelligent systems from <span className="text-white font-medium">hardware to cloud</span>. I create end-to-end products combining software engineering with real-world hardware.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton>
              <button
                onClick={scrollToProjects}
                className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent-primary/25 transition-all hover:shadow-accent-primary/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                View My Work
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
