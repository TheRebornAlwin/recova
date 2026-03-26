"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function EMSComparison() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">The Difference</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              EMS vs Everything Else
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Regular Massagers */}
          <ScrollReveal delay={0.1} className="min-w-0">
            <div className="relative p-8 rounded-2xl bg-gray-50 border border-gray-200 h-full">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gray-200 text-gray-500 text-xs font-bold">
                TRADITIONAL
              </div>
              <div className="mb-6 mt-4">
                <div className="w-full h-40 rounded-xl bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  {/* Surface-level visual */}
                  <div className="relative w-48">
                    <div className="h-3 bg-gray-300 rounded-full mb-2" />
                    <div className="text-center text-[10px] text-gray-400 font-medium mb-3">SKIN SURFACE</div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded" />
                      <div className="h-4 bg-gray-200 rounded" />
                      <div className="h-4 bg-gray-200 rounded opacity-60" />
                    </div>
                    <div className="text-center text-[10px] text-gray-400 font-medium mt-2">MUSCLE LAYER</div>
                    {/* Arrows only reaching surface */}
                    <div className="absolute -top-4 left-8 flex gap-1">
                      <svg width="20" height="24" viewBox="0 0 20 24"><path d="M10 0 L10 10" stroke="#9ca3af" strokeWidth="2" strokeDasharray="3 3"/><circle cx="10" cy="12" r="3" fill="#9ca3af" opacity="0.4"/></svg>
                      <svg width="20" height="24" viewBox="0 0 20 24"><path d="M10 0 L10 10" stroke="#9ca3af" strokeWidth="2" strokeDasharray="3 3"/><circle cx="10" cy="12" r="3" fill="#9ca3af" opacity="0.4"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-500 mb-2">Heat Pads & Vibration</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Surface level only. Heat and vibration feel nice temporarily but never reach the deep muscle tissue where tension actually lives.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                <span className="text-xs font-medium">Doesn&apos;t reach the muscle</span>
              </div>
            </div>
          </ScrollReveal>

          {/* NeckRelieve Pulse */}
          <ScrollReveal delay={0.2} className="min-w-0">
            <div className="relative p-8 rounded-2xl bg-teal/5 border-2 border-teal/20 h-full shadow-sm">
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-teal text-white text-xs font-bold">
                NECKRELIEVE PULSE
              </div>
              <div className="mb-6 mt-4">
                <div className="w-full h-40 rounded-xl bg-teal/5 flex items-center justify-center relative overflow-hidden">
                  {/* Deep penetration visual */}
                  <div className="relative w-48">
                    <div className="h-3 bg-teal/30 rounded-full mb-2" />
                    <div className="text-center text-[10px] text-teal font-medium mb-3">SKIN SURFACE</div>
                    <div className="space-y-2">
                      <div className="h-4 bg-teal/20 rounded" />
                      <div className="h-4 bg-teal/25 rounded" />
                      <div className="h-4 bg-teal/30 rounded" />
                    </div>
                    <div className="text-center text-[10px] text-teal font-medium mt-2">MUSCLE LAYER</div>
                    {/* Arrows going deep */}
                    <div className="absolute -top-4 left-8 flex gap-1">
                      <svg width="20" height="60" viewBox="0 0 20 60"><path d="M10 0 L10 50" stroke="#0d9488" strokeWidth="2"/><polygon points="5,50 15,50 10,58" fill="#0d9488"/></svg>
                      <svg width="20" height="60" viewBox="0 0 20 60"><path d="M10 0 L10 50" stroke="#0d9488" strokeWidth="2"/><polygon points="5,50 15,50 10,58" fill="#0d9488"/></svg>
                    </div>
                    {/* Pulse rings */}
                    <div className="absolute top-12 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full border-2 border-teal/30 animate-ping" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">EMS Pulse Technology</h3>
              <p className="text-sm text-slate leading-relaxed mb-4">
                Reaches the muscle directly. Electrical pulses penetrate past the skin surface and into the muscle fibers, triggering natural relaxation and deep tension release.
              </p>
              <div className="flex items-center gap-2 text-teal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span className="text-xs font-bold">Goes directly into the muscle</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
