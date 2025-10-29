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
        
        <footer className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/80" />
          <div className="absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-30" />
          <div className="container px-6 text-center relative z-10">
            <p className="text-sm text-primary-foreground/90 font-medium">
              © {new Date().getFullYear()} Srinivas Reddy Adulla. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
