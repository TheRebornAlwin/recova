"use client";

import { cn } from "@/lib/utils";

interface TextGradientProps {
  children: React.ReactNode;
  variant?: "teal" | "warm" | "aurora";
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export default function TextGradient({
  children,
  variant = "teal",
  className,
  as: Component = "span",
}: TextGradientProps) {
  const gradients = {
    teal: "from-teal to-teal-dark",
    warm: "from-warm to-orange-500",
    aurora: "from-teal via-emerald-400 to-warm",
  };

  return (
    <Component
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        gradients[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
