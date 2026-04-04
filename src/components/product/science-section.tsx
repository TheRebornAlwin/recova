"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const scienceBullets = [
  "Sends electrical pulses directly into muscle fiber",
  "Triggers natural contraction and relaxation cycles",
  "Stimulates blood flow and loosens tight muscles",
  "Same technology used by physiotherapists worldwide",
];

export default function ScienceSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Image */}
          <ScrollReveal className="min-w-0">
            <div className="text-center">
              <Image
                src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfVjxSwuCcDRq1IaUousEkQV5YgOpbLT7hxeNm"
                alt="The science behind Recova NeckRelieve Pulse - EMS technology"
                width={500}
                height={500}
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </ScrollReveal>

          {/* Right: How it works copy */}
          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight mb-4">
              How Does It Work?
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              <BrandName tm className="text-navy" /> uses advanced{" "}
              <span className="font-bold text-navy">EMS (Electrical Muscle Stimulation)</span>{" "}
              technology to relieve tension, stiffness, and headaches at the source.
            </p>
            <div className="space-y-3 px-6 md:px-0">
              {scienceBullets.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                  <span className="text-sm text-navy">{point}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
