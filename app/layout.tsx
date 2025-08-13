import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wasoma Engineering Company Ltd",
  description: "For all the best engineering services.",
};

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-neutral-50 via-blue-50/30 to-neutral-50">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          {/* <SiteFooter /> */}
          <Toaster richColors position="top-center" />
        </div>
      </body>
    </html>
  );
}
