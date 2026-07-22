"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-accent-primary/50 focus:ring-offset-2 focus:ring-offset-background",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-accent-primary/25 hover:shadow-accent-primary/40 hover:scale-[1.02] active:scale-[0.98]":
              variant === "primary",
            "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20":
              variant === "secondary" || variant === "outline",
            "bg-transparent text-gray-400 hover:text-white hover:bg-white/5":
              variant === "ghost",
            "px-4 py-2 text-sm": size === "sm",
            "px-6 py-3 text-sm": size === "md",
            "px-8 py-4 text-base": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
