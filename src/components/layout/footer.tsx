"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative bg-background/50 backdrop-blur-xl"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] || Mail;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:text-accent-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-primary/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Designed & Built by{" "}
              <span className="gradient-text-static font-medium">Jaswa J.R</span>
            </p>
            <p className="mt-1 flex items-center justify-center gap-1 text-xs text-gray-600">
              Made with <Heart className="h-3 w-3 text-red-500" /> and lots of coffee
            </p>
          </div>

          <div className="flex gap-6">
            {["About", "Projects", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="group text-xs text-gray-600 transition-colors hover:text-gray-400"
              >
                {label}
                <span className="block h-px w-0 bg-accent-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:text-accent-primary hover:-translate-y-1"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
