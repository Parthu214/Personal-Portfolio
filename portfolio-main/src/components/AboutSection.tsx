import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Shield, Code, FolderOpen, Mail, Zap } from "lucide-react";

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3 pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <SectionReveal>
          <div className="mb-16">
            <h2 className="section-heading neon-text mb-2 drop-shadow-lg">
              <span className="text-primary/40 font-mono text-lg mr-2">01.</span>
              About Me
            </h2>
            <div className="h-1 bg-gradient-to-r from-primary via-accent to-transparent mb-8 max-w-xs rounded-full shadow-lg shadow-primary/20" />
          </div>
        </SectionReveal>

        {/* Main Bio Card */}
        <SectionReveal className="mb-12">
          <motion.div
            whileHover={{ borderColor: "rgba(0, 255, 136, 0.6)" }}
            className="relative group"
          >
            {/* Glow effect background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-accent/30 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
            
            {/* Main card */}
            <div className="relative glass rounded-2xl p-8 md:p-10 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 backdrop-blur-xl hover:shadow-lg hover:shadow-primary/10">
              {/* Code bracket accent */}
              <div className="absolute top-4 left-4 text-primary/40 font-mono text-2xl group-hover:text-primary/60 transition-colors">
                {"<>"}
              </div>
              
              <div className="pl-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 drop-shadow">
                  Who Am I?
                </h3>
                
                <p className="text-base md:text-lg leading-relaxed text-foreground/85 font-sans drop-shadow mb-6">
                  Highly motivated <span className="text-primary font-semibold">Web Developer</span> and <span className="text-accent font-semibold">Cyber Security</span> student skilled in designing, coding, and deploying responsive web applications. Experienced in <span className="text-primary/80">Full-stack (MERN) Development</span>, <span className="text-accent/80">AI-driven Security projects</span>, and <span className="text-neon-purple/80">DSA</span>.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary/90 font-mono text-xs font-semibold hover:bg-primary/20 transition-colors cursor-default">
                    ?? Full-Stack MERN
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent/90 font-mono text-xs font-semibold hover:bg-accent/20 transition-colors cursor-default">
                    ?? Cybersecurity
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple/90 font-mono text-xs font-semibold hover:bg-neon-purple/20 transition-colors cursor-default">
                    ?? AI/ML Projects
                  </span>
                  <span className="inline-block px-3 py-1 rounded-full bg-foreground/10 border border-foreground/30 text-foreground/90 font-mono text-xs font-semibold hover:bg-foreground/20 transition-colors cursor-default">
                    ?? Data Structures
                  </span>
                </div>
              </div>
              
              {/* Code bracket accent */}
              <div className="absolute bottom-4 right-4 text-primary/40 font-mono text-2xl group-hover:text-primary/60 transition-colors">
                {"</>"}
              </div>
            </div>
          </motion.div>
        </SectionReveal>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Terminal,
              title: "Developer",
              text: "Building elegant, performant web applications using React, Node.js, and modern frameworks. Clean code and user experience are my priorities.",
              color: "primary"
            },
            {
              icon: Shield,
              title: "Security Minded",
              text: "Fascinated by ethical hacking and system hardening. Understanding how things break makes me a better builder.",
              color: "accent"
            },
            {
              icon: Zap,
              title: "Lifelong Learner",
              text: "Constantly exploring new technologies, contributing to open source, and pushing boundaries. Certified in Cloud AI, Networking & Distributed Systems.",
              color: "neon-purple"
            },
          ].map((item, i) => (
            <SectionReveal key={item.title} className="flex">
              <motion.div
                whileHover={{ y: -8, borderColor: "rgba(0, 255, 136, 0.5)" }}
                transition={{ duration: 0.3 }}
                className="w-full glass rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 backdrop-blur-md"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-3 text-lg">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        {/* Terminal-style bio enhanced */}
        <SectionReveal className="mb-8">
          <motion.div
            whileHover={{ borderColor: "rgba(0, 255, 153, 0.4)" }}
            className="relative group"
          >
            {/* Glow background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-75 transition-all duration-300" />
            
            {/* Terminal card */}
            <div className="relative glass rounded-xl p-6 font-mono text-sm border border-primary/20 group-hover:border-primary/40 transition-all backdrop-blur-md">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-primary/20">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-primary/60" />
                <span className="ml-2 text-muted-foreground text-xs">terminal@portfolio</span>
              </div>
              
              {/* Terminal content */}
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="text-primary font-semibold">\$</span> whoami
                </p>
                <p className="text-foreground/80 pl-6 drop-shadow">
                  M.A. Parthasaradhi Reddy � Web Developer & Cybersecurity Student
                </p>
                
                <p className="mt-4">
                  <span className="text-primary font-semibold">\$</span> cat skills.txt
                </p>
                <div className="pl-6 space-y-1 text-accent/90">
                  <p>? MERN Stack (React, Node.js, MongoDB, Express)</p>
                  <p>? Python, JavaScript, TypeScript</p>
                  <p>? Kali Linux, Cybersecurity Tools</p>
                  <p>? Data Structures & Algorithms</p>
                  <p>? AI/ML, Cloud Platforms</p>
                </div>
                
                <p className="mt-4">
                  <span className="text-primary font-semibold">\$</span> echo \
                </p>
                <p className="text-neon-purple/90 pl-6 drop-shadow">
                  Build secure, impactful software that makes a real difference.
                </p>
              </div>
            </div>
          </motion.div>
        </SectionReveal>

        {/* CTA Buttons */}
        <SectionReveal className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group bg-black/40 backdrop-blur-md hover-neon-glow neon-border px-8 py-3 rounded-lg font-mono text-sm text-primary flex items-center gap-2 transition-all hover:bg-black/60"
          >
            <FolderOpen className="w-4 h-4" />
            View Projects
            <span className="text-primary/40 group-hover:text-primary transition-colors">{"/>"}</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group bg-black/40 backdrop-blur-md px-8 py-3 rounded-lg font-mono text-sm text-muted-foreground hover:text-accent flex items-center gap-2 transition-all hover:border-accent/40 hover:bg-black/60"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </motion.button>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
export { SectionReveal };
