"use client";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F2F0EB] px-6">
      <div className="text-center">
        <p className="font-mono text-[11px] tracking-[0.14em] text-[#6B6B6B]">404 — NOT FOUND</p>
        <h1 className="mt-4 font-['Instrument_Serif'] text-[72px] leading-none tracking-[-0.04em]">404</h1>
        <p className="mt-3 text-[14px] text-[#6B6B6B]">Page not found.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[#0A0A0A] px-6 py-3 font-mono text-[11px] tracking-[0.14em] text-white">BACK TO HOME</Link>
      </div>
    </div>
  );
}
