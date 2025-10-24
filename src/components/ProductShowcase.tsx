import { ProductCard } from "./ProductCard";
import glassCutterImg from "@/assets/glass-cutter.jpg";
import runningPliersImg from "@/assets/running-pliers.jpg";
import foilerImg from "@/assets/foiler.jpg";
import grinder3Img from "@/assets/grinder3.jpg";
import quickFitBitImg from "@/assets/quick-fit-bit.jpg";
import iPurgeXImg from "@/assets/i-purge-x.jpg";
import proOxMonitorImg from "@/assets/pro-ox-monitor.jpg";

const products = [
  {
    title: "Glass Cutter GP",
    category: "Glass Working Tools",
    description: "Premium glass cutting tool featuring LED illumination, USB-C charging, and ergonomic craft-inspired design. Multiple concept iterations focusing on user experience and functionality.",
    features: [
      "LED light system with capacitive touch controls",
      "Rechargeable via USB-C port",
      "Machined stainless steel components",
      "Ergonomic grip design"
    ],
    image: glassCutterImg,
    patents: true
  },
  {
    title: "Running Pliers",
    category: "Glass Working Tools",
    description: "Industrial design for precision glass running pliers with adjustable alignment dial and rubberized pads. Features powder-coated aluminum construction with laser-etched graphics.",
    features: [
      "Adjustable alignment dial for precision",
      "Powder-coated aluminum levers",
      "Rubberized top and bottom pads",
      "Professional CMF specification"
    ],
    image: runningPliersImg,
    patents: true
  },
  {
    title: "The Foiler",
    category: "Glass Working Tools",
    description: "Revolutionary handheld foiling tool that simplifies copper foil application for stained glass. Features interchangeable tips, built-in blade, and integrated crimper/burnisher.",
    features: [
      "Three interchangeable tip sizes (3/16\", 7/32\", 1/4\")",
      "Ambidextrous ergonomic design",
      "Integrated cutting blade and crimper",
      "EZ-View window for foil monitoring"
    ],
    image: foilerImg,
    patents: true
  },
  {
    title: "The Grinder 2",
    category: "Glass Working Tools",
    description: "Compact, powerful glass grinder featuring DC brushless motor, Quick-Fit Bit System, and Aqua Flow System. Designed for professional use with ultra-quiet operation and vibration dampening.",
    features: [
      "4500 RPM DC brushless motor",
      "Quick-Fit Bit System (tool-free changes)",
      "Aqua Flow System (continuous water flow)",
      "Removable water tray with lift-out design"
    ],
    image: grinder3Img,
    patents: true
  },
  {
    title: "The Grinder 3",
    category: "Glass Working Tools",
    description: "Simplified, space-saving grinder perfect for classrooms and hobbyists. Features 3/4\" Quick-Fit Bit System and integrated accessory storage drawer.",
    features: [
      "4000 RPM quiet operation",
      "Compact 11\" x 9\" work surface",
      "Built-in accessory drawer",
      "Waterproof illuminated switch"
    ],
    image: grinder3Img,
    patents: true
  },
  {
    title: "Quick-Fit Bit System",
    category: "Glass Working Accessories",
    description: "Shock-absorbing grinding bit system with quick-change capability. Industrial elastomer construction prevents glass chipping while enabling tool-free bit changes.",
    features: [
      "Tool-free bit changes (no keys required)",
      "Vibration-absorbing elastomer design",
      "100% utilization (adjustable and reversible)",
      "Available in multiple grit varieties"
    ],
    image: quickFitBitImg,
    patents: true
  },
  {
    title: "I-Purge X",
    category: "Welding Equipment",
    description: "Modular inflatable bladder system for pipe welding purge applications. Expandable design fits multiple pipe sizes with interchangeable modules and high-heat resistant components.",
    features: [
      "Modular system (8\"-12\" range)",
      "High-heat harness (up to 1200°F)",
      "Tri-flow inner tubing system",
      "Patent-pending inert gas diffuser"
    ],
    image: iPurgeXImg,
    patents: true
  },
  {
    title: "Pro OX Monitor",
    category: "Welding Equipment",
    description: "Professional oxygen monitoring device with IP65 waterproof construction. Designed for extreme environments with large color screen and removable in-line filters.",
    features: [
      "IP65 waterproof rating",
      "Large color display screen",
      "Removable cleanable puck filters",
      "Glove-compatible button design"
    ],
    image: proOxMonitorImg,
    patents: false
  }
];

export const ProductShowcase = () => {
  return (
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
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
