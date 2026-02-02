import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 blob-shape blur-3xl" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 organic-border blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Hubungi Saya
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Mari <span className="italic text-primary">Terhubung</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Tertarik untuk berdiskusi tentang project data analysis, 
              kolaborasi, atau kesempatan magang? Jangan ragu untuk 
              menghubungi saya. Saya selalu terbuka untuk peluang baru!
            </p>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              <motion.a
                href="mailto:dewiwati182004@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl gradient-accent flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-foreground group-hover:text-primary transition-colors">
                  dewiwati182004@gmail.com
                </span>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-soft group-hover:gradient-accent transition-all">
                  <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <span className="text-muted-foreground">
                  Indramayu, Indonesia
                </span>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/Dewiwati", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/dewi-wati", label: "LinkedIn" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="gradient-card rounded-3xl p-8 shadow-elevated border border-border/50">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Nama lengkap"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    placeholder="Tentang apa?"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ceritakan tentang kesempatan kolaborasi atau pertanyaan Anda..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 gradient-accent text-primary-foreground rounded-xl font-medium shadow-soft hover:shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  Kirim Pesan
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
