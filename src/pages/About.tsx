import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-6 text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold">
                About Me
              </h1>
              <p className="text-xl opacity-90">
                Mechanical Engineering Manager & AI Enthusiast
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Profile Card */}
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">
                      Srinivas Reddy Adulla
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      Mechanical Engineering Manager | Master's in Computer Science (Machine Learning)
                    </p>
                  </div>

                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="leading-relaxed">
                      I am passionate about building reliable products that seamlessly integrate into everyday lives. 
                      With over 10+ patented products developed from concept to mass production, I have extensive 
                      experience across the entire product development lifecycle—from initial concept development 
                      and industrial design to material selection, detailed design, reliability testing, prototyping, 
                      and mass production assembly.
                    </p>
                    <p className="leading-relaxed mt-4">
                      Beyond mechanical engineering, I hold a Master's degree in Computer Science with a specialization 
                      in Machine Learning. This unique combination allows me to bridge the gap between physical product 
                      development and cutting-edge AI technology. I'm deeply passionate about integrating AI to enhance 
                      user experiences, making products not just functional, but intelligent and adaptive to user needs.
                    </p>
                    <p className="leading-relaxed mt-4">
                      My approach combines rigorous engineering principles with innovative AI applications to create 
                      products that are both reliable and forward-thinking, always keeping the end-user experience 
                      at the forefront.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <a 
                    href="mailto:srinivasadulla1993@gmail.com"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">srinivasadulla1993@gmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="tel:5715775033"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">(571) 577-5033</p>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/srinivasreddya/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium text-foreground">linkedin.com/in/srinivasreddya</p>
                    </div>
                  </a>

                  <a 
                    href="https://github.com/srinivasadulla"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                  >
                    <Github className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium text-foreground">github.com/srinivasadulla</p>
                    </div>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="bg-accent hover:bg-accent/90">
                    <a href="mailto:srinivasadulla1993@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                  <Button asChild variant="outline">
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

      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container px-6 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Srinivas Reddy Adulla. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;