import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Droplets,
  Cable,
  Cog,
  PowerIcon as Generator,
  Shield,
  Hammer,
  Sparkles,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-red-100/60 via-transparent to-transparent" />
        <div className="container grid lg:grid-cols-2 gap-8 items-center py-16 md:py-24">
          <AnimatedSection>
            <Badge className="mb-4 bg-red-600 text-white">
              Trusted Engineering Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-red-700 via-red-600 to-neutral-800 bg-clip-text text-transparent">
                Reliable motor and electrical engineering services
              </span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              We specialize in motor rewinding, water pump repair, electrical
              installations, generator service, welding, fabrication and more.
              Quality workmanship you can trust.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              >
                <Link href="/#services" className="cursor-pointer">
                  Explore Services
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="cursor-pointer border-red-200 text-red-700 hover:bg-red-50"
              >
                <Link href="/contact" className="cursor-pointer">
                  Get a Quote
                </Link>
              </Button>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {[
                "Experienced engineers",
                "Fast turnaround",
                "Genuine parts",
                "Warranty on service",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600" />
                  {t}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <Image
                src="/images/hero.png"
                width={900}
                height={700}
                alt="Workshop - engineering services"
                className="rounded-xl shadow-xl object-cover aspect-[4/3]"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-lg p-4 shadow-md hidden sm:flex items-center gap-3">
                <Sparkles className="text-red-500" />
                <div className="text-sm">
                  <div className="font-medium">ISO-inspired workmanship</div>
                  <div className="text-muted-foreground">
                    Quality you can see
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Our Services
            </h2>
            <p className="mt-2 text-muted-foreground">
              From diagnostics to full rebuilds, we&apos;ve got you covered.
            </p>
          </AnimatedSection>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <AnimatedSection key={s.title}>
                <div className="group rounded-xl border bg-background p-6 hover:shadow-lg hover:border-red-200 transition-all">
                  <div className="size-12 rounded-md bg-red-50 text-red-700 flex items-center justify-center mb-4">
                    {s.icon}
                  </div>
                  <div className="font-semibold text-lg">{s.title}</div>
                  <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="cursor-pointer border-red-200 text-red-700 hover:bg-red-50"
            >
              <Link href="/services" className="cursor-pointer">
                More Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection>
            <Image
              src="/engineer-repair-workshop.png"
              width={700}
              height={520}
              alt="Engineers at work"
              className="rounded-xl border shadow-sm object-cover"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Built on expertise and integrity
            </h2>
            <p className="mt-2 text-muted-foreground">
              Wasoma Engineering brings years of experience in rotating
              machinery and electrical systems. Our team prides itself on
              precision, safety, and customer satisfaction.
            </p>
            <div className="mt-6 grid gap-3">
              {[
                { k: "500+", v: "Motors rewound" },
                { k: "300+", v: "Water pumps serviced" },
                { k: "1,000+", v: "Happy clients" },
              ].map((m) => (
                <div key={m.k} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-red-600" />
                  <div className="font-semibold">{m.k}</div>
                  <div className="text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
              >
                <Link href="/about" className="cursor-pointer">
                  More About Us
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-red-50/60">
        <div className="container text-center">
          <h3 className="text-2xl md:text-3xl font-bold">
            Ready to get started?
          </h3>
          <p className="mt-2 text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you shortly.
          </p>
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
              <Link href="/contact" className="cursor-pointer">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

const services = [
  {
    title: "Motor Rewinding",
    desc: "Precision rewinding for AC/DC motors to OEM standards.",
    icon: <Cog className="w-6 h-6" />,
  },
  {
    title: "Water Pump Service & Repair",
    desc: "Diagnostics, seals, impellers, and performance restoration.",
    icon: <Droplets className="w-6 h-6" />,
  },
  {
    title: "Electrical Installation",
    desc: "Safe, compliant wiring and panel installations.",
    icon: <Cable className="w-6 h-6" />,
  },
  {
    title: "Generator Service & Repair",
    desc: "Preventive maintenance and full repair for gensets.",
    icon: <Generator className="w-6 h-6" />,
  },
  {
    title: "Welding & Fabrication",
    desc: "Custom metal works for industrial applications.",
    icon: <Hammer className="w-6 h-6" />,
  },
  {
    title: "Machine Service & Repair",
    desc: "Rotating equipment, balancing, bearings, alignments.",
    icon: <Shield className="w-6 h-6" />,
  },
];
