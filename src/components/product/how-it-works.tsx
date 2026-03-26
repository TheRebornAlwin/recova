"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    step: 1,
    title: "Place It",
    description: "Place the pad on your neck, shoulders, or upper back. The gel pads stick gently to your skin for full contact.",
    visual: (
      <div className="relative w-full h-28 flex items-center justify-center">
        {/* Neck + pad visual */}
        <div className="relative">
          <div className="w-16 h-20 rounded-t-full bg-gray-200 relative">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-6 rounded-b-lg bg-teal/30 border-2 border-teal/50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            </div>
          </div>
          <div className="w-24 h-3 bg-gray-200 rounded-b-lg mx-auto -mt-0.5" />
        </div>
      </div>
    ),
  },
  {
    step: 2,
    title: "Choose Your Level",
    description: "Pick your intensity from 19 levels and 5 massage modes. Start low and work your way up to find what feels right.",
    visual: (
      <div className="relative w-full h-28 flex items-center justify-center">
        {/* Intensity bars */}
        <div className="flex items-end gap-1.5">
          {[20, 30, 40, 50, 60, 70, 80, 90, 100].map((h, i) => (
            <div
              key={i}
              className="w-3 rounded-t-sm transition-all duration-300"
              style={{
                height: `${h}%`,
                minHeight: `${h * 0.28}px`,
                backgroundColor: i < 6 ? "#0d9488" : "#0d948840",
              }}
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    step: 3,
    title: "Feel the Relief",
    description: "The EMS pulses go directly into the muscle. Most people feel tension releasing within the first 15 minutes.",
    visual: (
      <div className="relative w-full h-28 flex items-center justify-center">
        {/* Pulse wave visual */}
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-teal/20 animate-ping" />
        </div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">Simple to Use</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              How It Works
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="min-w-0">
              <div className="text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                {s.visual}
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal text-white text-xs font-bold mb-4 mt-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-slate leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
