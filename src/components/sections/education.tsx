"use client";
export default function Education() {
  const brands = [
    { n: "Linear", w: "92" },
    { n: "Figma", w: "76" },
    { n: "Notion", w: "92" },
    { n: "Vercel", w: "88" },
    { n: "Stripe", w: "82" },
    { n: "Raycast", w: "96" },
  ];
  return (
    <section className="relative py-10">
      <div className="container-premium">
        <div className="glass rounded-[22px] p-6 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="label-mono">Brands & partners — dummy, crafted</p>
            <span className="font-mono text-[10px] tracking-[0.10em] text-white/20">Trusted by product teams worldwide</span>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => (
              <div key={b.n} className="group flex h-[64px] items-center justify-center rounded-[14px] border border-white/5 bg-white/[0.03] font-mono text-[11px] font-semibold tracking-[0.14em] text-white/25 transition-all hover:bg-white hover:text-black">
                {b.n}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
