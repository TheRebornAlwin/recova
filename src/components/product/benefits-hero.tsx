"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const benefits = [
  "Natural Neck Pain and Stiffness Relief",
  "Fewer Tension Headaches and Migraines",
  "Loosen Up After Long Days at a Desk",
  "Deeper, More Restful Sleep",
  "No More Spending on Temporary Fixes",
];

const conditions = [
  { label: "CHRONIC\nNECK PAIN" },
  { label: "DESK AND\nPHONE STRAIN" },
  { label: "TENSION\nHEADACHES" },
];

export default function BenefitsHero() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Benefits copy */}
          <ScrollReveal className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight mb-6">
              The Benefits:
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Neck pain, stiffness, and tension from sitting, scrolling, and
              stress can take over your entire day. It affects your work, your
              sleep, and your mood.
            </p>
            <p className="text-slate leading-relaxed mb-8">
              Today, you have the power to change that. With{" "}
              <BrandName tm className="text-navy" /> you can
              experience instant and long-term relief, without medication:
            </p>
            <div className="flex flex-col items-center md:items-start space-y-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="inline-flex items-center gap-3 max-w-[90%] md:max-w-none">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal flex-shrink-0"><polyline points="20 6 9 17 4 12"/></svg>
                  <span className="text-[15px] font-semibold text-navy">{benefit}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right: Effective For visual */}
          <ScrollReveal delay={0.15} className="min-w-0">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-teal tracking-tight mb-8">
                Effective For
              </h2>

              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pf8c3fWIWs4qMzpg3kyZeFh0XQWYPCr7wRbN9V"
                  alt="Effective for neck pain, desk strain, and tension headaches"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Condition labels */}
              <div className="grid grid-cols-3 gap-3">
                {conditions.map((cond, i) => (
                  <p key={i} className="text-xs sm:text-sm font-black text-navy uppercase leading-tight tracking-wide whitespace-pre-line text-center">
                    {cond.label}
                  </p>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
