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
  Waves,
  Settings,
} from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { ImageCarousel } from "@/components/image-carousel";
import { NewsletterSection } from "@/components/newsletter-section";

export default function HomePage() {
  const aboutImages = [
    {
      src: "/images/home/services/pepsi.jpeg",
      alt: "Engineers at work in workshop",
    },
    {
      src: "/images/home/services/engineer-repair-workshop.jpeg",
      alt: "Motor repair and maintenance",
    },
    {
      src: "/images/home/services/engineer-repair-workshop2.jpeg",
      alt: "Motor repair and maintenance",
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="px-5 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-400/50 via-transparent to-transparent" />
        <div className="container grid lg:grid-cols-2 gap-8 items-center py-10 md:py-18">
          <AnimatedSection>
            <Badge className="mb-4 bg-blue-600 text-white">
              Trusted Engineering Services
            </Badge>
            <h1 className="text-[32px] md:text-[38px] font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-neutral-800 bg-clip-text text-transparent">
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
                className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              >
                <Link href="/services" className="cursor-pointer">
                  Explore Services
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="cursor-pointer border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
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
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  {t}
                </li>
              ))}
            </ul>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <Image
                src="/images/home/hero/hero.jpeg"
                width={900}
                height={700}
                alt="Workshop - engineering services"
                className="rounded-xl shadow-xl object-cover aspect-[4/3]"
                priority
              />
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur rounded-lg p-4 shadow-md hidden sm:flex items-center gap-3">
                <Sparkles className="text-blue-500" />
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

      {/* Services section */}
      <section id="services" className="px-5 md:px-10 py-10 md:py-18">
        <div className="container">
          <div className="flex flex-col justify-center items-center text-center">
            <AnimatedSection>
              <h2 className="text-center text-3xl md:text-4xl font-bold tracking-tight">
                Our Services
              </h2>
              <p className="mt-2 text-muted-foreground">
                From diagnostics to full rebuilds, we&apos;ve got you covered.
              </p>
            </AnimatedSection>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <AnimatedSection key={s.title}>
                <div className="group rounded-xl border bg-background p-6 hover:shadow-lg hover:border-blue-200 transition-all">
                  <div className="size-12 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                    {s.icon}
                  </div>
                  <div className="font-semibold text-lg">{s.title}</div>
                  <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center mt-8">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="cursor-pointer border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
            >
              <Link href="/services" className="cursor-pointer">
                More Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="px-5 md:px-10 py-10 md:py-18">
        <div className="container grid lg:grid-cols-2 gap-8 items-center">
          <AnimatedSection>
            <ImageCarousel
              images={aboutImages}
              className="border shadow-sm aspect-[4/3]"
              autoPlay={true}
              interval={5000}
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
                { k: "50+", v: "Pool systems maintained" },
                { k: "200+", v: "Compressors serviced" },
                { k: "15+", v: "Years of experience" },
              ].map((m) => (
                <div key={m.k} className="flex items-center gap-3">
                  <div className="size-2 rounded-full bg-blue-600" />
                  <div className="font-semibold">{m.k}</div>
                  <div className="text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              >
                <Link href="/about" className="cursor-pointer">
                  More About Us
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <NewsletterSection />

      <section className="py-10 md:py-18 bg-gradient-to-b from-white to-blue-50/60">
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
              className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
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
  {
    title: "Swimming Pool Service",
    desc: "Pool pump maintenance, filtration systems, and repairs.",
    icon: <Waves className="w-6 h-6" />,
  },
  {
    title: "Danfoss Compressors",
    desc: "Specialized service for Danfoss and other compressor brands.",
    icon: <Settings className="w-6 h-6" />,
  },
];
