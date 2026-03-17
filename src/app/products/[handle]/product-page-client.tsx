"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/lib/data";
import { useCart } from "@/contexts/cart-context";
import MagneticButton from "@/components/ui/magnetic-button";
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

  const tierDiscounts = [0, 10, 20];
  const tierQuantities = [1, 2, 3];
  const discount = tierDiscounts[selectedTier];
  const effectivePrice = product.price * (1 - discount / 100);
  const effectiveQty = tierQuantities[selectedTier];

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
  };

  const discountPct = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  return (
    <>
      <div className="py-8 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm text-muted mb-8 text-center md:text-left">
            <Link href="/" className="hover:text-teal transition-colors">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/shop/" className="hover:text-teal transition-colors">
              Shop
            </Link>{" "}
            / <span className="text-navy">{product.title}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Images */}
            <ScrollReveal>
              <div className="space-y-4">
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-teal-light/30 to-white border border-teal/10 overflow-hidden flex items-center justify-center">
                  {discountPct > 0 && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-teal text-white text-xs font-bold rounded-full z-10">
                      -{discountPct}% OFF
                    </span>
                  )}
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-teal/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                    <p className="text-sm text-slate">Image {selectedImage + 1}</p>
                  </div>
                </div>

                <div className="flex gap-3 overflow-x-auto max-w-full">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`w-16 h-16 rounded-xl flex-shrink-0 border-2 transition-all cursor-pointer flex items-center justify-center text-xs ${
                        selectedImage === i
                          ? "border-teal bg-teal-light/30"
                          : "border-light-gray bg-light-gray hover:border-teal/30"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Info */}
            <ScrollReveal delay={0.2}>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-teal mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-2">
                  {product.title}
                </h1>
                <p className="text-slate italic mb-4">{product.tagline}</p>

                <div className="flex items-center gap-3 mb-2 justify-center md:justify-start">
                  <span className="text-3xl font-bold text-teal">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-lg text-muted line-through">
                    ${product.compareAtPrice.toFixed(2)}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-teal-light text-teal-dark text-xs font-bold">
                    SAVE {discountPct}%
                  </span>
                </div>

                <p className="text-sm text-slate leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <VolumeDiscounts
                    basePrice={product.price}
                    selectedTier={selectedTier}
                    onSelect={setSelectedTier}
                  />
                </div>

                <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                  <div className="flex items-center border-2 border-light-gray rounded-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-slate hover:text-teal transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-slate hover:text-teal transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <MagneticButton
                    variant="primary"
                    size="lg"
                    className="flex-1"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </MagneticButton>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: "🚚", label: "Free Shipping" },
                    { icon: "🛡", label: "30-Day Guarantee" },
                    { icon: "🔒", label: "Secure Checkout" },
                  ].map((badge) => (
                    <div
                      key={badge.label}
                      className="text-center py-3 rounded-xl bg-light-gray"
                    >
                      <div className="text-lg mb-1">{badge.icon}</div>
                      <p className="text-[10px] font-medium text-slate">
                        {badge.label}
                      </p>
                    </div>
                  ))}
                </div>

                <ProductTabs product={product} />
              </div>
            </ScrollReveal>
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
                Why you&apos;ll{" "}
                <TextGradient variant="teal">love it</TextGradient>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GlassmorphismCard className="h-full">
                  <div className="w-10 h-10 rounded-xl bg-teal-light/60 flex items-center justify-center text-teal font-bold text-sm mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-navy mb-2">{feature.title}</h3>
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
