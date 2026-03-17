"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";
import TextGradient from "@/components/ui/text-gradient";
import MagneticButton from "@/components/ui/magnetic-button";
import { heroProduct } from "@/lib/data";

export default function ProductShowcase() {
  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-teal-light/40 to-white border border-teal/10 overflow-hidden flex items-center justify-center shadow-lg">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-teal/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                </div>
                <p className="text-sm text-slate">Product image coming soon</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">
              Featured Product
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              Meet the{" "}
              <TextGradient variant="teal">{heroProduct.title}</TextGradient>
            </h2>
            <p className="text-slate leading-relaxed mb-6">
              {heroProduct.description}
            </p>

            <div className="space-y-4 mb-8">
              {heroProduct.features.slice(0, 3).map((feature, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-teal-light/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy text-sm">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-teal">
                ${heroProduct.price.toFixed(2)}
              </span>
              <span className="text-lg text-muted line-through">
                ${heroProduct.compareAtPrice.toFixed(2)}
              </span>
              <span className="px-3 py-1 rounded-full bg-teal-light text-teal-dark text-xs font-bold">
                SAVE{" "}
                {Math.round(
                  ((heroProduct.compareAtPrice - heroProduct.price) /
                    heroProduct.compareAtPrice) *
                    100
                )}
                %
              </span>
            </div>

            <MagneticButton
              variant="primary"
              size="lg"
              href="/products/neckrelieve-pulse/"
            >
              Get Yours Now
            </MagneticButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
