"use client";
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#08080A]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full border-2 border-white/10" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#7A7CFF] border-r-[#00D9FF]" />
        </div>
        <p className="font-mono text-[10px] tracking-[0.16em] text-white/45">
          LOADING<span className="ml-1 inline-block animate-pulse">…</span>
        </p>
      </div>
    </div>
  );
}
