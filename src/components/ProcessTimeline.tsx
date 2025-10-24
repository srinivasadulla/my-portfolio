import { Lightbulb, Pen, Cog, TestTube, Package, Factory } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    title: "Concept Development",
    description: "Ideation and preliminary design exploration"
  },
  {
    icon: Pen,
    title: "Industrial Design",
    description: "CMF specifications and user experience refinement"
  },
  {
    icon: Cog,
    title: "Detailed Engineering",
    description: "Material selection and mechanical design"
  },
  {
    icon: TestTube,
    title: "Prototyping & Testing",
    description: "Reliability testing and design validation"
  },
  {
    icon: Package,
    title: "Manufacturing Setup",
    description: "Tooling, assembly processes, and quality systems"
  },
  {
    icon: Factory,
    title: "Mass Production",
    description: "Full-scale manufacturing and product launch"
  }
];

export const ProcessTimeline = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Complete Product Development Lifecycle
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Managing every phase from initial concept through mass production
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6 md:gap-8 items-start">
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-3 space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
