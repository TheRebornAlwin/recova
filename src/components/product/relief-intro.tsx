"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

export default function ReliefIntro() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-navy tracking-tight uppercase mb-8">
            Give Yourself the Relief You Deserve
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-slate leading-relaxed mb-6">
            If you are reading this, chances are you are dealing with neck pain,
            stiffness, tension headaches, or that constant tightness that builds
            up after hours at a desk or on your phone. Problems that millions of
            people face every single day.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-slate leading-relaxed mb-6">
            You have tried <span className="font-bold text-navy">everything</span> from
            painkillers, heating pads, stretching routines, massage appointments, or
            worst of all, just putting up with the pain and hoping it goes away on
            its own.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-slate leading-relaxed">
            <span className="font-bold text-navy">Now you don&apos;t have to.</span>{" "}

            <BrandName tm /> has been developed to offer fast and lasting relief in one
            simple-to-use device that can be used in the comfort of your own home.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
