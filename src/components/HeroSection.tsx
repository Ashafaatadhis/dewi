import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen gradient-hero relative overflow-hidden flex items-center">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/30 blob-shape animate-blob blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-primary/20 organic-border animate-float-slow blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-soft/40 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-primary font-medium tracking-widest uppercase text-sm mb-4"
            >
              Mahasiswa Teknik Informatika
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif text-foreground leading-tight mb-6"
            >
              Halo, Saya{" "}
              <span className="italic text-primary whitespace-nowrap">Dewi Wati</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
            >
              Mahasiswa Teknik Informatika yang passionate dalam pengembangan web dan Data Analyst. Selalu bersemangat untuk mengolah data menjadi insight yang bermakna dan menciptakan solusi digital yang inovatif.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#works"
                className="px-8 py-4 gradient-accent text-primary-foreground rounded-full font-medium shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                Lihat Karya
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-card border border-border rounded-full font-medium hover:bg-secondary transition-all duration-300"
              >
                Hubungi Saya
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Background decorative shape */}
              <div className="absolute -inset-4 gradient-accent opacity-20 organic-border animate-blob" />
              
              {/* Photo container */}
              <div className="relative w-56 h-72 md:w-64 md:h-80 overflow-hidden organic-border shadow-elevated">
                <img
                  src={profilePhoto}
                  alt="Dewi Wati - Mahasiswa Teknik Informatika"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-12 gradient-glass px-4 py-2 rounded-full shadow-soft border border-white/30"
              >
                <span className="text-sm font-medium">Data Enthusiast</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 bottom-20 gradient-glass px-4 py-2 rounded-full shadow-soft border border-white/30"
              >
                <span className="text-sm font-medium">10+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1.5 h-2.5 bg-primary/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
