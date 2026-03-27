"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function DiscoverSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: Before/After visual */}
          <ScrollReveal className="min-w-0">
            <div className="grid grid-cols-2 gap-0 relative">
              {/* Without */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-black text-navy uppercase tracking-tight mb-4">
                  Without<br />
                  <span className="text-gray-400">Recova&trade;</span>
                </h3>
                <div className="aspect-[3/4] rounded-l-2xl bg-gradient-to-b from-gray-100 to-gray-50 border border-gray-200 border-r-0 flex items-center justify-center overflow-hidden">
                  <span className="text-xs text-gray-400 px-4 text-center">Before image</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 mt-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-teal shadow-lg shadow-teal/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>

              {/* With */}
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-4">
                  With<br />
                  <span className="text-teal">Recova&trade;</span>
                </h3>
                <div className="aspect-[3/4] rounded-r-2xl bg-gradient-to-b from-teal/5 to-teal/10 border border-teal/20 border-l-0 flex items-center justify-center overflow-hidden">
                  <span className="text-xs text-teal/50 px-4 text-center">After image</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Discovery copy */}
          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight uppercase italic mb-6">
              Discover the Easiest and Most Affordable Relief Solution
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              Neck pain is relentless. Whether it is the hours hunched over a
              laptop, the constant phone scrolling, the stress that sits in your
              muscles, or just the wear and tear of everyday life, the tightness
              and stiffness never seem to let up.
            </p>
            <p className="text-slate leading-relaxed mb-5">
              <span className="font-bold text-navy">Enter Recova&trade;</span>{" "}
              , a breakthrough EMS neck massager designed for people who are done
              settling for temporary relief. No pills, no appointments, just real
              results.
            </p>
            <p className="text-slate leading-relaxed">
              It has been built using the same EMS pulse technology trusted by
              physiotherapists and sports recovery professionals, and it is your
              go-to for instant relief from neck pain, stiffness, tension headaches,
              and stress, and it works in minutes.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
