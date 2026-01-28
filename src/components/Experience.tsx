import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Best Secret",
    role: "Applied Data Scientist (consultant)",
    period: "November - December 2025",
    description: [
      "Built a multimodal revenue prediction pipeline combining tabular product data with image embeddings (CLIP, EVA, DINO).",
      "Designed and executed preprocessing (log transforms, categorical encoding temporal features) and trained ML models against a strong tabular baseline.",
      "Evaluated whether visual signals add predictive power and delivered results via an interactive demo for stakeholders.",
      "Skills: Python, Pandas, NumPy, SQL, Scikit-learn, NLP, CNNs, GitHub, Statistics, Data Storytelling"
    ],
  },
  {
    company: "Immoscout24",
    role: "Engineering Manager",
    period: "November 2021 - June 2025",
    description: [
      "Built and led a cross-functional engineering team focusing on data-driven products and analytics-based decision-making.",
      "Hired and mentored a data engineer to lead ETL and pipeline development, improving data quality and reliability.",
      "Partnered with product, data, and analytics teams to ensure accuracy and accessibility of business-critical data.",
      "Oversaw migration of legacy tech, prioritizing modernization and cost efficiency.",
      "Drove stakeholder alignment across product, data, and engineering.",
      "Skills: Stakeholder Management, Cross-Functional Collaboration, Communication, Data Quality, Data Modeling, Solution-Oriented Thinking"
    ],
  },
  {
    company: "ING (Lendico)",
    role: "Engineering Team Lead",
    period: "December 2019 - October 2021",
    description: [
      "Led the testing and integration workstream for payments and financial systems during ING’s acquisition of Lendico.",
      "Established company-wide testing strategy ensuring compliance and data accuracy.",
      "Delivered joint product launch with Amazon, coordinating cross-functional efforts from dev to release.",
      "Recruited, coached, and managed a QA team of 7 engineers.",
      "Skills: Ownership, Analytical Thinking, Attention to Detail, Curiosity, Payment Systems, Financial Data Understanding, Adaptability"
    ],
  },
  {
    company: "Wire",
    role: "Quality Assurance Engineer → Deputy Team Lead",
    period: "September 2014 - November 2018",
    description: [
      "Streamlined release testing processes, decreasing testing duration from 8 days to 2 hours, enabling faster product iterations.",
      "Managed iOS application delivery, coordinating schedules and communicating risks to stakeholders.",
      "Built and led a high-performing QA team of 10 engineers, fostering a culture of trust and accountability.",
      "Implemented efficient testing workflows that improved team productivity and product quality.",
      "Skills: Process Optimization, Mobile Testing, Team Leadership, Stakeholder Communication, Risk Management, iOS Development"
    ],
  },
  {
    company: "Provectus",
    role: "Quality Assurance Engineer → Team Lead",
    period: "October 2010 - August 2014",
    description: [
      "Developed test automation strategies and scripts using Java 6, Selenium, and TestNG, improving test efficiency and coverage.",
      "Integrated testing into the development process and coordinated testing schedules with release deadlines, significantly reducing delivery failure rates.",
      "Managed cross-functional collaboration with external teams, business clients, and product stakeholders to ensure requirements compliance and on-time delivery.",
      "Skills: Team Leadership, Test Automation, Java, Selenium, TestNG, Process Integration, Cross-functional Coordination, Release Management, Requirements Analysis"
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
            Former meeting survivor, current AI engineer. Building intelligent systems hands-on, one epoch at a time.
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
