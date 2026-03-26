"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const personas = [
  {
    title: "The Desk Worker",
    description: "8+ hours at a screen and your neck pays for it every evening",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: "The Phone Scroller",
    description: "Your neck has been tilting forward for years and you can feel it",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    title: "The One Who's Tried Everything",
    description: "Stretches, heat pads, chiropractors. Nothing that actually lasts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">Made for You</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Who It&apos;s For
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="min-w-0">
              <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/20 transition-all duration-300 h-full group">
                <div className="w-14 h-14 rounded-2xl bg-teal/5 flex items-center justify-center mb-5 group-hover:bg-teal/10 transition-colors mx-auto md:mx-0">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 text-center md:text-left">{p.title}</h3>
                <p className="text-sm text-slate leading-relaxed text-center md:text-left">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
