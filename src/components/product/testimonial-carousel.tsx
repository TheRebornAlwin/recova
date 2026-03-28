"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const testimonials = [
  {
    text: "I sit at a desk for 10 hours a day and the neck pain was getting unbearable. I have been using this for two weeks now and the difference is honestly shocking. I use it every night for 15 minutes and I wake up without that stiffness for the first time in years.",
    name: "Amanda E.",
    location: "Ontario, Canada",
  },
  {
    text: "I was skeptical because I have tried everything for my neck. Heating pads, stretching, even a chiropractor twice a month. This little device does more in 15 minutes than any of those ever did. I can actually feel the pulses going into the muscle. It is not surface level.",
    name: "Marcus D.",
    location: "Austin, United States",
  },
  {
    text: "My tension headaches have gone from almost daily to maybe once a week since I started using this. I did not expect a product like this to actually make a noticeable difference but here I am ordering a second one for my mom.",
    name: "Yasmin R.",
    location: "Houston, United States",
  },
  {
    text: "I drive long haul for a living and my neck is always wrecked by the end of the day. I use this in my cab during breaks and it genuinely loosens everything up. Best purchase I have made in a long time.",
    name: "Tyler B.",
    location: "Denver, United States",
  },
  {
    text: "I bought this for my husband who complains about his neck constantly. He was skeptical but now he uses it every single night. He even asked me to order more gel pads. That says everything.",
    name: "Sarah L.",
    location: "Toronto, Canada",
  },
  {
    text: "As a nurse I am on my feet all day and the tension in my neck and upper back is constant. This has become part of my wind-down routine every night. The different modes are great because some days I need gentle and some days I need deep.",
    name: "Lisa M.",
    location: "New York, United States",
  },
  {
    text: "I have spent hundreds on massage appointments over the years. This $40 device gives me relief I can feel immediately and I can use it whenever I want. Should have found this sooner.",
    name: "Brandon C.",
    location: "Portland, United States",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    if (index < 0) setCurrent(testimonials.length - 1);
    else if (index >= testimonials.length) setCurrent(0);
    else setCurrent(index);
  };

  const t = testimonials[current];
  const initial = t.name.charAt(0).toUpperCase();

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight">
              Join Our 10,000+ Happy Customers!
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Main testimonial card */}
          <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8 md:p-10 min-h-[280px] flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center"
              >
                {/* Stars */}
                <div className="flex text-warm text-lg mb-6">
                  {"★★★★★"}
                </div>

                {/* Quote */}
                <p className="text-slate leading-relaxed text-[15px] md:text-base mb-8 max-w-xl">
                  {t.text}
                </p>

                {/* Avatar + name */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-teal">{initial}</span>
                  </div>
                  <div>
                    <p className="font-bold text-navy text-sm">
                      {t.name}{" "}
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-teal inline-block"><polyline points="20 6 9 17 4 12"/></svg>
                    </p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() => goTo(current - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-navy hover:border-teal hover:text-teal transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-navy hover:border-teal hover:text-teal transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                i === current ? "bg-teal scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
