import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const EXPERIENCES = [
  {
    title: "Java Full Stack Developer Intern",
    company: "StudyEcart Technologies Pvt Ltd",
    location: "Remote",
    duration: "June 2026 – Present",
    tech: ["Java", "Spring Boot", "React", "JavaScript", "Node.js", "Bootstrap", "MySQL", "Postman", "Git"],
    responsibilities: [
      "Working in a live industry internship environment with collaborative workflows.",
      "Developing applications using Java, Spring Boot, React and Node.js.",
      "Testing APIs with Postman and managing MySQL databases.",
    ],
    link: "https://www.studyecart.in",
    logoText: "SE",
  },
  {
    title: "Frontend AI Engineer",
    company: "FlyRank AI",
    location: "Remote",
    duration: "Jan 2025 – May 2025",
    tech: ["React", "AI Integration", "Modern UI Systems"],
    responsibilities: [
      "Worked on AI-powered frontend experiences and modern UI systems.",
      "Collaborated with the AI team to build seamless AI-integrated applications.",
      "Improved user experience through modern UI/UX practices and component optimization.",
    ],
    link: "https://flyrank.ai",
    logoText: "FR",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Professional{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00C8FF, #6EE7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,200,255,0.3), rgba(0,200,255,0.3), transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <div className="space-y-12 relative">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-10"
                  style={{
                    background: "rgba(9,18,33,0.9)",
                    border: "2px solid #00C8FF",
                    boxShadow: "0 0 20px rgba(0,200,255,0.4)",
                  }}
                >
                  <Briefcase size={20} style={{ color: "#00C8FF" }} />
                </div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div
                    className="glass-card rounded-2xl p-6 md:p-8 group relative overflow-hidden"
                    data-testid={`card-experience-${index}`}
                  >
                    <div
                      className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)",
                        transform: "translate(30%, -30%)",
                      }}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0"
                          style={{
                            background: "linear-gradient(135deg, rgba(0,200,255,0.15), rgba(0,200,255,0.05))",
                            border: "1px solid rgba(0,200,255,0.2)",
                            color: "#00C8FF",
                          }}
                        >
                          {exp.logoText}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-sm font-medium transition-colors"
                            style={{ color: "#00C8FF" }}
                            data-testid={`link-company-${index}`}
                          >
                            {exp.company} <ExternalLink size={12} />
                          </a>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mb-6 font-mono">
                        <span>{exp.duration}</span>
                        <span className="hidden sm:inline opacity-40">•</span>
                        <span>{exp.location}</span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                            <span className="mt-1 shrink-0" style={{ color: "#00C8FF" }}>▹</span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md"
                            style={{
                              background: "rgba(0,200,255,0.05)",
                              border: "1px solid rgba(0,200,255,0.12)",
                              color: "#94a3b8",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
