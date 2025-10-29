import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "@/assets/profile-pic.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Srinivas Reddy Adulla
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Mechanical Engineering Manager
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leading product development from concept to mass production. Specializing in industrial design, 
                design for manufacturing (DFM/DFA), and patented innovation across multiple industries.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-4 py-2 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-foreground">10+ Patents</p>
                </div>
                <div className="px-4 py-2 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-foreground">Full Lifecycle</p>
                </div>
                <div className="px-4 py-2 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium text-foreground">ML Enthusiast</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="group"
                >
                  View Portfolio
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            {/* Right side - Profile image */}
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl" />
                <img 
                  src={profilePic} 
                  alt="Srinivas Reddy Adulla" 
                  className="relative rounded-2xl w-full max-w-md shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
