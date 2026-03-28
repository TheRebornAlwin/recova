"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

export default function RiskFreeGuarantee() {
  return (
    <section className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight uppercase mb-8">
              Try It 100% Risk-Free for 30 Days
            </h2>

            <div className="space-y-5 text-[15px] md:text-base text-slate leading-relaxed text-left md:text-center">
              <p>
                We are so confident in our product that we offer an iron-clad 30-day
                money back guarantee that only starts when you receive the product,
                not when you place your order!
              </p>

              <p>
                Buying items online can be a daunting task, so we want you to be
                aware of the absolute{" "}
                <strong className="text-navy">
                  ZERO risk in buying something from us and trying it out
                </strong>
                . If you don&apos;t like it, no hard feelings, we&apos;ll make it right.
              </p>

              <p>
                This means that when you receive your product you have 30 days to
                test it out and if you are not satisfied with your purchase, you have
                the ability to get in touch with our{" "}
                <strong className="text-navy">friendly customer care team</strong>{" "}
                and get a <strong className="text-navy">full refund</strong>.
              </p>

              <p>
                We have{" "}
                <strong className="text-navy">
                  24/7/365 Online Email Support
                </strong>
                . Please contact us if you need any assistance.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
