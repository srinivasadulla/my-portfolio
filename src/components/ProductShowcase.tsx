import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { ProductDetailDialog } from "./ProductDetailDialog";
import glassCutterImg from "@/assets/glass-cutter.jpg";
import glassCutterDetail1 from "@/assets/glass-cutter-detail-1.jpg";
import runningPliersImg from "@/assets/running-pliers.jpg";
import runningPliersDetail1 from "@/assets/running-pliers-detail-1.jpg";
import foiler1 from "@/assets/foiler-1.jpg";
import foiler2 from "@/assets/foiler-2.jpg";
import foiler3 from "@/assets/foiler-3.png";
import foiler4 from "@/assets/foiler-4.jpg";
import benchClamp1 from "@/assets/bench-clamp-1.jpg";
import benchClamp2 from "@/assets/bench-clamp-2.jpg";
import benchClamp3 from "@/assets/bench-clamp-3.jpg";
import benchClamp4 from "@/assets/bench-clamp-4.jpg";
import grinder2Img from "@/assets/grinder2.jpg";
import grinder3Img from "@/assets/grinder3.jpg";
import quickFitBitImg from "@/assets/quick-fit-bit.jpg";
import quickFitDetail1 from "@/assets/quick-fit-detail-1.jpg";
import iPurgeXImg from "@/assets/i-purge-x-main.jpg";
import iPurgeXDetail1 from "@/assets/i-purge-detail-1.jpg";
import iPurgeXDetail2 from "@/assets/i-purge-x-detail-2.jpg";
import iPurgeXDetail3 from "@/assets/i-purge-x-detail-3.jpg";
import pomBothVariants from "@/assets/pom-both-variants.png";
import pom5bDustFilter from "@/assets/pom-5b-dust-filter.png";
import pom5bMobileChart from "@/assets/pom-5b-mobile-chart.png";
import pom100bDevice from "@/assets/pom-100b-device.png";
import pom100bDustFilter from "@/assets/pom-100b-dust-filter.png";
import pom100bMobileChart from "@/assets/pom-100b-mobile-chart.png";
import pom100bMobileHome from "@/assets/pom-100b-mobile-home.png";
import proOxMonitorImg from "@/assets/pro-ox-monitor.jpg";
import proOxDetail1 from "@/assets/pro-ox-detail-1.jpg";
import proOxDetail2 from "@/assets/pro-ox-detail-2.jpg";
import proOxDetail3 from "@/assets/pro-ox-detail-3.jpg";
import grinder2Detail1 from "@/assets/grinder2-detail-1.jpg";
import grinder2Detail2 from "@/assets/grinder2-detail-2.jpg";
import grinder2Detail3 from "@/assets/grinder2-detail-3.jpg";
import grinder2New1 from "@/assets/grinder2-new-1.png";
import grinder2New2 from "@/assets/grinder2-new-2.png";
import grinder2New3 from "@/assets/grinder2-new-3.png";
import grinder2New4 from "@/assets/grinder2-new-4.png";
import grinder3Detail1 from "@/assets/grinder3-detail-1.jpg";
import grinder3Detail2 from "@/assets/grinder3-detail-2.jpg";
import dustFilterImg from "@/assets/dust-filter.jpg";
import dustFilterDetail1 from "@/assets/dust-filter-detail-1.jpg";
import dustFilterDetail2 from "@/assets/dust-filter-detail-2.jpg";
import grinder1 from "@/assets/grinder-1.jpg";
import grinder2 from "@/assets/grinder-2.jpg";
import grinder3 from "@/assets/grinder-3.jpg";
import grinder4 from "@/assets/grinder-4.jpg";
import grinder5 from "@/assets/grinder-5.jpg";
import grinder6 from "@/assets/grinder-6.jpg";
import grinder7 from "@/assets/grinder-7.jpg";
import grinder8 from "@/assets/grinder-8.webp";
import theSetImg from "@/assets/the-set.jpg";
import theSetDetail1 from "@/assets/the-set-detail-1.jpg";
import theSetDetail2 from "@/assets/the-set-detail-2.jpg";

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
    images: [pomBothVariants, pom100bDevice, pom100bDustFilter, pom100bMobileHome, pom100bMobileChart, pom5bDustFilter, pom5bMobileChart],
    patents: true
  },
  {
    title: "The Grinder",
    category: "Glass Working Tools",
    description: "State-of-the-art breakthrough technology glass grinder with powerful motor, spacious work surface, and advanced features.",
    fullDescription: "An exceptional highly engineered and appointed precision instrument for the professional artist and equally popular with the discriminating hobbyist looking for comprehensive and advanced features. THE GRINDER's super quiet, powerful motor boasts a torque of 57 oz/in (0.4 N/m) at 4500 RPM, surpassing any model available. Vibration dampening technology absorbs shock and provides added stability to maintain an extremely quiet whisper operation for the most pleasurable grinding.",
    features: [
      "Powerful motor: 57 oz/in torque at 4500 RPM",
      "Spacious 12\" x 16\" (30x40cm) work surface",
      "LumiShield® LED illuminated eye shield",
      "The Guard® splash curtain system",
      "Removable water tray with lift-out design",
      "Water Wave Stabilizer & Support System",
      "EZ-View Windows & Lift Grid",
      "Universal 110-220 VAC compatibility"
    ],
    specifications: [
      "Work Surface: 12\" x 16\" (30x40cm)",
      "Motor: 57 oz/in torque at 4500 RPM",
      "Power: 110-220 VAC Universal Compatibility",
      "Cord: 5 ft. (1.5m) removable 3-prong cord",
      "Vibration Dampening Technology",
      "Designed, Engineered & Assembled in USA"
    ],
    image: grinder1,
    images: [grinder1, grinder2, grinder3, grinder4, grinder5, grinder6, grinder7, grinder8],
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
    image: grinder2New1,
    images: [grinder2New1, grinder2New2, grinder2New3, grinder2New4],
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
    image: grinder3Detail1,
    images: [grinder3Detail1, grinder3Img, grinder3Detail2],
    patents: true
  },
  {
    title: "Glass Cutter",
    category: "Glass Working Tools",
    description: "Precision glass cutting tool with ergonomic design.",
    fullDescription: "Professional-grade glass cutting tool engineered for precision and comfort. Features an ergonomic handle design that reduces hand fatigue during extended cutting sessions.",
    features: [
      "Ergonomic handle design",
      "Precision cutting wheel",
      "Comfortable grip for extended use"
    ],
    image: glassCutterImg,
    images: [glassCutterImg, glassCutterDetail1],
    patents: false
  },
  {
    title: "The Foiler",
    category: "Glass Working Tools",
    description: "Revolutionary handheld foiling tool that simplifies copper foil application for stained glass.",
    fullDescription: "Revolutionary handheld foiling tool that simplifies copper foil application for stained glass. Features interchangeable tips, built-in blade, and integrated crimper/burnisher. Designed to make foiling faster, easier, and more consistent for artists of all skill levels. Available in three vibrant colors to match your workshop style.",
    features: [
      "Three interchangeable tip sizes (3/16\", 7/32\", 1/4\")",
      "Ambidextrous ergonomic design",
      "Integrated cutting blade and crimper",
      "EZ-View window for foil monitoring",
      "Available in blue, orange, and green color variants"
    ],
    image: foiler1,
    images: [foiler1, foiler2, foiler3, foiler4],
    patents: true
  },
  {
    title: "Foiler Bench Clamp",
    category: "Glass Working Accessories",
    description: "Essential bench-mounting accessory for The Foiler, providing stable hands-free operation.",
    fullDescription: "The Foiler Bench Clamp is the perfect companion to The Foiler, allowing you to mount your foiler securely to any workbench or table edge. This innovative clamp system provides stable, hands-free storage and easy access when you need it. The heavy-duty construction ensures your foiler stays in place while the adjustable clamp fits tables up to 2 inches thick.",
    features: [
      "Secure bench mounting system",
      "Fits table edges up to 2\" thick",
      "Quick-release mechanism for easy removal",
      "Durable powder-coated construction",
      "Protects foiler when not in use",
      "Compact footprint saves workspace"
    ],
    image: benchClamp1,
    images: [benchClamp1, benchClamp2, benchClamp3, benchClamp4],
    patents: false
  },
  {
    title: "Running Pliers",
    category: "Glass Working Tools",
    description: "Professional running pliers for controlled glass breaking.",
    fullDescription: "Essential tool for breaking scored glass lines with precision and control. Designed with optimal leverage and cushioned handles for comfortable, consistent results.",
    features: [
      "Precision breaking control",
      "Comfortable cushioned handles",
      "Optimal leverage design"
    ],
    image: runningPliersImg,
    images: [runningPliersImg, runningPliersDetail1],
    patents: false
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
    images: [quickFitBitImg, quickFitDetail1],
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
  },
  {
    title: "External Dust Filter",
    category: "Welding Accessories",
    description: "Essential accessory to capture dust and debris for Pro-Ox and POM oxygen monitors.",
    fullDescription: "The External Dust Filter is designed to capture debris and other particulate matter that can obstruct the flow of atmosphere being measured by the oxygen monitor. Welding environments are often not pristine even if equipped with top notch roof ventilation and exhaust systems. Outdoor welding environments present extreme conditions including strong air movement with debris such as sand, dust and dirt. The filter prevents intake hose blockage and ensures long-term maintenance-free operation. The 30-40 micron frits are cleanable and feature long lasting bronze construction.",
    features: [
      "Enhances operation in extreme dust environments",
      "Prevents intake hose blockage",
      "Corrosion resistant bronze construction",
      "Filters particles 30-40 microns or larger",
      "Quick Connect fitting for easy installation",
      "Cleanable and reusable filter"
    ],
    specifications: [
      "Compatible with Pro-Ox-100, POM-100B & POM-5B",
      "Dimensions: 2.9 x 1\" (74 x 25mm)",
      "Weight: 1 ounce (30 gm)",
      "Material: Sintered bronze filter",
      "Filter size: 1/2 x 1\" (12.5 x 25mm)",
      "Easy maintenance and cleaning"
    ],
    image: dustFilterImg,
    images: [dustFilterImg, dustFilterDetail1, dustFilterDetail2],
    patents: false
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
    images: [iPurgeXImg, iPurgeXDetail1, iPurgeXDetail2, iPurgeXDetail3],
    patents: true
  },
  {
    title: "The SET - Straight Edge Tool",
    category: "Glass Working Accessories",
    description: "Perfect accessory for achieving an even finish with sophisticated design and unsurpassed accuracy.",
    fullDescription: "The SET Straight Edge Tool perfectly aligns atop THE GRINDER, THE GRINDER2, and THE GRINDER3 work surface, enabling glass to easily slide between the grinding bit and the straight edge guide bar. Precisely grind rectangle and square shaped glass to your desired dimensions. Finish your pieces with confidence and accuracy.",
    features: [
      "Compatible with all Grinder models",
      "Easy alignment on work surface",
      "Precise rectangle and square grinding",
      "Professional accuracy and finish",
      "Simple installation and use"
    ],
    image: theSetImg,
    images: [theSetImg, theSetDetail1, theSetDetail2],
    patents: false
  }
];

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <section id="projects" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container px-6">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                <span className="text-sm font-semibold text-accent">Featured Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                Product Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A selection of innovative products developed from initial concept through mass production, 
                showcasing end-to-end mechanical engineering and project management expertise
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
