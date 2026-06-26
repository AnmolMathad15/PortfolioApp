import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { CursorGlow } from "@/components/effects/CursorGlow";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { ParticlesBackground } from "@/components/effects/ParticlesBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Hackathons } from "@/components/Hackathons";
import { TechMarquee } from "@/components/TechMarquee";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-primary/90 hover:scale-110 transition-all border border-primary/50"
          aria-label="Back to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 neon-grid-bg">
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <ParticlesBackground />
      
      <Navbar />
      
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <TechMarquee />
        <Experience />
        <Achievements />
        <Education />
        <Certifications />
        <Hackathons />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
