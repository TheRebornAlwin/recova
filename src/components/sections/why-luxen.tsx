"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import TextGradient from "@/components/ui/text-gradient";
import BrandName from "@/components/ui/brand-name";

const values = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
    ),
    title: "EMS Pulse Technology",
    description:
      "Sends targeted electrical signals directly into your muscles, releasing deep tension that stretching and heat simply can't reach.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    title: "Relief in Minutes",
    description:
      "Feel the tension releasing in your very first 15-minute session. No appointments, no waiting rooms, no recurring costs.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: "Clinically Proven",
    description:
      "EMS technology has been used in physical therapy and rehabilitation for decades. Now available for home use at a fraction of the cost.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
    ),
    title: "30-Day Guarantee",
    description:
      "Try it risk-free. If you don't feel a real difference in your pain levels within 30 days, we'll give you a full refund. No questions asked.",
  },
];

export default function WhyRecova() {
  return (
    <section className="py-24 md:py-36 px-6 section-gradient-teal">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">
              Why <BrandName />
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              Not another <TextGradient variant="teal">gadget</TextGradient>.
              Real relief.
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              You've tried stretches, heating pads, and painkillers. Here's
              why this is different.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="min-w-0">
              <GlassmorphismCard className="h-full text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-teal-light/60 flex items-center justify-center text-teal">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate leading-relaxed">
                  {value.description}
                </p>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
