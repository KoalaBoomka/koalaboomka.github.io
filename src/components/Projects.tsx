import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Netflix vs Disney+: Award Analysis",
    description: "This project analyzes Netflix and Disney+ award performance across the Oscars and Golden Globes. It demonstrates skills in data cleaning, analysis, and visual storytelling with Python.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/KoalaBoomka/netflix-disney-comparison/"
  },
  {
    title: "MPG Data Explorer",
    description: "Interactive fuel efficiency visualization Data source: UCI Machine Learning Repository",
    tech: ["Python", "Plotly", "Streamlit", "Pandas"],
    github: "https://github.com/KoalaBoomka/inter-visual-streamlit/",
    demo: "https://inter-visual.streamlit.app/",
  },
  // {
  //   title: "Sentiment Analysis API",
  //   description: "Real-time sentiment analysis system processing 10k requests/day. Built with transformers and FastAPI for low-latency inference.",
  //   tech: ["Transformers", "FastAPI", "BERT", "Redis"],
  //   impact: "99.5% uptime",
  //   github: "https://github.com",
  //   demo: "https://demo.example.com",
  // },
  // {
  //   title: "Predictive Maintenance System",
  //   description: "Time-series forecasting model predicting equipment failures. Reduced downtime by 40% using ensemble methods.",
  //   tech: ["XGBoost", "LSTM", "Pandas", "scikit-learn"],
  //   impact: "40% downtime reduction",
  //   github: "https://github.com",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-6">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2>Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of machine learning projects showcasing my expertise in deep learning, MLOps, and production systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-[1.02]"
            >
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-4">
                  <span className="group-hover:text-primary transition-colors">{project.title}</span>
                  <div className="flex gap-2 shrink-0">
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    {project.demo && (
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm font-medium text-secondary">{project.impact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
