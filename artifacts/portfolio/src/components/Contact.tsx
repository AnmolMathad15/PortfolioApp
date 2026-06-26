import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Download, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-4xl mx-auto glass-card-glow rounded-3xl p-8 md:p-16 relative overflow-hidden"
        >
          {/* Glow orbs */}
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,200,255,0.08) 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(0,200,255,0.05) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />

          <div className="relative z-10 text-center space-y-4 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Let's{" "}
              <span style={{ background: "linear-gradient(90deg, #00C8FF, #6EE7FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Connect
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              I'm always open to discussing opportunities, collaborations, internships, or just having a tech conversation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 7349697599", href: "tel:+917349697599" },
              { icon: Mail, label: "Email", value: "anmolmathad@gmail.com", href: "mailto:anmolmathad@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anmol-mathad", href: "https://www.linkedin.com/in/anmol-mathad-99a90b282" },
              { icon: Github, label: "GitHub", value: "github.com/AnmolMathad15", href: "https://github.com/AnmolMathad15" },
              { icon: Instagram, label: "Instagram", value: "@anmol_mathad_15", href: "https://instagram.com/anmol_mathad_15" },
            ].map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl transition-all group"
                style={{
                  background: "rgba(9,18,33,0.6)",
                  border: "1px solid rgba(0,200,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.28)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,200,255,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,200,255,0.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
                data-testid={`link-contact-${contact.label.toLowerCase()}`}
              >
                <div
                  className="p-3 rounded-lg shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "rgba(0,200,255,0.08)",
                    border: "1px solid rgba(0,200,255,0.15)",
                    color: "#00C8FF",
                  }}
                >
                  <contact.icon size={20} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                    style={{ color: "rgba(0,200,255,0.5)" }}
                  >
                    {contact.label}
                  </p>
                  <p className="text-white font-medium text-sm group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/Anmol_Mathad_Resume.pdf"
              download="Anmol_Mathad_Resume.pdf"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all neon-btn-glow"
              style={{
                background: "linear-gradient(135deg, #00C8FF, #35D6FF)",
                color: "#050816",
              }}
              data-testid="button-download-resume"
            >
              <Download size={18} /> Download Resume
            </a>
            <a
              href="mailto:anmolmathad@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full font-semibold transition-all"
              style={{
                background: "rgba(0,200,255,0.06)",
                border: "1px solid rgba(0,200,255,0.3)",
                color: "#00C8FF",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,200,255,0.12)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(0,200,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,200,255,0.06)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
              data-testid="button-send-email"
            >
              <Mail size={18} /> Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
