"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/data";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative bg-background/50 backdrop-blur-xl"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-primary/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-display text-xl font-bold tracking-tight"
            >
              <span className="gradient-text-static">J</span>
              <span className="text-white">R</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Full Stack Developer & Software Engineer building modern web, mobile, and
              open-source tools.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = iconMap[link.label as keyof typeof iconMap] || Mail;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="group flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:text-accent-primary hover:-translate-y-1"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-accent-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">Connect</h3>
            <ul className="mt-5 space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-accent-primary transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-accent-primary transition-all duration-300 group-hover:w-4" />
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {year} Designed & Built by{" "}
            <span className="gradient-text-static font-medium">Jaswa J.R</span>
          </p>
          <p className="flex items-center gap-1.5 text-xs text-gray-600">
            Made with <Heart className="h-3 w-3 text-red-500" /> and lots of coffee
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-400 transition-all duration-300 hover:border-accent-primary/50 hover:bg-accent-primary/10 hover:text-accent-primary"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
