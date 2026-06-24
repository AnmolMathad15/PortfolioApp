import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-card/30 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

          <div className="relative z-10 text-center space-y-6 mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold"
            >
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Connect</span>
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
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {[
              { icon: Mail, label: "Email", value: "anmolmathad@gmail.com", href: "mailto:anmolmathad@gmail.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/anmolmathad", href: "https://linkedin.com/in/anmolmathad" },
              { icon: Github, label: "GitHub", value: "github.com/anmol-mathad", href: "https://github.com/anmol-mathad" },
              { icon: Instagram, label: "Instagram", value: "@life_of_anmol", href: "https://instagram.com/life_of_anmol" },
            ].map((contact, i) => (
              <a 
                key={i} 
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className="p-3 bg-card rounded-lg border border-border/50 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <contact.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{contact.label}</p>
                  <p className="text-foreground font-medium">{contact.value}</p>
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
            <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-full px-8 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Download size={18} /> Download Resume
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 rounded-full px-8 border-primary/50 hover:bg-primary/10" asChild>
              <a href="mailto:anmolmathad@gmail.com">
                <Mail size={18} /> Send Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
