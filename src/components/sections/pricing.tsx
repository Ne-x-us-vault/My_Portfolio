"use client";
import { useState } from "react";
import { Check } from "lucide-react";

export default function Pricing() {
  const [annual, setAnnual] = useState(true);
  const tiers = [
    { name: "BASIC", price: annual ? "640" : "6,400", sub: "/month", items: ["Custom website design", "Responsive layouts", "Basic SEO setup", "Tool integrations", "Ongoing support"], cta: "Choose Basic" },
    { name: "PRO", price: annual ? "1,280" : "12,800", sub: "/month", items: ["Advanced web design", "Interactive elements", "Full SEO services", "E-commerce setup", "Monthly reports"], cta: "Choose Pro", featured: true },
    { name: "MAX", price: annual ? "2,560" : "25,600", sub: "/month", items: ["Complete branding", "Premium visuals", "Enterprise systems", "Dedicated manager", "Priority support"], cta: "Choose Max" },
  ];
  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="label-mono">Pricing — dummy, make it real later</p>
            <h2 className="display-serif mt-2 text-[30px] tracking-[-0.03em]">Simple, honest pricing</h2>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur">
            <button onClick={() => setAnnual(false)} data-cursor="hover" className={`rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-colors ${!annual ? "bg-white text-black shadow" : "text-white/45 hover:text-white"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} data-cursor="hover" className={`rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-colors ${annual ? "bg-white text-black shadow" : "text-white/45 hover:text-white"}`}>Annually — Save 20%</button>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`relative overflow-hidden rounded-[24px] border p-7 transition-all ${t.featured ? "border-white bg-white text-black shadow-[0_16px_40px_rgba(0,0,0,0.22)]" : "glass glass-hover"}`}>
              {t.featured && <span className="absolute right-4 top-4 rounded-full bg-black px-2.5 py-1 font-mono text-[10px] tracking-[0.10em] text-white">Most popular</span>}
              <p className={`font-mono text-[10px] tracking-[0.14em] ${t.featured ? "text-black/40" : "text-white/30"}`}>{t.name}</p>
              <p className="display-serif mt-3 flex items-baseline gap-1 text-[36px] leading-none tracking-[-0.03em]">
                {t.price} <span className={`font-mono text-[10px] tracking-[0.10em] ${t.featured ? "text-black/40" : "text-white/30"}`}>{t.sub}</span>
              </p>
              <ul className={`mt-6 space-y-2.5 border-t pt-6 ${t.featured ? "border-black/10" : "border-white/5"}`}>
                {t.items.map((it) => (
                  <li key={it} className={`flex items-center gap-2 text-[13px] ${t.featured ? "text-black/65" : "text-white/65"}`}>
                    <span className={`flex h-5 w-5 items-center justify-center rounded-full ${t.featured ? "bg-black text-white" : "bg-white/10 text-white/70"}`}>
                      <Check className="h-3 w-3" />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <a href="#contact" data-cursor="hover" className={`mt-7 flex w-full items-center justify-center rounded-full py-3 font-mono text-[11px] tracking-[0.12em] transition-colors ${t.featured ? "bg-black text-white hover:bg-black/90" : "border border-white/10 bg-white text-black hover:bg-white/90"}`}>
                {t.cta} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
