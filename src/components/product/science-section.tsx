"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ScienceSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">Backed by Science</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              The Science Behind EMS
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <ScrollReveal className="min-w-0">
            <div className="space-y-5">
              <p className="text-slate leading-relaxed">
                EMS (Electrical Muscle Stimulation) is the same technology used by
                physiotherapists, sports recovery professionals, and rehabilitation
                centres worldwide.
              </p>
              <p className="text-slate leading-relaxed">
                It works by sending gentle electrical pulses directly into the muscle
                fibre. These pulses trigger natural muscle contractions and relaxation
                cycles — the same process your body uses to release tension, but
                targeted and controlled.
              </p>
              <p className="text-slate leading-relaxed">
                Unlike vibration or heat which only work on the skin surface, EMS
                reaches the deep muscle tissue where chronic tension from desk work,
                phone scrolling, and poor posture actually builds up.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Used by Physiotherapists", "Sports Recovery", "Clinically Proven"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-full bg-teal/5 text-teal text-xs font-semibold border border-teal/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="min-w-0">
            <div className="relative rounded-2xl bg-gradient-to-br from-teal/5 to-teal/10 border border-teal/10 p-8 md:p-10 overflow-hidden">
              {/* Visual diagram */}
              <div className="relative w-full aspect-square max-w-[280px] mx-auto">
                {/* Muscle layers */}
                <div className="absolute inset-x-4 top-[15%] h-[15%] bg-teal/10 rounded-lg flex items-center justify-center">
                  <span className="text-[10px] font-bold text-teal/60 tracking-wider uppercase">Skin</span>
                </div>
                <div className="absolute inset-x-4 top-[35%] h-[15%] bg-teal/15 rounded-lg flex items-center justify-center">
                  <span className="text-[10px] font-bold text-teal/60 tracking-wider uppercase">Tissue</span>
                </div>
                <div className="absolute inset-x-4 top-[55%] h-[20%] bg-teal/25 rounded-lg flex items-center justify-center">
                  <span className="text-[10px] font-bold text-teal/80 tracking-wider uppercase">Muscle Fibre</span>
                </div>

                {/* Pulse waves */}
                <div className="absolute top-[5%] left-1/4 w-px h-[72%] bg-gradient-to-b from-teal/0 via-teal to-teal/0" />
                <div className="absolute top-[5%] left-1/2 w-px h-[72%] bg-gradient-to-b from-teal/0 via-teal to-teal/0" />
                <div className="absolute top-[5%] left-3/4 w-px h-[72%] bg-gradient-to-b from-teal/0 via-teal to-teal/0" />

                {/* Pulse rings at muscle level */}
                <div className="absolute top-[58%] left-1/4 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-teal/20 animate-ping" />
                </div>
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-teal/20 animate-ping" style={{ animationDelay: "0.5s" }} />
                </div>
                <div className="absolute top-[58%] left-3/4 -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-teal/20 animate-ping" style={{ animationDelay: "1s" }} />
                </div>

                {/* Label */}
                <div className="absolute bottom-4 inset-x-0 text-center">
                  <span className="text-xs font-bold text-teal">EMS pulses reach deep muscle tissue</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
