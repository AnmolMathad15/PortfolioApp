import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    institution: "Jain College of Engineering and Technology (VTU)",
    duration: "2023–2027",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    score: "CGPA: 8.39"
  },
  {
    institution: "KLE Prerana Residential College",
    duration: "2021–2023",
    degree: "Higher Secondary Education (PUC)",
    score: "Percentage: 91.7%"
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Education</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border/50"></div>

          <div className="space-y-12 relative">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-16 md:pl-24"
              >
                <div className="absolute left-0 md:left-2 transform w-12 h-12 bg-card border border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                  <GraduationCap size={20} className="text-primary" />
                </div>

                <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{edu.degree}</h3>
                      <p className="text-lg text-muted-foreground mt-1">{edu.institution}</p>
                    </div>
                    <div className="inline-flex px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20 whitespace-nowrap">
                      {edu.duration}
                    </div>
                  </div>
                  <p className="inline-flex font-mono text-accent font-semibold px-4 py-2 bg-accent/10 rounded-lg">
                    {edu.score}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
