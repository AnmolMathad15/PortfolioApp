import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Code2, Lightbulb, Laptop, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import anmolPhoto from "@assets/111_1782308842318.png";

const ROLES = [
  "Computer Science Engineer",
  "Full Stack Developer",
  "UI/UX Designer",
  "AI Application Enthusiast"
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-block w-max">
              <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium">
                👋 Hello, I'm
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-glow-blue to-accent drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              ANMOL MATHAD
            </h1>
            
            <div className="h-8 sm:h-10">
              <h2 className="text-xl sm:text-2xl font-mono text-muted-foreground">
                <span className="text-primary">&gt;</span> {text}
                <span className="animate-pulse">_</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I am passionate about creating engaging and user-friendly interfaces, designing prototypes, and developing scalable solutions that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all rounded-full px-8"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore My Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-primary/50 text-foreground hover:bg-primary/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let's Connect
              </Button>
            </div>
            
            <div className="flex gap-4 pt-6">
              {[
                { icon: FaGithub, href: "https://github.com/anmol-mathad" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/anmolmathad" },
                { icon: FaInstagram, href: "https://instagram.com/life_of_anmol" },
                { icon: FaEnvelope, href: "mailto:anmolmathad@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-card/50 border border-border/50 p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all backdrop-blur-sm"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full opacity-20 blur-3xl animate-pulse"></div>
              
              <div className="absolute inset-2 rounded-full border border-primary/30 shadow-[0_0_50px_rgba(59,130,246,0.2)] bg-card overflow-hidden">
                <img 
                  src={anmolPhoto} 
                  alt="Anmol Mathad" 
                  className="w-full h-full object-cover object-top mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>

              {/* Doodles */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 bg-card/80 backdrop-blur-sm p-3 rounded-xl border border-primary/20 text-primary shadow-lg"
              >
                <Code2 size={24} />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-6 bg-card/80 backdrop-blur-sm p-3 rounded-xl border border-accent/20 text-accent shadow-lg"
              >
                <Lightbulb size={24} />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 -left-8 bg-card/80 backdrop-blur-sm p-3 rounded-xl border border-primary/20 text-primary shadow-lg"
              >
                <Laptop size={24} />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }} 
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 right-4 bg-card/80 backdrop-blur-sm p-3 rounded-xl border border-accent/20 text-accent shadow-lg"
              >
                <LayoutTemplate size={24} />
              </motion.div>

              <motion.div 
                animate={{ opacity: [0.5, 1, 0.5] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="font-mono text-sm text-muted-foreground italic">Code Create Repeat</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
