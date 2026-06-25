import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";

import nextstopLogin from "@assets/Screenshot_2026-06-25_173753_1782389493993.png";
import nextstopRoutes from "@assets/Screenshot_2026-06-25_173842_1782389493992.png";
import nextstopMap from "@assets/Screenshot_2026-06-25_173914_1782389493991.png";
import nextstopAlerts from "@assets/Screenshot_2026-06-25_173958_1782389476090.png";

import resolveReadme from "@assets/image_1782389706147.png";
import resolveLanding from "@assets/Screenshot_2026-06-25_174424_1782389721206.png";
import resolvePortal from "@assets/Screenshot_2026-06-25_174546_1782390118352.png";
import resolveChat from "@assets/Screenshot_2026-06-25_174836_1782390118351.png";
import resolveCustomers from "@assets/Screenshot_2026-06-25_174906_1782390118349.png";
import resolveComplaints from "@assets/Screenshot_2026-06-25_174922_1782390118349.png";
import resolveAnalyze from "@assets/Screenshot_2026-06-25_175009_1782390118347.png";
import resolveDashboard from "@assets/Screenshot_2026-06-25_175045_1782390101136.png";

const PROJECTS = [
  {
    title: "NextStop JGI",
    subtitle: "Real-Time Bus Tracking Platform",
    tech: ["React", "TypeScript", "Node.js", "WebSockets"],
    description: "Built a real-time bus tracking system with live location updates and role-based dashboards for students, drivers, and administrators.",
    fullDescription: "NextStop JGI is a comprehensive campus transportation solution. It utilizes WebSockets for sub-second location updates, ensuring students never miss their bus. The platform includes dedicated interfaces: a mobile-optimized view for drivers to broadcast location, an admin panel for route management, and a student portal for live tracking, route selection, and real-time alert notifications.",
    images: [nextstopLogin, nextstopRoutes, nextstopMap, nextstopAlerts],
    imageLabels: ["Student Login", "Route Selection", "Live Map", "Alerts"],
    link: "#",
    github: "https://github.com/AnmolMathad15/Nextstop--JGI",
  },
  {
    title: "ResolveAI",
    subtitle: "AI Customer Complaint Resolution Agent",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "Hugging Face", "Python", "Redis"],
    description: "Built an AI-powered complaint resolution platform using NLP models for sentiment analysis and complaint classification.",
    fullDescription: "ResolveAI streamlines customer support by automatically triaging incoming tickets. Leveraging custom-tuned Hugging Face models (BART, RoBERTa), it performs zero-shot complaint classification and real-time sentiment analysis to prioritize critical cases. A policy engine generates explainable, confidence-scored resolutions and auto-escalates to human agents when needed. Built for Hack'O'Clock 2026.",
    images: [resolveLanding, resolvePortal, resolveChat, resolveComplaints, resolveCustomers, resolveAnalyze, resolveDashboard, resolveReadme],
    imageLabels: ["Landing Page", "Customer Portal", "Submit Complaint", "Complaint Log", "Customers", "AI Analysis", "Dashboard", "README"],
    link: "#",
    github: "https://github.com/AnmolMathad15/AICustomerComplaintResolutionAgent-ResolveAI-Hackoclock",
  },
  {
    title: "NeuroVisionAI",
    subtitle: "Real-Time Object Detection System",
    tech: ["Python", "PyTorch", "YOLOv8"],
    description: "Developed a real-time object detection system trained using the COCO dataset on Google Colab GPU.",
    fullDescription: "A highly optimized computer vision pipeline capable of detecting over 80 classes of objects in real-time video streams. The model was fine-tuned using PyTorch and YOLOv8 architecture, achieving high mAP scores while maintaining inference speeds suitable for edge deployment.",
    images: [],
    imageLabels: [],
    link: "#",
    github: "#",
  },
  {
    title: "JCET Hub",
    subtitle: "Smart Campus Management Platform",
    tech: ["Node.js", "Express.js", "PostgreSQL", "WebSockets"],
    description: "Built a smart campus platform with attendance management, event handling and role-based dashboards.",
    fullDescription: "A centralized hub for campus operations. Features include real-time attendance tracking via QR codes, an event management system with ticketing, and specialized dashboards for faculty and students. The backend is built on a robust PostgreSQL schema with Express.js handling REST APIs and WebSockets for live notifications.",
    images: [],
    imageLabels: [],
    link: "#",
    github: "#",
  },
  {
    title: "CodeInsight",
    subtitle: "AI Code Review Platform",
    tech: ["JavaScript", "AI Integration"],
    description: "Built an AI-powered code review system with AutoFix and multimodal debugging support.",
    fullDescription: "CodeInsight acts as an automated senior developer. It analyzes pull requests, suggests optimizations, and can even automatically generate fix commits for common anti-patterns. It supports multiple languages and integrates directly into the Git workflow.",
    images: [],
    imageLabels: [],
    link: "#",
    github: "#",
  },
];

