"use client";

import MagneticButton from "@/components/ui/magnetic-button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-[120px] md:text-[180px] font-bold text-light-gray leading-none select-none">
        404
      </h1>
      <h2 className="text-2xl font-bold text-navy mb-4 -mt-4">
        Page not found
      </h2>
      <p className="text-slate mb-8 max-w-md">
        Looks like this page doesn&apos;t exist. Let&apos;s get you back on
        track.
      </p>
      <MagneticButton variant="primary" href="/">
        Back to Home
      </MagneticButton>
    </div>
  );
}
