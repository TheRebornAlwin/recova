"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import TextGradient from "@/components/ui/text-gradient";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Software Developer",
    text: "My neck was constantly tight from staring at screens all day. The first few sessions felt different, but now I can't imagine not having it. The tension just melts away.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    role: "Office Manager",
    text: "After three weeks of using this daily, my pain is about 70% better. I can sit through meetings without constantly shifting. This thing actually works.",
    rating: 5,
  },
  {
    name: "Brandon C.",
    role: "Freelance Designer",
    text: "I've spent hundreds on chiropractor visits. This $40 device gives me more daily relief than anything else I've tried. It's now part of my nightly routine.",
    rating: 5,
  },
  {
    name: "Lisa T.",
    role: "Registered Nurse",
    text: "I'm on my feet all day and the tension builds up in my neck and shoulders. This has been an absolute godsend. The relief is immediate.",
    rating: 5,
  },
  {
    name: "James R.",
    role: "Construction Worker",
    text: "It actually pulses into the muscle and you can feel it breaking down the tension. Nothing else has worked like this for me. Even on the lowest setting it's effective.",
    rating: 5,
  },
  {
    name: "Amanda G.",
    role: "Physical Therapist",
    text: "I recommend EMS to my patients regularly. Having a portable, affordable option like this is excellent. The 8 modes give real versatility for different muscle groups.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 px-6 section-gradient-warm">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">
              Real Results
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              What our{" "}
              <TextGradient variant="teal">customers</TextGradient> are saying
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real people
              experience with the NeckRelieve Pulse.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="min-w-0">
              <GlassmorphismCard className="h-full">
                <div className="flex text-warm text-sm mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="text-slate text-sm leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
