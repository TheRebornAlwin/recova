"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const bulletPoints = [
  "Suffers from neck pain, stiffness, or tension headaches",
  "Spends hours in front of a screen every day",
  "Wakes up with a stiff or sore neck regularly",
  "Has trouble falling asleep because of discomfort",
  "Experiences stress-related tightness in the neck",
];

const benefitBullets = [
  "Natural relief from the comfort of home",
  "No expensive medications or therapist visits",
  "Less neck pain, better sleep, reduced stress",
];

export default function PerfectFor() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Perfect For images */}
          <ScrollReveal className="min-w-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-teal tracking-tight mb-1">
                Perfect For
              </h2>
              <p className="text-xl md:text-2xl font-bold text-navy tracking-tight mb-8">
                People Who Are:
              </p>

              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfeOS28Nm5SKDuf4CUMsBOTcyEJkPbFvgL8lq7"
                  alt="Perfect for people in front of screens, with daily neck stiffness, and trouble sleeping"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Who is it for copy */}
          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-navy tracking-tight mb-6">
              Who Is It For?
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              If you are someone who:
            </p>
            <div className="space-y-3 mb-8 max-w-[280px] sm:max-w-sm mx-auto md:mx-0 text-left">
              {bulletPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0 mt-2" />
                  <span className="text-sm text-navy">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-slate leading-relaxed mb-5">
              Then <BrandName tm className="text-navy" /> is tailor-made for you.
            </p>
            <div className="space-y-3 max-w-[280px] sm:max-w-sm mx-auto md:mx-0 text-left">
              {benefitBullets.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal flex-shrink-0 mt-0.5"><polyline points="20 6 9 17 4 12"/></svg>
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
