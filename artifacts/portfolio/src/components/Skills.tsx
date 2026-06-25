import { motion } from "framer-motion";
import { Code, Database, Layout, PenTool, Cpu, Server } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Spring Boot"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "AI / ML",
    icon: Cpu,
    skills: ["PyTorch", "Hugging Face", "YOLOv8"],
  },
  {
    title: "Tools & Core CS",
    icon: PenTool,
    skills: ["Git", "Docker", "Figma", "Canva", "VS Code", "Postman", "OOP", "Data Structures", "DBMS"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00C8FF, #6EE7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Arsenal
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills, tools, and core competencies.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              data-testid={`card-skill-${index}`}
            >
              {/* Subtle top-left corner glow on hover */}
              <div
                className="absolute top-0 left-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 70%)",
                  transform: "translate(-40%, -40%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="p-3 rounded-xl transition-all duration-300"
                    style={{
                      background: "rgba(0,200,255,0.08)",
                      border: "1px solid rgba(0,200,255,0.15)",
                    }}
                  >
                    <category.icon
                      className="w-6 h-6 transition-colors duration-300 group-hover:text-primary"
                      style={{ color: "#00C8FF" }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 text-sm rounded-full transition-all duration-200 cursor-default"
                      style={{
                        background: "rgba(0,200,255,0.05)",
                        border: "1px solid rgba(0,200,255,0.12)",
                        color: "#94a3b8",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,200,255,0.12)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.3)";
                        (e.currentTarget as HTMLElement).style.color = "#00C8FF";
                        (e.currentTarget as HTMLElement).style.textShadow = "0 0 8px rgba(0,200,255,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(0,200,255,0.05)";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.12)";
                        (e.currentTarget as HTMLElement).style.color = "#94a3b8";
                        (e.currentTarget as HTMLElement).style.textShadow = "none";
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
