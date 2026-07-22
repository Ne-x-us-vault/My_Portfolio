"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedBorder({ children, className }: AnimatedBorderProps) {
  return (
    <div className={cn("relative group rounded-2xl p-[1px] overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-highlight animate-border-flow opacity-30" style={{ backgroundSize: "200% 200%" }} />
      <div className="relative rounded-2xl bg-background/90 backdrop-blur-xl p-6 h-full">
        {children}
      </div>
    </div>
  );
}
