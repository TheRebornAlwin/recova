"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const personas = [
  {
    title: "People with Daily Neck Pain",
    description: "You wake up stiff, push through the day, and go to bed sore. It never fully goes away no matter what you do.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <circle cx="12" cy="12" r="10"/><path d="M8 15h8"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/>
      </svg>
    ),
  },
  {
    title: "Desk Workers and Remote Employees",
    description: "8+ hours at a screen and your neck pays for it every evening. The tension just keeps stacking up day after day.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: "People Who Are Tired of Wasting Money",
    description: "You have tried stretches, heat pads, massage appointments, maybe even a chiropractor. Temporary relief at best. Nothing that actually sticks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    title: "People with Poor Posture from Phone Use",
    description: "Your neck has been tilting forward for years and you can feel it. The tension runs from your neck down into your shoulders and upper back.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
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

        <div className="grid sm:grid-cols-2 gap-6">
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
