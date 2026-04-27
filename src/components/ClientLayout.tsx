"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMichinori = pathname.startsWith("/michinori");

  return (
    <>
      {!isMichinori && <Header />}
      <main className="flex-1">{children}</main>
      {!isMichinori && <Footer />}
    </>
  );
}
