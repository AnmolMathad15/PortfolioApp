import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const HACKATHONS = [
  {
    title: "Hack'O'Clock 2026",
    organization: "KLE Institute of Technology",
    achievement: "Top 8 Finalist Team",
    description: "Participated in an 18-hour national hackathon where our team developed innovative solutions under time constraints.",
    features: ["Team collaboration", "Problem solving", "Rapid prototyping", "Pitch presentation"],
  },
  {
    title: "HackArena 2026",
    organization: "Jain College of Engineering and Technology",
    achievement: "Finalist Team",
    description: "Worked on innovative ideas and competed among multiple teams. Improved technical skills.",
    features: ["Innovation", "Technical Execution", "Teamwork"],
  },
  {
    title: "HackFusion",
    organization: "AGM College, Varur",
    achievement: "Participant",
    description: "Participated in a collaborative hackathon focused on creativity, innovation, and practical problem-solving.",
    features: ["Creativity", "Practical Solutions", "Collaboration"],
  },
  {
    title: "AI Prompt Battle",
    organization: "Tech Symposium",
    achievement: "Final Round",
    description: "Competed in AI prompting challenges and reached the final round.",
    features: ["Prompt Engineering", "AI Interaction", "Creative Thinking"],
  },
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
            Hackathon{" "}
            <span style={{ background: "linear-gradient(90deg, #00C8FF, #6EE7FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Journey
            </span>
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
          {HACKATHONS.map((h, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group"
              data-testid={`card-hackathon-${index}`}
            >
              <div className="p-6 md:p-8 flex-1">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {h.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{h.organization}</p>
                  </div>
                  <span
                    className="inline-flex px-4 py-1.5 text-sm font-semibold rounded-full shrink-0"
                    style={{
                      background: "rgba(0,200,255,0.08)",
                      border: "1px solid rgba(0,200,255,0.2)",
                      color: "#00C8FF",
                    }}
                  >
                    {h.achievement}
                  </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{h.description}</p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {h.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-lg"
                      style={{
                        background: "rgba(0,200,255,0.05)",
                        border: "1px solid rgba(0,200,255,0.1)",
                        color: "#94a3b8",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery strip */}
              <div
                onClick={() => setModalOpen(true)}
                className="h-28 cursor-pointer relative overflow-hidden flex flex-col items-center justify-center group/gallery"
                style={{ borderTop: "1px solid rgba(0,200,255,0.1)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(0,200,255,0.04)" }}
                />
                <div
                  className="p-3 rounded-full mb-2 z-10 transition-all duration-300 group-hover/gallery:scale-110"
                  style={{
                    background: "rgba(9,18,33,0.8)",
                    border: "1px solid rgba(0,200,255,0.2)",
                    color: "rgba(0,200,255,0.6)",
                    boxShadow: "0 0 12px rgba(0,0,0,0.3)",
                  }}
                >
                  <ImageIcon size={18} />
                </div>
                <span
                  className="text-xs font-medium z-10 transition-colors duration-300 group-hover/gallery:text-primary"
                  style={{ color: "rgba(0,200,255,0.5)" }}
                >
                  View Gallery
                </span>
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
              className="fixed inset-0 z-50"
              style={{ background: "rgba(5,8,22,0.9)", backdropFilter: "blur(10px)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl h-[70vh] rounded-2xl z-50 overflow-hidden flex flex-col"
              style={{
                background: "rgba(9,18,33,0.95)",
                border: "1px solid rgba(0,200,255,0.2)",
                boxShadow: "0 0 60px rgba(0,200,255,0.1), 0 24px 48px rgba(0,0,0,0.7)",
                backdropFilter: "blur(24px)",
              }}
            >
              <div
                className="p-4 flex justify-between items-center"
                style={{ borderBottom: "1px solid rgba(0,200,255,0.1)" }}
              >
                <h3 className="font-bold text-white">Hackathon Gallery</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setModalOpen(false)}
                  style={{ color: "#94a3b8" }}
                  data-testid="button-close-gallery"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at center, rgba(0,200,255,0.05) 0%, transparent 70%)" }}
                />
                <div className="relative z-10 flex flex-col items-center text-center max-w-md">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(9,18,33,0.8)",
                      border: "1px solid rgba(0,200,255,0.2)",
                      boxShadow: "0 0 20px rgba(0,200,255,0.1)",
                    }}
                  >
                    <ImageIcon size={36} style={{ color: "rgba(0,200,255,0.4)" }} />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-white">Photos Coming Soon</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Gallery images of team collaboration, presentations, and coding sessions will be uploaded here.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
