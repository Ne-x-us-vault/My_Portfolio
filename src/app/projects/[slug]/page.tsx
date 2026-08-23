"use client";
import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) return notFound();
  return (
    <div className="min-h-screen bg-[#08080A] text-[#F8F7F5]">
      <div className="container-premium py-10 sm:py-14">
        <Link href="/#works" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[11px] tracking-[0.12em] text-white/70 backdrop-blur hover:bg-white hover:text-black">
          <ArrowLeft className="h-4 w-4" /> BACK TO WORKS
        </Link>
        <div className="glass mt-8 rounded-[24px] p-8 sm:p-10">
          <p className="font-mono text-[11px] tracking-[0.14em] text-white/30">{p.category}</p>
          <h1 className="display-serif mt-3 text-[36px] leading-none tracking-[-0.03em] sm:text-[48px]">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-white/50">{p.description}</p>
          <div className="mt-6 flex gap-3">
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-medium text-black"><Github className="h-4 w-4" /> View code</a>
            {p.live && <a href={p.live} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[13px] text-white/70"><ExternalLink className="h-4 w-4" /> Live</a>}
          </div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="glass rounded-[20px] p-6 lg:col-span-2">
            <p className="label-mono">Tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">{p.techStack.map((t) => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[12px] text-white/70">{t}</span>)}</div>
          </div>
          <div className="glass rounded-[20px] p-6">
            <p className="label-mono">Impact</p>
            <p className="mt-3 text-[13px] leading-relaxed text-white/50">{p.impact}</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="glass rounded-[20px] p-6">
            <p className="display-serif text-[18px]">Challenges</p>
            <ul className="mt-3 space-y-2">{p.challenges.map((c) => <li key={c} className="rounded-[12px] border border-white/5 bg-white/5 p-3 text-[13px] leading-relaxed text-white/55">— {c}</li>)}</ul>
          </div>
          <div className="glass rounded-[20px] p-6">
            <p className="display-serif text-[18px]">Solutions</p>
            <ul className="mt-3 space-y-2">{p.solutions.map((c) => <li key={c} className="rounded-[12px] border border-white/5 bg-white/5 p-3 text-[13px] leading-relaxed text-white/55">✓ {c}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}
