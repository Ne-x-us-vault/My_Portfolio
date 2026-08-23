"use client";
export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-premium">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-bold text-black">JR</span>
            <span className="font-mono text-[10px] tracking-[0.10em] text-white/25">© 2026 JASWA J.R — BUILT WITH PASSION</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.10em] text-white/25">
            <span>CRAFTED IN COIMBATORE</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="https://github.com/Ne-x-us-vault" target="_blank" data-cursor="hover" className="hover:text-white/60">GITHUB</a>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <a href="https://linkedin.com/in/jaswa-j-r" target="_blank" data-cursor="hover" className="hover:text-white/60">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
