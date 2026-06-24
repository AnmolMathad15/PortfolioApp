import { motion } from "framer-motion";
import { Code, Database, Layout, PenTool, Cpu, Server } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript"],
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "group-hover:border-blue-500/50"
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React"],
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "group-hover:border-purple-500/50"
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Spring Boot"],
    color: "from-green-500/20 to-green-500/5",
    borderColor: "group-hover:border-green-500/50"
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL"],
    color: "from-yellow-500/20 to-yellow-500/5",
    borderColor: "group-hover:border-yellow-500/50"
  },
  {
    title: "AI / ML",
    icon: Cpu,
    skills: ["PyTorch", "Hugging Face", "YOLOv8"],
    color: "from-red-500/20 to-red-500/5",
    borderColor: "group-hover:border-red-500/50"
  },
  {
    title: "Tools & Core CS",
    icon: PenTool,
    skills: ["Git", "Docker", "Figma", "OOP", "DBMS", "Data Structures"],
    color: "from-teal-500/20 to-teal-500/5",
    borderColor: "group-hover:border-teal-500/50"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
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
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Arsenal</span>
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
              className={`group bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 transition-all duration-300 ${category.borderColor} hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-background/50 rounded-xl border border-border/50 group-hover:bg-background/80 transition-colors">
                    <category.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="px-3 py-1 text-sm bg-background/50 border border-border/50 rounded-full text-muted-foreground group-hover:text-foreground transition-colors hover:bg-primary/10 hover:border-primary/30 hover:text-primary cursor-default"
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
