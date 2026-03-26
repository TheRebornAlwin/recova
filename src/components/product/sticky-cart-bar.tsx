"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/contexts/cart-context";

interface StickyCartBarProps {
  productId: string;
  productTitle: string;
  productPrice: number;
  productImage: string;
}

export default function StickyCartBar({ productId, productTitle, productPrice, productImage }: StickyCartBarProps) {
  const { addItem } = useCart();
  const [show, setShow] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAdd = () => {
    addItem({
      id: productId,
      title: productTitle,
      price: productPrice,
      image: productImage,
    }, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <span className="text-sm font-bold text-navy truncate">{productTitle}</span>
              <span className="text-sm font-bold text-teal flex-shrink-0">${productPrice.toFixed(2)}</span>
              <span className="text-xs text-gray-400 line-through flex-shrink-0 hidden sm:inline">${(productPrice * 2).toFixed(2)}</span>
            </div>
            <button
              onClick={handleAdd}
              className="px-6 py-2.5 rounded-full bg-teal text-white text-sm font-semibold hover:bg-teal-dark transition-all duration-300 cursor-pointer flex-shrink-0 hover:shadow-[0_4px_16px_rgba(13,148,136,0.3)]"
            >
              {added ? "Added!" : "Add to Cart"}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
