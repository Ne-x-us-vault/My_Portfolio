"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.href.slice(1));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.05] shadow-lg shadow-black/20"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-xl font-bold tracking-tight"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="gradient-text-static">J</span>
            <span className="text-white">R</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm transition-colors group",
                    isActive ? "text-white" : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-1/2 h-[2px] bg-accent-primary transition-all duration-300 -translate-x-1/2",
                      isActive
                        ? "w-4/5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100"
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-5 py-2 text-sm font-medium text-white shadow-lg shadow-accent-primary/20 transition-all hover:shadow-accent-primary/40 hover:scale-[1.03] active:scale-[0.97]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[73px] z-40 max-h-[calc(100dvh-80px)] overflow-y-auto border-b border-white/[0.05] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={cn(
                      "rounded-xl px-4 py-3 text-left text-sm transition-colors",
                      isActive
                        ? "bg-accent-primary/10 text-accent-primary"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
              <a
                href="/resume.pdf"
                target="_blank"
                className="mt-2 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary px-4 py-3 text-center text-sm font-medium text-white shadow-lg shadow-accent-primary/20"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
