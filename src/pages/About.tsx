import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[image:var(--gradient-mesh)]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/80" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        
        <div className="container px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 text-primary-foreground animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                About Me
              </h1>
              <p className="text-xl md:text-2xl opacity-95 font-medium">
                Mechanical Engineering Manager & AI Enthusiast
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Profile Card */}
            <Card className="border-border/50 shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-fadeIn">
              <CardContent className="p-10">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Srinivas Reddy Adulla
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Mechanical Engineering Manager | Master's in Computer Science (Machine Learning)
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                    <p className="leading-relaxed">
                      I am passionate about building reliable products that seamlessly integrate into everyday lives. 
                      With over 10+ patented products developed from concept to mass production, I have extensive 
                      experience across the entire product development lifecycle—from initial concept development 
                      and industrial design to material selection, detailed design, reliability testing, prototyping, 
                      and mass production assembly.
                    </p>
                    <p className="leading-relaxed">
                      Beyond mechanical engineering, I hold a Master's degree in Computer Science with a specialization 
                      in Machine Learning. This unique combination allows me to bridge the gap between physical product 
                      development and cutting-edge AI technology. I'm deeply passionate about integrating AI to enhance 
                      user experiences, making products not just functional, but intelligent and adaptive to user needs.
                    </p>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Education</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-foreground">M.S. in Computer Science - Machine Learning</p>
                          <p className="text-sm">Georgia Institute of Technology, Atlanta, GA (2021-2024)</p>
                          <p className="text-sm mt-1">Coursework: AI for Robotics, Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">M.S. in Mechanical Engineering</p>
                          <p className="text-sm">University at Buffalo, NY (2015-2017)</p>
                          <p className="text-sm mt-1">Coursework: Intelligent CAD Interface, CAD Applications, FEA, Manufacturing Automation, Robotic Algorithms</p>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">B.Tech in Mechanical Engineering</p>
                          <p className="text-sm">Indian Institute of Technology Madras, Chennai, India (2011-2015)</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Experience</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-foreground">Mechanical Engineering Manager</p>
                          <p className="text-sm">Techniglass Corporation & Aquasol Corporation, Buffalo, NY (Dec 2017 - Present)</p>
                          <p className="text-sm mt-2 leading-relaxed">
                            Leading 10+ consumer electronics projects from concept to mass production, managing cross-functional teams 
                            to deliver innovative products. Implemented ISO-based quality control and DFMA practices, driving ~30% revenue 
                            growth and 15%+ production efficiency improvements. Expert in injection molding, PCBA integration, and global 
                            supply chain management.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border/50 shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-glow)] transition-all duration-500 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-10">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-8">Get In Touch</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a 
                    href="mailto:srinivasadulla1993@gmail.com"
                    className="flex items-center gap-3 p-5 rounded-xl border-2 border-border/50 hover:border-accent/30 hover:bg-gradient-to-br hover:from-accent/5 hover:to-transparent hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
                  >
                    <Mail className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">srinivasadulla1993@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:5715775033"
                    className="flex items-center gap-3 p-5 rounded-xl border-2 border-border/50 hover:border-accent/30 hover:bg-gradient-to-br hover:from-accent/5 hover:to-transparent hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
                  >
                    <Phone className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">(571) 577-5033</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/srinivasreddya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-5 rounded-xl border-2 border-border/50 hover:border-accent/30 hover:bg-gradient-to-br hover:from-accent/5 hover:to-transparent hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
                  >
                    <Linkedin className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-semibold text-foreground">linkedin.com/in/srinivasreddya</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/srinivasadulla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-5 rounded-xl border-2 border-border/50 hover:border-accent/30 hover:bg-gradient-to-br hover:from-accent/5 hover:to-transparent hover:shadow-[var(--shadow-card)] transition-all duration-300 group"
                  >
                    <Github className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium text-foreground">github.com/srinivasadulla</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild className="shadow-[var(--shadow-accent)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                    <a href="mailto:srinivasadulla1993@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-2 hover:border-accent/50 hover:shadow-[var(--shadow-card)] transition-all duration-300">
                    <a href="https://www.linkedin.com/in/srinivasreddya/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
  );
};

export default About;