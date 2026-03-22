import { motion } from "framer-motion";
import { SectionReveal } from "./AboutSection";
import { Award, Trophy, Medal, Code, BadgeCheck } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "3rd Prize — College Hackathon",
    org: "Muthayammal Engineering College",
    description: "3rd Prize Winner at the Hackathon conducted by Muthayammal Engineering College.",
  },
  {
    icon: Medal,
    title: "MSME Hackathon Finalist",
    org: "MSME",
    description: "Finalist at MSME Hackathon for building an AI-driven technology prototype.",
  },
  {
    icon: Award,
    title: "HackIndia 2025 Participant",
    org: "HackIndia",
    description: "Participated in HackIndia 2025 — India's biggest Web3 and AI hackathon.",
  },
  {
    icon: Code,
    title: "50+ LeetCode Problems",
    org: "LeetCode",
    description: "Solved over 50+ problems on LeetCode using Python to strengthen algorithmic logic.",
  },
];

const certifications = [
  {
    icon: BadgeCheck,
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    org: "Verified by Microsoft",
  },
  {
    icon: BadgeCheck,
    title: "GitHub Foundations (GH-900)",
    org: "Verified by GitHub",
  },
  {
    icon: BadgeCheck,
    title: "Cisco Networking Fundamentals",
    org: "Verified by Cisco Networking Academy",
  },
  {
    icon: BadgeCheck,
    title: "Distributed Systems (NPTEL)",
    org: "Verified by Ministry of Education, India",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionReveal>
          <h2 className="section-heading neon-text mb-2">
            <span className="text-primary/40 font-mono text-lg mr-2">06.</span>
            Achievements
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-10 max-w-xs" />
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {achievements.map((item) => (
            <SectionReveal key={item.title}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass hover-neon-glow rounded-xl p-6 h-full group"
              >
                <div className="p-2 rounded-lg bg-primary/10 inline-block mb-3 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-accent text-xs font-mono mb-2">{item.org}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <h2 className="section-heading neon-text mb-2">
            <span className="text-primary/40 font-mono text-lg mr-2">07.</span>
            Certifications
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-10 max-w-xs" />
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((item) => (
            <SectionReveal key={item.title}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="glass hover-neon-glow rounded-xl p-6 h-full group"
              >
                <div className="p-2 rounded-lg bg-neon-purple/10 inline-block mb-3 group-hover:bg-neon-purple/20 transition-colors">
                  <item.icon className="w-6 h-6 text-neon-purple" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-accent text-xs font-mono">{item.org}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
