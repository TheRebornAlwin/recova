"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const discoveryBullets = [
  "Targets neck pain, stiffness, and tension headaches",
  "Uses EMS pulse technology trusted by physiotherapists",
  "Works in minutes, not hours",
  "Compact enough to use at home, work, or on the go",
];

export default function DiscoverSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Before/After visual */}
          <ScrollReveal className="min-w-0">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-1 sm:gap-0">
              {/* Before */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold text-navy tracking-tight mb-4">
                  Before<br />
                  <span className="text-gray-400"><BrandName tm /></span>
                </h3>
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 border border-gray-200 overflow-hidden">
                  <Image
                    src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfliEmY86AmfChxDcXdnWLKpN6ZUw9YFPzMa4J"
                    alt="Before Recova"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center px-2 mt-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>

              {/* After */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-4">
                  After<br />
                  <span className="text-teal"><BrandName tm /></span>
                </h3>
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-teal/5 to-teal/10 border border-teal/20 overflow-hidden">
                  <Image
                    src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfyV6GQeSwyRmT5N4UxsjMfXha3kb7JeSpnK9Z"
                    alt="After Recova"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Discovery copy */}
          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-teal tracking-tight mb-6">
              Discover the Easiest and Most Affordable Relief Solution
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              <span className="font-bold text-navy">Enter</span>{" "}<BrandName tm className="text-navy" />,
              a breakthrough EMS neck massager for people who are done settling for
              temporary relief.
            </p>
            <div className="flex flex-col items-center md:items-start space-y-3">
              {discoveryBullets.map((point, i) => (
                <div key={i} className="inline-flex items-start gap-3 max-w-[90%] md:max-w-none">
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
