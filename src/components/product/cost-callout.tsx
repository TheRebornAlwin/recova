"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function CostCallout() {
  return (
    <section className="py-16 md:py-20 px-6">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto rounded-3xl bg-teal text-white text-center py-14 md:py-16 px-6 md:px-12 shadow-lg shadow-teal/20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            One massage session costs $60 to $120.
          </h2>
          <p className="text-lg md:text-xl opacity-95 font-medium">
            The NeckRelieve Pulse costs <span className="font-bold underline underline-offset-4">$39.99</span>, and you can use it every single day.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
