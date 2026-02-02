import { motion } from "framer-motion";
import work6 from "@/assets/work-6.png";
import workWemail from "@/assets/work-wemail.png";

const works = [
  {
    id: 1,
    title: "Laporan PKL - Judul Lengkap",
    category: "Networking",
    image: work6,
    description: "Laporan Praktik Kerja Industri di AN's Computer - SMK Negeri 1 Krangkeng",
    isDocument: true,
  },
  {
    id: 2,
    title: "WeMAIL",
    category: "Web Development",
    image: workWemail,
    description: "Aplikasi pembuatan surat berbasis web dengan fitur manajemen template dan dashboard analytics",
    isDocument: true,
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

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background via-muted/30 to-background border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-500">
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-muted/50 to-background p-6">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-md bg-white">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {work.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {work.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {work.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
