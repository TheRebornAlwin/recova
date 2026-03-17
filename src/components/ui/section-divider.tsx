"use client";

import { cn } from "@/lib/utils";

interface SectionDividerProps {
  variant?: "aurora" | "ray" | "gradient";
  className?: string;
}

export default function SectionDivider({
  variant = "aurora",
  className,
}: SectionDividerProps) {
  if (variant === "gradient") {
    return (
      <div
        className={cn("h-24 w-full section-gradient-teal", className)}
      />
    );
  }

  if (variant === "ray") {
    return (
      <div className={cn("flex justify-center py-8", className)}>
        <div className="h-px w-full max-w-xl bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className={cn("flex justify-center py-8", className)}>
      <div
        className="h-px w-full max-w-xl animate-shimmer"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, #0d9488, #14b8a6, #0d9488, transparent)",
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
}
