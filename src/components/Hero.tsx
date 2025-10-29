import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "@/assets/profile-pic.jpg";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-[image:var(--gradient-mesh)] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 text-left order-2 md:order-1 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                Srinivas Reddy Adulla
              </h1>
              
              <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Mechanical Engineering Manager
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Leading product development from concept to mass production. Specializing in industrial design, 
                design for manufacturing (DFM/DFA), and patented innovation across multiple industries.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-5 py-2.5 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl backdrop-blur-sm hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105">
                  <p className="text-sm font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">10+ Patents</p>
                </div>
                <div className="px-5 py-2.5 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl backdrop-blur-sm hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105">
                  <p className="text-sm font-semibold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Full Lifecycle</p>
                </div>
                <div className="px-5 py-2.5 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-xl backdrop-blur-sm hover:shadow-[var(--shadow-accent)] transition-all duration-300 hover:scale-105">
                  <p className="text-sm font-semibold bg-gradient-to-r from-accent to-accent-glow bg-clip-text text-transparent">ML Enthusiast</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Button 
                  size="lg" 
                  onClick={scrollToProjects}
                  className="group shadow-[var(--shadow-accent)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
                >
                  View Portfolio
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            {/* Right side - Profile image */}
            <div className="order-1 md:order-2 flex justify-center animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500" />
                <img 
                  src={profilePic} 
                  alt="Srinivas Reddy Adulla - Mechanical Engineering Manager" 
                  className="relative rounded-2xl w-full max-w-md shadow-[var(--shadow-elevated)] border-2 border-border/50 group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
