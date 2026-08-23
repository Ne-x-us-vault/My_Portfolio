"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";

export default function Projects() {
  const [hovered, setHovered] = useState(PROJECTS[0].slug);
  const active = PROJECTS.find((p) => p.slug === hovered) ?? PROJECTS[0];

  return (
    <section id="works" className="relative py-16 sm:py-24">
      <div className="container-premium">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-mono flex items-center gap-2">
              <span className="h-px w-6 bg-white/15" /> Selected work — 04
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] tracking-[0.12em] text-white/40">2023 — 2026</span>
            </p>
            <h2 className="display-serif mt-3 text-[34px] tracking-[-0.03em] sm:text-[48px]">
              Products that <span className="italic font-light text-white/65">ship</span>.
            </h2>
          </div>
          <p className="max-w-[360px] text-[13px] leading-relaxed text-white/40">
            Four real products — from GNOME shell to Tauri games to full-stack social OS. Hover to preview. Built fast, polished with care.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="space-y-3">
            {PROJECTS.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                data-cursor="view"
                onMouseEnter={() => setHovered(p.slug)}
                className={`group relative overflow-hidden rounded-[20px] border p-5 transition-all sm:p-6 ${hovered === p.slug ? "border-white/15 bg-white/[0.07] backdrop-blur shadow-[0_12px_32px_rgba(0,0,0,0.28)]" : "glass glass-hover"}`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: "radial-gradient(520px circle at 30% 20%, rgba(122,124,255,0.10), transparent 70%)" }} />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <span className={`mt-1 font-mono text-[11px] tracking-[0.14em] ${hovered === p.slug ? "text-white/60" : "text-white/22"}`}>0{i + 1}</span>
                    <div>
                      <h3 className="display-serif flex items-center gap-2 text-[20px] leading-none tracking-[-0.02em] sm:text-[22px]">
                        {p.title}
                        {i === 0 && <span className="rounded-full bg-[#7A7CFF] px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] text-white">Featured</span>}
                      </h3>
                      <p className="mt-1.5 max-w-[440px] text-[13px] leading-relaxed text-white/48">{p.shortDescription}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {p.techStack.slice(0, 4).map((t) => (
                          <span key={t} className={`rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.09em] ${hovered === p.slug ? "bg-white text-black" : "bg-white/10 text-white/60"}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className={`hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all sm:flex ${hovered === p.slug ? "border-white bg-white text-black shadow" : "border-white/10 bg-white/5 text-white/50"}`}>
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
            <div className="flex items-center gap-2 pl-1 font-mono text-[10px] tracking-[0.10em] text-white/20">
              <Sparkles className="h-3 w-3" /> All code on GitHub — github.com/Ne-x-us-vault
            </div>
          </div>

          <div className="relative hidden lg:block">
            <motion.div key={active.slug} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="sticky top-24 overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.09] via-white/[0.035] to-white/[0.02] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-white/30">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-black">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {active.category}
                </span>
                <span>0{PROJECTS.findIndex((x) => x.slug === active.slug) + 1} / 04</span>
              </div>
              {/* browser mock */}
              <div className="mt-6 overflow-hidden rounded-[16px] border border-white/10 bg-black/40">
                <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <span className="ml-3 flex-1 rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-white/20">jaswa.dev/projects/{active.slug}</span>
                </div>
                <div className="relative bg-gradient-to-br from-[#7A7CFF]/15 via-white/5 to-[#00D9FF]/10 p-8">
                  <div className="mx-auto flex h-[86px] w-[86px] items-center justify-center rounded-[20px] bg-white text-[32px] font-bold tracking-[-0.03em] text-black shadow-[0_16px_40px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
                    {active.title.charAt(0)}
                  </div>
                  <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#7A7CFF]/18 blur-2xl" />
                </div>
              </div>
              <h4 className="display-serif mt-5 text-[22px] tracking-[-0.02em]">{active.title}</h4>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/48 line-clamp-2">{active.description}</p>
              <div className="mt-5 flex gap-2">
                <Link href={`/projects/${active.slug}`} data-cursor="hover" className="flex-1 rounded-full bg-white py-2.5 text-center text-[13px] font-semibold text-black shadow hover:bg-white/90">
                  View case →
                </Link>
                <a href={active.github} target="_blank" data-cursor="hover" className="flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-white/70 backdrop-blur hover:bg-white/10">
                  <Github className="h-4 w-4" />
                </a>
                {active.live && (
                  <a href={active.live} target="_blank" className="flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-white/70">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
