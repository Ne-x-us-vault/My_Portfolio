"use client";
import { ACHIEVEMENTS } from "@/lib/data";
import { Quote } from "lucide-react";

export default function Achievements() {
  const testimonials = [
    { n: "Ethan Morales", r: "Marketing Director, Horizon", q: "Smooth from start to finish. Jaswa turned complex ideas into a cohesive interface that scales with us. The handoff was flawless.", a: "EM" },
    { n: "Liam Carter", r: "Founder, Arcadia Tech", q: "Nailed our vision — modern, functional and true to brand. Seamless collaboration, zero friction. Would hire again in a heartbeat.", a: "LC" },
    { n: "Sofia Carson", r: "Product Manager, Lumos", q: "Every choice was intentional. The result feels polished, intuitive and crafted — users noticed on day one.", a: "SC" },
  ];
  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="flex items-center justify-between">
          <h2 className="display-serif text-[22px] tracking-[-0.02em]">Trusted by founders</h2>
          <span className="font-mono text-[10px] tracking-[0.10em] text-white/25">03 TESTIMONIALS · DUMMY — REPLACE WHEN READY</span>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.n} className="glass glass-hover relative overflow-hidden rounded-[20px] p-6">
              <Quote className="h-5 w-5 text-white/10" />
              <p className="mt-3 text-[14px] leading-relaxed text-white/65">“{t.q}”</p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[11px] font-bold text-black">{t.a}</span>
                <div>
                  <p className="text-[13px] font-medium tracking-[-0.01em]">{t.n}</p>
                  <p className="font-mono text-[10px] tracking-[0.08em] text-white/30">{t.r}</p>
                </div>
                <span className="ml-auto text-[11px] text-amber-400">★★★★★</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {ACHIEVEMENTS.slice(0, 3).map((a) => (
            <div key={a.title} className="glass rounded-[18px] p-6">
              <p className="display-serif text-[16px] tracking-[-0.02em]">{a.title}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-white/40">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
