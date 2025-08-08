"use client";

import { Wrench } from "lucide-react";
import Link from "next/link";
import { APP_NAME } from "@/lib/config";
import { cn } from "@/lib/utils";

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 cursor-pointer", className)}
    >
      <div className="size-9 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md">
        <Wrench className="w-5 h-5" />
      </div>
      <span className="font-semibold tracking-tight">{APP_NAME}</span>
    </Link>
  );
}
