"use client";
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#F2F0EB]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#111]/10 border-t-[#111]" />
        <p className="font-mono text-[11px] tracking-[0.14em] text-[#6B6B6B]">LOADING —</p>
      </div>
    </div>
  );
}
