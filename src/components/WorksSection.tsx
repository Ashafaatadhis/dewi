import { motion } from "framer-motion";
import work6 from "@/assets/work-6.png";
import workWemail from "@/assets/work-wemail.png";
import workKasirIkan from "@/assets/work-kasir-ikan.png";
import LaptopMockup from "./LaptopMockup";
import DocumentMockup from "./DocumentMockup";

const works = [
  {
    id: 1,
    title: "Laporan PKL - Web Proxy",
    category: "Networking",
    image: work6,
    description: "Memblokir Ekstensi File JPG dan PNG Menggunakan Web Proxy",
    isDocument: true,
    isLaptop: false,
  },
  {
    id: 2,
    title: "WeMAIL",
    category: "Web Development",
    image: workWemail,
    description: "Aplikasi pembuatan surat berbasis web dengan fitur manajemen template dan dashboard analytics",
    isDocument: false,
    isLaptop: true,
  },
  {
    id: 3,
    title: "Aplikasi Kasir Toko Ikan",
    category: "Web Development",
    image: workKasirIkan,
    description: "Penerapan Sistem Informasi Aplikasi Kasir Berbasis Web Untuk Toko Ikan",
    isDocument: false,
    isLaptop: true,
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="py-24 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 blob-shape blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 organic-border blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Project <span className="italic text-primary">Terpilih</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative ${index % 3 === 0 ? 'md:row-span-2' : ''}`}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-elevated">
                <div className={`${index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20 flex items-center justify-center p-6`}>
                  {work.isLaptop ? (
                    <LaptopMockup className="w-full max-w-[90%] transition-transform duration-700 group-hover:scale-105">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover"
                      />
                    </LaptopMockup>
                  ) : work.isDocument ? (
                    <DocumentMockup className="h-full max-h-[95%] transition-transform duration-700 group-hover:scale-105">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-contain"
                      />
                    </DocumentMockup>
                  ) : (
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground text-xs rounded-full mb-3">
                      {work.category}
                    </span>
                    <h3 className="text-2xl font-serif text-primary-foreground mb-2">
                      {work.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm">
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Lihat Semua Project
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
