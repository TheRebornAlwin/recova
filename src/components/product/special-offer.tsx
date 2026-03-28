"use client";

import ScrollReveal from "@/components/ui/scroll-reveal";

const bonuses = [
  { name: "4 Extra Gel Pads", wasPrice: "$12.99" },
  { name: "8 Massage Modes Included", wasPrice: "$9.99" },
  { name: "19 Intensity Levels", wasPrice: "$14.99" },
  { name: "USB-C Fast Charging Cable", wasPrice: "$7.99" },
  { name: "Premium Travel Pouch", wasPrice: "$9.95" },
];

const badges = [
  { label: "30-DAY GUARANTEE", wasPrice: "$19.95" },
  { label: "FREE SHIPPING", wasPrice: "$4.95" },
];

export default function SpecialOffer() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* LEFT SIDE */}
            <div>
              <div className="mb-6">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-2">
                  Limited Time
                </p>
                <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight mb-3">
                  Special Offer Today!
                </h2>
                <p className="text-slate text-[15px] leading-relaxed mb-4">
                  Try Recova&trade; NOW Risk-Free at an All Time Low Price.
                </p>
              </div>

              <p className="text-sm font-bold text-navy mb-3">Act Now and You&apos;ll Get:</p>
              <div className="space-y-2.5 mb-8">
                {[
                  "50% OFF Recova\u2122",
                  "$50 Worth of Free Gifts Included",
                  "30 Day Money Back Guarantee",
                  "FREE Shipping",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
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
                      className="text-teal flex-shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-navy">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs font-bold tracking-[0.15em] uppercase text-navy mb-4">
                What&apos;s Included:
              </p>

              {/* Product image placeholder */}
              <div className="w-full aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-6">
                <span className="text-gray-400 text-sm font-medium">Product image</span>
              </div>

              {/* Price display */}
              <div className="flex items-center gap-3">
                <span className="text-2xl text-gray-400 line-through font-medium">$79.99</span>
                <span className="text-3xl md:text-4xl font-black text-teal">$39.99</span>
                <span className="px-3 py-1 rounded-full bg-teal-light text-teal-dark text-xs font-bold">
                  SAVE 50%
                </span>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-navy mb-5">
                Bonus Today:
              </h3>

              <div className="space-y-4 mb-8">
                {bonuses.map((bonus, i) => (
                  <div key={i} className="flex items-center gap-4">
                    {/* Circle image placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                      <span className="text-gray-400 text-[10px] font-medium">{i + 1}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-navy">{bonus.name}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-gray-400 line-through">
                          {bonus.wasPrice}
                        </span>
                        <span className="text-xs font-bold text-red-500">FREE TODAY!</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom badges */}
              <div className="border-t border-gray-100 pt-6 space-y-3">
                {badges.map((badge, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/5 flex items-center justify-center flex-shrink-0">
                      {i === 0 ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-teal"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-teal"
                        >
                          <rect x="1" y="3" width="15" height="13" />
                          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                          <circle cx="5.5" cy="18.5" r="2.5" />
                          <circle cx="18.5" cy="18.5" r="2.5" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-navy">{badge.label}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-xs text-gray-400 line-through">
                        {badge.wasPrice}
                      </span>
                      <span className="text-xs font-bold text-red-500">FREE TODAY!</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
