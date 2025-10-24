import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Expertise } from "@/components/Expertise";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <ProductShowcase />
        <ProcessTimeline />
        <Expertise />
        
        <footer className="py-12 bg-primary text-primary-foreground">
          <div className="container px-6 text-center">
            <p className="text-sm">
              © {new Date().getFullYear()} Srinivas Reddy Adulla. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
