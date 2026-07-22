"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredLinks = NAV_LINKS.filter((link) =>
    link.label.toLowerCase().includes(query.toLowerCase())
  );

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle]);

  const handleNavigate = (href: string) => {
    setIsOpen(false);
    setQuery("");
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2.5 text-sm text-gray-400 backdrop-blur-xl transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Quick Nav</span>
        <kbd className="hidden sm:inline-flex items-center rounded-md bg-white/10 px-1.5 py-0.5 text-[10px] font-medium text-gray-400">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-[20%] z-[100] w-full max-w-lg -translate-x-1/2 rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search sections..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                />
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filteredLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavigate(link.href)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                  </button>
                ))}
                {filteredLinks.length === 0 && (
                  <p className="px-4 py-3 text-sm text-gray-500">No results found.</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
