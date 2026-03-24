import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FolderOpen, Mail, Download } from "lucide-react";

// Optimized role list for typing animation
const roles = ["Web Developer", "Problem Solver", "Cybersecurity Enthusiast"];

// Navigation sections with their IDs
const navSections = [
  { id: "#about", label: "About" },
  { id: "#skills", label: "Skills" },
  { id: "#education", label: "Education" },
  { id: "#internship", label: "Internship" },
  { id: "#achievements", label: "Achievements" },
];

const HeroSection = () => {
  // Role typing animation state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // Full name typing animation state
  const fullName = "Mulinti Anakala Parthasaradhi Reddy";
  const [fullNameText, setFullNameText] = useState("");
  const [isFullNameDeleting, setIsFullNameDeleting] = useState(false);
  const [isFullNameWaiting, setIsFullNameWaiting] = useState(false);

  // Role typing animation effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    // Pause after typing complete
    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, 1500); // 1.5 second pause
      return () => clearTimeout(timeout);
    }

    // Typing speed: 100ms per character
    const typingSpeed = isDeleting ? 50 : 100;

    timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          // Complete - start waiting
          setIsWaiting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Deleted - move to next role
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, isWaiting]);

  // Full name typing animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Pause after typing complete
    if (isFullNameWaiting) {
      timeout = setTimeout(() => {
        setIsFullNameWaiting(false);
        setIsFullNameDeleting(true);
      }, 1500); // 1.5 second pause
      return () => clearTimeout(timeout);
    }

    // Typing speed: 100ms per character
    const typingSpeed = isFullNameDeleting ? 50 : 100;

    timeout = setTimeout(() => {
      if (!isFullNameDeleting) {
        // Typing
        if (fullNameText.length < fullName.length) {
          setFullNameText(fullName.substring(0, fullNameText.length + 1));
        } else {
          // Complete - start waiting
          setIsFullNameWaiting(true);
        }
      } else {
        // Deleting
        if (fullNameText.length > 0) {
          setFullNameText(fullNameText.substring(0, fullNameText.length - 1));
        } else {
          // Deleted - restart
          setIsFullNameDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [fullNameText, isFullNameDeleting, isFullNameWaiting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 py-20 sm:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent pointer-events-none" />

      {/* Main Container - Split Layout */}
      <div className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE - Name & Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center">

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex w-fit mb-6">
            <div className="inline-block glass rounded-full px-4 py-2">
              <span className="font-mono text-xs text-primary flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                Available for Opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8">
            <p className="text-lg md:text-xl text-muted-foreground font-light mb-4">Hi, I'm</p>
            
            {/* Name - Single line with responsive sizing - FIXED BUG: overflow-visible */}
            <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold tracking-wide leading-tight mb-3 whitespace-nowrap overflow-visible">
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                  M.A.PARTHASARADHI REDDY
                </span>
                {/* Subtle glow trail effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-20 blur-xl pointer-events-none animate-gradient-shift-delay" />
              </span>
            </h1>

            {/* Full name with TYPING ANIMATION */}
            <p className="text-sm md:text-base text-muted-foreground/60 font-light tracking-widest italic leading-relaxed h-6 md:h-7">
              <span className="font-mono bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-shift-smooth">
                {fullNameText}
              </span>
              <span className="text-primary font-bold animate-blink">|</span>
            </p>
          </motion.div>

          {/* Typing Animation - Professional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 h-12 flex items-center">
            <span className="font-mono text-lg md:text-xl text-muted-foreground">
              <span className="text-foreground font-semibold">{"{"}</span>
              {" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
                {displayText}
              </span>
              <span className="text-primary font-bold animate-blink">|</span>
              {" "}
              <span className="text-foreground font-semibold">{"}"}</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed mb-10 font-light">
            Highly motivated Web Developer and Cyber Security student skilled in designing, coding, and deploying responsive web applications. Experienced in Full-stack (MERN) Development, AI-driven Security projects, and DSA.
          </motion.p>

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-3 items-center mb-8">
            <button
              onClick={() => scrollToSection("#projects")}
              className="group relative px-8 py-3.5 rounded-lg font-mono text-sm text-primary bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 flex items-center gap-2 shadow-lg shadow-cyan-500/5 hover:shadow-cyan-500/20">
              <FolderOpen className="w-4 h-4" />
              View Projects
              <span className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">→</span>
            </button>
            <button
              onClick={() => scrollToSection("#contact")}
              className="group px-8 py-3.5 rounded-lg font-mono text-sm text-muted-foreground hover:text-accent border border-muted-foreground/20 hover:border-accent/40 transition-all duration-300 hover:bg-accent/5 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
            <a
              href="/resume.pdf"
              download="Parthasaradhi_Reddy_Resume.pdf"
              className="group px-8 py-3.5 rounded-lg font-mono text-sm text-muted-foreground hover:text-purple-400 border border-muted-foreground/20 hover:border-purple-400/40 transition-all duration-300 hover:bg-purple-500/5 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </motion.div>

          {/* Additional Section Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-2">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="px-4 py-2 rounded-md font-mono text-xs md:text-sm text-muted-foreground hover:text-foreground border border-muted-foreground/10 hover:border-muted-foreground/40 transition-all duration-300 hover:bg-muted/10 backdrop-blur-sm">
                {section.label}
              </button>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE - Profile Photo with Animated Ring */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center lg:justify-end">
          
          {/* Profile photo container with rotating ring */}
          <div className="relative group w-fit h-fit">
            {/* Animated rotating ring - OUTSIDE the image */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-50 blur-md group-hover:opacity-70 transition-opacity duration-300"
            />

            {/* Breathing glow - OUTSIDE the image */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(34, 211, 238, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)",
                  "0 0 40px rgba(34, 211, 238, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)",
                  "0 0 20px rgba(34, 211, 238, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            />

            {/* Main profile image container */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
              
              {/* Inner glass effect container */}
              <div className="relative w-full h-full rounded-full bg-slate-900/40 backdrop-blur-xl border border-white/10 overflow-hidden">
                {/* Profile image - Full face visible */}
                <img
                  src="/lovable-uploads/82ed1463-506e-495f-94e6-1119484929af.jpg"
                  alt="Parthasaradhi Reddy"
                  className="w-full h-full rounded-full object-cover object-[center_top]"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-muted-foreground/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;