"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Product } from "@/lib/data";
import { useCart } from "@/contexts/cart-context";
import TextGradient from "@/components/ui/text-gradient";
import ScrollReveal from "@/components/ui/scroll-reveal";
import SectionDivider from "@/components/ui/section-divider";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import ProductTabs from "@/components/product/product-tabs";
import VolumeDiscounts from "@/components/product/volume-discounts";
import ProductReviews from "@/components/product/product-reviews";

export default function ProductPageClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTier, setSelectedTier] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const tierDiscounts = [0, 10, 20];
  const tierQuantities = [1, 2, 3];
  const discount = tierDiscounts[selectedTier];
  const effectivePrice = product.price * (1 - discount / 100);
  const effectiveQty = tierQuantities[selectedTier];

  const handleTierSelect = (tier: number) => {
    setSelectedTier(tier);
    setQuantity(tierQuantities[tier]);
  };

  const handleAddToCart = () => {
    addItem(
      {
        id: product.id,
        title: product.title,
        price: effectivePrice,
        image: product.images[0],
      },
      quantity * effectiveQty
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const discountPct = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  return (
    <>
      <div className="py-6 md:py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted mb-6 md:mb-8 text-center md:text-left">
            <Link
              href="/"
              className="hover:text-teal transition-colors"
            >
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/shop/"
              className="hover:text-teal transition-colors"
            >
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy font-medium">{product.title}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* LEFT COLUMN: Images */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-square rounded-3xl bg-gradient-to-br from-teal-light/40 via-white to-teal-light/20 border border-teal/10 overflow-hidden shadow-lg">
                {discountPct > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-5 right-5 px-4 py-1.5 bg-teal text-white text-sm font-bold rounded-full z-10 shadow-lg shadow-teal/20"
                  >
                    -{discountPct}% OFF
                  </motion.span>
                )}
                <Image
                  src={product.images[selectedImage]}
                  alt={`${product.title} - Image ${selectedImage + 1}`}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto max-w-full pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-[72px] h-[72px] rounded-2xl flex-shrink-0 border-2 transition-all duration-200 cursor-pointer overflow-hidden ${
                      selectedImage === i
                        ? "border-teal shadow-md shadow-teal/10"
                        : "border-transparent hover:border-teal/30 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} thumbnail ${i + 1}`}
                      width={72}
                      height={72}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center md:text-left"
            >
              {/* Category */}
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-teal mb-3">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-navy tracking-tight leading-tight mb-3">
                {product.title}
              </h1>

              {/* Tagline */}
              <p className="text-slate italic text-base mb-5">
                {product.tagline}
              </p>

              {/* Price */}
              <div className="flex items-center gap-3 mb-2 justify-center md:justify-start flex-wrap">
                <span className="text-3xl md:text-4xl font-bold text-teal">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-xl text-muted line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
                <span className="px-3 py-1 rounded-full bg-teal-light text-teal-dark text-xs font-bold">
                  SAVE {discountPct}%
                </span>
              </div>

              {/* Description */}
              <p className="text-[15px] text-slate leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                {product.description}
              </p>

              {/* Volume Discounts */}
              <div className="mb-8">
                <VolumeDiscounts
                  basePrice={product.price}
                  selectedTier={selectedTier}
                  onSelect={handleTierSelect}
                />
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                <div className="flex items-center border-2 border-light-gray rounded-full bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-11 h-11 flex items-center justify-center text-lg text-slate hover:text-teal transition-colors cursor-pointer font-medium"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-semibold text-navy">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-11 h-11 flex items-center justify-center text-lg text-slate hover:text-teal transition-colors cursor-pointer font-medium"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 h-12 rounded-full font-semibold text-base transition-all duration-300 cursor-pointer bg-teal text-white hover:bg-teal-dark hover:shadow-[0_4px_24px_rgba(13,148,136,0.35)] hover:-translate-y-0.5 active:translate-y-0"
                >
                  {addedToCart ? (
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Added!
                    </motion.span>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  {
                    label: "Free Shipping",
                    sublabel: "Worldwide",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                    ),
                  },
                  {
                    label: "30-Day",
                    sublabel: "Guarantee",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    ),
                  },
                  {
                    label: "Secure",
                    sublabel: "Checkout",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    ),
                  },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="text-center py-4 rounded-2xl bg-light-gray/80 border border-white"
                  >
                    <div className="flex justify-center mb-2">{badge.icon}</div>
                    <p className="text-xs font-bold text-navy leading-tight">
                      {badge.label}
                    </p>
                    <p className="text-[10px] text-muted">{badge.sublabel}</p>
                  </div>
                ))}
              </div>

              {/* Tabs */}
              <ProductTabs product={product} />
            </motion.div>
          </div>
        </div>
      </div>

      <SectionDivider variant="ray" />

      {/* Why You'll Love It */}
      <section className="py-24 md:py-36 px-6 section-gradient-teal">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
                Why You&apos;ll{" "}
                <TextGradient variant="teal">Love It</TextGradient>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <GlassmorphismCard className="h-full group">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-light to-teal/10 flex items-center justify-center text-teal font-bold text-sm mb-5 group-hover:scale-110 transition-transform duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {feature.description}
                  </p>
                </GlassmorphismCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="ray" />

      <ProductReviews />
    </>
  );
}
