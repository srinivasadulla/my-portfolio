import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-95" />
      
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10 px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-accent font-semibold tracking-wide uppercase text-sm md:text-base">
              Mechanical Engineering Manager
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              From Concept to
              <span className="block bg-[var(--gradient-accent)] bg-clip-text text-transparent">
                Mass Production
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Developing innovative, patented products through every stage of the engineering lifecycle.
            From industrial design and material selection to reliability testing and manufacturing at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
            >
              View Portfolio
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-accent">10+</p>
              <p className="text-sm text-primary-foreground/80">Patented Products</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-sm text-primary-foreground/80">Concept to Production</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-accent">Multiple</p>
              <p className="text-sm text-primary-foreground/80">Industries</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl md:text-4xl font-bold text-accent">Full</p>
              <p className="text-sm text-primary-foreground/80">Lifecycle Management</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
