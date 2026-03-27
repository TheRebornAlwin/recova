"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const benefits = [
  "Natural Neck and Shoulder Pain Relief",
  "Reduced Stiffness and Tension",
  "Better Posture Over Time",
  "Deeper, More Restful Sleep",
  "No More Wasting Money on Temporary Fixes",
];

const conditions = [
  { label: "CHRONIC\nNECK PAIN" },
  { label: "DESK AND\nPHONE STRAIN" },
  { label: "SHOULDER\nTENSION" },
];

export default function BenefitsHero() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Benefits copy */}
          <ScrollReveal className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight mb-6 uppercase">
              The Benefits:
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Neck pain, stiffness, and tension from sitting, scrolling, and
              stress can take over your entire day. It affects your work, your
              sleep, and your mood.
            </p>
            <p className="text-slate leading-relaxed mb-8">
              Today, you have the power to change that. With{" "}
              <span className="font-bold text-navy">Recova&trade;</span> you can
              experience instant and long-term relief, without medication:
            </p>
            <div className="space-y-3 max-w-md mx-auto md:mx-0">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 justify-center md:justify-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="text-[15px] font-semibold text-navy">{benefit}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Effective For visual */}
          <ScrollReveal delay={0.15} className="min-w-0">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black text-teal tracking-tight mb-8 uppercase">
                Effective For
              </h2>

              {/* Image placeholder grid */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {conditions.map((cond, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
                      <span className="text-xs text-gray-400 px-2 text-center">Image placeholder</span>
                    </div>
                    <p className="text-xs sm:text-sm font-black text-navy uppercase leading-tight tracking-wide whitespace-pre-line text-center">
                      {cond.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
