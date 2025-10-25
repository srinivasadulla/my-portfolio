import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductDetailDialog } from "./ProductDetailDialog";
import glassCutterImg from "@/assets/glass-cutter.jpg";
import runningPliersImg from "@/assets/running-pliers.jpg";
import foilerImg from "@/assets/foiler.jpg";
import grinder2Img from "@/assets/grinder2.jpg";
import grinder3Img from "@/assets/grinder3.jpg";
import quickFitBitImg from "@/assets/quick-fit-bit.jpg";
import iPurgeXImg from "@/assets/i-purge-x.jpg";
import pomBothVariants from "@/assets/pom-both-variants.png";
import pom100bDetail1 from "@/assets/pom-100b-detail-1.jpg";
import pom100bDetail2 from "@/assets/pom-100b-detail-2.jpg";
import pom100bDetail3 from "@/assets/pom-100b-detail-3.jpg";
import proOxMonitorImg from "@/assets/pro-ox-monitor.jpg";
import proOxDetail1 from "@/assets/pro-ox-detail-1.jpg";
import proOxDetail2 from "@/assets/pro-ox-detail-2.jpg";
import proOxDetail3 from "@/assets/pro-ox-detail-3.jpg";
import grinder2Detail1 from "@/assets/grinder2-detail-1.jpg";
import grinder2Detail2 from "@/assets/grinder2-detail-2.jpg";
import grinder2Detail3 from "@/assets/grinder2-detail-3.jpg";
import grinder3Detail1 from "@/assets/grinder3-detail-1.jpg";
import grinder3Detail2 from "@/assets/grinder3-detail-2.jpg";
import foilerDetail1 from "@/assets/foiler-detail-1.jpg";
import foilerDetail2 from "@/assets/foiler-detail-2.jpg";
import foilerDetail3 from "@/assets/foiler-detail-3.jpg";

interface Product {
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  images: string[];
  patents: boolean;
  fullDescription?: string;
  specifications?: string[];
}

