import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2>Let's Connect</h2>
            <p className="text-muted-foreground text-lg">
              Interested in collaborating or discussing machine learning? I'd love to hear from you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:daria@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="pt-8 space-y-4">
            <p className="text-sm text-muted-foreground">Find me on</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg" asChild className="hover:border-primary/50">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:border-primary/50">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
