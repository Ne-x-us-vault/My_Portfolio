"use client";
import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2800);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20">
      <div className="container-premium">
        <div className="glass relative overflow-hidden rounded-[28px] p-8 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#7A7CFF]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#00D9FF]/8 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="label-mono">Get in touch — let’s build</p>
              <h2 className="display-serif mt-3 text-[38px] leading-[0.88] tracking-[-0.03em] sm:text-[48px]">
                Let&apos;s start <br />
                <span className="italic font-light text-white/65">creating</span> together
              </h2>
              <p className="mt-4 max-w-[420px] text-[13px] leading-relaxed text-white/45">Whether you have a product idea, a team to augment, or just want to say hi — my inbox is open. Replies within 24h.</p>

              <div className="mt-8 space-y-2.5">
                {[
                  { icon: Mail, k: "Email", v: "jaswa.personal.3617@outlook.com", href: "mailto:jaswa.personal.3617@outlook.com" },
                  { icon: MapPin, k: "Location", v: "Coimbatore, Tamil Nadu, India", href: "#" },
                  { icon: Github, k: "GitHub", v: "github.com/Ne-x-us-vault", href: "https://github.com/Ne-x-us-vault" },
                  { icon: Linkedin, k: "LinkedIn", v: "linkedin.com/in/jaswa-j-r", href: "https://linkedin.com/in/jaswa-j-r" },
                ].map((it) => (
                  <a key={it.k} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} data-cursor="hover" className="group flex items-center gap-3 rounded-[14px] border border-white/5 bg-white/[0.02] p-3.5 transition-colors hover:border-white/10 hover:bg-white/[0.04]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 ring-1 ring-white/10 group-hover:bg-white group-hover:text-black">
                      <it.icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="font-mono text-[10px] tracking-[0.10em] text-white/30">{it.k.toUpperCase()}</span>
                      <span className="block text-[13px] font-medium tracking-[-0.01em] text-white/70 group-hover:text-white">{it.v}</span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/15 bg-emerald-500/10 px-3 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                <span className="font-mono text-[10px] tracking-[0.10em] text-emerald-300">Available for opportunities · Response &lt; 24h</span>
              </div>
            </div>

            <form onSubmit={submit} className="relative">
              <div className="rounded-[20px] border border-white/10 bg-black/20 p-5 backdrop-blur sm:p-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="space-y-1.5">
                    <span className="font-mono text-[10px] tracking-[0.10em] text-white/30">NAME</span>
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ada Lovelace" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white placeholder-white/25 outline-none transition-colors focus:border-white/20 focus:bg-white/10" />
                  </label>
                  <label className="space-y-1.5">
                    <span className="font-mono text-[10px] tracking-[0.10em] text-white/30">EMAIL</span>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="ada@analytical.engine" className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[14px] text-white placeholder-white/25 outline-none transition-colors focus:border-white/20 focus:bg-white/10" />
                  </label>
                </div>
                <label className="mt-3 block space-y-1.5">
                  <span className="font-mono text-[10px] tracking-[0.10em] text-white/30">MESSAGE</span>
                  <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your product or opportunity..." className="w-full resize-none rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-[14px] leading-relaxed text-white placeholder-white/25 outline-none transition-colors focus:border-white/20 focus:bg-white/10" />
                </label>
                <button type="submit" data-cursor="hover" className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 font-semibold tracking-[-0.01em] text-black shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all hover:bg-white/90 active:scale-[0.99]">
                  {sent ? <CheckCircle2 className="h-4 w-4 text-emerald-600" /> : <Send className="h-4 w-4" />}
                  {sent ? "Message sent — thank you!" : "Send message"}
                  {!sent && <span className="transition-transform group-hover:translate-x-0.5">↗</span>}
                </button>
                <p className="mt-3 text-center font-mono text-[10px] tracking-[0.08em] text-white/20">By sending, you agree to be contacted back. No spam — promise.</p>
              </div>
              {/* subtle glow */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
            </form>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-6 font-mono text-[10px] tracking-[0.10em] text-white/20">
          <span>© 2026 JASWA J.R — CRAFTED WITH PASSION · NEXT.JS · THREE.JS · FRAMER MOTION</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-cursor="hover" className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/30 hover:bg-white hover:text-black">
            Back to top ↑
          </button>
        </div>
      </div>
    </section>
  );
}
