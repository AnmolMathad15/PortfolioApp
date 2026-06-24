import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-1 origin-left bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
