import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { SectionReveal } from "./AboutSection";
import { Mail, Github, Linkedin, Code, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    const name = (form.get("name") as string)?.trim();
    const email = (form.get("email") as string)?.trim();
    const message = (form.get("message") as string)?.trim();

    if (!name || name.length < 2) errs.name = "Name must be at least 2 characters";
    if (!email || !/^[\w\.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) 
      errs.email = "Please enter a valid email";
    if (!message || message.length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElem = e.currentTarget;
    const formDataObj = new FormData(formElem);
    const errs = validate(formDataObj);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("https://formspree.io/f/mbdzvrqw", {
        method: "POST",
        body: formDataObj,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        toast.success("Message sent! I'll get back to you soon.", {
          description: "Thanks for reaching out!",
        });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error("Oops! Something went wrong.", {
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Connection error", {
        description: "Please check your internet connection.",
      });
    } finally {
      setLoading(false);
    }
  };

  const getInputClasses = (hasError: boolean) => `w-full px-4 py-3 rounded-lg font-sans bg-background/50 border backdrop-blur-sm transition-all focus:outline-none drop-shadow ${
    hasError 
      ? "border-red-500/50 focus:border-red-500 focus:shadow-lg focus:shadow-red-500/20"
      : "border-primary/30 focus:border-primary/60 focus:shadow-lg focus:shadow-primary/20"
  }`;

  const getColorClass = (color: string) => {
    if (color === "primary") return "text-primary";
    if (color === "accent") return "text-accent";
    return "text-neon-purple";
  };

  const getColorFaded = (color: string) => {
    if (color === "primary") return "text-primary/60";
    if (color === "accent") return "text-accent/60";
    return "text-neon-purple/60";
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "parthasardhireddyma@gmail.com",
      href: "mailto:parthasardhireddyma@gmail.com",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Parthu214",
      href: "https://github.com/Parthu214",
      color: "accent"
    },
    {
      icon: Code,
      label: "LeetCode",
      value: "leetcode.com/u/parthasaradhi-reddy",
      href: "https://leetcode.com/u/parthasaradhi-reddy",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/parthasaradhi-reddy",
      href: "https://linkedin.com/in/parthasaradhi-reddy",
      color: "neon-purple"
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-20 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <SectionReveal className="mb-16">
          <h2 className="section-heading neon-text mb-2 drop-shadow-lg">
            <span className="text-primary/40 font-mono text-lg mr-2">02.</span>
            Get In Touch
          </h2>
          <div className="h-1 bg-gradient-to-r from-primary via-accent to-transparent mb-8 max-w-xs rounded-full shadow-lg shadow-primary/20" />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <SectionReveal>
            <motion.div whileHover={{ borderColor: "rgba(0, 255, 136, 0.5)" }} className="relative group h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative glass rounded-2xl p-8 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 backdrop-blur-xl h-full flex flex-col justify-between">
                <div className="absolute top-4 right-4 text-primary/30 font-mono text-3xl group-hover:text-primary/50 transition-colors">
                  {"{"}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 drop-shadow">Let's Connect!</h3>
                  <p className="text-foreground/80 leading-relaxed mb-8 drop-shadow">I'm always open to new opportunities, collaborations, or just a friendly chat about tech and security. Feel free to reach out!</p>

                  <div className="space-y-4">
                    {contactLinks.map((link) => (
                      <motion.a 
                        key={link.label} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        whileHover={{ x: 4 }} 
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-all duration-200 group/link"
                      >
                        <div className={`w-5 h-5 mt-1 ${getColorClass(link.color)} group-hover/link:scale-110 transition-transform`}>
                          <link.icon className="w-full h-full" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-semibold text-sm ${getColorClass(link.color)}`}>
                            {link.label}
                          </p>
                          <p className="text-foreground/70 text-xs truncate">{link.value}</p>
                          <p className={`${getColorFaded(link.color)} text-xs mt-1 font-mono`}>
                            Check it out →
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="text-primary/30 font-mono text-3xl group-hover:text-primary/50 transition-colors mt-6">
                  {"/}"}
                </div>
              </div>
            </motion.div>
          </SectionReveal>

          <SectionReveal>
            <motion.div whileHover={{ borderColor: "rgba(0, 255, 136, 0.5)" }} className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/30 via-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="relative glass rounded-2xl p-8 border border-primary/20 group-hover:border-primary/40 transition-all duration-300 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-foreground mb-6 drop-shadow">Send Me a Message</h3>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-mono text-foreground/80 mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Your name" 
                        className={getInputClasses(!!errors.name)} 
                        disabled={loading} 
                      />
                      {errors.name && (
                        <p className="text-red-500/80 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-foreground/80 mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="your@email.com" 
                        className={getInputClasses(!!errors.email)} 
                        disabled={loading} 
                      />
                      {errors.email && (
                        <p className="text-red-500/80 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-mono text-foreground/80 mb-2">Message</label>
                      <textarea 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Your message..." 
                        rows={5} 
                        className={getInputClasses(!!errors.message)} 
                        disabled={loading} 
                      />
                      {errors.message && (
                        <p className="text-red-500/80 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }} 
                      whileTap={{ scale: 0.98 }} 
                      type="submit" 
                      disabled={loading} 
                      className="w-full px-6 py-3 rounded-lg font-mono text-sm font-semibold text-background bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
