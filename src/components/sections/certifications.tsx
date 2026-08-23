"use client";
import { CERTIFICATIONS } from "@/lib/data";
import { Award, ShieldCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="flex items-center justify-between">
          <h2 className="display-serif text-[22px] tracking-[-0.02em]">Awards & Certifications</h2>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] tracking-[0.10em] text-white/30">05 · SINCE 2023</span>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <div key={c.name} className="glass glass-hover group relative overflow-hidden rounded-[18px] p-5">
              <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#7A7CFF]/10 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow">
                  {i % 2 === 0 ? <Award className="h-4 w-4" /> : <ShieldCheck className="h-4 w-4" />}
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-black">{c.date}</span>
              </div>
              <p className="display-serif mt-4 text-[15px] leading-tight tracking-[-0.02em]">{c.name}</p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.10em] text-white/35">{c.issuer}</p>
              <div className="mt-4 flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] text-white/20">
                <span className="h-px w-6 bg-white/10" /> Verified
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
