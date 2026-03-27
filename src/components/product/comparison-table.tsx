"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const Check = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal mx-auto"><polyline points="20 6 9 17 4 12"/></svg>
);
const Cross = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300 mx-auto"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const rows = [
  { label: "Price", pulse: "$39.99 one-time", massage: "$50-120 per session" },
  { label: "Use it anytime you want", pulse: true, massage: false },
  { label: "Gets deep into the muscle", pulse: true, massage: false },
  { label: "Portable", pulse: true, massage: false },
  { label: "Use it while working or watching TV", pulse: true, massage: false },
  { label: "No recurring costs", pulse: true, massage: false },
  { label: "Adjustable intensity levels", pulse: true, massage: false },
  { label: "No appointments needed", pulse: true, massage: false },
];

export default function ComparisonTable() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">Compare</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              NeckRelieve Pulse vs Massage
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr]">
              <div className="p-4" />
              <div className="p-4 bg-teal text-white text-center text-sm font-bold">
                NeckRelieve Pulse
              </div>
              <div className="p-4 text-center text-sm font-bold text-navy">
                Regular Massage
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, ri) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_1fr_1fr] ${ri % 2 === 0 ? "bg-gray-50/50" : "bg-white"}`}
              >
                <div className="p-3 sm:p-4 text-xs sm:text-sm font-medium text-navy flex items-center">
                  {row.label}
                </div>
                <div className="p-3 sm:p-4 bg-teal/5 flex items-center justify-center">
                  {typeof row.pulse === "boolean" ? (
                    row.pulse ? <Check /> : <Cross />
                  ) : (
                    <span className="text-teal font-bold text-xs sm:text-sm text-center">{row.pulse}</span>
                  )}
                </div>
                <div className="p-3 sm:p-4 flex items-center justify-center">
                  {typeof row.massage === "boolean" ? (
                    row.massage ? <Check /> : <Cross />
                  ) : (
                    <span className="text-slate text-xs sm:text-sm text-center">{row.massage}</span>
                  )}
                </div>
              </div>
            ))}

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
