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
    description: "Part design, system design, material selection, and mechanical design for all products"
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
    <section className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/10">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-sm font-semibold text-primary">Development Lifecycle</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Complete Product Development Lifecycle
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive end-to-end management across all phases—from concept generation through mass production—with hands-on involvement in part design, system design, material selection, and cross-functional team leadership
            </p>
          </div>

          {/* Detailed Development Flowchart */}
          <div className="space-y-6">            
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-border/50 shadow-[var(--shadow-card)]">
              <div className="space-y-6">
                {/* Phase 1: Concept & Design */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">1</span>
                      </div>
                      <h4 className="font-bold text-foreground text-lg">Concept Generation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Initial ideation, requirements definition, and preliminary design exploration</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-primary text-2xl px-2">→</div>
                  <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">2</span>
                      </div>
                      <h4 className="font-bold text-foreground text-lg">Part & System Design</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Detailed mechanical design, material selection, CAD modeling, and system architecture</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-primary text-2xl px-2">→</div>
                  <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/40 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">3</span>
                      </div>
                      <h4 className="font-bold text-foreground text-lg">DFM & DFA</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Design for Manufacturing and Assembly optimization with suppliers</p>
                  </div>
                </div>

                {/* Phase 2: Testing */}
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/40 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-accent">4</span>
                    </div>
                    <h4 className="font-bold text-foreground text-lg">Reliability Testing & Validation</h4>
                  </div>
                  
                  {/* Testing Methodologies */}
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-foreground mb-3">Testing Methodologies:</p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/20 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-bold text-foreground">HALT</p>
                        <p className="text-xs text-muted-foreground mt-1.5">Highly Accelerated Life Testing</p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/20 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-bold text-foreground">ALT</p>
                        <p className="text-xs text-muted-foreground mt-1.5">Accelerated Life Testing</p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border-2 border-accent/20 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-bold text-foreground">HASS</p>
                        <p className="text-xs text-muted-foreground mt-1.5">Highly Accelerated Stress Screening</p>
                      </div>
                    </div>
                  </div>

                  {/* Test Types */}
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Test Parameters & Validation:</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-3 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-semibold text-foreground">Thermal Cycling</p>
                        <p className="text-xs text-muted-foreground mt-1">Temperature extremes & transitions</p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-3 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-semibold text-foreground">Vibration Testing</p>
                        <p className="text-xs text-muted-foreground mt-1">Environmental stress simulation</p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-3 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-semibold text-foreground">Structural Analysis</p>
                        <p className="text-xs text-muted-foreground mt-1">Mechanical integrity verification</p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-3 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-semibold text-foreground">IP Rating Testing</p>
                        <p className="text-xs text-muted-foreground mt-1">Ingress protection certification</p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-3 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-semibold text-foreground">External Lab Testing</p>
                        <p className="text-xs text-muted-foreground mt-1">Third-party validation</p>
                      </div>
                      <div className="bg-card/80 backdrop-blur-sm border border-accent/20 rounded-lg p-3 hover:shadow-md transition-shadow duration-300">
                        <p className="text-sm font-semibold text-foreground">Safety & Compliance</p>
                        <p className="text-xs text-muted-foreground mt-1">Regulatory standards testing</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3: Manufacturing */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-2 border-emerald-500/40 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-emerald-600">5</span>
                      </div>
                      <h4 className="font-bold text-foreground text-lg">Manufacturer Partnership</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Tooling engineering collaboration, prototyping, and production setup</p>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-emerald-600 text-2xl px-2">→</div>
                  <div className="flex-1 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-2 border-emerald-500/40 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <span className="text-lg font-bold text-emerald-600">6</span>
                      </div>
                      <h4 className="font-bold text-foreground text-lg">Production Ramp-Up</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">Scaling manufacturing capacity and quality control systems</p>
                  </div>
                </div>

                {/* Phase 4: Launch */}
                <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-2 border-orange-500/40 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-8 w-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-orange-600">7</span>
                    </div>
                    <h4 className="font-bold text-foreground text-lg">Market Launch</h4>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-orange-500/20 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <p className="text-sm font-bold text-foreground">Logistics Planning</p>
                      <p className="text-xs text-muted-foreground mt-1.5">Distribution & supply chain coordination</p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-orange-500/20 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <p className="text-sm font-bold text-foreground">Marketing Campaign</p>
                      <p className="text-xs text-muted-foreground mt-1.5">Product positioning and launch strategy</p>
                    </div>
                    <div className="bg-card/80 backdrop-blur-sm border-2 border-orange-500/20 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <p className="text-sm font-bold text-foreground">Mass Production</p>
                      <p className="text-xs text-muted-foreground mt-1.5">Full-scale manufacturing execution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Functional Leadership */}
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold text-foreground">
                Cross-Functional Leadership
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hands-on involvement across all aspects of product development, collaborating with diverse teams
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border-2 border-border/50 shadow-[var(--shadow-card)]">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">Industrial Design Team</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">CMF specifications, aesthetics, and user experience refinement</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">Hardware Engineering</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Circuit design, component selection, and system integration</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">Tooling Engineering</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Mold design, manufacturing processes via suppliers</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">Manufacturing Partners</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">DFM/DFA optimization, supplier communication, quality systems</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">Logistics Team</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Supply chain planning, packaging, and distribution strategy</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">Marketing Team</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Product positioning, technical documentation, launch campaigns</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">Accounting & Finance</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Cost analysis, budgeting, and financial planning</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">External Testing Labs</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Third-party validation, certification, compliance testing</p>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 rounded-xl p-5 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
                  <h4 className="font-bold text-foreground mb-2 text-base">Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Testing protocols, inspection criteria, continuous improvement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
