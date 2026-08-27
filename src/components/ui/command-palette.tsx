"use client";
import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = NAV_LINKS.filter((l) => l.label.toLowerCase().includes(query.toLowerCase()));
  const toggle = useCallback(() => setIsOpen((p) => !p), []);
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [toggle]);
  const go = (href: string) => {
    setIsOpen(false);
    setQuery("");
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <button
        onClick={toggle}
        data-cursor="hover"
        aria-label="Open quick navigation"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] text-white/85 shadow-[0_10px_30px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition-colors hover:border-white/20 hover:text-white"
      >
        <Search className="h-3.5 w-3.5 opacity-70" />
        <span className="hidden sm:inline">QUICK NAV</span>
        <kbd className="hidden rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-sans text-[10px] text-white/65 sm:inline-flex">⌘K</kbd>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[90] bg-black/65 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -12 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="fixed left-1/2 top-[20%] z-[100] w-full max-w-lg -translate-x-1/2 overflow-hidden rounded-[18px] border border-white/10 bg-[#0c0c10]/95 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex items-center gap-3 border-b border-white/8 px-4 py-3.5">
                <Search className="h-4 w-4 text-white/40" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search sections..."
                  className="flex-1 bg-transparent font-mono text-[12px] tracking-[0.08em] text-white outline-none placeholder:text-white/30"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                  className="rounded-md p-1 text-white/40 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.map((l) => (
                  <button
                    key={l.href}
                    onClick={() => go(l.href)}
                    className="flex w-full items-center justify-between rounded-[12px] px-4 py-3 font-mono text-[11px] tracking-[0.12em] text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    <span>{l.label}</span>
                    <span className="flex items-center gap-1 text-white/40">
                      Jump <ArrowRight className="h-3 w-3" />
                    </span>
                  </button>
                ))}
                {filtered.length === 0 && (
                  <p className="px-4 py-6 text-center font-mono text-[11px] text-white/40">No results found.</p>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-white/8 px-4 py-2.5 font-mono text-[10px] tracking-[0.12em] text-white/30">
                <span>↑ ↓ Navigate</span>
                <span>↵ Open · Esc Close</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
