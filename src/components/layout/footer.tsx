"use client";

import Link from "next/link";
import Image from "next/image";
import BrandName from "@/components/ui/brand-name";

const shopLinks = [
  { href: "/shop/", label: "All Products" },
  { href: "/products/neckrelieve-pulse/", label: "NeckRelieve Pulse" },
  { href: "/cart/", label: "Cart" },
];

const supportLinks = [
  { href: "/contact/", label: "Contact Us" },
  { href: "/faq/", label: "FAQ" },
  { href: "/shipping/", label: "Shipping Info" },
  { href: "/track-order/", label: "Track Order" },
];

const legalLinks = [
  { href: "/privacy-policy/", label: "Privacy Policy" },
  { href: "/terms-of-service/", label: "Terms of Service" },
  { href: "/refund-policy/", label: "Refund Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 min-w-0">
          <div className="col-span-2 md:col-span-1">
            <Link href="/home/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://xp3x50z315.ufs.sh/f/4WAjKEfnI5pfVJ9CF0cDRq1IaUousEkQV5YgOpbLT7hxeNmK"
                alt="Recova"
                width={28}
                height={28}
                className="w-7 h-7 brightness-200"
              />
              <span className="text-lg"><BrandName /></span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed">
              Advanced EMS pulse technology for everyday relief. Feel the
              difference in your first session.
            </p>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Shop
            </h4>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} <BrandName />. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-white/40">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>Amex</span>
            <span>PayPal</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
