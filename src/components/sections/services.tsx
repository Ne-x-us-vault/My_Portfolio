"use client";
import { Smartphone, Palette, Cpu, ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    icon: Smartphone,
    t: "App Development",
    d: "Fast, reliable apps — Kotlin, React, Next.js. Offline-first, real-time, design-system driven. From prototype to Play Store.",
    pts: ["Kotlin & Android", "React / Next.js", "Real-time & Offline", "Design systems"],
    accent: "from-[#7A7CFF]/15 to-[#7A7CFF]/5",
  },
  {
    n: "02",
    icon: Palette,
    t: "Web & UI/UX",
    d: "Websites that balance clarity, motion and engineering — wireframes to design systems, built for scale and delight.",
    pts: ["UI/UX Design", "Responsive & Motion", "Accessibility", "Design Systems"],
    accent: "from-[#00D9FF]/15 to-[#00D9FF]/5",
  },
  {
    n: "03",
    icon: Cpu,
    t: "Embedded & Robotics",
    d: "ESP32, sensors and control — practical bolt-on hardware that extends what already works. Rapid prototyping to production.",
    pts: ["ESP32 / Arduino", "Sensors & Control", "IoT & Edge", "Rapid prototyping"],
    accent: "from-[#FF8A5B]/15 to-[#FF8A5B]/5",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="container-premium">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label-mono">Services — 03 capabilities</p>
            <h2 className="display-serif mt-3 text-[30px] tracking-[-0.03em] sm:text-[36px]">What I do best</h2>
          </div>
          <p className="max-w-[340px] text-[13px] leading-relaxed text-white/40">Each engagement is product-minded — discovery, design, ship, iterate. No fluff, just outcomes.</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="group glass glass-hover relative overflow-hidden rounded-[22px] p-7">
              <div className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br ${s.accent} blur-2xl opacity-60 transition-opacity group-hover:opacity-100`} />
              <div className="relative flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur">
                  <s.icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[11px] tracking-[0.14em] text-white/20">— {s.n}</span>
              </div>
              <h3 className="display-serif relative mt-5 text-[20px] tracking-[-0.02em]">{s.t}</h3>
              <p className="relative mt-2 text-[13px] leading-relaxed text-white/45">{s.d}</p>
              <ul className="relative mt-6 space-y-2.5">
                {s.pts.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-[13px] text-white/65">
                    <span className="h-1 w-1 rounded-full bg-[#7A7CFF]" /> {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" data-cursor="hover" className="relative mt-7 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white px-4 py-2 text-[12px] font-semibold text-black transition-colors hover:bg-white/90">
                Start a project <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
