import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { Code2, Lightbulb, Laptop, LayoutTemplate } from "lucide-react";
import { Button } from "@/components/ui/button";
import anmolPhoto from "@assets/WhatsApp_Image_2026-02-28_at_10.13.00_AM_1782387184550.jpeg";

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
              <span
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(0,200,255,0.08)",
                  border: "1px solid rgba(0,200,255,0.2)",
                  color: "#00C8FF",
                }}
              >
                👋 Hello, I'm
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #00C8FF 50%, #35D6FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 20px rgba(0,200,255,0.25))",
              }}
            >
              ANMOL MATHAD
            </h1>

            <div className="h-8 sm:h-10">
              <h2 className="text-xl sm:text-2xl font-mono text-muted-foreground">
                <span style={{ color: "#00C8FF" }}>&gt;</span> {text}
                <span className="animate-pulse" style={{ color: "#00C8FF" }}>_</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              I am passionate about creating engaging and user-friendly interfaces, designing prototypes,
              and developing scalable solutions that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 font-semibold neon-btn-glow"
                style={{
                  background: "linear-gradient(135deg, #00C8FF, #35D6FF)",
                  color: "#050816",
                  border: "none",
                }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-explore-work"
              >
                Explore My Work
              </Button>
              <Button
                size="lg"
                className="rounded-full px-8"
                style={{
                  background: "rgba(0,200,255,0.06)",
                  border: "1px solid rgba(0,200,255,0.3)",
                  color: "#00C8FF",
                }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="button-lets-connect"
              >
                Let's Connect
              </Button>
            </div>

            <div className="flex gap-4 pt-6">
              {[
                { icon: FaGithub, href: "https://github.com/AnmolMathad15", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/anmol-mathad-99a90b282", label: "LinkedIn" },
                { icon: FaInstagram, href: "https://instagram.com/anmol_mathad_15", label: "Instagram" },
                { icon: FaEnvelope, href: "mailto:anmolmathad@gmail.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="p-3 rounded-full transition-all"
                  style={{
                    background: "rgba(9,18,33,0.7)",
                    border: "1px solid rgba(0,200,255,0.15)",
                    color: "#94a3b8",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00C8FF";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.4)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(0,200,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.15)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Profile photo with neon spinner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end items-center"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Ambient glow behind */}
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background: "radial-gradient(circle, rgba(0,200,255,0.18) 0%, rgba(0,200,255,0.06) 50%, transparent 70%)",
                  filter: "blur(20px)",
                  transform: "scale(1.15)",
                }}
              />

              {/* Outer slow-spinning neon arc (thick, prominent) */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow"
                viewBox="0 0 200 200"
                style={{ filter: "drop-shadow(0 0 8px rgba(0,200,255,0.9))" }}
              >
                <defs>
                  <linearGradient id="spinnerGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00C8FF" stopOpacity="0" />
                    <stop offset="40%" stopColor="#00C8FF" stopOpacity="0.6" />
                    <stop offset="75%" stopColor="#35D6FF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#6EE7FF" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100" cy="100" r="94"
                  fill="none"
                  stroke="url(#spinnerGrad1)"
                  strokeWidth="3"
                  strokeDasharray="440"
                  strokeDashoffset="110"
                  strokeLinecap="round"
                />
              </svg>

              {/* Inner counter-spinning neon arc (thinner) */}
              <svg
                className="absolute inset-0 w-full h-full animate-spin-slow-reverse"
                viewBox="0 0 200 200"
                style={{
                  inset: "8px",
                  position: "absolute",
                  width: "calc(100% - 16px)",
                  height: "calc(100% - 16px)",
                  filter: "drop-shadow(0 0 5px rgba(0,200,255,0.6))",
                }}
              >
                <defs>
                  <linearGradient id="spinnerGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6EE7FF" stopOpacity="0" />
                    <stop offset="50%" stopColor="#00C8FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#35D6FF" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100" cy="100" r="93"
                  fill="none"
                  stroke="url(#spinnerGrad2)"
                  strokeWidth="1.5"
                  strokeDasharray="330"
                  strokeDashoffset="220"
                  strokeLinecap="round"
                />
              </svg>

              {/* Profile image — always full color */}
              <div
                className="absolute rounded-full overflow-hidden"
                style={{
                  inset: "14px",
                  border: "1px solid rgba(0,200,255,0.25)",
                  boxShadow: "0 0 30px rgba(0,200,255,0.15), inset 0 0 20px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={anmolPhoto}
                  alt="Anmol Mathad"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
              </div>

              {/* Floating doodle chips */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 p-3 rounded-xl"
                style={{
                  background: "rgba(9,18,33,0.85)",
                  border: "1px solid rgba(0,200,255,0.2)",
                  boxShadow: "0 0 16px rgba(0,200,255,0.15)",
                  color: "#00C8FF",
                }}
              >
                <Code2 size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-6 p-3 rounded-xl"
                style={{
                  background: "rgba(9,18,33,0.85)",
                  border: "1px solid rgba(0,200,255,0.2)",
                  boxShadow: "0 0 16px rgba(0,200,255,0.15)",
                  color: "#35D6FF",
                }}
              >
                <Lightbulb size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-1/4 -left-8 p-3 rounded-xl"
                style={{
                  background: "rgba(9,18,33,0.85)",
                  border: "1px solid rgba(0,200,255,0.2)",
                  boxShadow: "0 0 16px rgba(0,200,255,0.15)",
                  color: "#00C8FF",
                }}
              >
                <Laptop size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 right-4 p-3 rounded-xl"
                style={{
                  background: "rgba(9,18,33,0.85)",
                  border: "1px solid rgba(0,200,255,0.2)",
                  boxShadow: "0 0 16px rgba(0,200,255,0.15)",
                  color: "#6EE7FF",
                }}
              >
                <LayoutTemplate size={24} />
              </motion.div>

              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
              >
                <span className="font-mono text-sm italic" style={{ color: "#00C8FF", textShadow: "0 0 10px rgba(0,200,255,0.5)" }}>
                  Code Create Repeat
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
