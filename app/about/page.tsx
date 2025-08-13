import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Handshake, Shield, Wrench } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <>
      <div className="px-5 md:px-10 py-8 md:py-12">
        <div className="max-w-3xl">
          <Badge className="mb-3 bg-blue-600 text-white">
            About Wasoma Engineering
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built on expertise and integrity
          </h1>
          <p className="mt-3 text-muted-foreground">
            We are a multidisciplinary engineering company specializing in motor
            rewinding, water pump service, electrical installations, generator
            repair, and precision metal fabrication. Our approach blends
            rigorous processes with practical field experience to deliver safe,
            reliable outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 items-center">
          <Image
            src="/industrial-workshop-engineers.png"
            alt="Our workshop"
            width={700}
            height={520}
            className="rounded-xl border shadow-sm object-cover"
          />
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Our values</h2>
            <ul className="space-y-3 text-sm">
              {[
                {
                  icon: <Shield className="w-4 h-4 text-blue-600" />,
                  title: "Safety first",
                  desc: "We follow strict safety protocols across all projects.",
                },
                {
                  icon: <Wrench className="w-4 h-4 text-blue-600" />,
                  title: "Precision workmanship",
                  desc: "OEM-grade standards with traceable quality checks.",
                },
                {
                  icon: <Handshake className="w-4 h-4 text-blue-600" />,
                  title: "Customer commitment",
                  desc: "Clear communication, transparent pricing, and on-time delivery.",
                },
              ].map((i) => (
                <li key={i.title} className="flex items-start gap-3">
                  {i.icon}
                  <div>
                    <div className="font-medium">{i.title}</div>
                    <div className="text-muted-foreground">{i.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { k: "500+", v: "Motors rewound" },
                { k: "300+", v: "Pumps serviced" },
                { k: "1,000+", v: "Happy clients" },
              ].map((m) => (
                <div
                  key={m.k}
                  className="rounded-lg border bg-card p-4 text-center"
                >
                  <div className="text-2xl font-bold">{m.k}</div>
                  <div className="text-muted-foreground text-xs">{m.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">Why choose us</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-2 text-sm">
            {[
              "Diagnostics-driven approach reduces repeat failures",
              "Genuine parts and documented test results",
              "Warranty on service with post-repair support",
              "Rapid turnaround options for critical assets",
              "Mobile response team for on-site interventions",
              "End-to-end service: inspection, repair, commissioning",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
