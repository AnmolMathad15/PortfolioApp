import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Eye, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    title: "NextStop JGI",
    subtitle: "Real-Time Bus Tracking Platform",
    tech: ["React", "TypeScript", "Node.js", "WebSockets"],
    description: "Built a real-time bus tracking system with live location updates and role-based dashboards for students, drivers, and administrators.",
    fullDescription: "NextStop JGI is a comprehensive campus transportation solution. It utilizes WebSockets for sub-second location updates, ensuring students never miss their bus. The platform includes dedicated interfaces: a mobile-optimized view for drivers to broadcast location, an admin panel for route management, and a student portal for live tracking and schedule viewing.",
    link: "#",
    github: "#",
  },
  {
    title: "ResolveAI",
    subtitle: "AI Customer Complaint Resolution Agent",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Hugging Face"],
    description: "Built an AI-powered complaint resolution platform using NLP models for sentiment analysis and complaint classification.",
    fullDescription: "ResolveAI streamlines customer support by automatically triaging incoming tickets. Leveraging custom-tuned Hugging Face models, it performs sentiment analysis to prioritize angry customers and categorizes complaints to route them to the correct department. The Next.js dashboard provides support agents with AI-generated suggested responses.",
    link: "#",
    github: "#",
  },
  {
    title: "NeuroVisionAI",
    subtitle: "Real-Time Object Detection System",
    tech: ["Python", "PyTorch", "YOLOv8"],
    description: "Developed a real-time object detection system trained using the COCO dataset on Google Colab GPU.",
    fullDescription: "A highly optimized computer vision pipeline capable of detecting over 80 classes of objects in real-time video streams. The model was fine-tuned using PyTorch and YOLOv8 architecture, achieving high mAP scores while maintaining inference speeds suitable for edge deployment.",
    link: "#",
    github: "#",
  },
  {
    title: "JCET Hub",
    subtitle: "Smart Campus Management Platform",
    tech: ["Node.js", "Express.js", "PostgreSQL", "WebSockets"],
    description: "Built a smart campus platform with attendance management, event handling and role-based dashboards.",
    fullDescription: "A centralized hub for campus operations. Features include real-time attendance tracking via QR codes, an event management system with ticketing, and specialized dashboards for faculty and students. The backend is built on a robust PostgreSQL schema with Express.js handling REST APIs and WebSockets for live notifications.",
    link: "#",
    github: "#",
  },
  {
    title: "CodeInsight",
    subtitle: "AI Code Review Platform",
    tech: ["JavaScript", "AI Integration"],
    description: "Built an AI-powered code review system with AutoFix and multimodal debugging support.",
    fullDescription: "CodeInsight acts as an automated senior developer. It analyzes pull requests, suggests optimizations, and can even automatically generate fix commits for common anti-patterns. It supports multiple languages and integrates directly into the Git workflow.",
    link: "#",
    github: "#",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #00C8FF, #6EE7FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A selection of my recent work in web development, AI, and system architecture.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-project-${index}`}
            >
              {/* Preview area */}
              <div
                className="h-44 relative overflow-hidden flex items-center justify-center"
                style={{ borderBottom: "1px solid rgba(0,200,255,0.1)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, rgba(0,200,255,0.08) 0%, rgba(0,200,255,0.02) 100%)" }}
                />
                <Layout
                  className="w-14 h-14 transition-all duration-300 group-hover:scale-110"
                  style={{ color: "rgba(0,200,255,0.2)" }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                  style={{ background: "rgba(5,8,22,0.75)", backdropFilter: "blur(4px)" }}
                >
                  <div
                    className="p-3 rounded-full"
                    style={{
                      background: "rgba(0,200,255,0.15)",
                      border: "1px solid rgba(0,200,255,0.3)",
                      color: "#00C8FF",
                    }}
                  >
                    <Eye size={20} />
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-1 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: "#35D6FF" }}>
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{
                        background: "rgba(0,200,255,0.06)",
                        border: "1px solid rgba(0,200,255,0.12)",
                        color: "#94a3b8",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50"
              style={{ background: "rgba(5,8,22,0.85)", backdropFilter: "blur(8px)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl rounded-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
              style={{
                background: "rgba(9,18,33,0.95)",
                border: "1px solid rgba(0,200,255,0.2)",
                boxShadow: "0 0 60px rgba(0,200,255,0.12), 0 24px 48px rgba(0,0,0,0.7)",
                backdropFilter: "blur(24px)",
              }}
            >
              <div
                className="h-44 sm:h-56 relative flex items-center justify-center shrink-0"
                style={{ borderBottom: "1px solid rgba(0,200,255,0.1)" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(135deg, rgba(0,200,255,0.1) 0%, rgba(0,200,255,0.02) 100%)" }}
                />
                <Layout className="w-20 h-20" style={{ color: "rgba(0,200,255,0.15)" }} />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full transition-all"
                  style={{
                    background: "rgba(5,8,22,0.7)",
                    border: "1px solid rgba(0,200,255,0.2)",
                    color: "#94a3b8",
                  }}
                  data-testid="button-close-modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-white">{selectedProject.title}</h2>
                <p className="font-medium mb-6" style={{ color: "#00C8FF" }}>{selectedProject.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{selectedProject.fullDescription}</p>

                <h4
                  className="text-xs font-semibold uppercase tracking-wider mb-3"
                  style={{ color: "rgba(0,200,255,0.6)" }}
                >
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(0,200,255,0.08)",
                        border: "1px solid rgba(0,200,255,0.2)",
                        color: "#00C8FF",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className="flex flex-wrap gap-4 pt-4"
                  style={{ borderTop: "1px solid rgba(0,200,255,0.1)" }}
                >
                  <Button
                    className="rounded-full gap-2 neon-btn-glow"
                    style={{ background: "linear-gradient(135deg, #00C8FF, #35D6FF)", color: "#050816", border: "none" }}
                    data-testid="button-live-demo"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full gap-2"
                    style={{ borderColor: "rgba(0,200,255,0.3)", color: "#00C8FF" }}
                    data-testid="button-source-code"
                  >
                    <Github size={16} /> Source Code
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
