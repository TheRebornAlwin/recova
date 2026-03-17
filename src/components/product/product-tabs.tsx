"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data";

const tabs = ["Details", "Shipping", "Our Guarantee"];

export default function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex border-b border-light-gray">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors relative cursor-pointer",
              active === i
                ? "text-teal"
                : "text-slate hover:text-navy"
            )}
          >
            {tab}
            {active === i && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal" />
            )}
          </button>
        ))}
      </div>

      <div className="py-6">
        {active === 0 && (
          <ul className="space-y-2">
            {product.specs.map((spec, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate">
                <span className="text-teal mt-0.5">&#8226;</span>
                {spec}
              </li>
            ))}
          </ul>
        )}

        {active === 1 && (
          <div className="text-sm text-slate space-y-3">
            <p>
              <strong className="text-navy">Processing:</strong> 1-3 business
              days
            </p>
            <p>
              <strong className="text-navy">Standard Shipping:</strong> 7-15
              business days (worldwide)
            </p>
            <p>
              <strong className="text-navy">Free Shipping:</strong> All orders
              ship free, no minimum required
            </p>
            <p>
              <strong className="text-navy">Tracking:</strong> Full tracking
              number provided via email once shipped
            </p>
          </div>
        )}

        {active === 2 && (
          <div className="text-sm text-slate space-y-3">
            <p>
              We stand behind the NeckRelieve Pulse with a{" "}
              <strong className="text-navy">30-day money-back guarantee</strong>
              .
            </p>
            <p>
              If you don't feel a real difference in your pain levels, email us
              at shoprecova@gmail.com for a full refund. No questions asked.
            </p>
            <p>
              We also offer free replacements for any items that arrive damaged
              or defective.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
