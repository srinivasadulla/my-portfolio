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
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Core Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering capabilities across all phases of product development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="border-border hover:shadow-[var(--shadow-card)] transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <area.icon className="h-6 w-6 text-accent" />
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
