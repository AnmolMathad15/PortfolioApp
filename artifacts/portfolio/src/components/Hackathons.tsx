import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import hackGroup from "@assets/IMG_7009_1782391911900.JPG";
import hackAudience from "@assets/hack1_1782391890506.jpg";
import hackSpeaker from "@assets/h2_1782391890505.jpg";
import hackPitch from "@assets/h3_1782391890504.jpg";
import hackCert from "@assets/h4_1782391890503.jpg";
import hackTeam from "@assets/h5_1782391890501.jpg";
import hackGoodies from "@assets/h6_1782391890500.jpg";
import hackCertPaper from "@assets/h8_1782391890499.jpg";
import hackTeams from "@assets/h9_1782391890497.jpg";

import apbBadge from "@assets/j1_1782392102547.jpg";
import apbRoom from "@assets/j2_1782392102546.jpg";
import apbLaptop from "@assets/j3_1782392102544.jpg";
import apbEval from "@assets/j4_1782392102543.jpg";
import apbTeam from "@assets/j5_1782392102542.jpg";
import apbCert from "@assets/j6_1782392102541.jpg";
import apbAward from "@assets/j7_1782392102540.jpg";

import hfCertBadge from "@assets/a13_1782451823992.jpg";
import hfCert from "@assets/a12_1782451823993.jpg";
import hfTeam from "@assets/a11_1782451846997.jpg";

import haCert from "@assets/i1_1782451362250.jpg";
import haOpening from "@assets/i2_1782451362249.jpg";
import haLogo from "@assets/i3_1782451362249.jpg";
import haCoding from "@assets/i4_1782451362248.jpg";
import haTimer from "@assets/i5_1782451362248.jpg";
import haRoom from "@assets/16_1782451362248.jpg";
import haBadge from "@assets/i7_1782451362247.jpg";

type GalleryPhoto = { src: string; label: string };

const GALLERIES: Record<string, GalleryPhoto[]> = {
  "Hack'O'Clock 2026": [
    { src: hackGroup, label: "All Participants — Hack'O'Clock 2026" },
    { src: hackTeam, label: "Team Backend Brains" },
    { src: hackPitch, label: "Problem Statement Presentation" },
    { src: hackTeams, label: "Top 8 Finalist Teams Revealed" },
    { src: hackAudience, label: "Judging Panel & Audience" },
    { src: hackSpeaker, label: "Opening Ceremony" },
    { src: hackCert, label: "Certificate of Participation" },
    { src: hackCertPaper, label: "Advitiya-26 Certificate" },
    { src: hackGoodies, label: "Event Goodies & Certificate" },
  ],
  "AI Prompt Battle 2026": [
    { src: apbBadge, label: "Team Badge — A4 Backbenchers (PB009)" },
    { src: apbLaptop, label: "Live Prompting Session" },
    { src: apbRoom, label: "Competition Hall" },
    { src: apbEval, label: "Evaluation Round — Judges Visiting Teams" },
    { src: apbTeam, label: "Team A4 Backbenchers" },
    { src: apbCert, label: "Certificate of Participation" },
    { src: apbAward, label: "Award Ceremony — Vaibhav Fest" },
  ],
  "HackArena 2026": [
    { src: haLogo, label: "HackArena 2K26 — Inter-College Hackathon" },
    { src: haBadge, label: "Participant Badge — A4 Backbenchers" },
    { src: haOpening, label: "Opening Ceremony" },
    { src: haRoom, label: "Hacking in Progress" },
    { src: haTimer, label: "Countdown Timer — 6 Hours Remaining" },
    { src: haCoding, label: "Live Coding Session" },
    { src: haCert, label: "Certificate of Participation" },
  ],
  "HackFusion 2.0": [
    { src: hfTeam, label: "Team Three Byte — HackFusion 2.0" },
    { src: hfCertBadge, label: "Certificate & Participant Badge" },
    { src: hfCert, label: "Certificate of Participation — Agratha 2K26" },
  ],
};

const HACKATHONS = [
  {
    title: "Hack'O'Clock 2026",
    organization: "KLE Institute of Technology",
    achievement: "Top 8 Finalist Team",
    description: "Participated in an 18-hour national hackathon at Advitiya-26 where our team (Backend Brains) built ResolveAI — an AI-powered customer complaint resolution agent. Reached Top 8 Finalist teams out of all participants.",
    features: ["Team collaboration", "Problem solving", "Rapid prototyping", "Pitch presentation"],
  },
  {
    title: "AI Prompt Battle 2026",
    organization: "Jain College of Engineering and Technology",
    achievement: "Final Round",
    description: "Led team 'A4 Backbenchers' (PB009) at JCET's AI Prompt Battle 2026 — a live AI prompting competition held during the Vaibhav Tech Fest. Competed through evaluation rounds with judges and reached the Final Round.",
    features: ["Prompt Engineering", "AI Interaction", "Creative Thinking", "Team Leadership"],
  },
  {
    title: "HackArena 2026",
    organization: "Jain College of Engineering and Technology, Hubballi",
    achievement: "Finalist Team",
    description: "Competed in HackArena 2K26, an Inter-College Hackathon organised by JCET Hubballi. Participated as team 'A4 Backbenchers', built a working project under a 6-hour countdown and made it to the Finalist round.",
    features: ["Inter-College Competition", "6-Hour Hackathon", "Rapid Development", "Teamwork"],
  },
  {
    title: "HackFusion 2.0",
    organization: "A.G.M Rural College of Engineering & Technology, Varur",
    achievement: "Participant",
    description: "Participated in HackFusion 2.0 (Agratha 2K26) — a 24-hour National Level Hackathon at AGM RCET, Varur. Competed as team 'Three Byte' representing JCET, Hubballi.",
    features: ["24-Hour Hackathon", "National Level", "Team Three Byte", "Innovation"],
  },
];

