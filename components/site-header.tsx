"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Brand } from "./brand";
import { COMPANY_CONTACT } from "@/lib/config";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Admin" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="px-10 sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Brand />
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "text-normal text-muted-foreground hover:text-blue-600 transition-colors cursor-pointer",
                pathname === n.href && "text-blue-700 font-semibold"
              )}
            >
              {n.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
          >
            <a href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, "")}`}>
              <Phone className="w-4 h-4 mr-2" /> Call Us
            </a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer bg-transparent"
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-4">
              <SheetHeader>
                <h2 className="text-lg font-semibold">Menu</h2>
              </SheetHeader>
              <div className="flex flex-col gap-4">
                {nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={cn(
                      "text-base ml-4 font-medium hover:text-blue-600 transition-colors cursor-pointer",
                      pathname === n.href && "text-blue-700"
                    )}
                  >
                    {n.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                >
                  <a href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, "")}`}>
                    <Phone className="w-4 h-4 mr-2" /> Call Us
                  </a>
                </Button>
              </div>
              <SheetFooter>
                <div className="text-sm text-muted-foreground mt-2">
                  © {new Date().getFullYear()} {COMPANY_CONTACT.name}. All
                  rights reserved.
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
