"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "How long does a project usually take?", a: "Typically 3–6 weeks depending on scope, feedback and integrations. Weekly demos keep you in the loop — no big-bang reveals." },
  { q: "Do you work with international clients?", a: "Yes — fully remote. I overlap IST with EU/US for syncs and keep everything async-first (Notion, Loom, GitHub)." },
  { q: "Can you help with both design and development?", a: "End-to-end: UI/UX, design systems, frontend, backend, mobile and embedded. One owner, one system." },
  { q: "What's your payment process?", a: "Fixed-price or retainer. 50% upfront, remainder on milestones — dummy placeholder. We’ll make it real when you’re ready." },
  { q: "Do you provide ongoing support?", a: "Yes — maintenance, performance, SEO and iterative feature work. Support plans available after launch." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="glass overflow-hidden rounded-[22px]">
          <div className="flex items-center justify-between border-b border-white/5 px-6 py-5 sm:px-7">
            <h2 className="display-serif text-[18px] tracking-[-0.02em]">Frequently asked questions</h2>
            <span className="font-mono text-[10px] tracking-[0.12em] text-white/25">05 — FAQ</span>
          </div>
          <div className="divide-y divide-white/5">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button onClick={() => setOpen(open === i ? -1 : i)} data-cursor="hover" className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02] sm:px-7">
                  <span className="flex gap-3">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-white/20">0{i + 1}</span>
                    <span className="display-serif text-[15px] leading-tight tracking-[-0.02em]">{f.q}</span>
                  </span>
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[14px] transition-colors ${open === i ? "border-white bg-white text-black" : "border-white/10 bg-white/5 text-white/50"}`}>{open === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden">
                      <p className="px-6 pb-5 pl-[44px] pr-7 text-[13px] leading-relaxed text-white/45 sm:pl-[46px]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
