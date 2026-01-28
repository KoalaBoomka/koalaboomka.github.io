import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { SiKaggle, SiLeetcode } from "react-icons/si";

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
              <a href="mailto:d.tsarova.lenska@proton.me">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/CV_Daria_Tsarova-Lenska.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="pt-8 space-y-4">
            <p className="text-sm text-muted-foreground">Find me on</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg" asChild className="hover:border-primary/50">
                <a href="https://github.com/koalaboomka" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:border-primary/50">
                <a href="https://www.kaggle.com/koalaboomka/" target="_blank" rel="noopener noreferrer">
                  <SiKaggle className="mr-2 h-5 w-5" />
                  Kaggle
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:border-primary/50">
                <a href="https://leetcode.com/u/KoalaBoomka/" target="_blank" rel="noopener noreferrer">
                  <SiLeetcode className="mr-2 h-5 w-5" />
                  LeetCode
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:border-primary/50">
                <a href="https://www.linkedin.com/in/daria-tsarova-lenska/" target="_blank" rel="noopener noreferrer">
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
