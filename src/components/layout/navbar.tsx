"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
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
            ? "bg-background/80 backdrop-blur-xl border-b border-white/[0.05]"
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
          >
            <span className="gradient-text-static">J</span>
            <span className="text-white">R</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="relative px-4 py-2 text-sm text-gray-400 transition-colors hover:text-white group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 bg-accent-primary transition-all duration-300 group-hover:w-4/5 group-hover:-translate-x-1/2" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-xl bg-white/5 border border-white/10 px-5 py-2 text-sm text-white transition-all hover:bg-white/10 hover:border-white/20"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 border-b border-white/[0.05] bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="rounded-xl px-4 py-3 text-left text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                className="mt-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-center text-sm text-white"
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
