"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        <div className="container-premium">
          <div
            className={`flex items-center justify-between rounded-full border px-2 py-2 transition-all duration-500 ${
              scrolled
                ? "border-white/10 bg-black/45 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.07)]"
                : "border-white/[0.07] bg-white/[0.03] backdrop-blur-md"
            }`}
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group flex items-center gap-3 pl-2"
              data-cursor="hover"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-bold tracking-[-0.02em] text-black">
                JR
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-white/70 opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
              <span className="hidden flex-col sm:flex">
                <span className="text-[13px] font-semibold tracking-[-0.02em] text-white">Jaswa J.R</span>
                <span className=" -mt-1 font-mono text-[9px] tracking-[0.12em] text-white/40">COIMBATORE · 2026</span>
              </span>
              <span className="hidden items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium tracking-[0.08em] text-emerald-300 ring-1 ring-emerald-500/20 sm:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                Available
              </span>
            </a>

            <nav className="hidden items-center gap-1 lg:flex">
              {LINKS.map((l) => {
                const isActive = active === l.href;
                return (
                  <button
                    key={l.href}
                    onClick={() => go(l.href)}
                    data-cursor="hover"
                    className={`relative rounded-full px-4 py-2 text-[13px] font-medium tracking-[-0.01em] transition-colors ${isActive ? "bg-white text-black" : "text-white/65 hover:bg-white/10 hover:text-white"}`}
                  >
                    {l.label}
                    {isActive && <motion.span layoutId="nav-active" className="absolute inset-0 -z-10 rounded-full bg-white" />}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="mailto:jaswa.personal.3617@outlook.com"
                data-cursor="hover"
                className="hidden items-center gap-1.5 rounded-full bg-white px-5 py-2 text-[13px] font-medium tracking-[-0.01em] text-black transition-all hover:bg-white/90 hover:pr-4 sm:flex"
              >
                Email me <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
              </a>
              <button onClick={() => setOpen(!open)} data-cursor="hover" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black transition-transform active:scale-95 xl:hidden">
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -14, scale: 0.98 }} transition={{ type: "spring", stiffness: 420, damping: 32 }} className="fixed inset-x-0 top-[76px] z-40 px-6 xl:hidden">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[#111114]/95 p-2 shadow-2xl backdrop-blur-xl">
              {LINKS.map((l) => (
                <button key={l.href} onClick={() => go(l.href)} className="flex w-full items-center justify-between rounded-full px-4 py-3.5 text-left text-[15px] font-medium tracking-[-0.01em] text-white/85 hover:bg-white hover:text-black">
                  {l.label} <ArrowUpRight className="h-4 w-4 opacity-30" />
                </button>
              ))}
              <a href="mailto:jaswa.personal.3617@outlook.com" className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-[14px] font-semibold text-black">
                jaswa.personal.3617@outlook.com <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
