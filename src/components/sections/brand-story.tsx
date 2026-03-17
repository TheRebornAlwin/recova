"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import AnimatedCounter from "@/components/ui/animated-counter";
import MagneticButton from "@/components/ui/magnetic-button";

const stats = [
  { target: 10000, suffix: "+", label: "Happy Customers" },
  { target: 4.9, suffix: "/5", label: "Average Rating", isDecimal: true },
  { target: 30, suffix: " Day", label: "Money-Back Guarantee" },
];

export default function BrandStory() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <ScrollReveal className="min-w-0">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">
              Our Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-6">
              Built for people who are{" "}
              <TextGradient variant="teal">tired of the pain</TextGradient>
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              We started Recova because we were frustrated. Frustrated by neck
              pain that never went away. Frustrated by expensive treatments that
              only worked temporarily. Frustrated by gadgets that promised
              everything and delivered nothing.
            </p>
            <p className="text-slate leading-relaxed mb-6">
              EMS technology has been used in clinics and rehab centers for
              years, but it was always expensive and inaccessible. We made it
              our mission to bring that same professional-grade relief to
              everyone, at a price that makes sense.
            </p>
            <MagneticButton variant="secondary" href="/about/">
              Read Our Full Story
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="min-w-0">
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl font-bold text-teal mb-1">
                    {stat.isDecimal ? (
                      <span>
                        4.9{stat.suffix}
                      </span>
                    ) : (
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <p className="text-sm text-slate">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
