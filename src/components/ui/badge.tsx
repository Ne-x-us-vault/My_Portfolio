"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        {
          "bg-white/10 text-gray-300": variant === "default",
          "bg-accent-primary/10 text-accent-primary border border-accent-primary/20":
            variant === "accent",
          "border border-white/20 text-white/70": variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
