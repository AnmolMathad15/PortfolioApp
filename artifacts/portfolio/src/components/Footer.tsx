import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background/80 backdrop-blur-md relative overflow-hidden">
      {/* Marquee */}
      <div className="w-full border-b border-border/50 bg-primary/5 py-4 overflow-hidden flex relative whitespace-nowrap">
        <div className="animate-marquee inline-flex gap-8 text-primary/80 font-bold uppercase tracking-widest text-sm md:text-base opacity-70">
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
        </div>
        <div className="absolute top-0 animate-marquee2 inline-flex gap-8 text-primary/80 font-bold uppercase tracking-widest text-sm md:text-base opacity-70" aria-hidden="true">
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
          <span>Let's connect and build something meaningful together</span>
          <span>•</span>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              AM
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center">
            © 2026 Anmol Mathad. Built with React + TypeScript + Tailwind CSS.
          </p>

          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/AnmolMathad15" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/anmol-mathad-99a90b282" },
              { icon: FaInstagram, href: "https://instagram.com/anmol_mathad_15" },
              { icon: FaEnvelope, href: "mailto:anmolmathad@gmail.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInlineStyle={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 20s linear infinite;
        }
      `}} />
    </footer>
  );
}
