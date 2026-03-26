"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const bonuses = [
  { label: "4 Extra Gel Pads Included", originalPrice: "$12.99" },
  { label: "16 Adjustable Intensity Levels", originalPrice: "$9.99" },
  { label: "5 Professional Massage Modes", originalPrice: "$14.99" },
  { label: "USB-C Fast Charging Cable", originalPrice: "$7.99" },
  { label: "Free Worldwide Shipping", originalPrice: "$9.99" },
  { label: "30-Day Money-Back Guarantee", originalPrice: "Priceless" },
];

export default function ValueStack() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">Total Value</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-3">
              Everything You Get Today
            </h2>
            <p className="text-slate text-sm">All of this is included with your NeckRelieve Pulse</p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
            <div className="divide-y divide-gray-50">
              {bonuses.map((bonus, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4 gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-sm font-medium text-navy">{bonus.label}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-sm text-gray-400 line-through">{bonus.originalPrice}</span>
                    <span className="text-xs font-bold text-teal bg-teal/10 px-2 py-0.5 rounded-full">FREE</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-teal/5 border-t-2 border-teal/20 px-6 py-5 text-center">
              <p className="text-sm text-slate mb-1">Total value: <span className="line-through">$135.94</span></p>
              <p className="text-2xl font-bold text-teal">You pay just $39.99</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
