import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Tech Innovations Inc.",
    role: "Senior Machine Learning Engineer",
    period: "2022 - Present",
    description: [
      "Led development of production ML systems processing 1M+ daily predictions",
      "Designed and deployed scalable MLOps pipelines reducing model deployment time by 70%",
      "Mentored team of 4 junior ML engineers on best practices and system architecture",
    ],
  },
  {
    company: "DataScience Solutions",
    role: "Machine Learning Engineer",
    period: "2020 - 2022",
    description: [
      "Built and optimized deep learning models achieving 95%+ accuracy on computer vision tasks",
      "Implemented automated retraining pipelines with MLflow and Airflow",
      "Collaborated with product teams to integrate ML features into customer-facing applications",
    ],
  },
  {
    company: "AI Research Lab",
    role: "ML Research Intern",
    period: "2019 - 2020",
    description: [
      "Researched novel architectures for natural language understanding",
      "Published findings at major ML conference (NeurIPS 2020)",
      "Contributed to open-source ML frameworks with 500+ GitHub stars",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 space-y-4">
          <h2>Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building intelligent systems and leading ML initiatives across diverse industries.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary/20 last:pb-0 group hover:border-primary/50 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary group-hover:shadow-[var(--shadow-glow)] transition-shadow" />
              
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                </div>
                
                <div className="flex items-center gap-2 text-secondary">
                  <Briefcase className="h-4 w-4" />
                  <p className="font-medium">{exp.company}</p>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                      <span className="text-secondary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
