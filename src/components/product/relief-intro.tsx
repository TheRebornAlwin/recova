"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const painPoints = [
  "Neck pain that never fully goes away",
  "Tension building up every single day",
  "Wasting money on fixes that don\u2019t last",
  "Painkillers just to get through the afternoon",
];

export default function ReliefIntro() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
            Give Yourself the Relief You Deserve
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-slate text-lg mb-6">Sound familiar?</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-3 mb-8 max-w-sm mx-auto md:mx-0 md:max-w-none">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                <span className="text-sm text-navy">{point}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-slate leading-relaxed">
            <span className="font-bold text-navy">Now you don&apos;t have to.</span>{" "}
            <BrandName tm /> delivers fast, lasting relief in one simple device you
            can use at home.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
