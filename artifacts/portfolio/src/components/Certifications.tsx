import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Award, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

const CERTIFICATES = [
  "NPTEL",
  "IBM SkillsBuild",
  "LinkedIn Learning",
  "Anthropic Claude",
  "Forage Virtual Experience Programs",
];

export function Certifications() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section id="certifications" className="py-24 relative w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Licenses &{" "}
            <span style={{ background: "linear-gradient(90deg, #00C8FF, #6EE7FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Certifications
            </span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y">
              {CERTIFICATES.map((cert, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div
                    className="glass-card rounded-2xl p-6 h-full flex flex-col items-center text-center group"
                    data-testid={`card-cert-${index}`}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(0,200,255,0.08)",
                        border: "1px solid rgba(0,200,255,0.2)",
                        boxShadow: "0 0 20px rgba(0,200,255,0.1)",
                      }}
                    >
                      <Award size={30} style={{ color: "#00C8FF" }} />
                    </div>
                    <h3 className="text-lg font-bold mb-5 flex-1 text-white">{cert}</h3>

                    <div
                      className="w-full aspect-[4/3] rounded-xl flex flex-col items-center justify-center p-4 relative overflow-hidden"
                      style={{
                        background: "rgba(5,8,22,0.6)",
                        border: "1px dashed rgba(0,200,255,0.15)",
                      }}
                    >
                      <ImageIcon size={28} className="mb-2" style={{ color: "rgba(0,200,255,0.3)" }} />
                      <p className="text-xs text-center text-muted-foreground">
                        Images coming soon<br />certificates will be displayed here
                      </p>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                        style={{ background: "linear-gradient(135deg, rgba(0,200,255,0.04) 0%, transparent 60%)" }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: "rgba(9,18,33,0.8)",
                border: "1px solid rgba(0,200,255,0.2)",
                color: "#00C8FF",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(0,200,255,0.25)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
              data-testid="button-cert-prev"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {CERTIFICATES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: index === selectedIndex ? "24px" : "8px",
                    background: index === selectedIndex ? "#00C8FF" : "rgba(0,200,255,0.2)",
                    boxShadow: index === selectedIndex ? "0 0 8px rgba(0,200,255,0.5)" : "none",
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
              style={{
                background: "rgba(9,18,33,0.8)",
                border: "1px solid rgba(0,200,255,0.2)",
                color: "#00C8FF",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(0,200,255,0.25)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
              data-testid="button-cert-next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