export function Hackathons() {
  const [activeGallery, setActiveGallery] = useState<string | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const gallery: GalleryPhoto[] = activeGallery ? (GALLERIES[activeGallery] ?? []) : [];
  const prevPhoto = () => setCurrentPhoto((c) => (c - 1 + gallery.length) % gallery.length);
  const nextPhoto = () => setCurrentPhoto((c) => (c + 1) % gallery.length);
  const openGallery = (title: string) => { setActiveGallery(title); setCurrentPhoto(0); };
  const closeGallery = () => { setActiveGallery(null); setCurrentPhoto(0); };

  return (
    <section id="hackathons" className="py-24 relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Hackathon{" "}
            <span style={{ background: "linear-gradient(90deg, #00C8FF, #6EE7FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Learning, collaborating, and building innovative solutions through competitive hackathons.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HACKATHONS.map((h, index) => {
            const photos = GALLERIES[h.title] ?? [];
            const hasGallery = photos.length > 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card rounded-2xl overflow-hidden flex flex-col group"
              >
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {h.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{h.organization}</p>
                    </div>
                    <span
                      className="inline-flex px-4 py-1.5 text-sm font-semibold rounded-full shrink-0"
                      style={{
                        background: "rgba(0,200,255,0.08)",
                        border: "1px solid rgba(0,200,255,0.2)",
                        color: "#00C8FF",
                      }}
                    >
                      {h.achievement}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{h.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {h.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-lg"
                        style={{
                          background: "rgba(0,200,255,0.05)",
                          border: "1px solid rgba(0,200,255,0.1)",
                          color: "#94a3b8",
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gallery strip */}
                {hasGallery ? (
                  <div
                    onClick={() => openGallery(h.title)}
                    className="cursor-pointer relative overflow-hidden group/gallery"
                    style={{ height: "120px", borderTop: "1px solid rgba(0,200,255,0.1)" }}
                  >
                    <div className="absolute inset-0 flex">
                      {photos.slice(0, 4).map((photo, i) => (
                        <div key={i} className="flex-1 overflow-hidden">
                          <img
                            src={photo.src}
                            alt={photo.label}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/gallery:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-300"
                      style={{ background: "rgba(5,8,22,0.55)", backdropFilter: "blur(2px)" }}
                    >
                      <div
                        className="p-2.5 rounded-full mb-1.5 transition-transform duration-300 group-hover/gallery:scale-110"
                        style={{
                          background: "rgba(0,200,255,0.15)",
                          border: "1px solid rgba(0,200,255,0.35)",
                          color: "#00C8FF",
                        }}
                      >
                        <ImageIcon size={18} />
                      </div>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: "#00C8FF", textShadow: "0 0 8px rgba(0,200,255,0.4)" }}
                      >
                        View {photos.length} Photos
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className="h-20 flex flex-col items-center justify-center"
                    style={{ borderTop: "1px solid rgba(0,200,255,0.08)" }}
                  >
                    <ImageIcon size={16} style={{ color: "rgba(0,200,255,0.2)" }} className="mb-1" />
                    <span className="text-xs text-muted-foreground opacity-50">Photos coming soon</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-screen gallery modal */}
      <AnimatePresence>
        {activeGallery && gallery.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeGallery}
              className="fixed inset-0 z-50"
              style={{ background: "rgba(5,8,22,0.95)", backdropFilter: "blur(12px)" }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-4xl rounded-2xl z-50 overflow-hidden flex flex-col"
              style={{
                background: "rgba(9,18,33,0.97)",
                border: "1px solid rgba(0,200,255,0.2)",
                boxShadow: "0 0 60px rgba(0,200,255,0.12), 0 24px 48px rgba(0,0,0,0.8)",
                maxHeight: "90vh",
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-5 py-4 shrink-0"
                style={{ borderBottom: "1px solid rgba(0,200,255,0.1)" }}
              >
                <div>
                  <h3 className="font-bold text-white">{activeGallery} Gallery</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {currentPhoto + 1} / {gallery.length} — {gallery[currentPhoto]?.label}
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={closeGallery} style={{ color: "#94a3b8" }}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Main photo */}
              <div className="relative flex-1 flex items-center justify-center overflow-hidden" style={{ minHeight: "300px" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentPhoto}
                    src={gallery[currentPhoto]?.src}
                    alt={gallery[currentPhoto]?.label}
                    className="max-w-full max-h-[55vh] object-contain"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button
                  onClick={prevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(9,18,33,0.85)", border: "1px solid rgba(0,200,255,0.25)", color: "#00C8FF" }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(9,18,33,0.85)", border: "1px solid rgba(0,200,255,0.25)", color: "#00C8FF" }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Thumbnail strip */}
              <div
                className="flex gap-2 overflow-x-auto px-4 py-3 shrink-0"
                style={{ borderTop: "1px solid rgba(0,200,255,0.1)" }}
              >
                {gallery.map((photo, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPhoto(i)}
                    className="shrink-0 rounded-lg overflow-hidden transition-all duration-200"
                    style={{
                      width: "72px",
                      height: "54px",
                      border: i === currentPhoto ? "2px solid #00C8FF" : "2px solid rgba(0,200,255,0.1)",
                      boxShadow: i === currentPhoto ? "0 0 12px rgba(0,200,255,0.4)" : "none",
                      opacity: i === currentPhoto ? 1 : 0.55,
                    }}
                  >
                    <img src={photo.src} alt={photo.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
