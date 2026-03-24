import { motion } from "framer-motion";
import { SectionReveal } from "./AboutSection";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Recruiter Management System",
    description: "Platform to streamline recruitment with candidate profiles, interview tracking, and feedback. Features Role-Based Access Control (RBAC) and real-time status updates.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    github: "https://github.com/Parthu214",
    year: "2026",
  },
  {
    title: "Gemini AI Code Reviewer",
    description: "Intelligent code review tool powered by Google's Gemini AI that analyzes code quality, detects potential bugs, and provides actionable improvement suggestions with syntax highlighting.",
    tech: ["Python", "Gemini API", "Streamlit"],
    github: "https://github.com/Parthu214",
    year: "2025",
  },
  {
    title: "Hotel Management System",
    description: "Web-based application to streamline hotel operations including room booking, guest management, check-in/out, billing, and availability tracking.",
    tech: ["HTML", "CSS", "JavaScript", "Python", "MySQL"],
    github: "https://github.com/Parthu214",
    year: "2025",
  },
  {
    title: "To-Do List Application",
    description: "A clean, responsive task management app with CRUD operations, local storage persistence, priority sorting, and a sleek UI for organizing daily tasks efficiently.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Parthu214",
    demo: "https://todo-list-webui.onrender.com",
    year: "2024",
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive portfolio to showcase professional projects and certifications with SEO optimizations and cross-device compatibility.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Parthu214",
    demo: "https://personal-portfolio-cyan-sigma.vercel.app/",
    year: "2024",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionReveal>
          <h2 className="section-heading neon-text mb-2">
            <span className="text-primary/40 font-mono text-lg mr-2">04.</span>
            Projects
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-10 max-w-xs" />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <SectionReveal key={project.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass hover-neon-glow rounded-xl p-6 h-full flex flex-col group relative overflow-hidden"
              >
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Folder className="w-5 h-5 text-primary" />
                      <span className="font-mono text-xs text-primary/50">{project.year}</span>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors p-1"
                        title="View Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors p-1"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono text-primary/70 bg-primary/5 border border-primary/10 rounded-full px-3 py-0.5 group-hover:border-primary/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass neon-border rounded-md px-4 py-1.5 font-mono text-xs text-primary hover:bg-primary/10 transition-all flex items-center gap-1.5"
                    >
                      <Github className="w-3 h-3" />
                      View Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass rounded-md px-4 py-1.5 font-mono text-xs text-accent hover:bg-accent/10 transition-all flex items-center gap-1.5 border border-accent/20"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
