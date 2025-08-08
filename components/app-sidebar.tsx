"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  ClipboardList,
  Home,
  Inbox,
  Settings,
  ShoppingCart,
  Users,
  Wrench,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Brand } from "./brand";
import { cn } from "@/lib/utils";

const items = [
  { title: "Overview", href: "/dashboard", icon: Home },
  { title: "Stock", href: "/stock", icon: Warehouse },
  { title: "Contacts", href: "/contacts", icon: Inbox },
  { title: "Workers", href: "/workers", icon: Wrench },
  { title: "Users", href: "/users", icon: Users },
  { title: "Orders", href: "/orders", icon: ShoppingCart },
  { title: "Invoices", href: "/invoices", icon: ClipboardList },
  { title: "Receipts", href: "/receipts", icon: ClipboardList },
  { title: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="px-2 py-1 mb-[40px]"></div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const active = pathname?.startsWith(item.href);
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      className="data-[active=true]:!bg-red-600/30 data-[active=true]:!text-red-500 data-[active=true]:!font-semibold"
                    >
                      <Link href={item.href} className="cursor-pointer">
                        <item.icon className="shrink-0" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button
          asChild
          variant="outline"
          className="w-full cursor-pointer hover:text-red-600"
        >
          <Link href="/" className="cursor-pointer">
            Back to site
          </Link>
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

// Admin shell with topbar and inset content
export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppSidebar />
      <SidebarInset className="bg-gradient-to-b from-neutral-800 via-neutral-800 to-black/80">
        <div className="flex h-14 items-center gap-2 border-b border-neutral-800/60 px-4 text-white">
          <SidebarTrigger className="cursor-pointer" />
          <div className="font-semibold">Admin</div>
        </div>
        <main className="p-4 md:p-6">
          {/* Content cards remain light for contrast */}
          <div className="space-y-6">{children}</div>
        </main>
      </SidebarInset>
    </>
  );
}
