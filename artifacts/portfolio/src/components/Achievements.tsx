import { motion } from "framer-motion";
import { Trophy, Medal, Star, Award } from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "Top 8 Finalist",
    event: "Hack'O'Clock 2026",
    organization: "KLE Institute of Technology",
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20"
  },
  {
    title: "Finalist",
    event: "HackArena 2026",
    organization: "Jain College of Engineering and Technology",
    icon: Medal,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    title: "Participant",
    event: "HackFusion",
    organization: "AGM College, Varur",
    icon: Star,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20"
  },
  {
    title: "Final Round",
    event: "AI Prompt Battle",
    organization: "Tech Symposium",
    icon: Award,
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "border-green-500/20"
  }
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
            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Achievements</span>
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
              className={`flex items-start gap-5 p-6 bg-card/40 backdrop-blur-md rounded-2xl border ${ach.border} hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group`}
            >
              <div className={`p-4 rounded-xl ${ach.bg} ${ach.color} group-hover:scale-110 transition-transform duration-300`}>
                <ach.icon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-foreground">{ach.title}</h3>
                <p className="text-accent font-medium mb-2">{ach.event}</p>
                <p className="text-sm text-muted-foreground">{ach.organization}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
