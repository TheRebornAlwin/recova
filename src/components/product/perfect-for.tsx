"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const situations = [
  { label: "IN FRONT OF\nDIGITAL SCREENS\nOFTEN" },
  { label: "DEALING WITH\nDAILY NECK\nSTIFFNESS" },
  { label: "HAVING TROUBLE\nSLEEPING AT\nNIGHT" },
];

const bulletPoints = [
  "Suffers from neck pain, stiffness, or tension headaches",
  "Spends hours in front of a screen every day",
  "Wakes up with a stiff or sore neck regularly",
  "Has trouble falling asleep because of discomfort",
  "Experiences stress-related tightness in the neck",
];

export default function PerfectFor() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left: Perfect For images */}
          <ScrollReveal className="min-w-0">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-teal uppercase tracking-tight mb-1">
                Perfect For
              </h2>
              <p className="text-xl md:text-2xl font-bold text-navy uppercase tracking-tight mb-8">
                People Who Are:
              </p>

              <div className="grid grid-cols-3 gap-3">
                {situations.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <div className="w-full aspect-[3/4] rounded-2xl bg-gradient-to-b from-gray-100 to-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
                      <span className="text-[10px] text-gray-400 px-2 text-center">Image</span>
                    </div>
                    <p className="text-[10px] sm:text-xs font-black text-navy uppercase leading-tight tracking-wide whitespace-pre-line text-center">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Who is it for copy */}
          <ScrollReveal delay={0.15} className="min-w-0 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight uppercase mb-6">
              Who Is It For?
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              If you are someone who:
            </p>
            <div className="space-y-3 mb-8 max-w-md mx-auto md:mx-0 text-left">
              {bulletPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-teal font-bold text-lg leading-none mt-0.5">&#8226;</span>
                  <span className="text-[15px] text-slate leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
            <p className="text-slate leading-relaxed mb-5">
              Then <span className="font-bold text-navy">Recova&trade;</span> is
              tailor-made for you.
            </p>
            <p className="text-slate leading-relaxed mb-5">
              This innovative solution offers{" "}
              <span className="font-bold text-navy">natural relief, right within
              the comfort of your home.</span> Say goodbye to expensive
              medications and costly visits to massage therapists.
            </p>
            <p className="text-slate leading-relaxed">
              It is the perfect solution for anyone wanting a life with less neck
              pain, better sleep, reduced stress, and no more tension headaches.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
