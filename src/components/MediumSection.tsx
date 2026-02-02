import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import workUxPasarPolis from "@/assets/work-ux-pasar-polis.png";
import workSupermarketDashboard from "@/assets/work-supermarket-dashboard.png";

const mediumArticles = [
  {
    id: 1,
    title: "UX Case Study Pasar Polis",
    publishedDate: "Feb 9, 2025",
    readTime: "4 min read",
    claps: 50,
    image: workUxPasarPolis,
    description: "Studi kasus UX untuk aplikasi marketplace asuransi Pasar Polis, mencakup riset pengguna, analisis pain points, wireframing, dan solusi desain antarmuka yang user-friendly",
    link: "#",
  },
  {
    id: 2,
    title: "Supermarket Sales Dashboard",
    publishedDate: "Feb 9, 2025",
    readTime: "4 min read",
    claps: 50,
    image: workSupermarketDashboard,
    description: "Analisis data penjualan supermarket dengan visualisasi interaktif menggunakan dashboard analytics untuk mengidentifikasi tren penjualan dan performa produk",
    link: "#",
  },
];

const MediumSection = () => {
  return (
    <section id="medium" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Artikel
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Publikasi di <span className="italic text-primary">Medium</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mediumArticles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group block"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-border/50">
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <span>{article.publishedDate}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span>{article.readTime}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span>👏 {article.claps}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-300 flex items-start gap-2">
                    {article.title}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1" />
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description}
                  </p>

                  {/* Read more */}
                  <div className="mt-4 flex items-center gap-2 text-primary font-medium text-sm">
                    <span>Baca selengkapnya</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Medium profile link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            Lihat Profil Medium
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MediumSection;
