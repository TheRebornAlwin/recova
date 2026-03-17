"use client";

import { CartProvider } from "@/contexts/cart-context";
import LoadingScreen from "@/components/layout/loading-screen";
import ScrollProgress from "@/components/ui/scroll-progress";
import ParticleField from "@/components/ui/particle-field";
import AnnouncementBar from "@/components/layout/announcement-bar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CartDrawer from "@/components/layout/cart-drawer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <LoadingScreen />
      <ScrollProgress />
      <ParticleField />
      <div className="relative z-10">
        <AnnouncementBar />
        <Header />
        <main className="min-h-screen pt-[calc(36px+64px)]">{children}</main>
        <Footer />
      </div>
      <CartDrawer />
    </CartProvider>
  );
}
