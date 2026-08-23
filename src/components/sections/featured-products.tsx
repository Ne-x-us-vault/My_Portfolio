"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { title: "Portfolio Davies", price: "$49", tag: "Framer Template", grad: "from-[#7A7CFF]/20 via-white/5 to-[#00D9FF]/15" },
  { title: "Nexus Launcher", price: "OSS", tag: "GNOME Extension", grad: "from-white/10 via-white/5 to-[#7A7CFF]/10" },
  { title: "Tether — Social OS", price: "Live", tag: "Full Stack", grad: "from-[#00D9FF]/15 via-white/5 to-[#7A7CFF]/15" },
  { title: "Nexus Axis", price: "Beta", tag: "Game + Tauri", grad: "from-[#FF8A5B]/15 via-white/5 to-[#7A7CFF]/15" },
];

export default function FeaturedProducts() {
  const [i, setI] = useState(1);
  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label-mono">Featured — curated placeholders</p>
            <h2 className="display-serif mt-2 text-[22px] tracking-[-0.02em]">Made to browse, built to ship</h2>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setI((p) => (p - 1 + cards.length) % cards.length)} data-cursor="hover" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur hover:bg-white hover:text-black">
              ←
            </button>
            <button onClick={() => setI((p) => (p + 1) % cards.length)} data-cursor="hover" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow hover:bg-white/90">
              →
            </button>
            <a href="#works" className="ml-2 hidden font-mono text-[11px] tracking-[0.12em] text-white/40 underline decoration-white/15 underline-offset-4 hover:text-white/70 sm:block">
              Browse all ↗
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, idx) => (
            <motion.div
              key={c.title}
              data-cursor="view"
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-[20px] border p-3 transition-all ${idx === i ? "border-white/15 bg-white text-black shadow-[0_16px_40px_rgba(0,0,0,0.28)]" : "glass glass-hover"}`}
            >
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[14px] border bg-gradient-to-br ${c.grad} ${idx === i ? "border-black/10" : "border-white/10"}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
                <div className="absolute left-3 top-3 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/80" />
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div className={`absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-[0.14em] ${idx === i ? "text-black/35" : "text-white/30"}`}>PREVIEW</div>
                {/* floating badge */}
                <div className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-[0.10em] ${idx === i ? "bg-black text-white" : "bg-white/10 text-white/70 backdrop-blur"}`}>{c.tag}</div>
              </div>
              <div className="p-2">
                <p className={`display-serif text-[16px] leading-none tracking-[-0.02em] ${idx === i ? "text-black" : "text-white"}`}>{c.title}</p>
                <p className={`mt-1 flex items-center justify-between font-mono text-[10px] tracking-[0.10em] ${idx === i ? "text-black/40" : "text-white/35"}`}>
                  <span>{c.tag}</span>
                  <span className={`rounded-full px-2 py-0.5 ${idx === i ? "bg-black text-white" : "bg-white/10 text-white/60"}`}>{c.price}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-3 text-center font-mono text-[10px] tracking-[0.10em] text-white/20">Dummy products — replace with your real store / templates when ready</p>
      </div>
    </section>
  );
}
