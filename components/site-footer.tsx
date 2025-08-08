import Link from "next/link";
import { COMPANY_CONTACT } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="px-10 border-t bg-gradient-to-b from-neutral-900 to-black/90 text-white">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-3 space-y-1 text-sm/relaxed text-neutral-300">
            <li>Phone: {COMPANY_CONTACT.phone}</li>
            <li>Email: {COMPANY_CONTACT.email}</li>
            <li>Address: {COMPANY_CONTACT.address}</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Quick Links</div>
          <ul className="mt-3 space-y-1 text-sm">
            <li>
              <Link
                href="/#services"
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-red-400 transition-colors cursor-pointer"
              >
                Admin
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Wasoma Engineering Company Limited. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
