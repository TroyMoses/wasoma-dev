"use client";

import type React from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AdminShell } from "@/components/app-sidebar";
import { Toaster } from "sonner";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Theme the sidebar via its CSS variables (dark with blue accents) per the component API.
    <div
      style={{
        //@ts-expect-error
        "--sidebar-background": "0 0% 6%", // near-black
        "--sidebar-foreground": "0 0% 98%",
        "--sidebar-primary": "210 100% 50%", // blue-500-ish
        "--sidebar-primary-foreground": "0 0% 100%",
        "--sidebar-accent": "0 0% 16%", // dark hover
        "--sidebar-accent-foreground": "0 0% 98%",
        "--sidebar-border": "0 0% 18%",
        "--sidebar-ring": "210 100% 50%",
      }}
      className={`${montserrat.className} min-h-screen`}
    >
      <SidebarProvider>
        <AdminShell>{children}</AdminShell>
        <Toaster richColors position="top-center" />
      </SidebarProvider>
    </div>
  );
}
