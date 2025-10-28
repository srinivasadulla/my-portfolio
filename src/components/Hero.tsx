import { ArrowDown, Sparkles, Rocket, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Mechanical Engineering Manager & ML Enthusiast</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Engineering Innovation
              </span>
              <br />
              <span className="text-foreground">From Concept to Reality</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into patented products through comprehensive engineering excellence—
              spanning industrial design, DFM/DFA optimization, and mass production at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-lg px-8 py-6"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Award, number: "10+", label: "Patented Products", gradient: "from-primary to-primary/60" },
              { icon: Rocket, number: "100%", label: "Concept to Production", gradient: "from-accent to-accent/60" },
              { icon: Sparkles, number: "Multiple", label: "Industries", gradient: "from-primary/80 to-accent/80" },
              { icon: Award, number: "Full", label: "Lifecycle Management", gradient: "from-accent/80 to-primary/80" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:-translate-y-1"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <stat.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
};
