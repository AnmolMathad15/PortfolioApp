import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    institution: "Jain College of Engineering and Technology (VTU)",
    duration: "2023–2027",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    score: "CGPA: 8.39",
  },
  {
    institution: "KLE Prerana Residential College",
    duration: "2021–2023",
    degree: "Higher Secondary Education (PUC)",
    score: "Percentage: 91.7%",
  },
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
            Academic{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00C8FF, #6EE7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Education
            </span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-px"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,200,255,0.3), rgba(0,200,255,0.3), transparent)",
            }}
          />

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
                {/* Timeline icon dot */}
                <div
                  className="absolute left-0 md:left-2 w-12 h-12 rounded-full flex items-center justify-center z-10"
                  style={{
                    background: "rgba(9,18,33,0.9)",
                    border: "2px solid #00C8FF",
                    boxShadow: "0 0 16px rgba(0,200,255,0.35)",
                  }}
                >
                  <GraduationCap size={20} style={{ color: "#00C8FF" }} />
                </div>

                <div
                  className="glass-card rounded-2xl p-6 md:p-8 group"
                  data-testid={`card-education-${index}`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    </div>
                    <span
                      className="inline-flex px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap shrink-0"
                      style={{
                        background: "rgba(0,200,255,0.08)",
                        border: "1px solid rgba(0,200,255,0.2)",
                        color: "#00C8FF",
                      }}
                    >
                      {edu.duration}
                    </span>
                  </div>
                  <span
                    className="inline-flex font-mono font-semibold px-4 py-2 rounded-lg text-sm"
                    style={{
                      background: "rgba(0,200,255,0.06)",
                      border: "1px solid rgba(0,200,255,0.15)",
                      color: "#35D6FF",
                    }}
                  >
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
