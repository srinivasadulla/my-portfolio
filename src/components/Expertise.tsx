import { Wrench, Palette, Beaker, LineChart, Settings, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const expertiseAreas = [
  {
    icon: Wrench,
    title: "Mechanical Engineering",
    description: "Complete product development from concept through detailed design and manufacturing"
  },
  {
    icon: Palette,
    title: "Industrial Design",
    description: "CMF specifications, user experience optimization, and aesthetic refinement"
  },
  {
    icon: Beaker,
    title: "Material Selection",
    description: "Expert material specification for performance, manufacturability, and cost optimization"
  },
  {
    icon: LineChart,
    title: "Reliability Testing",
    description: "Comprehensive testing protocols ensuring product durability and performance"
  },
  {
    icon: Settings,
    title: "Manufacturing",
    description: "Tooling design, assembly process development, and production scaling"
  },
  {
    icon: Users,
    title: "Cross-functional Leadership",
    description: "Managing engineering teams and coordinating with external partners"
  }
];

export const Expertise = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold text-primary">Skills & Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Core Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive engineering capabilities across all phases of product development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="group border-2 border-border/50 hover:border-accent/30 hover:shadow-[var(--shadow-elevated)] transition-all duration-300 hover:scale-[1.02] bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-7 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[var(--shadow-accent)] transition-all duration-300">
                    <area.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">
                      {area.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