const products: Product[] = [
  {
    title: "Glass Cutter GP",
    category: "Glass Working Tools",
    description: "Premium glass cutting tool featuring LED illumination, USB-C charging, and ergonomic craft-inspired design.",
    fullDescription: "Premium glass cutting tool featuring LED illumination, USB-C charging, and ergonomic craft-inspired design. Multiple concept iterations focusing on user experience and functionality. Designed for professional glass artists and hobbyists who demand precision and comfort.",
    features: [
      "LED light system with capacitive touch controls",
      "Rechargeable via USB-C port",
      "Machined stainless steel components",
      "Ergonomic grip design"
    ],
    image: glassCutterImg,
    images: [glassCutterImg, "@/assets/glass-cutter-detail-1.jpg"],
    patents: true
  },
  {
    title: "Running Pliers",
    category: "Glass Working Tools",
    description: "Industrial design for precision glass running pliers with adjustable alignment dial and rubberized pads.",
    fullDescription: "Industrial design for precision glass running pliers with adjustable alignment dial and rubberized pads. Features powder-coated aluminum construction with laser-etched graphics. Engineered for consistent, controlled breaks in stained glass work.",
    features: [
      "Adjustable alignment dial for precision",
      "Powder-coated aluminum levers",
      "Rubberized top and bottom pads",
      "Professional CMF specification"
    ],
    image: runningPliersImg,
    images: [runningPliersImg, "@/assets/running-pliers-detail-1.jpg"],
    patents: true
  },
  {
    title: "The Foiler",
    category: "Glass Working Tools",
    description: "Revolutionary handheld foiling tool that simplifies copper foil application for stained glass.",
    fullDescription: "Revolutionary handheld foiling tool that simplifies copper foil application for stained glass. Features interchangeable tips, built-in blade, and integrated crimper/burnisher. Designed to make foiling faster, easier, and more consistent for artists of all skill levels.",
    features: [
      "Three interchangeable tip sizes (3/16\", 7/32\", 1/4\")",
      "Ambidextrous ergonomic design",
      "Integrated cutting blade and crimper",
      "EZ-View window for foil monitoring"
    ],
    image: foilerImg,
    images: [foilerImg, foilerDetail1, foilerDetail2, foilerDetail3],
    patents: true
  },
  {
    title: "The Grinder 2",
    category: "Glass Working Tools",
    description: "Compact, powerful glass grinder featuring DC brushless motor, Quick-Fit Bit System, and Aqua Flow System.",
    fullDescription: "Designed for space-saving efficiency and exemplary performance, THE GRINDER 2 is an advanced tool for professionals, hobbyists and classroom settings of limited space. Supported by a super quiet, powerful motor boasting a torque of 57 oz/in at 4500 RPM; Vibration Dampening Technology absorbs shock and provides added stability to maintain an extremely quiet whisper operation for the most pleasurable grinding.",
    features: [
      "4500 RPM DC brushless motor",
      "Quick-Fit Bit System (tool-free changes)",
      "Aqua Flow System (continuous water flow)",
      "Removable water tray with lift-out design",
      "Built-in accessory drawer",
      "Low profile contemporary design"
    ],
    specifications: [
      "Work Surface: 11.5\" x 9.5\" (29x24cm)",
      "Power: 110-220 VAC for Universal Use",
      "Vibration Control Technology",
      "5 Year Limited Warranty"
    ],
    image: grinder2Img,
    images: [grinder2Img, grinder2Detail1, grinder2Detail2, grinder2Detail3],
    patents: true
  },
  {
    title: "The Grinder 3",
    category: "Glass Working Tools",
    description: "Simplified, space-saving grinder perfect for classrooms and hobbyists.",
    fullDescription: "Simple in design yet masterfully sleek in appearance as well as compact in size, THE GRINDER 3 is a tool for classroom settings and hobbyists. The motor of THE GRINDER 3 is quiet and powerful operating at 4000 RPM.",
    features: [
      "4000 RPM quiet operation",
      "Compact 11\" x 9\" work surface",
      "Built-in accessory drawer",
      "Waterproof illuminated switch",
      "3/4\" Quick-Fit Bit System",
      "EZ-View Window"
    ],
    specifications: [
      "Work Surface: 11\" x 9\" (28 x 23 cm)",
      "Power: 110/120 V",
      "Aqua Flow System included",
      "5 Year Limited Warranty"
    ],
    image: grinder3Img,
    images: [grinder3Img, grinder3Detail1, grinder3Detail2],
    patents: true
  },
  {
    title: "Quick-Fit Bit System",
    category: "Glass Working Accessories",
    description: "Shock-absorbing grinding bit system with quick-change capability.",
    fullDescription: "Engineered with an industrial elastomer, the patented Quick-Fit Bit System absorbs grinding vibration and can be adjusted vertically on the grinder shaft, enabling full utilization of the grinding surface. Changing bits is fast, even for individuals with reduced grip strength.",
    features: [
      "Tool-free bit changes (no keys required)",
      "Vibration-absorbing elastomer design",
      "100% utilization (adjustable and reversible)",
      "Available in multiple grit varieties"
    ],
    image: quickFitBitImg,
    images: [quickFitBitImg, "@/assets/quick-fit-detail-1.jpg"],
    patents: true
  },
  {
    title: "I-Purge X",
    category: "Welding Equipment",
    description: "Modular inflatable bladder system for pipe welding purge applications.",
    fullDescription: "Modular inflatable bladder system for pipe welding purge applications. Expandable design fits multiple pipe sizes with interchangeable modules and high-heat resistant components. Engineered to provide superior purge quality while reducing setup time.",
    features: [
      "Modular system (8\"-12\" range)",
      "High-heat harness (up to 1200°F)",
      "Tri-flow inner tubing system",
      "Patent-pending inert gas diffuser"
    ],
    image: iPurgeXImg,
    images: [iPurgeXImg, "@/assets/i-purge-detail-1.jpg"],
    patents: true
  },
  {
    title: "POM Series - Precise Oxygen Monitors",
    category: "Oxygen Monitoring",
    description: "Professional oxygen monitors available in two variants: POM-100B (100PPM) for general welding and POM-5B (5PPM) for ultra-precision applications.",
    fullDescription: "The POM Series offers two precision oxygen monitors designed for welding applications. The POM-100B monitors down to .01% (100PPM), ideal for general welding applications to reduce oxidation. The POM-5B provides ultra-low oxygen detection to 5PPM, critical for aerospace and medical device welding. Both feature extended battery life of 25-30 hours, smart Bluetooth connectivity with the POMConnect app for real-time monitoring and data logging, and expected sensor life exceeding 3 years. Features include a large 2.8\" LCD color display, dust and water resistant construction, and comprehensive kit with carrying case and accessories.",
    features: [
      "Two variants: POM-100B (100PPM) and POM-5B (5PPM)",
      "Extended battery life: 25-30 hours",
      "Smart Bluetooth with POMConnect app",
      "Long sensor life > 3 years with 1-year warranty",
      "2.8\" LCD color display",
      "Multi-language support"
    ],
    specifications: [
      "POM-100B Range: 0.01% to 25% oxygen (100PPM minimum)",
      "POM-5B Range: 5PPM to 25% oxygen (ultra-precision)",
      "Battery life: 25-30 hours continuous operation",
      "Sensor life: > 3 years expected lifespan",
      "Display: 2.8\" LCD color screen with intuitive interface",
      "Connectivity: Bluetooth-enabled with POMConnect mobile app",
      "Languages: English, German, Spanish, Portuguese, Japanese",
      "Construction: Dust and water resistant, impact-resistant polycarbonate",
      "Warranty: One year on unit & sensor",
      "Kit includes: Monitor with sensor, carrying case, extension tubing, probe, charger, USB cable"
    ],
    image: pomBothVariants,
    images: [pomBothVariants, pom100bDetail1, pom100bDetail2, pom100bDetail3],
    patents: true
  },
  {
    title: "Pro-Ox Monitor",
    category: "Welding Equipment",
    description: "Advanced oxygen monitoring solution with color display and industrial-grade construction.",
    fullDescription: "The Pro-Ox Monitor represents the next generation of oxygen monitoring technology for professional welding operations. Featuring a large, high-contrast color display, IP65 waterproof construction, and removable in-line filters, this device delivers reliable performance in the harshest industrial environments. Designed with input from professional welders for maximum usability and durability.",
    features: [
      "IP65 waterproof rating",
      "High-contrast color display",
      "Removable cleanable puck filters",
      "Glove-compatible controls",
      "Long battery life"
    ],
    specifications: [
      "IP65 Waterproof Construction",
      "Color LCD Display",
      "In-line Filter System",
      "Extended Battery Operation"
    ],
    image: proOxMonitorImg,
    images: [proOxMonitorImg, proOxDetail1, proOxDetail2, proOxDetail3],
    patents: false
  }
];

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="projects" className="py-24 bg-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Product Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A selection of innovative products developed from initial concept through mass production
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ProductCard 
                  key={index} 
                  {...product} 
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductDetailDialog
          {...selectedProduct}
          open={!!selectedProduct}
          onOpenChange={(open) => !open && setSelectedProduct(null)}
        />
      )}
    </>
  );
};
