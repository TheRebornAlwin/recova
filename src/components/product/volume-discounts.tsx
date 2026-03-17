"use client";

import { cn } from "@/lib/utils";

interface VolumeDiscountsProps {
  basePrice: number;
  selectedTier: number;
  onSelect: (tier: number) => void;
}

const tiers = [
  { qty: 1, discount: 0, label: "1 Unit", badge: "" },
  { qty: 2, discount: 10, label: "2 Units", badge: "Save 10%" },
  { qty: 3, discount: 20, label: "3 Units", badge: "Save 20%" },
];

export default function VolumeDiscounts({
  basePrice,
  selectedTier,
  onSelect,
}: VolumeDiscountsProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-navy">Buy More, Save More</h4>
      <div className="space-y-2">
        {tiers.map((tier, i) => {
          const unitPrice = basePrice * (1 - tier.discount / 100);
          const totalPrice = unitPrice * tier.qty;
          const savings = basePrice * tier.qty - totalPrice;

          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className={cn(
                "w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all text-left cursor-pointer",
                selectedTier === i
                  ? "border-teal bg-teal-light/30"
                  : "border-light-gray hover:border-teal/30"
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                    selectedTier === i
                      ? "border-teal"
                      : "border-muted"
                  )}
                >
                  {selectedTier === i && (
                    <div className="w-2.5 h-2.5 rounded-full bg-teal" />
                  )}
                </div>
                <div>
                  <span className="text-sm font-medium text-navy">
                    {tier.label}
                  </span>
                  {tier.badge && (
                    <span className="ml-2 px-2 py-0.5 text-[10px] font-bold bg-teal text-white rounded-full">
                      {tier.badge}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-navy">
                  ${totalPrice.toFixed(2)}
                </p>
                {savings > 0 && (
                  <p className="text-xs text-teal">
                    Save ${savings.toFixed(2)}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
