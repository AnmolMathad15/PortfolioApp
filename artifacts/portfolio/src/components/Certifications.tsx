import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Award, ChevronLeft, ChevronRight, X } from "lucide-react";

import hackFusionCert from "@assets/image_1782454810510.png";
import advitiyaIEEECert from "@assets/image_1782454823669.png";
import advitiyaKLECert from "@assets/image_1782454837410.png";
import hackArenaCert from "@assets/image_1782454846053.png";
import aiFluencyCert from "@assets/image_1782454854476.png";
import introSubagentsCert from "@assets/image_1782454864148.png";
import introClaudeCert from "@assets/image_1782454897883.png";
import claudeCodeCert from "@assets/image_1782454913313.png";
import googleGeminiCert from "@assets/image_1782454932850.png";
import genAICert from "@assets/image_1782454940703.png";

const CERTIFICATES = [
  {
    title: "HackFusion 2.0",
    issuer: "A.G.M Rural College of Engineering & Technology",
    type: "Participation",
    image: hackFusionCert,
  },
  {
    title: "HackO'Clock — Advitiya-26",
    issuer: "IEEE Computer Society, KLE Institute of Technology",
    type: "Participation",
    image: advitiyaIEEECert,
  },
  {
    title: "Advitiya-26 Technical Fest",
    issuer: "KLE Institute of Technology, Hubballi",
    type: "Participation",
    image: advitiyaKLECert,
  },
  {
    title: "HackArena 2K26",
    issuer: "Jain College of Engineering & Technology",
    type: "Participation",
    image: hackArenaCert,
  },
  {
    title: "AI Fluency for Students",
    issuer: "Anthropic",
    type: "Completion",
    image: aiFluencyCert,
  },
  {
    title: "Introduction to Subagents",
    issuer: "Anthropic",
    type: "Completion",
    image: introSubagentsCert,
  },
  {
    title: "Introduction to Claude Cowork",
    issuer: "Anthropic",
    type: "Completion",
    image: introClaudeCert,
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    type: "Completion",
    image: claudeCodeCert,
  },
  {
    title: "Introduction to Google Gemini",
    issuer: "LinkedIn Learning",
    type: "Completion",
    image: googleGeminiCert,
  },
  {
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    type: "Completion",
    image: genAICert,
  },
];

export function Certifications() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => i !== null ? (i + 1) % CERTIFICATES.length : null);
      if (e.key === "ArrowLeft") setLightbox((i) => i !== null ? (i - 1 + CERTIFICATES.length) % CERTIFICATES.length : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            {CERTIFICATES.length} certificates — click any to view full size
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4 touch-pan-y">
              {CERTIFICATES.map((cert, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div
                    className="glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer"
                    onClick={() => setLightbox(index)}
                  >
                    <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        style={{ background: "rgba(5,8,22,0.5)", backdropFilter: "blur(2px)" }}
                      >
                        <span className="text-sm font-semibold" style={{ color: "#00C8FF" }}>View Certificate</span>
                      </div>
                    </div>

                    <div className="p-4 flex items-start gap-3">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: "rgba(0,200,255,0.08)",
                          border: "1px solid rgba(0,200,255,0.2)",
                        }}
                      >
                        <Award size={16} style={{ color: "#00C8FF" }} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-bold text-white leading-tight mb-1">{cert.title}</h3>
                        <p className="text-xs text-muted-foreground truncate">{cert.issuer}</p>
                        <span
                          className="inline-block mt-1.5 text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(0,200,255,0.08)",
                            border: "1px solid rgba(0,200,255,0.2)",
                            color: "#00C8FF",
                          }}
                        >
                          {cert.type}
                        </span>
                      </div>
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
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(5,8,22,0.95)", backdropFilter: "blur(12px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-[95%] max-w-4xl rounded-2xl overflow-hidden"
            style={{
              background: "rgba(9,18,33,0.97)",
              border: "1px solid rgba(0,200,255,0.2)",
              boxShadow: "0 0 60px rgba(0,200,255,0.12), 0 24px 48px rgba(0,0,0,0.8)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: "1px solid rgba(0,200,255,0.1)" }}
            >
              <div>
                <h3 className="font-bold text-white text-sm">{CERTIFICATES[lightbox].title}</h3>
                <p className="text-xs text-muted-foreground">{CERTIFICATES[lightbox].issuer}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">{lightbox + 1} / {CERTIFICATES.length}</span>
                <button
                  onClick={() => setLightbox(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                  style={{ color: "#94a3b8" }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div className="relative flex items-center justify-center p-4" style={{ maxHeight: "75vh" }}>
              <img
                src={CERTIFICATES[lightbox].image}
                alt={CERTIFICATES[lightbox].title}
                className="max-w-full max-h-[65vh] object-contain rounded-lg"
              />

              <button
                onClick={() => setLightbox((i) => i !== null ? (i - 1 + CERTIFICATES.length) % CERTIFICATES.length : null)}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(9,18,33,0.85)", border: "1px solid rgba(0,200,255,0.25)", color: "#00C8FF" }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setLightbox((i) => i !== null ? (i + 1) % CERTIFICATES.length : null)}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(9,18,33,0.85)", border: "1px solid rgba(0,200,255,0.25)", color: "#00C8FF" }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
