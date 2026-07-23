"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";

const roles = ["Full Stack Developer", "IoT Engineer", "AI/ML Enthusiast", "Embedded Systems Developer"];
const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const PAUSE_DURATION = 2000;

function useTypingEffect() {
  return { roles, typingSpeed: TYPING_SPEED, erasingSpeed: ERASING_SPEED, pauseDuration: PAUSE_DURATION };
}

export default function Hero() {
  const { roles: roleList } = useTypingEffect();

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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="h-28 w-28 rounded-full bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-highlight p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <span className="font-display text-3xl font-bold gradient-text">JR</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-[10px]">
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
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {roleList.map((role) => (
              <span
                key={role}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-gray-300 backdrop-blur-sm sm:text-sm"
              >
                {role}
              </span>
            ))}
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
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-accent-primary/25 transition-all hover:shadow-accent-primary/40 hover:scale-[1.02]"
              >
                View My Work
                <ArrowDown className="h-4 w-4" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/20"
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
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:text-accent-primary"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
