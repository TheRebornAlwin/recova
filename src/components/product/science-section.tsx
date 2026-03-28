"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ScienceSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: How it works copy */}
          <ScrollReveal className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight uppercase mb-8">
              How Does It Work?
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              <span className="font-bold text-navy">Recova&trade;</span> uses
              advanced EMS (Electrical Muscle Stimulation) technology to send
              gentle, targeted pulses directly into your{" "}
              <span className="font-bold text-navy">neck muscles, relieving
              tension, stiffness, headaches,</span> and{" "}
              <span className="font-bold text-navy">more</span>.
            </p>
            <p className="text-slate leading-relaxed mb-5">
              The <span className="font-bold text-navy">EMS pulse pads</span>{" "}
              deliver controlled electrical signals that penetrate past the skin
              and into the deep muscle fiber, triggering natural contractions and
              relaxation cycles. This stimulates blood flow, loosens tight
              muscles, and releases the built-up tension that stretching, heat
              pads, and painkillers simply cannot reach.
            </p>
            <p className="text-slate leading-relaxed">
              It is the same technology used by physiotherapists and sports
              recovery professionals around the world, now available in a
              compact device you can use at home, at work, or anywhere you need
              relief.
            </p>
          </ScrollReveal>

          {/* Right: Custom SVG visualization */}
          <ScrollReveal delay={0.15} className="min-w-0">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-black text-navy uppercase tracking-tight mb-1">
                The Science
              </h3>
              <p className="text-lg md:text-xl font-bold text-slate mb-8">
                Behind <span className="text-teal">Recova&trade;</span> NeckRelieve Pulse
              </p>

              <Image
                src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfVjxSwuCcDRq1IaUousEkQV5YgOpbLT7hxeNm"
                alt="The science behind Recova NeckRelieve Pulse - EMS technology"
                width={500}
                height={500}
                className="w-full h-auto object-contain mx-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
