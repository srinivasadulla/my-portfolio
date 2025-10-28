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

          {/* Detailed Development Flowchart */}
          <div className="mt-16 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Detailed Development Process
              </h3>
              <p className="text-muted-foreground">
                Comprehensive workflow from concept to market
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="space-y-4">
                {/* Phase 1: Concept & Design */}
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 bg-primary/10 border-2 border-primary rounded-lg p-4">
                    <h4 className="font-bold text-foreground mb-2">1. Concept Generation</h4>
                    <p className="text-sm text-muted-foreground">Initial ideation and requirements</p>
                  </div>
                  <div className="flex items-center justify-center text-primary">→</div>
                  <div className="flex-1 bg-primary/10 border-2 border-primary rounded-lg p-4">
                    <h4 className="font-bold text-foreground mb-2">2. Material Selection</h4>
                    <p className="text-sm text-muted-foreground">Engineering material choices</p>
                  </div>
                </div>

                {/* Phase 2: Testing */}
                <div className="bg-accent/10 border-2 border-accent rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-4">3. Reliability Testing & Validation</h4>
                  
                  {/* Testing Methodologies */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-3">Testing Methodologies:</p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">HALT</p>
                        <p className="text-xs text-muted-foreground mt-1">Highly Accelerated Life Testing</p>
                      </div>
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">ALT</p>
                        <p className="text-xs text-muted-foreground mt-1">Accelerated Life Testing</p>
                      </div>
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">HASS</p>
                        <p className="text-xs text-muted-foreground mt-1">Highly Accelerated Stress Screening</p>
                      </div>
                    </div>
                  </div>

                  {/* Test Types */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Test Parameters & Validation:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">Thermal Cycling</p>
                        <p className="text-xs text-muted-foreground mt-1">Temperature extremes & transitions</p>
                      </div>
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">Vibration Testing</p>
                        <p className="text-xs text-muted-foreground mt-1">Environmental stress simulation</p>
                      </div>
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">Structural Analysis</p>
                        <p className="text-xs text-muted-foreground mt-1">Mechanical integrity verification</p>
                      </div>
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">IP Rating</p>
                        <p className="text-xs text-muted-foreground mt-1">Ingress protection certification</p>
                      </div>
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">External Labs</p>
                        <p className="text-xs text-muted-foreground mt-1">Third-party validation</p>
                      </div>
                      <div className="bg-card border border-border rounded p-3">
                        <p className="text-sm font-semibold text-foreground">Safety Standards</p>
                        <p className="text-xs text-muted-foreground mt-1">Regulatory compliance testing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3: Manufacturing */}
                <div className="flex flex-col md:flex-row gap-3">
                  <div className="flex-1 bg-green-500/10 border-2 border-green-500 rounded-lg p-4">
                    <h4 className="font-bold text-foreground mb-2">4. Manufacturer Partnership</h4>
                    <p className="text-sm text-muted-foreground">Production setup & prototypes</p>
                  </div>
                  <div className="flex items-center justify-center text-green-500">→</div>
                  <div className="flex-1 bg-green-500/10 border-2 border-green-500 rounded-lg p-4">
                    <h4 className="font-bold text-foreground mb-2">5. Production Ramp-Up</h4>
                    <p className="text-sm text-muted-foreground">Scaling manufacturing capacity</p>
                  </div>
                </div>

                {/* Phase 4: Launch */}
                <div className="bg-orange-500/10 border-2 border-orange-500 rounded-lg p-6">
                  <h4 className="font-bold text-foreground mb-4">6. Market Launch</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-card border border-border rounded p-3">
                      <p className="text-sm font-semibold text-foreground">Logistics Planning</p>
                      <p className="text-xs text-muted-foreground mt-1">Distribution & supply chain</p>
                    </div>
                    <div className="bg-card border border-border rounded p-3">
                      <p className="text-sm font-semibold text-foreground">Marketing Campaign</p>
                      <p className="text-xs text-muted-foreground mt-1">Product positioning</p>
                    </div>
                    <div className="bg-card border border-border rounded p-3">
                      <p className="text-sm font-semibold text-foreground">Mass Production</p>
                      <p className="text-xs text-muted-foreground mt-1">Full-scale manufacturing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
