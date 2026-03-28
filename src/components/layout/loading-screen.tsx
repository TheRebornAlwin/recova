"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BrandName from "@/components/ui/brand-name";

export default function LoadingScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = sessionStorage.getItem("recova-loaded");
      if (!seen) {
        setShow(true);
        const timer = setTimeout(() => {
          setShow(false);
          sessionStorage.setItem("recova-loaded", "1");
        }, 2400);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
        >
          <div className="relative mb-8">
            <div
              className="absolute inset-0 w-24 h-24 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(13,148,136,0.15) 0%, transparent 70%)",
                animation: "pulse-ring 2s ease-in-out infinite",
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pf4pRa3LfnI5pftsHlKbCS38YwuzArQJ9v1TWO"
                alt="Recova"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-2xl font-bold text-navy tracking-tight mb-8"
          >
            <BrandName />
          </motion.div>

          <div className="w-48 h-1 bg-light-gray rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-teal to-emerald-400 rounded-full"
              style={{
                animation: "loading-bar 2s ease-out forwards",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
