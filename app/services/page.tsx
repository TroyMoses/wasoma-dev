import type React from "react";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import { ImageCarousel } from "@/components/image-carousel";
import { GalleryDialog } from "@/components/gallery-dialog";
import { services, services2 } from "./services";
import { Wrench } from "lucide-react";

export const dynamic = "force-static";

export default function ServicesPage() {
  return (
    <>
      <div className="px-5 md:px-10 py-8 md:py-12">
        <div className="max-w-3xl">
          <Badge className="mb-3 bg-blue-600 text-white">Our Services</Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            From diagnostics to full rebuilds
          </h1>
          <p className="mt-3 text-muted-foreground">
            We combine rigorous testing, quality components, and experienced
            engineers to extend equipment life and minimize downtime. Explore
            our core service areas below.
          </p>
        </div>

        <div className="mt-10 hidden md:grid gap-6 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="size-12 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <div className="font-semibold text-lg">{s.title}</div>
              <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Wrench className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <ImageCarousel
                  images={s.images}
                  className="rounded-lg border aspect-video"
                  autoPlay={true}
                  interval={4000}
                  showControls={false}
                />
              </div>

              <div className="mt-4 flex justify-center">
                <GalleryDialog images={s.galleryImages} title={s.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:hidden gap-6 sm:grid-cols-2">
          {services2.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="size-12 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <div className="font-semibold text-lg">{s.title}</div>
              <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Wrench className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <ImageCarousel
                  images={s.images}
                  className="rounded-lg border aspect-video"
                  autoPlay={true}
                  interval={4000}
                  showControls={false}
                />
              </div>

              <div className="mt-4 flex justify-center">
                <GalleryDialog images={s.galleryImages} title={s.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
