import {
  Cable,
  Cog,
  Droplets,
  Hammer,
  PowerIcon as Generator,
  Shield,
  Waves,
  Settings,
} from "lucide-react";

type Svc = {
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
  images: Array<{ src: string; alt: string }>;
  galleryImages: Array<{ src: string; alt: string }>;
};

export const services: Svc[] = [
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
        src: "/images/services/motors/slider/completed-motor-rewinding.png",
        alt: "Motor rewinding workshop",
      },
      {
        src: "/images/services/motors/slider/motor-coil-winding.png",
        alt: "Motor rewinding workshop",
      },
      {
        src: "/images/services/motors/slider/1.png",
        alt: "Motor rewinding workshop",
      },
      {
        src: "/images/services/motors/slider/2.png",
        alt: "Motor coil winding process",
      },
    ],
    galleryImages: [
      {
        src: "/images/services/motors/1.jpeg",
        alt: "Motor rewinding workshop overview",
      },
      {
        src: "/images/services/motors/2.jpeg",
        alt: "Motor coil winding machine",
      },
      {
        src: "/images/services/motors/3.jpeg",
        alt: "Motor testing equipment",
      },
      {
        src: "/images/services/motors/4.jpeg",
        alt: "Completed motor rewinding project",
      },
      {
        src: "/images/services/motors/5.jpeg",
        alt: "Motor rewinding workshop overview",
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
        src: "/images/services/pumps/9.jpeg",
        alt: "Water pump repair workshop",
      },
      {
        src: "/images/services/pumps/7.jpeg",
        alt: "Pump impeller maintenance",
      },
      {
        src: "/images/services/pumps/12.jpeg",
        alt: "Pump impeller maintenance",
      },
    ],
    galleryImages: [
      {
        src: "/images/services/pumps/1.jpeg",
        alt: "Water pump disassembly",
      },
      {
        src: "/images/services/pumps/2.jpeg",
        alt: "Pump seal replacement",
      },
      {
        src: "/images/services/pumps/3.jpeg",
        alt: "Pump testing facility",
      },
      {
        src: "/images/services/pumps/4.jpeg",
        alt: "Submersible pump repair",
      },
      {
        src: "/images/services/pumps/5.jpeg",
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
        src: "/images/services/electricals/slider/1.jpeg",
        alt: "Electrical panel installation",
      },
    ],
    galleryImages: [
      {
        src: "/images/services/electricals/1.jpeg",
        alt: "Electrical control panel assembly",
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
        src: "/images/services/welding/slider/1.jpeg",
        alt: "Industrial welding workshop",
      },
      {
        src: "/images/services/welding/slider/2.jpeg",
        alt: "Metal fabrication work",
      },
    ],
    galleryImages: [
      {
        src: "/images/services/welding/1.jpeg",
        alt: "TIG welding process",
      },
      {
        src: "/images/services/welding/2.jpeg",
        alt: "Metal cutting and preparation",
      },
      {
        src: "/images/services/welding/3.jpeg",
        alt: "Custom fabrication project",
      },
      {
        src: "/images/services/welding/4.jpeg",
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

export const services2: Svc[] = [
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
        src: "/images/services/motors/slider/completed-motor-rewinding.png",
        alt: "Motor rewinding workshop",
      },
      {
        src: "/images/services/motors/slider/motor-coil-winding.png",
        alt: "Motor rewinding workshop",
      },
      {
        src: "/images/services/motors/slider/1.png",
        alt: "Motor rewinding workshop",
      },
      {
        src: "/images/services/motors/slider/2.png",
        alt: "Motor coil winding process",
      },
    ],
    galleryImages: [
      {
        src: "/images/services/motors/1.jpeg",
        alt: "Motor rewinding workshop overview",
      },
      {
        src: "/images/services/motors/2.jpeg",
        alt: "Motor coil winding machine",
      },
      {
        src: "/images/services/motors/3.jpeg",
        alt: "Motor testing equipment",
      },
      {
        src: "/images/services/motors/4.jpeg",
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
        src: "/images/services/pumps/9.jpeg",
        alt: "Water pump repair workshop",
      },
      {
        src: "/images/services/pumps/7.jpeg",
        alt: "Pump impeller maintenance",
      },
      {
        src: "/images/services/pumps/12.jpeg",
        alt: "Pump impeller maintenance",
      },
    ],
    galleryImages: [
      {
        src: "/images/services/pumps/1.jpeg",
        alt: "Water pump disassembly",
      },
      {
        src: "/images/services/pumps/2.jpeg",
        alt: "Pump seal replacement",
      },
      {
        src: "/images/services/pumps/3.jpeg",
        alt: "Pump testing facility",
      },
      {
        src: "/images/services/pumps/4.jpeg",
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
        src: "/images/services/electricals/slider/1.jpeg",
        alt: "Electrical panel installation",
      },
    ],
    galleryImages: [
      {
        src: "/images/services/electricals/1.jpeg",
        alt: "Electrical control panel assembly",
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
        src: "/images/services/welding/slider/1.jpeg",
        alt: "Industrial welding workshop",
      },
      {
        src: "/images/services/welding/slider/2.jpeg",
        alt: "Metal fabrication work",
      },
    ],
    galleryImages: [
      {
        src: "/images/services/welding/1.jpeg",
        alt: "TIG welding process",
      },
      {
        src: "/images/services/welding/2.jpeg",
        alt: "Metal cutting and preparation",
      },
      {
        src: "/images/services/welding/3.jpeg",
        alt: "Custom fabrication project",
      },
      {
        src: "/images/services/welding/4.jpeg",
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
