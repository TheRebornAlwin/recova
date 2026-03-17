"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal via-emerald-400 to-teal-dark z-[100] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
