"use client";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Linkedin, Mail, MapPin } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";

export default function Hero() {
  return (
    <section className="section-fit relative flex min-h-[100svh] items-center overflow-clip pt-[88px] sm:pt-[96px]">
      <div className="container-premium relative">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          {/* left */}
          <div className="max-w-[880px]">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-1.5 backdrop-blur">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#7A7CFF]/15 text-[#7A7CFF]">
                <Sparkles className="h-3 w-3" />
              </span>
              <span className="font-mono text-[10px] tracking-[0.14em] text-white/70">INTEGRATED M.TECH CSE · COIMBATORE, IN — AVAILABLE FOR WORK</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.08 }} className="display-serif mt-6 text-[42px] leading-[0.88] tracking-[-0.04em] text-white sm:text-[58px] lg:text-[72px]">
              Application <span className="italic font-light text-white/85">developer</span>
              <br />
              <span className="text-white">crafting clear,</span>
              <br />
              <span className="text-accent-gradient">human</span> products.
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.18 }} className="mt-6 max-w-[520px] text-[15px] leading-[1.65] text-white/55 sm:text-[16px]">
              I build across mobile, web, and embedded — with a growing focus on robotics & DevOps. Bolt-on over rebuild. Fastest under a deadline — most shipped work started as a hackathon.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.28 }} className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton>
                <button
                  data-cursor="hover"
                  onClick={() => document.querySelector("#works")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[13px] font-semibold tracking-[-0.01em] text-black shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all hover:bg-white/90"
                >
                  View selected work
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:translate-y-0.5">
                    <ArrowDown className="h-3.5 w-3.5" />
                  </span>
                </button>
              </MagneticButton>
              <MagneticButton>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" data-cursor="hover" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-6 py-3.5 text-[13px] font-medium tracking-[-0.01em] text-white backdrop-blur transition-colors hover:bg-white/[0.10]">
                  Resume ↗
                </a>
              </MagneticButton>
              <span className="hidden items-center gap-2 pl-1 font-mono text-[10px] tracking-[0.14em] text-white/25 sm:flex">
                <span className="h-px w-6 bg-white/15" /> SCROLL ↓
              </span>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-10 flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/Ne-x-us-vault", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/jaswa-j-r", label: "LinkedIn" },
                { icon: Mail, href: "mailto:jaswa.personal.3617@outlook.com", label: "Email" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" data-cursor="hover" aria-label={s.label} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur transition-all hover:border-white/15 hover:bg-white/10 hover:text-white">
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
              <span className="ml-2 hidden items-center gap-1.5 font-mono text-[10px] tracking-[0.10em] text-white/30 sm:flex">
                <MapPin className="h-3 w-3" /> Coimbatore, Tamil Nadu
              </span>
            </motion.div>
          </div>

          {/* right — proof card */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }} className="hidden lg:block">
            <div className="glass relative overflow-hidden rounded-[24px] p-7">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#7A7CFF]/15 blur-2xl" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[12px] font-bold text-black">JR</div>
                <div>
                  <p className="text-[13px] font-semibold tracking-[-0.01em]">Jaswa J.R</p>
                  <p className="font-mono text-[10px] tracking-[0.12em] text-white/35">APPLICATION DEV · UI/UX</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-emerald-300 ring-1 ring-emerald-500/20">
                  <span className="status-dot" /> Available
                </span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 border-y border-white/5 py-6">
                <div className="text-center">
                  <p className="display-serif text-[22px] leading-none">12+</p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.12em] text-white/30">PROJECTS</p>
                </div>
                <div className="border-x border-white/5 text-center">
                  <p className="display-serif text-[22px] leading-none">04+</p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.12em] text-white/30">YEARS</p>
                </div>
                <div className="text-center">
                  <p className="display-serif text-[22px] leading-none">20+</p>
                  <p className="mt-1 font-mono text-[9px] tracking-[0.12em] text-white/30">TEAM</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {["React", "Next.js", "Kotlin", "Node.js", "Three.js", "Docker"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-white/60">{t}</span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-gradient-to-br from-white/[0.04] to-transparent" />
            </div>
            <p className="mt-3 text-center font-mono text-[10px] tracking-[0.10em] text-white/20">Use the pill below to switch 3D — Water / Gridwave / Tunnel</p>
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#08080A] to-transparent" />
    </section>
  );
}
