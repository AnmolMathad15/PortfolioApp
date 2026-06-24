import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      
      let currentSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 py-4 backdrop-blur-md border-b border-border/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("#home")}>
          <span className="font-mono text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            AM
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-1 border border-border/50 bg-card/30 backdrop-blur-sm rounded-full px-2 py-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? "bg-primary/20 text-primary shadow-[inset_0_0_10px_rgba(59,130,246,0.2)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button
            variant="outline"
            className="rounded-full border-primary/50 text-primary hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
            onClick={() => {}}
          >
            Download Resume
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 py-4 px-4 flex flex-col gap-4 shadow-2xl"
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollTo(item.href)}
              className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === item.href.substring(1)
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
          <Button
            variant="outline"
            className="mt-4 w-full rounded-full border-primary/50 text-primary hover:bg-primary/10"
          >
            Download Resume
          </Button>
        </motion.div>
      )}
    </motion.nav>
  );
}
