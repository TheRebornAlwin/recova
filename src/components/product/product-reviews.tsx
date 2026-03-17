"use client";

import { useState } from "react";
import { reviewsData } from "@/lib/data";
import ScrollReveal from "@/components/ui/scroll-reveal";
import GlassmorphismCard from "@/components/ui/glassmorphism-card";
import TextGradient from "@/components/ui/text-gradient";

const REVIEWS_PER_PAGE = 6;
const MAX_DISPLAY = 36;

export default function ProductReviews() {
  const [shown, setShown] = useState(REVIEWS_PER_PAGE);
  const reviews = reviewsData;
  const totalReviews = 5860;
  const avgRating = 4.9;

  const ratingDist = [
    { stars: 5, pct: 85 },
    { stars: 4, pct: 11 },
    { stars: 3, pct: 3 },
    { stars: 2, pct: 1 },
    { stars: 1, pct: 0 },
  ];

  const displayedReviews = reviews.slice(0, Math.min(shown, MAX_DISPLAY));
  const remaining = totalReviews - displayedReviews.length;

  return (
    <section className="py-24 md:py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-teal mb-3">
              Customer Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              Rated{" "}
              <TextGradient variant="teal">{avgRating}/5</TextGradient> by{" "}
              {totalReviews.toLocaleString()}+ customers
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <GlassmorphismCard className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-navy">{avgRating}</div>
                <div className="flex text-warm text-lg mt-1 justify-center">
                  ★★★★★
                </div>
                <p className="text-xs text-muted mt-1">
                  {totalReviews.toLocaleString()} reviews
                </p>
              </div>
              <div className="flex-1 w-full space-y-2">
                {ratingDist.map((r) => (
                  <div key={r.stars} className="flex items-center gap-2">
                    <span className="text-xs text-slate w-12">
                      {r.stars} star
                    </span>
                    <div className="flex-1 h-2 bg-light-gray rounded-full overflow-hidden">
                      <div
                        className="h-full bg-warm rounded-full transition-all duration-500"
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted w-8">{r.pct}%</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassmorphismCard>
        </ScrollReveal>

        <div className="space-y-4">
          {displayedReviews.map((review, i) => (
            <ScrollReveal key={i} delay={(i % REVIEWS_PER_PAGE) * 0.05}>
              <GlassmorphismCard>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-navy text-sm">
                      {review.name}
                    </p>
                    <div className="flex text-warm text-xs">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <span key={j}>★</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted">{review.date}</span>
                </div>
                <p className="text-sm text-slate leading-relaxed">
                  {review.text}
                </p>
              </GlassmorphismCard>
            </ScrollReveal>
          ))}
        </div>

        {shown < reviews.length && shown < MAX_DISPLAY && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShown((prev) => prev + REVIEWS_PER_PAGE)}
              className="px-6 py-3 rounded-full border-2 border-teal text-teal font-semibold text-sm hover:bg-teal hover:text-white transition-all cursor-pointer"
            >
              Show More Reviews
            </button>
          </div>
        )}

        {shown >= MAX_DISPLAY && remaining > 0 && (
          <p className="text-center mt-6 text-sm font-medium text-teal">
            + {remaining.toLocaleString()} more reviews
          </p>
        )}
      </div>
    </section>
  );
}
