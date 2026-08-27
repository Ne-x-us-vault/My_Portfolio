"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#08080A] px-6 text-[#F8F7F5]">
      <div className="relative max-w-md text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7A7CFF]/15 blur-3xl" />
        <div className="relative">
          <p className="font-mono text-[11px] tracking-[0.16em] text-white/40">ERROR · 404</p>
          <h1 className="display-serif mt-4 text-[88px] leading-none tracking-[-0.04em] sm:text-[120px]">
            <span className="text-accent-gradient">404</span>
          </h1>
          <p className="mt-3 text-[14px] leading-relaxed text-white/55">
            Looks like this page took a wrong turn. The link may be broken or the page may have moved.
          </p>
          <Link
            href="/"
            data-cursor="hover"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-mono text-[11px] tracking-[0.14em] text-black shadow-[0_8px_24px_rgba(255,255,255,0.12)] transition-all hover:bg-white/90"
          >
            ← BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
