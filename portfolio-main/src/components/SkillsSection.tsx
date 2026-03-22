import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "./AboutSection";
import { Code, Globe, Wrench, ShieldCheck } from "lucide-react";

const SkillBar = ({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="mb-3 group">
      <div className="flex justify-between text-xs font-mono mb-1">
        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
        <span className="text-primary/60">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 + delay * 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative"
          style={{ boxShadow: "0 0 10px hsl(160 100% 50% / 0.4)" }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-accent/80 rounded-full blur-sm" />
        </motion.div>
      </div>
    </div>
  );
};

const categories = [
  {
    icon: Code,
    title: "Programming Languages",
    color: "text-primary",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "Java (Basics)", level: 50 },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    color: "text-neon-purple",
    skills: [
      { name: "Kali Linux", level: 75 },
      { name: "Social Engineering", level: 70 },
      { name: "Network Security", level: 75 },
    ],
  },
  {
    icon: Globe,
    title: "Web & Database",
    color: "text-accent",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    color: "text-primary",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 70 },
      { name: "Jupyter Notebook", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionReveal>
          <h2 className="section-heading neon-text mb-2">
            <span className="text-primary/40 font-mono text-lg mr-2">03.</span>
            Technical Skills
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-10 max-w-xs" />
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <SectionReveal key={cat.title}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass hover-neon-glow rounded-xl p-6 h-full group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2 rounded-lg bg-secondary/60 ${cat.color}`}>
                    <cat.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
                </div>
                {cat.skills.map((skill, idx) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={idx} />
                ))}
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
