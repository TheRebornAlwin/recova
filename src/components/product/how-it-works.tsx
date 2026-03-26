"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const steps = [
  {
    step: 1,
    title: "Place It",
    description: "Place the pad on your neck, shoulders, or upper back",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <path d="M12 2a5 5 0 0 1 5 5c0 2-1 3-2 4l-1 1v2H10v-2l-1-1c-1-1-2-2-2-4a5 5 0 0 1 5-5z"/>
        <path d="M10 18h4"/>
        <path d="M10 22h4"/>
      </svg>
    ),
  },
  {
    step: 2,
    title: "Select Your Level",
    description: "Select your intensity from 19 levels",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <path d="M12 20v-6"/>
        <path d="M6 20v-4"/>
        <path d="M18 20v-10"/>
        <path d="M6 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        <path d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
        <path d="M18 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
      </svg>
    ),
  },
  {
    step: 3,
    title: "Feel the Relief",
    description: "Feel deep muscle tension release in 15 minutes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
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
                <div className="w-16 h-16 rounded-2xl bg-teal/5 flex items-center justify-center mx-auto mb-5">
                  {s.icon}
                </div>
                <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal text-white text-xs font-bold mb-4">
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
