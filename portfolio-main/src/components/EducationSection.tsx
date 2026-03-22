import { SectionReveal } from "./AboutSection";
import { GraduationCap, BookOpen } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <SectionReveal>
          <h2 className="section-heading neon-text mb-2">
            <span className="text-primary/40 font-mono text-lg mr-2">02.</span>
            Education
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-10 max-w-xs" />
        </SectionReveal>

        <div className="space-y-6">
          <SectionReveal>
            <div className="glass hover-neon-glow rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    B.E in Computer Science (Cyber Security)
                  </h3>
                  <p className="text-accent font-mono text-sm mt-1">Muthayammal Engineering College</p>
                  <p className="text-muted-foreground text-sm mt-1">2023 — 2027 | CGPA: 9.42</p>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-primary/60" />
                      <span className="text-sm font-mono text-muted-foreground">Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                      "Data Structures & Algorithms",
                      "Computer Networks",
                      "Operating Systems",
                      "Cryptography",
                      "Web Technologies",
                      "Database Management",
                      "Information Security"].
                      map((course) =>
                      <span
                        key={course}
                        className="glass rounded-md px-3 py-1 text-xs font-mono text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                        
                          {course}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="glass hover-neon-glow rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    Intermediate (+2) — MPC (Maths, Physics, Chemistry)
                  </h3>
                  <p className="text-accent font-mono text-sm mt-1">Sri Chaitanya Junior College</p>
                  <p className="text-muted-foreground text-sm mt-1">2021 — 2023 | Marks: 975/1000</p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="glass hover-neon-glow rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    SSC (10th Standard)
                  </h3>
                  <p className="text-accent font-mono text-sm mt-1">Vijayanikethan High School</p>
                  <p className="text-muted-foreground text-sm mt-1">2020 — 2021 | Marks: 600/600</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>);

};

export default EducationSection;