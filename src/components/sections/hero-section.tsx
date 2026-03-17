"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/magnetic-button";
import TextGradient from "@/components/ui/text-gradient";
import FloatingElement from "@/components/ui/floating-element";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-light/30 via-white to-background" />

      {/* God ray */}
      <div className="absolute inset-0 god-ray" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-warm/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-teal-light/60 text-teal-dark text-xs font-semibold tracking-[0.15em] uppercase">
              EMS Pulse Technology
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight mb-6">
              Your neck pain{" "}
              <TextGradient variant="teal">
                doesn&apos;t stand a chance
              </TextGradient>
            </h1>
            <p className="text-lg text-slate leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              The electrical pulse goes directly into the muscle and you can
              actually feel the tension releasing. It&apos;s not like anything
              else you&apos;ve tried.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <MagneticButton
                variant="primary"
                size="lg"
                href="/products/neckrelieve-pulse/"
              >
                Shop Now
              </MagneticButton>
              <MagneticButton variant="secondary" size="lg" href="/shop/">
                Learn More
              </MagneticButton>
            </div>

            <div className="flex items-center gap-3 mt-8 justify-center md:justify-start">
              <div className="flex text-warm text-sm">
                {"★★★★★"}
              </div>
              <span className="text-sm text-slate">
                Trusted by <span className="font-semibold text-navy">10,000+</span> customers
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <FloatingElement>
              <div className="relative">
                <div className="absolute inset-0 bg-teal/10 rounded-3xl blur-2xl scale-110" />
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-teal/15">
                  <Image
                    src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfc5E7MmPl6tpqe8AgxVJTWrEjFhCHaQ2wXsoy"
                    alt="NeckRelieve Pulse"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </FloatingElement>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-teal/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-teal" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
