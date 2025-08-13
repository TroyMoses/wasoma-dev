import type React from "react";
import { SiteFooter } from "@/components/site-footer";
import { Badge } from "@/components/ui/badge";
import {
  Cable,
  Cog,
  Droplets,
  Hammer,
  PowerIcon as Generator,
  Shield,
  Wrench,
  Waves,
  Settings,
} from "lucide-react";
import { ImageCarousel } from "@/components/image-carousel";
import { GalleryDialog } from "@/components/gallery-dialog";

export const dynamic = "force-static";

type Svc = {
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
  images: Array<{ src: string; alt: string }>;
  galleryImages: Array<{ src: string; alt: string }>;
};

const services: Svc[] = [
  {
    title: "Motor Rewinding",
    desc: "Precision rewinding and reconditioning for AC/DC motors to OEM tolerances.",
    bullets: [
      "Insulation class upgrades",
      "Bearing housing repairs",
      "VPI and dynamic balancing",
    ],
    icon: <Cog className="w-6 h-6" />,
    images: [
      {
        src: "/electric-motor-rewinding-workshop.png",
        alt: "Motor rewinding workshop",
      },
      {
        src: "/motor-coil-winding.png",
        alt: "Motor coil winding process",
      },
    ],
    galleryImages: [
      {
        src: "/motor-rewinding-workshop.png",
        alt: "Motor rewinding workshop overview",
      },
      {
        src: "/placeholder-3rhk9.png",
        alt: "Motor coil winding machine",
      },
      {
        src: "/placeholder-aeqe0.png",
        alt: "Motor testing equipment",
      },
      {
        src: "/completed-motor-rewinding.png",
        alt: "Completed motor rewinding project",
      },
    ],
  },
  {
    title: "Water Pump Service & Repair",
    desc: "Performance restoration for centrifugal, submersible, and borehole pumps.",
    bullets: [
      "Seal and impeller replacement",
      "Shaft alignment",
      "Hydraulic testing",
    ],
    icon: <Droplets className="w-6 h-6" />,
    images: [
      {
        src: "/placeholder-7lkpv.png",
        alt: "Water pump repair workshop",
      },
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Pump impeller maintenance",
      },
    ],
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Water pump disassembly",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Pump seal replacement",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Pump testing facility",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Submersible pump repair",
      },
    ],
  },
  {
    title: "Electrical Installation",
    desc: "Safe, compliant wiring for commercial and industrial facilities.",
    bullets: [
      "Panel builds and cabling",
      "Earthing and protection",
      "Compliance documentation",
    ],
    icon: <Cable className="w-6 h-6" />,
    images: [
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Electrical panel installation",
      },
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Industrial wiring work",
      },
    ],
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Electrical control panel assembly",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Cable tray installation",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Electrical testing equipment",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Completed electrical installation",
      },
    ],
  },
  {
    title: "Generator Service & Repair",
    desc: "Preventive maintenance and major overhauls for gensets.",
    bullets: [
      "Control panel diagnostics",
      "Fuel system service",
      "Load testing and commissioning",
    ],
    icon: <Generator className="w-6 h-6" />,
    images: [
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Diesel generator maintenance",
      },
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Generator control panel repair",
      },
    ],
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Generator engine overhaul",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Generator load testing",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Generator fuel system service",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Standby generator installation",
      },
    ],
  },
  {
    title: "Welding & Fabrication",
    desc: "Custom fabrication and repair for industrial applications.",
    bullets: [
      "MIG/TIG/ARC welding",
      "Jigs and fixtures",
      "Protective coatings",
    ],
    icon: <Hammer className="w-6 h-6" />,
    images: [
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Industrial welding workshop",
      },
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Metal fabrication work",
      },
    ],
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "TIG welding process",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Metal cutting and preparation",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Custom fabrication project",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Welding quality inspection",
      },
    ],
  },
  {
    title: "Machine Service & Repair",
    desc: "Rotating equipment, balancing, alignments, and precision assemblies.",
    bullets: [
      "Laser alignment",
      "On-site troubleshooting",
      "Condition monitoring advice",
    ],
    icon: <Shield className="w-6 h-6" />,
    images: [
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Machine alignment service",
      },
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Rotating equipment maintenance",
      },
    ],
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Laser alignment equipment",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Bearing replacement service",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Vibration analysis equipment",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Precision machining work",
      },
    ],
  },
  {
    title: "Swimming Pool Service & Maintenance",
    desc: "Complete pool system maintenance, pump repair, and filtration services.",
    bullets: [
      "Pool pump repair and replacement",
      "Filtration system maintenance",
      "Chemical balancing systems",
    ],
    icon: <Waves className="w-6 h-6" />,
    images: [
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Swimming pool pump maintenance",
      },
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Pool filtration system repair",
      },
    ],
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Pool pump installation",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Pool filter cleaning",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Pool equipment room",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Pool chemical dosing system",
      },
    ],
  },
  {
    title: "Danfoss Compressors & Others",
    desc: "Specialized service for Danfoss compressors and other refrigeration equipment.",
    bullets: [
      "Compressor overhaul and repair",
      "Refrigeration system diagnostics",
      "Energy efficiency optimization",
    ],
    icon: <Settings className="w-6 h-6" />,
    images: [
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Danfoss compressor repair",
      },
      {
        src: "/placeholder.svg?height=200&width=400",
        alt: "Refrigeration compressor maintenance",
      },
    ],
    galleryImages: [
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Compressor disassembly workshop",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Compressor valve replacement",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Refrigeration system testing",
      },
      {
        src: "/placeholder.svg?height=400&width=600",
        alt: "Compressor performance analysis",
      },
    ],
  },
];

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

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
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
      </div>
      <SiteFooter />
    </>
  );
}
