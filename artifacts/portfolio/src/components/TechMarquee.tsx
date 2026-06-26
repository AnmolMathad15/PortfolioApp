import { motion } from "framer-motion";

const TECH_STACK = [
  { name: "Java", emoji: "☕" },
  { name: "Spring Boot", emoji: "🍃" },
  { name: "React", emoji: "⚛️" },
  { name: "TypeScript", emoji: "🔷" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Tailwind CSS", emoji: "🎨" },
  { name: "MySQL", emoji: "🗄️" },
  { name: "PostgreSQL", emoji: "🐘" },
  { name: "Docker", emoji: "🐳" },
  { name: "Git", emoji: "📦" },
  { name: "Figma", emoji: "✏️" },
  { name: "Python", emoji: "🐍" },
  { name: "YOLOv8", emoji: "👁️" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "Express.js", emoji: "🚀" },
  { name: "PyTorch", emoji: "🔥" },
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex gap-4 whitespace-nowrap"
        style={{
          animation: `marquee-${reverse ? "reverse" : "forward"} 35s linear infinite`,
        }}
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium shrink-0 transition-all duration-200 cursor-default"
            style={{
              background: "rgba(0,200,255,0.04)",
              border: "1px solid rgba(0,200,255,0.12)",
              color: "#94a3b8",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,200,255,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.3)";
              (e.currentTarget as HTMLElement).style.color = "#00C8FF";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 12px rgba(0,200,255,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,200,255,0.04)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.12)";
              (e.currentTarget as HTMLElement).style.color = "#94a3b8";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <span>{tech.emoji}</span>
            {tech.name}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-forward {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export function TechMarquee() {
  return (
    <section className="py-16 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Tech{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00C8FF, #6EE7FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Stack
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-center mt-3"
        >
          Technologies I work with every day
        </motion.p>
      </div>

      <div className="space-y-4">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>

      {/* Edge fade masks */}
      <div
        className="absolute inset-y-0 left-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, #050816, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, #050816, transparent)" }}
      />
    </section>
  );
}
