import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail, Download } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.png";

const roles = ["Web Developer", "Cybersecurity Enthusiast", "Problem Solver", "Tech Explorer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          
          <div className="inline-block glass rounded-full px-4 py-1.5 mb-6">
            <span className="font-mono text-xs text-primary">
              <span className="animate-pulse-glow inline-block w-2 h-2 rounded-full bg-primary mr-2" />
              System Online — Ready to Connect
            </span>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex justify-center">
            
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-neon-purple opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500" />
              <img

                alt="M.A. Parthasaradhi Reddy"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/40 object-fill" src="/lovable-uploads/82ed1463-506e-495f-94e6-1119484929af.jpg" />
              
            </div>
          </motion.div>

          {/* Floating Name */}
          <motion.h1
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            
            <span className="neon-text font-display">PARTHASARADHI REDDY</span>
          </motion.h1>

          <p className="font-mono text-sm text-muted-foreground mb-2">Mulinti Anakala Parthasaradhi Reddy</p>

          <div className="h-10 md:h-12 flex items-center justify-center mb-6">
            <span className="font-mono text-lg md:text-2xl text-muted-foreground">
              {"{ "}
              <span className="text-accent">{text}</span>
              <span className="animate-pulse-glow text-primary">|</span>
              {" }"}
            </span>
          </div>

          <p className="max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-sans text-muted-foreground">
            Highly motivated Web Developer and Cyber Security student skilled in designing, coding, and deploying responsive web applications. Experienced in Full-stack (MERN) Development, AI-driven Security projects, and DSA.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-black/40 backdrop-blur-md hover-neon-glow neon-border px-8 py-3 rounded-lg font-mono text-sm text-primary flex items-center gap-2 transition-all hover:bg-black/60">
              
              <FolderOpen className="w-4 h-4" />
              View Projects
              <span className="text-primary/40 group-hover:text-primary transition-colors">{"/>"}</span>
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-black/40 backdrop-blur-md px-8 py-3 rounded-lg font-mono text-sm text-muted-foreground hover:text-accent flex items-center gap-2 transition-all hover:border-accent/40 hover:bg-black/60">
              
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download="Parthasaradhi_Reddy_Resume.pdf"
              className="group bg-black/40 backdrop-blur-md px-8 py-3 rounded-lg font-mono text-sm text-muted-foreground hover:text-neon-purple flex items-center gap-2 transition-all hover:border-neon-purple/40 hover:bg-black/60">
              
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2">
          
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;