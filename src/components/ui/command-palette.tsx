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
      if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); toggle(); }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [toggle]);
  const go = (href: string) => { setIsOpen(false); setQuery(""); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <>
      <button onClick={toggle} className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-[#111] bg-white px-4 py-2.5 font-mono text-[11px] tracking-[0.12em] shadow-lg">
        <Search className="h-4 w-4" /> <span className="hidden sm:inline">QUICK NAV</span> <kbd className="hidden sm:inline-flex rounded bg-[#0A0A0A] px-1.5 py-0.5 text-[10px] text-white">⌘K</kbd>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.96, y: -12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96, y: -12 }} className="fixed left-1/2 top-[20%] z-[100] w-full max-w-lg -translate-x-1/2 rounded-[16px] border border-[#111] bg-[#F2F0EB] shadow-2xl">
              <div className="flex items-center gap-3 border-b border-[#111]/10 px-4 py-3">
                <Search className="h-5 w-5 text-[#6B6B6B]" />
                <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search sections..." className="flex-1 bg-transparent font-mono text-[12px] tracking-[0.08em] outline-none placeholder:text-[#9A9A9A]" />
                <button onClick={() => setIsOpen(false)} className="text-[#6B6B6B] hover:text-black"><X className="h-4 w-4" /></button>
              </div>
              <div className="max-h-80 overflow-y-auto p-2">
                {filtered.map((l) => (
                  <button key={l.href} onClick={() => go(l.href)} className="flex w-full items-center justify-between rounded-[12px] px-4 py-3 font-mono text-[11px] tracking-[0.12em] hover:bg-[#0A0A0A] hover:text-white">
                    <span>{l.label}</span><span className="flex items-center gap-1 opacity-60">Jump <ArrowRight className="h-3 w-3" /></span>
                  </button>
                ))}
                {filtered.length === 0 && <p className="px-4 py-3 font-mono text-[11px] text-[#9A9A9A]">No results.</p>}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