function ImageCarousel({ images, labels }: { images: string[]; labels: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 3500);
    return () => clearInterval(timer);
  }, [next]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={labels[current]}
          className="absolute inset-0 w-full h-full object-cover object-top"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4 }}
        />
      </AnimatePresence>

      {/* Gradient overlay at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(9,18,33,0.9), transparent)" }}
      />

      {/* Label badge */}
      <div
        className="absolute bottom-2 left-3 text-xs font-medium px-2 py-0.5 rounded"
        style={{
          background: "rgba(0,200,255,0.15)",
          border: "1px solid rgba(0,200,255,0.3)",
          color: "#00C8FF",
        }}
      >
        {labels[current]}
      </div>

      {/* Nav arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all"
        style={{ background: "rgba(9,18,33,0.7)", border: "1px solid rgba(0,200,255,0.2)", color: "#00C8FF" }}
      >
        <ChevronLeft size={14} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all"
        style={{ background: "rgba(9,18,33,0.7)", border: "1px solid rgba(0,200,255,0.2)", color: "#00C8FF" }}
      >
        <ChevronRight size={14} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 right-3 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? "16px" : "5px",
              height: "5px",
              background: i === current ? "#00C8FF" : "rgba(0,200,255,0.3)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ModalCarousel({ images, labels }: { images: string[]; labels: string[] }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ border: "1px solid rgba(0,200,255,0.12)" }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={labels[current]}
          className="w-full object-cover object-top"
          style={{ maxHeight: "360px" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Nav */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: "rgba(9,18,33,0.8)", border: "1px solid rgba(0,200,255,0.25)", color: "#00C8FF" }}
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center"
        style={{ background: "rgba(9,18,33,0.8)", border: "1px solid rgba(0,200,255,0.25)", color: "#00C8FF" }}
      >
        <ChevronRight size={16} />
      </button>

      {/* Label + dots */}
      <div
        className="absolute bottom-0 inset-x-0 flex items-center justify-between px-4 py-2"
        style={{ background: "linear-gradient(to top, rgba(9,18,33,0.9), transparent)" }}
      >
        <span
          className="text-xs font-medium px-2 py-0.5 rounded"
          style={{
            background: "rgba(0,200,255,0.15)",
            border: "1px solid rgba(0,200,255,0.3)",
            color: "#00C8FF",
          }}
        >
          {labels[current]}
        </span>
        <div className="flex gap-1.5 items-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                background: i === current ? "#00C8FF" : "rgba(0,200,255,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

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
                className="h-44 relative overflow-hidden"
                style={{ borderBottom: "1px solid rgba(0,200,255,0.1)" }}
              >
                {project.images.length > 0 ? (
                  <ImageCarousel images={project.images} labels={project.imageLabels} />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(135deg, rgba(0,200,255,0.08) 0%, rgba(0,200,255,0.02) 100%)" }}
                    />
                    <div className="w-full h-full flex items-center justify-center">
                      <Layout
                        className="w-14 h-14 transition-all duration-300 group-hover:scale-110"
                        style={{ color: "rgba(0,200,255,0.2)" }}
                      />
                    </div>
                  </>
                )}
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
              {/* Close button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full transition-all"
                  style={{
                    background: "rgba(5,8,22,0.8)",
                    border: "1px solid rgba(0,200,255,0.2)",
                    color: "#94a3b8",
                  }}
                  data-testid="button-close-modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="overflow-y-auto p-6 sm:p-8">
                {/* Screenshots carousel in modal */}
                {selectedProject.images.length > 0 && (
                  <div className="mb-6">
                    <ModalCarousel images={selectedProject.images} labels={selectedProject.imageLabels} />
                  </div>
                )}

                {/* Placeholder when no images */}
                {selectedProject.images.length === 0 && (
                  <div
                    className="h-44 sm:h-56 relative flex items-center justify-center mb-6 rounded-xl overflow-hidden"
                    style={{ border: "1px solid rgba(0,200,255,0.1)", background: "linear-gradient(135deg, rgba(0,200,255,0.08) 0%, rgba(0,200,255,0.02) 100%)" }}
                  >
                    <Layout className="w-20 h-20" style={{ color: "rgba(0,200,255,0.15)" }} />
                  </div>
                )}

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
                  {selectedProject.link !== "#" && (
                    <Button
                      asChild
                      className="rounded-full gap-2 neon-btn-glow"
                      style={{ background: "linear-gradient(135deg, #00C8FF, #35D6FF)", color: "#050816", border: "none" }}
                    >
                      <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    </Button>
                  )}
                  {selectedProject.github !== "#" && (
                    <Button
                      asChild
                      variant="outline"
                      className="rounded-full gap-2"
                      style={{ borderColor: "rgba(0,200,255,0.3)", color: "#00C8FF" }}
                      data-testid="button-source-code"
                    >
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} /> Source Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
