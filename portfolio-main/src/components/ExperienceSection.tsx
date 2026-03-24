import { SectionReveal } from "./AboutSection";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "MERN Stack Web Development Intern",
    company: "Spark AI Edutech Solutions",
    period: "Jun 2025 — Jul 2025",
    points: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js",
      "Gained hands-on experience in building RESTful APIs and managing database schemas",
      "Completed a comprehensive mini-project utilizing the MERN stack for dynamic content management",
      "Secured 90% in the final assessment, demonstrating proficiency in modern web architecture",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="internship" className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="container mx-auto max-w-4xl">
        <SectionReveal>
          <h2 className="section-heading neon-text mb-2">
            <span className="text-primary/40 font-mono text-lg mr-2">05.</span>
            Internship
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-10 max-w-xs" />
        </SectionReveal>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <SectionReveal key={exp.role}>
                <div className="relative pl-12 md:pl-16">
                  <div className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background neon-glow" />
                  <div className="glass hover-neon-glow rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="font-display font-semibold text-foreground flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 mt-1 sm:mt-0">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-accent text-sm font-mono mb-3">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-xs">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
