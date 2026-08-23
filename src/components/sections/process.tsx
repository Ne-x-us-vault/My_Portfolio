"use client";
export default function Process() {
  const steps = [
    { k: "S1", t: "Discover", d: "Clarify goals, audience and constraints. Map the problem before the solution — define what success looks like." },
    { k: "S2", t: "Design", d: "From concept to system — wireframes, prototypes, motion and user testing in tight loops. Iterate fast." },
    { k: "S3", t: "Deliver", d: "Ship, measure and iterate. Perf, SEO and support — launch is day one, not the finish line." },
  ];
  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="glass overflow-hidden rounded-[22px] p-0">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/5 px-7 py-5">
            <h2 className="display-serif text-[18px] tracking-[-0.02em]">The Process</h2>
            <span className="font-mono text-[10px] tracking-[0.14em] text-white/25">S1 — S3 · DISCOVER → DESIGN → DELIVER</span>
          </div>
          <div className="relative grid lg:grid-cols-3">
            {/* connector line desktop */}
            <div className="pointer-events-none absolute left-7 right-7 top-[42px] hidden h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent lg:block" />
            {steps.map((s) => (
              <div key={s.k} className="relative p-7 lg:p-8">
                <span className="relative z-10 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold tracking-[0.08em] text-black shadow">{s.k.slice(1)}</span>
                <span className="ml-2 font-mono text-[10px] tracking-[0.14em] text-white/30">{s.k}</span>
                <h3 className="display-serif mt-4 text-[19px] tracking-[-0.02em]">{s.t}</h3>
                <p className="mt-2 max-w-[280px] text-[13px] leading-relaxed text-white/45">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
