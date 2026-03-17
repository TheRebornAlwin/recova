"use client";

import Link from "next/link";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.compareAtPrice - product.price) / product.compareAtPrice) * 100
  );

  return (
    <Link
      href={`/products/${product.handle}/`}
      className="group block"
    >
      <div className="relative glass-card glass-card-hover rounded-2xl overflow-hidden transition-all duration-300">
        <div className="relative aspect-square bg-gradient-to-br from-teal-light/30 to-white flex items-center justify-center">
          {discount > 0 && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-teal text-white text-xs font-bold rounded-full z-10">
              -{discount}% OFF
            </span>
          )}
          <div className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-teal/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <p className="text-xs text-slate">Image coming soon</p>
          </div>
        </div>

        <div className="p-5">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-teal mb-1">
            {product.category}
          </p>
          <h3 className="font-bold text-navy text-lg mb-1 group-hover:text-teal transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-slate italic mb-3">{product.tagline}</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-teal">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice > product.price && (
              <span className="text-sm text-muted line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
