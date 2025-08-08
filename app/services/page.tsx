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
} from "lucide-react";
import Image from "next/image";

export const dynamic = "force-static";

type Svc = {
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
  imageQuery: string;
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
    imageQuery: "industrial%20electric%20motor%20rewinding%20bench",
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
    imageQuery: "water%20pump%20service%20workshop",
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
    imageQuery: "industrial%20electrical%20panel%20installation",
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
    imageQuery: "diesel%20generator%20maintenance",
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
    imageQuery: "industrial%20welding%20and%20fabrication%20shop",
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
    imageQuery: "machine%20maintenance%20technician%20at%20work",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="px-5 md:px-10 py-8 md:py-12">
        <div className="max-w-3xl">
          <Badge className="mb-3 bg-red-600 text-white">Our Services</Badge>
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
              <div className="size-12 rounded-md bg-red-50 text-red-700 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <div className="font-semibold text-lg">{s.title}</div>
              <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
              <ul className="mt-3 space-y-2 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Wrench className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Image
                src={`/abstract-geometric-shapes.png?height=200&width=400&query=${s.imageQuery}`}
                alt={s.title}
                width={400}
                height={200}
                className="rounded-lg border mt-4 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
