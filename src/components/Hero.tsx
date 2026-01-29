import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-[var(--gradient-hero)]" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="animate-fade-in">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary dark:from-fuchsia-300 dark:to-violet-300 bg-clip-text text-transparent">Daria</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground animate-fade-in">
              Applied AI Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Passionate about data, models, and human-centered AI. Building intelligent systems that make a difference.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-4 animate-fade-in">
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a href="https://github.com/koalaboomka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a href="https://www.linkedin.com/in/daria-tsarova-lenska/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a href="mailto:d.tsarova.lenska@proton.me" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:text-primary">
              <a href="/CV_Daria_Tsarova-Lenska.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                <FileText className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
