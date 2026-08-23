"use client";
import { EDUCATION } from "@/lib/data";
import { MapPin, GraduationCap, Briefcase, BadgeCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="container-premium">
        <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="glass relative overflow-hidden rounded-[24px] p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#7A7CFF]/10 blur-3xl" />
            <p className="label-mono">// About me</p>
            <h2 className="display-serif mt-4 text-[30px] leading-[0.9] tracking-[-0.03em] sm:text-[36px]">
              Designer & <span className="italic font-light text-white/70">developer</span> obsessed
              <br /> with shipping.
            </h2>
            <div className="mt-6 space-y-3.5 text-[14px] leading-[1.65] text-white/55">
              <p>
                I&apos;m <span className="font-semibold text-white">Jaswa J.R</span> — Integrated M.Tech CSE, Coimbatore. I live at the intersection of mobile, web and embedded — now leaning into robotics & DevOps.
              </p>
              <p>
                <span className="text-white">Bolt-on over rebuild</span> — I extend what works. <span className="text-white">Hackathon pressure</span> is my edge: most shipped work started under a deadline and turned into a polished product.
              </p>
              <p>
                Founder of <span className="font-semibold text-white">JR Tunes</span> — 20+ team, 85%+ Trinity pass rate. I owned ops, marketing, curriculum and growth — and learned to build for real users.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { icon: MapPin, k: "Location", v: "Coimbatore, IN" },
                { icon: GraduationCap, k: "Degree", v: "M.Tech CSE" },
                { icon: Briefcase, k: "Role", v: "App Dev · UI/UX" },
                { icon: BadgeCheck, k: "Status", v: "Open to work" },
              ].map((f) => (
                <div key={f.k} className="rounded-[14px] border border-white/8 bg-white/[0.03] p-3">
                  <f.icon className="h-4 w-4 text-white/30" />
                  <p className="mt-2 font-mono text-[9px] tracking-[0.12em] text-white/30">{f.k.toUpperCase()}</p>
                  <p className="text-[12px] font-medium tracking-[-0.01em] text-white/80">{f.v}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["DevOps & Mobile", "AI/ML · EdTech", "UI/UX", "Robotics", "R&D"].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] tracking-[0.10em] text-white/60 backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="glass relative overflow-hidden rounded-[24px] p-7 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="label-mono">Experience</p>
              <span className="rounded-full bg-white/5 px-2.5 py-1 font-mono text-[10px] tracking-[0.10em] text-white/30 ring-1 ring-white/10">2020 — 2026</span>
            </div>

            <div className="mt-6 space-y-1">
              {[
                { t: "Founder & Managing Director", c: "JR TUNES — COIMBATORE", y: "2020 — Present", active: true },
                { t: "Independent Product Developer", c: "OPEN SOURCE · GNOME / TAURI / WEB", y: "2023 — Present", active: false },
                { t: "M.Tech CSE — Research & Build", c: "UNIVERSITY — IOT / AI/ML", y: "2022 — Present", active: false },
              ].map((r) => (
                <div key={r.t} className={`flex items-start justify-between gap-4 rounded-[14px] border p-4 transition-colors ${r.active ? "border-white/15 bg-white/[0.06]" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04]"}`}>
                  <div>
                    <p className="display-serif text-[15px] leading-none tracking-[-0.02em]">{r.t}</p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.10em] text-white/30">{r.c}</p>
                  </div>
                  <span className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] ${r.active ? "bg-white text-black" : "bg-white/5 text-white/40 ring-1 ring-white/10"}`}>{r.y}</span>
                </div>
              ))}
            </div>

            <div className="hairline my-6" />

            <p className="font-mono text-[10px] tracking-[0.12em] text-white/25">EDUCATION</p>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {EDUCATION.map((e) => (
                <div key={e.degree} className="flex items-center justify-between rounded-[14px] border border-white/8 bg-white/[0.03] p-4">
                  <div>
                    <p className="display-serif text-[13px] leading-tight tracking-[-0.01em]">{e.degree}</p>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.08em] text-white/30">{e.institution}</p>
                  </div>
                  <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-black">{e.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
