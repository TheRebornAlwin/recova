"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import BrandName from "@/components/ui/brand-name";

const values = [
  {
    title: "Premium Quality",
    description:
      "We use professional-grade EMS technology that meets the same standards as clinical rehabilitation devices. No cheap knockoffs.",
  },
  {
    title: "Designed with Purpose",
    description:
      "Every feature exists for a reason. 8 modes, 19 levels, wireless portability. All designed around how people actually live with pain.",
  },
  {
    title: "Customer First",
    description:
      "30-day money-back guarantee, free shipping, and a support team that actually responds. We built the experience we wanted as customers.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">
              Our Story
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              We bring{" "}
              <TextGradient variant="teal">real relief</TextGradient> to your
              everyday life
            </h1>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-24">
          <ScrollReveal className="min-w-0">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-teal-light/40 to-white border border-teal/10 flex items-center justify-center">
              <Image
                src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pf4pRa3LfnI5pftsHlKbCS38YwuzArQJ9v1TWO"
                alt="Recova"
                width={200}
                height={200}
                className="w-32 h-32 md:w-48 md:h-48"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="min-w-0">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Born from frustration
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              We started <BrandName /> because we were tired of the cycle. Wake up with
              a stiff neck, push through the day, try a stretch or two, pop some
              Ibuprofen, repeat. Sound familiar?
            </p>
            <p className="text-slate leading-relaxed mb-4">
              EMS (Electrical Muscle Stimulation) technology has been used in
              physical therapy clinics for decades, but it was always expensive
              and inaccessible. We wondered: why can't everyone have access to
              this?
            </p>
            <p className="text-slate leading-relaxed">
              So we built the NeckRelieve Pulse. A compact, wireless,
              affordable EMS device that delivers the same type of targeted
              muscle stimulation you'd get at a specialist's office. No
              appointments. No recurring costs. Just real relief, on your terms.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-navy">What we stand for</h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassmorphismCard className="h-full text-center">
                <h3 className="text-lg font-bold text-navy mb-3">
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
    </div>
  );
}
