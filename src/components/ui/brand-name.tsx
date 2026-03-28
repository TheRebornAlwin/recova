"use client";

/**
 * Renders "RECOVA" with the custom "A" that has no crossbar (upside down V).
 * Uses an inline SVG for the A character to match the brand identity.
 */
export default function BrandName({ className = "", tm = false }: { className?: string; tm?: boolean }) {
  return (
    <span className={`tracking-normal uppercase font-bold ${className}`}>
      RECOV
      <svg
        viewBox="0 0 24 28"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
        style={{ width: "0.7em", height: "0.85em", verticalAlign: "baseline", marginBottom: "-0.02em" }}
      >
        <path d="M12 0 L24 28 L19 28 L12 8 L5 28 L0 28 Z" />
      </svg>
      {tm && <span className="text-[0.5em] align-super ml-0.5">™</span>}
    </span>
  );
}
