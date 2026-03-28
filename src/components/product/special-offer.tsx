"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/scroll-reveal";
import BrandName from "@/components/ui/brand-name";

const bonuses = [
  { name: "4 Extra Gel Pads", wasPrice: "$12.99" },
  { name: "8 Massage Modes Included", wasPrice: "$9.99" },
  { name: "19 Intensity Levels", wasPrice: "$14.99" },
  { name: "USB-C Fast Charging Cable", wasPrice: "$7.99" },
  { name: "Premium Travel Pouch", wasPrice: "$9.95" },
];

export default function SpecialOffer() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* LEFT SIDE */}
            <div>
              <div className="mb-8">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-2">
                  Limited Time
                </p>
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight mb-4">
                  Special Offer Today!
                </h2>
                <p className="text-slate text-[15px] leading-relaxed mb-5">
                  Try <BrandName tm /> NOW Risk-Free at an All Time Low Price.
                </p>
              </div>

              <p className="text-base font-bold text-navy mb-4">Act Now and You&apos;ll Get:</p>
              <div className="space-y-3 mb-10">
                {[
                  <>50% OFF <BrandName tm /></>,
                  "$50 Worth of Free Gifts Included",
                  "30 Day Money Back Guarantee",
                  "FREE Shipping",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal flex-shrink-0"><polyline points="20 6 9 17 4 12" /></svg>
                    <span className="text-[15px] text-navy font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-5">
                What&apos;s Included:
              </p>

              {/* Product image */}
              <div className="w-full rounded-2xl overflow-hidden mb-8">
                <Image
                  src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfx99oRjb1MPrfg9puSNxnElw5GYkU0mA27yJO"
                  alt="Recova NeckRelieve Pulse special offer"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Price display */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="text-2xl text-gray-400 line-through font-medium">$79.99</span>
                <span className="text-4xl md:text-5xl font-black text-teal">$39.99</span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-navy uppercase tracking-tight mb-8">
                Bonus Today:
              </h3>

              <div className="space-y-6 mb-10">
                {bonuses.map((bonus, i) => (
                  <div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    {/* Circle image placeholder */}
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center border border-gray-200">
                      <span className="text-gray-400 text-xs font-bold">{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-navy mb-1">{bonus.name}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400 line-through">{bonus.wasPrice}</span>
                        <span className="text-sm font-black text-red-500 uppercase">Free Today!</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-teal/5 border border-teal/10 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal mx-auto mb-3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  <p className="text-sm font-black text-navy mb-1">30-DAY GUARANTEE</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-400 line-through">$19.95</span>
                    <span className="text-xs font-black text-red-500">FREE TODAY!</span>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-teal/5 border border-teal/10 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal mx-auto mb-3"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                  <p className="text-sm font-black text-navy mb-1">FREE SHIPPING</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-xs text-gray-400 line-through">$4.95</span>
                    <span className="text-xs font-black text-red-500">FREE TODAY!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
