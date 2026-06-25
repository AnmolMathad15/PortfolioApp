import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "Top 8 Finalist",
    event: "Hack'O'Clock 2026",
    organization: "KLE Institute of Technology",
    icon: Trophy,
  },
  {
    title: "Finalist",
    event: "HackArena 2026",
    organization: "Jain College of Engineering and Technology",
    icon: Medal,
  },
  {
    title: "Participant",
    event: "HackFusion",
    organization: "AGM College, Varur",
    icon: Star,
  },
  {
    title: "Final Round",
    event: "AI Prompt Battle",
    organization: "Tech Symposium",
    icon: Award,
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Awards &{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00C8FF, #6EE7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Achievements
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 flex items-start gap-5 group relative overflow-hidden"
              data-testid={`card-achievement-${index}`}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(0,200,255,0.04) 0%, transparent 60%)",
                }}
              />
              <div
                className="p-4 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(0,200,255,0.08)",
                  border: "1px solid rgba(0,200,255,0.2)",
                  boxShadow: "0 0 16px rgba(0,200,255,0.1)",
                }}
              >
                <ach.icon size={28} style={{ color: "#00C8FF" }} />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">
                  {ach.title}
                </h3>
                <p
                  className="font-medium mb-2"
                  style={{ color: "#00C8FF" }}
                >
                  {ach.event}
                </p>
                <p className="text-sm text-muted-foreground">{ach.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
