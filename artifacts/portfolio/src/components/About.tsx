import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function Counter({ from = 0, to, duration = 2 }: { from?: number, to: number | string, duration?: number }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const targetVal = typeof to === 'string' ? parseFloat(to) : to;
  const isFloat = !Number.isInteger(targetVal);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        const currentVal = from + progress * (targetVal - from);
        setCount(currentVal);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, from, targetVal, duration]);

  const displayString = typeof to === 'string' && to.includes('+') ? '+' : '';

  return (
    <span ref={ref}>
      {isFloat ? count.toFixed(2) : Math.floor(count)}
      {displayString}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">About Me</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am a Computer Science Engineering student passionate about Full Stack Development, Artificial Intelligence applications, and UI/UX design. I enjoy building modern web applications, exploring AI technologies, and designing seamless user experiences. I am always eager to learn new technologies and create impactful digital products.
              </p>
              <div className="pt-6">
                <span className="font-cursive text-4xl text-primary/80 opacity-80">Anmol Mathad</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
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
                  className="bg-background/50 border border-border/50 rounded-2xl p-6 text-center hover:bg-card hover:border-primary/30 transition-all group"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                    <Counter to={stat.value} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
