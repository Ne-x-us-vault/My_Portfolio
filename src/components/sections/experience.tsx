"use client";
import { motion } from "framer-motion";

const items = [
  { k: "01", n: "12+", t: "Projects delivered", d: "Creative work that drives real results — from idea to App Store." },
  { k: "02", n: "100%", t: "Client satisfaction", d: "I focus on exceeding expectations, not just meeting them." },
  { k: "03", n: "04+", t: "Years building", d: "Mastering animation, systems and product craft." },
];

export default function Experience() {
  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((it, idx) => (
            <motion.div key={it.k} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="glass group relative overflow-hidden rounded-[24px] p-8">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#7A7CFF]/12 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <p className="font-mono text-[10px] tracking-[0.14em] text-white/25">// {it.k}</p>
              <p className="display-serif mt-3 bg-gradient-to-br from-white to-white/60 bg-clip-text text-[44px] leading-none tracking-[-0.04em] text-transparent">{it.n}</p>
              <p className="display-serif mt-2 text-[13px] tracking-[-0.02em]">{it.t}</p>
              <p className="mt-1 max-w-[220px] text-[12px] leading-relaxed text-white/35">{it.d}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
