"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/scroll-reveal";

const faqItems = [
  {
    question: "Does it actually work?",
    answer:
      "Yes. EMS (Electrical Muscle Stimulation) is the same technology used by physical therapists and sports recovery professionals. It sends targeted electrical pulses directly into the muscle, which triggers contractions and relaxation cycles that release deep tension. It is not a vibrating massage or a heat pad. It works at the muscular level, which is why the relief feels different and lasts longer.",
  },
  {
    question: "Is it safe to use?",
    answer:
      "Absolutely. EMS has been used in clinical and rehabilitation settings for decades. The NeckRelieve Pulse gives you full control with 19 intensity levels, so you can start as gentle as you want and gradually increase. That said, do not use it if you have a pacemaker, are pregnant, or have epilepsy.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "A full charge gives you about 15 minutes of use, which is one complete session. It charges back up in just 7 to 8 minutes via USB, so it is always ready when you need it. Most people use one session per day.",
  },
  {
    question: "Can I use it while working?",
    answer:
      "Yes, and a lot of customers do exactly that. The device is lightweight (under 50g), wireless, and quiet. You can wear it under a collar or scarf during meetings, at your desk, or on the couch. The included remote control lets you adjust settings without reaching behind your neck.",
  },
  {
    question: "How is this different from a regular massager?",
    answer:
      "Most massagers use vibration or heat, which only affect the surface of your skin. The NeckRelieve Pulse uses EMS technology, which sends electrical pulses past the skin and directly into the muscle fibers. That is why it can release deep, stubborn tension that vibrating devices and heat pads simply cannot reach.",
  },
  {
    question: "What if it doesn't work for me?",
    answer:
      "We offer a 30-day money-back guarantee. If you are not satisfied for any reason, just email us at shoprecova@gmail.com within 30 days of delivery and we will give you a full refund. No hassle, no questions.",
  },
  {
    question: "How long until I feel results?",
    answer:
      "Most people notice a difference after their very first 15-minute session. The muscles feel noticeably looser and the tension starts to fade. With daily use over a week or two, many customers report that their chronic stiffness has improved significantly.",
  },
  {
    question: "Is it painful?",
    answer:
      "Not at all. At the lower intensity levels, you will feel a gentle tingling or pulsing sensation. As you increase the intensity, you will feel stronger muscle contractions, similar to what you might experience during a deep tissue massage. You are always in control and can adjust it to whatever level feels comfortable.",
  },
];

export default function ProductFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden transition-all duration-300 hover:border-gray-300">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                >
                  <span className="text-[15px] font-semibold text-navy leading-snug">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-7 h-7 rounded-full bg-teal/10 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-teal"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <p className="text-sm text-slate leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
