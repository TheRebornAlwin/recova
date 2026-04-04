"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

const features = [
  {
    title: "19 Adjustable Intensity Levels",
    description: "fine-tune the exact pulse strength you need, from a gentle buzz to deep muscle-contracting relief",
  },
  {
    title: "8 Professional Massage Modes",
    description: "different patterns for different types of tension so you can target exactly what your neck needs",
  },
  {
    title: "Wireless, Rechargeable and Portable",
    description: "for convenient use at home, at the office, or on the go whenever you need relief",
  },
  {
    title: "Long-Lasting Battery Life",
    description: "peace of mind that your device is always ready to go whenever you need it",
  },
];

export default function FeaturesLove() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Features list */}
          <ScrollReveal className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-teal tracking-tight mb-8">
              Features You&apos;ll Love
            </h2>
            <div className="flex flex-col items-center md:items-start space-y-5">
              {features.map((f, i) => (
                <div key={i} className="inline-flex items-start gap-3 max-w-[90%] md:max-w-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
                  <p className="text-[15px] text-slate leading-relaxed">
                    <span className="font-bold text-navy">{f.title}</span> - {f.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Product image */}
          <ScrollReveal delay={0.15} className="min-w-0">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pf2ahKRZrFugs4NIcOUi37j5bWlYR9zHkLheMr"
                alt="NeckRelieve Pulse features"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
