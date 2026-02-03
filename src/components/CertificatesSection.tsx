import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { certificates } from "@/data/certificates";

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const [showAllCerts, setShowAllCerts] = useState(false);

  // Sort certificates by date (newest first) and show only 4 on main view
  const displayedCertificates = certificates.slice(0, 4);
  const remainingCount = certificates.length - 4;

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
          {displayedCertificates.map((cert, index) => (
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

                {/* Certificate Image Thumbnail */}
                {cert.image && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-border/30 shadow-soft bg-white">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}

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

        {/* Show more certificates button - pill style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => setShowAllCerts(true)}
            className="inline-flex items-center gap-4 gradient-glass rounded-full px-8 py-4 border border-border/50 shadow-soft hover:shadow-elevated hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex -space-x-2">
              {certificates.slice(4, Math.min(8, certificates.length)).map((cert) => (
                <div
                  key={cert.id}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center group-hover:scale-110 transition-transform"
                >
                  <cert.icon className="w-4 h-4 text-primary-foreground" />
                </div>
              ))}
            </div>
            <span className="text-muted-foreground">
              dan <span className="text-foreground font-medium">{remainingCount}+ sertifikasi</span> lainnya
            </span>
          </button>
        </motion.div>
      </div>

      {/* Single Certificate Modal */}
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

      {/* All Certificates Modal */}
      <AnimatePresence>
        {showAllCerts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAllCerts(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full max-h-[90vh] bg-background rounded-2xl overflow-hidden shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-background z-10">
                <div>
                  <h3 className="text-xl font-serif text-foreground">Semua Sertifikat</h3>
                  <p className="text-sm text-muted-foreground">{certificates.length} sertifikat</p>
                </div>
                <button
                  onClick={() => setShowAllCerts(false)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              
              {/* All Certificates Grid */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certificates.map((cert) => (
                    <motion.div
                      key={cert.id}
                      whileHover={{ y: -4 }}
                      className="group cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (cert.image) {
                          setShowAllCerts(false);
                          setTimeout(() => setSelectedCert(cert), 200);
                        }
                      }}
                    >
                      <div className="relative gradient-card rounded-2xl p-4 shadow-soft border border-border/50 hover:shadow-elevated transition-all duration-300 h-full">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-soft flex-shrink-0`}>
                            <cert.icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-serif text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                              {cert.title}
                            </h4>
                            <p className="text-muted-foreground text-xs mb-1">
                              {cert.issuer}
                            </p>
                            <span className="inline-block px-2 py-0.5 bg-secondary text-muted-foreground text-xs rounded-full">
                              {cert.year}
                            </span>
                          </div>
                        </div>
                        
                        {/* Thumbnail */}
                        {cert.image && (
                          <div className="mt-3 rounded-lg overflow-hidden border border-border/30 bg-white">
                            <img 
                              src={cert.image} 
                              alt={cert.title}
                              className="w-full h-auto"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
