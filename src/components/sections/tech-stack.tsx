"use client";
import { SKILL_CATEGORIES } from "@/lib/data";
import { useState } from "react";

export default function TechStack() {
  const [active, setActive] = useState(SKILL_CATEGORIES[0].name);
  const cat = SKILL_CATEGORIES.find((c) => c.name === active) ?? SKILL_CATEGORIES[0];

  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="label-mono">Stack — 40+ technologies</p>
          <p className="font-mono text-[10px] tracking-[0.10em] text-white/25">Tap to filter — hover to glow</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {SKILL_CATEGORIES.map((c) => (
            <button
              key={c.name}
              onClick={() => setActive(c.name)}
              data-cursor="hover"
              className={`rounded-full border px-3.5 py-1.5 font-mono text-[10px] tracking-[0.10em] transition-all ${active === c.name ? "border-white bg-white text-black shadow" : "border-white/10 bg-white/5 text-white/55 hover:bg-white/10 hover:text-white"}`}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {cat.skills.map((s) => (
            <div key={s.name} className="group glass glass-hover relative overflow-hidden rounded-[18px] p-5">
              <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-0 blur-xl transition-opacity group-hover:opacity-100" style={{ background: `${s.color}18` }} />
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all group-hover:scale-110 group-hover:border-white/15" style={{ color: s.color }}>
                  <s.icon className="h-4 w-4" />
                </span>
                <p className="text-[13px] font-medium tracking-[-0.01em] text-white/80 group-hover:text-white">{s.name}</p>
              </div>
              <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
                <div className="h-full bg-gradient-to-r from-white/20 to-white/40 transition-all group-hover:from-[#7A7CFF]/60 group-hover:to-[#00D9FF]/60" style={{ width: `${s.level}%` }} />
              </div>
              <p className="mt-1.5 font-mono text-[9px] tracking-[0.10em] text-white/20">{s.level}% · {cat.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-full border border-white/8 bg-white/[0.025] py-2.5 backdrop-blur">
          <div className="flex animate-[marquee_18s_linear_infinite] gap-8 whitespace-nowrap font-mono text-[10px] tracking-[0.16em] text-white/30">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex gap-8">
                {["REACT", "NEXT.JS", "TYPESCRIPT", "KOTLIN", "NODE.JS", "PRISMA", "POSTGRESQL", "TAURI", "RUST", "THREE.JS", "DOCKER", "LINUX", "TENSORFLOW", "OPENCV", "ESP32"].map((s) => (
                  <span key={s} className="flex items-center gap-8">
                    {s} <span className="h-1 w-1 rounded-full bg-white/15" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
