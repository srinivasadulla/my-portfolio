import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Expertise } from "@/components/Expertise";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductShowcase />
      <ProcessTimeline />
      <Expertise />
      
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Mechanical Engineering Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
