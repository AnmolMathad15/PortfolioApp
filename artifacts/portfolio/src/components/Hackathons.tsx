import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon, Users, Zap, Search, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const HACKATHONS = [
  {
    title: "Hack'O'Clock 2026",
    organization: "KLE Institute of Technology",
    achievement: "Top 8 Finalist Team",
    description: "Participated in an 18-hour national hackathon where our team developed innovative solutions under time constraints.",
    features: ["Team collaboration", "Problem solving", "Rapid prototyping", "Pitch presentation"]
  },
  {
    title: "HackArena 2026",
    organization: "Jain College of Engineering and Technology",
    achievement: "Finalist Team",
    description: "Worked on innovative ideas and competed among multiple teams. Improved technical skills.",
    features: ["Innovation", "Technical Execution", "Teamwork"]
  },
  {
    title: "HackFusion",
    organization: "AGM College, Varur",
    achievement: "Participant",
    description: "Participated in a collaborative hackathon focused on creativity, innovation, and practical problem-solving.",
    features: ["Creativity", "Practical Solutions", "Collaboration"]
  },
  {
    title: "AI Prompt Battle",
    organization: "Tech Symposium",
    achievement: "Final Round",
    description: "Competed in AI prompting challenges and reached the final round.",
    features: ["Prompt Engineering", "AI Interaction", "Creative Thinking"]
  }
];

export function Hackathons() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="hackathons" className="py-24 relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Hackathon <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Journey</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Learning, collaborating, and building innovative solutions through competitive hackathons.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HACKATHONS.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl overflow-hidden flex flex-col group hover:border-primary/50 transition-colors"
            >
              <div className="p-6 md:p-8 flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{hackathon.title}</h3>
                    <p className="text-sm text-muted-foreground">{hackathon.organization}</p>
                  </div>
                  <div className="inline-flex px-4 py-1.5 bg-accent/10 text-accent font-semibold rounded-full border border-accent/20">
                    {hackathon.achievement}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {hackathon.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {hackathon.features.map((feature, i) => (
                    <span key={i} className="text-xs px-3 py-1.5 bg-background/80 border border-border/50 rounded-lg text-foreground">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div 
                onClick={() => setModalOpen(true)}
                className="h-32 bg-muted/20 border-t border-border/50 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center group/gallery"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/gallery:opacity-100 transition-opacity" />
                <div className="p-3 bg-background/80 rounded-full text-muted-foreground group-hover/gallery:text-primary group-hover/gallery:scale-110 transition-all border border-border/50 mb-2 z-10 shadow-lg">
                  <ImageIcon size={20} />
                </div>
                <span className="text-xs text-muted-foreground font-medium z-10 group-hover/gallery:text-primary transition-colors">View Gallery</span>
                
                {/* Decorative background elements for gallery */}
                <div className="absolute -left-10 top-2 w-20 h-20 bg-background/50 border border-border/50 rounded-lg rotate-12 blur-[1px]"></div>
                <div className="absolute -right-10 top-6 w-24 h-24 bg-background/50 border border-border/50 rounded-lg -rotate-12 blur-[1px]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[70vh] bg-card border border-border/50 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-border/50 flex justify-between items-center bg-background/50">
                <h3 className="font-bold">Hackathon Gallery</h3>
                <Button variant="ghost" size="icon" onClick={() => setModalOpen(false)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-muted/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
                <div className="relative z-10 flex flex-col items-center text-center max-w-md">
                  <div className="w-24 h-24 bg-background/80 rounded-full flex items-center justify-center border border-border mb-6 shadow-xl">
                    <ImageIcon size={40} className="text-muted-foreground opacity-50" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Photos Coming Soon</h4>
                  <p className="text-muted-foreground">Gallery images of team collaboration, presentations, and coding sessions will be uploaded here.</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
