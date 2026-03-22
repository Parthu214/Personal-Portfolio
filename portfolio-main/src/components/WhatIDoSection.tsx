import { motion } from "framer-motion";
import { SectionReveal } from "./AboutSection";
import { Globe, Code2, ShieldCheck, Bug } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Building Web Apps",
    description: "Creating modern, responsive full-stack web applications using the MERN stack with clean architecture.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_hsl(160_100%_50%/0.2)]",
  },
  {
    icon: Code2,
    title: "Clean & Efficient Code",
    description: "Writing maintainable, well-structured code following best practices and design patterns.",
    color: "text-accent",
    glow: "group-hover:shadow-[0_0_30px_hsl(195_100%_50%/0.2)]",
  },
  {
    icon: ShieldCheck,
    title: "Secure Development",
    description: "Integrating security-first practices into development — from authentication to data protection.",
    color: "text-neon-purple",
    glow: "group-hover:shadow-[0_0_30px_hsl(270_100%_65%/0.2)]",
  },
  {
    icon: Bug,
    title: "Ethical Hacking",
    description: "Exploring penetration testing, vulnerability assessment, and network security fundamentals.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_hsl(160_100%_50%/0.2)]",
  },
];

const WhatIDoSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-primary/60 tracking-widest uppercase">{"// what_i_do"}</span>
            <h2 className="section-heading neon-text mt-2">What I Do</h2>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <SectionReveal key={service.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`group glass hover-neon-glow rounded-xl p-6 h-full text-center cursor-default ${service.glow} transition-shadow duration-500`}
              >
                <div className={`inline-flex p-3 rounded-lg bg-secondary/50 mb-4 ${service.color}`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-sm">{service.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{service.description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
