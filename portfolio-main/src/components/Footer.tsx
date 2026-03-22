import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-muted-foreground flex items-center gap-1">
          Built with <Heart className="w-3 h-3 text-primary" /> by M.A. Parthasaradhi Reddy © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "https://github.com/Parthu214" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/parthasaradhi-reddy" },
            { icon: Mail, href: "mailto:parthasardhireddyma@gmail.com" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors hover:drop-shadow-[0_0_6px_hsl(160,100%,50%,0.5)]"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
