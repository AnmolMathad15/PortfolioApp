import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ from = 0, to, duration = 2 }: { from?: number; to: number | string; duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const targetVal = typeof to === "string" ? parseFloat(to) : to;
  const isFloat = !Number.isInteger(targetVal);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(from + progress * (targetVal - from));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, from, targetVal, duration]);

  const suffix = typeof to === "string" && to.includes("+") ? "+" : "";
  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(2) : Math.floor(count)}
      {suffix}
    </span>
  );
}

const FOCUS_ITEMS = ["Java Full Stack", "Spring Boot", "React", "AI Applications", "System Design", "Open Source"];
const LEARNING_ITEMS = ["Docker", "AWS", "Microservices", "Kubernetes", "Redis"];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-card-glow rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,200,255,0.04) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {/* Left — text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                <span
                  style={{
                    background: "linear-gradient(90deg, #00C8FF, #6EE7FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  About Me
                </span>
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                I'm Anmol Mathad, a Computer Science Engineering student passionate about Full Stack Development,
                Artificial Intelligence, and UI/UX Design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy transforming ideas into scalable applications with clean architecture and engaging user
                experiences. My interests span Java Full Stack Development, AI-powered systems, frontend engineering,
                and modern SaaS applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm constantly exploring new technologies, contributing to projects, participating in hackathons,
                and improving my development skills through real-world applications.
              </p>

              <div className="pt-2">
                <span
                  className="font-cursive text-4xl"
                  style={{ color: "#00C8FF", opacity: 0.85, textShadow: "0 0 20px rgba(0,200,255,0.3)" }}
                >
                  Anmol Mathad
                </span>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {[
                  { label: "CGPA", value: "8.39" },
                  { label: "Projects", value: "7+" },
                  { label: "Internships", value: 2 },
                  { label: "Hackathons", value: "3+" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="glass-card rounded-2xl p-5 text-center group cursor-default"
                    data-testid={`stat-card-${stat.label.toLowerCase()}`}
                  >
                    <div
                      className="text-3xl sm:text-4xl font-bold mb-1 transition-all duration-300"
                      style={{ color: "#00C8FF", textShadow: "0 0 20px rgba(0,200,255,0.4)" }}
                    >
                      <Counter to={stat.value} />
                    </div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "rgba(0,200,255,0.6)" }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Current Focus */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="glass-card rounded-2xl p-5"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(0,200,255,0.6)" }}
                >
                  ⚡ Current Focus
                </p>
                <div className="flex flex-wrap gap-2">
                  {FOCUS_ITEMS.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: "rgba(0,200,255,0.08)",
                        border: "1px solid rgba(0,200,255,0.2)",
                        color: "#00C8FF",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Currently Learning */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="glass-card rounded-2xl p-5"
              >
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(0,200,255,0.6)" }}
                >
                  📚 Currently Learning
                </p>
                <div className="flex flex-wrap gap-2">
                  {LEARNING_ITEMS.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full font-medium"
                      style={{
                        background: "rgba(110,231,255,0.06)",
                        border: "1px solid rgba(110,231,255,0.18)",
                        color: "#6EE7FF",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
