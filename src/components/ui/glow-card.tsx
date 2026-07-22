"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlowCard({ children, className, hover = true }: GlowCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 transition-all duration-500",
        hover && "hover:border-white/[0.15] hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-accent-primary/10 hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
