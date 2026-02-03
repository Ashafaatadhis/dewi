import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Star, Medal, Trophy, X } from "lucide-react";
import certDicodingPemrograman from "@/assets/cert-dicoding-pemrograman.jpg";

const certificates = [
  {
    id: 1,
    title: "Dasar Pemrograman Pengembang Software",
    issuer: "Dicoding Indonesia",
    year: "September 2025",
    description: "Mempelajari dasar HTML, CSS, JavaScript, dan dokumentasi teknis aplikasi.",
    icon: Award,
    color: "from-rose-blush to-primary",
    image: certDicodingPemrograman,
  },
  {
    id: 2,
    title: "Google Data Analytics",
    issuer: "Google",
    year: "2024",
    description: "Sertifikasi profesional analisis data dari Google.",
    icon: Star,
    color: "from-primary to-nude-400",
    image: null,
  },
  {
    id: 3,
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2024",
    description: "Kursus Python untuk ilmu data dari IBM.",
    icon: Trophy,
    color: "from-nude-400 to-accent",
    image: null,
  },
  {
    id: 4,
    title: "SQL for Data Analysis",
    issuer: "Coursera",
    year: "2023",
    description: "Kursus SQL untuk analisis data.",
    icon: Medal,
    color: "from-accent to-rose-blush",
    image: null,
  },
];

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-secondary to-transparent rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Pencapaian
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Sertifikat & <span className="italic text-primary">Penghargaan</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
              onClick={() => cert.image && setSelectedCert(cert)}
            >
              <div className={`relative gradient-card rounded-3xl p-6 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-500 h-full ${cert.image ? 'cursor-pointer' : ''}`}>
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  <cert.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-muted-foreground/80 text-xs mb-3 line-clamp-2">
                  {cert.description}
                </p>
                
                {/* Year badge */}
                <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full">
                  {cert.year}
                </span>

                {/* Click indicator for certificates with images */}
                {cert.image && (
                  <div className="absolute bottom-4 right-4 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Klik untuk lihat
                  </div>
                )}

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-3xl">
                  <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${cert.color} rotate-45 opacity-10 group-hover:opacity-20 transition-opacity`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 gradient-glass rounded-full px-8 py-4 border border-border/50 shadow-soft">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center"
                >
                  <span className="text-primary-foreground text-xs font-bold">
                    {["G", "I", "C", "F"][i]}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-muted-foreground">
              dan <span className="text-foreground font-medium">5+ sertifikasi</span> lainnya
            </span>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full bg-background rounded-2xl overflow-hidden shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div>
                  <h3 className="text-lg font-serif text-foreground">{selectedCert.title}</h3>
                  <p className="text-sm text-muted-foreground">{selectedCert.issuer} • {selectedCert.year}</p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              
              {/* Certificate Image */}
              <div className="p-4 bg-secondary/30">
                <img
                  src={selectedCert.image || ""}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg shadow-soft"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
