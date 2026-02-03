import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import work6 from "@/assets/work-6.png";
import workWemail from "@/assets/work-wemail.png";
import workKasirIkan from "@/assets/work-kasir-ikan.png";
import workScientificPoster from "@/assets/work-scientific-poster.png";
import LaptopMockup from "./LaptopMockup";
import DocumentMockup from "./DocumentMockup";

const works = [
  {
    id: 1,
    title: "Laporan PKL - Web Proxy",
    category: "Networking",
    year: "2021-01",
    displayYear: "2021",
    image: work6,
    description: "Memblokir Ekstensi File JPG dan PNG Menggunakan Web Proxy",
    isDocument: true,
    isLaptop: false,
  },
  {
    id: 2,
    title: "WeMAIL",
    category: "Web Development",
    year: "2025-01",
    displayYear: "2025",
    image: workWemail,
    description: "Aplikasi pembuatan surat berbasis web dengan fitur manajemen template dan dashboard analytics",
    isDocument: false,
    isLaptop: true,
  },
  {
    id: 3,
    title: "Aplikasi Kasir Toko Ikan",
    category: "Web Development",
    year: "2024-01",
    displayYear: "2024",
    image: workKasirIkan,
    description: "Penerapan Sistem Informasi Aplikasi Kasir Berbasis Web Untuk Toko Ikan",
    isDocument: false,
    isLaptop: true,
  },
  {
    id: 4,
    title: "Supermarket Sales Dashboard Analysis",
    category: "Data Analysis",
    year: "2025-02",
    displayYear: "2025",
    image: workScientificPoster,
    description: "Poster ilmiah analisis dashboard penjualan supermarket menggunakan Microsoft Excel dan Power BI untuk visualisasi data dan insight bisnis",
    isDocument: true,
    isLaptop: false,
  },
  {
    id: 5,
    title: "Prediksi Harga Rumah Boston",
    category: "Data Mining",
    year: "2025-06",
    displayYear: "2025",
    image: null,
    description: "Proyek prediksi harga rumah menggunakan dataset Boston Housing dengan model XGBoost yang mencapai akurasi R² 0.905, mengungguli Random Forest dan Regresi Linear",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/UAS-DATAMINING-SISTEMPAKAR",
  },
  {
    id: 6,
    title: "API Books",
    category: "Backend Development",
    year: "2025-06",
    displayYear: "2025",
    image: null,
    description: "RESTful API untuk manajemen buku menggunakan TypeScript, Express, dan Prisma ORM dengan fitur controllers, middlewares, services, dan validasi",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/api_books",
  },
  {
    id: 7,
    title: "Literally Insight",
    category: "Mobile Development",
    year: "2025-07",
    displayYear: "2025",
    image: null,
    description: "Aplikasi mobile cross-platform menggunakan Flutter dengan dukungan untuk Android, iOS, Web, Windows, macOS, dan Linux",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/mobile-UAS-literally-insight",
  },
  {
    id: 8,
    title: "Fraud Detection & Anomaly Identification",
    category: "Machine Learning",
    year: "2025-10",
    displayYear: "2025",
    image: null,
    description: "Eksplorasi deteksi penipuan dan identifikasi anomali menggunakan teknik klasifikasi (Decision Tree, Random Forest) dan clustering dengan PCA untuk reduksi dimensi",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/Eksplorasi-deteksi-penipuan-fraud-detection-dan-identifikasi-anomali",
  },
  {
    id: 9,
    title: "Sentiment Analysis TikTok Reviews",
    category: "Deep Learning",
    year: "2025-12",
    displayYear: "2025",
    image: null,
    description: "Analisis sentimen ulasan aplikasi TikTok menggunakan Machine Learning (SVM, Random Forest) dan Deep Learning (LSTM) dengan teknik embedding BERT, Word2Vec, dan TF-IDF. Model terbaik mencapai akurasi 93%",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/sentiment-analysis-tiktok-reviews",
  },
  {
    id: 10,
    title: "Klasifikasi Gambar CIFAR-10 dengan CNN",
    category: "Deep Learning",
    year: "2025-12",
    displayYear: "2025",
    image: null,
    description: "Implementasi Convolutional Neural Network (CNN) dengan TensorFlow untuk klasifikasi gambar 6 kelas dari dataset CIFAR-10, lengkap dengan ekspor model ke format TFLite dan TF.js",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/Klasifikasi-Gambar-CIFAR10-dengan-CNN-TensorFlow",
  },
  {
    id: 11,
    title: "Customer Segmentation K-Means",
    category: "Machine Learning",
    year: "2025-12",
    displayYear: "2025",
    image: null,
    description: "Segmentasi pelanggan mall menggunakan K-Means Clustering berdasarkan perilaku belanja dan pendapatan tahunan dengan teknik visualisasi data",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/Customer-Segmentation-with-K-Means-Clustering-on-Mall-Customers-Dataset",
  },
  {
    id: 12,
    title: "Workflow CI/CD",
    category: "DevOps",
    year: "2025-12",
    displayYear: "2025",
    image: null,
    description: "Implementasi Continuous Integration dengan GitHub Actions untuk proyek Machine Learning menggunakan Python",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/Workflow-CI",
  },
  {
    id: 13,
    title: "Eksperimen Supervised ML",
    category: "Machine Learning",
    year: "2025-12",
    displayYear: "2025",
    image: null,
    description: "Eksperimen Supervised Machine Learning untuk klasifikasi kanker payudara menggunakan dataset Breast Cancer Wisconsin dengan MLflow tracking dan GitHub Actions CI/CD",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/Eksperimen_SML_Dewi-Wati",
  },
  {
    id: 14,
    title: "Bangun Hub API Docs",
    category: "API Documentation",
    year: "2025-12",
    displayYear: "2025",
    image: null,
    description: "Dokumentasi API untuk platform Bangun Hub menggunakan format OpenAPI/Swagger untuk memudahkan integrasi dan pengembangan",
    isDocument: false,
    isLaptop: false,
    githubLink: "https://github.com/Dewiwati/bangun-hub-api-docs",
  },
];

// Sort works by year-month (newest first) and take only 5 for display
const sortedWorks = [...works].sort((a, b) => b.year.localeCompare(a.year));
const displayedWorks = sortedWorks.slice(0, 5);

interface WorkCardProps {
  work: typeof works[0];
  index: number;
  useRowSpan?: boolean;
}

const WorkCard = ({ work, index, useRowSpan = true }: WorkCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`group relative ${useRowSpan && index % 3 === 0 ? 'md:row-span-2' : ''}`}
  >
    <div className="relative overflow-hidden rounded-3xl shadow-elevated">
      <div className={`${useRowSpan && index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden bg-gradient-to-br from-muted/30 via-background to-muted/20 flex items-center justify-center p-6`}>
        {work.isLaptop && work.image ? (
          <LaptopMockup className="w-full max-w-[90%] transition-transform duration-700 group-hover:scale-105">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
            />
          </LaptopMockup>
        ) : work.isDocument && work.image ? (
          <DocumentMockup className="h-full max-h-[95%] transition-transform duration-700 group-hover:scale-105">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-contain"
            />
          </DocumentMockup>
        ) : work.image ? (
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center h-full transition-transform duration-700 group-hover:scale-105">
            <div className="w-20 h-20 mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </div>
            <h3 className="text-lg font-serif text-foreground mb-2">{work.title}</h3>
            <p className="text-muted-foreground text-sm px-4">{work.description}</p>
            {work.githubLink && (
              <a 
                href={work.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Lihat di GitHub
              </a>
            )}
          </div>
        )}
      </div>
      
      {/* Overlay - only show for items with images */}
      {work.image && (
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground text-xs rounded-full">
                {work.category}
              </span>
              <span className="inline-block px-3 py-1 bg-white/20 text-primary-foreground text-xs rounded-full">
                {work.displayYear}
              </span>
            </div>
            <h3 className="text-2xl font-serif text-primary-foreground mb-2">
              {work.title}
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              {work.description}
            </p>
          </div>
        </div>
      )}
    </div>
  </motion.div>
);

const WorksSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <>
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

          {/* Masonry Grid - Only 4 newest projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {displayedWorks.map((work, index) => (
              <WorkCard key={work.id} work={work} index={index} />
            ))}
          </div>

          {/* View more button - only show if there are more projects */}
          {sortedWorks.length > 5 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <button 
                onClick={() => setShowAllProjects(true)}
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Lihat Semua Project ({sortedWorks.length})
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* All Projects Modal */}
      <AnimatePresence>
        {showAllProjects && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-12">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <p className="text-primary font-medium tracking-widest uppercase text-sm mb-2">
                    Portfolio
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                    Semua <span className="italic text-primary">Project</span>
                  </h2>
                </div>
                <button
                  onClick={() => setShowAllProjects(false)}
                  className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              {/* All Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedWorks.map((work, index) => (
                  <WorkCard key={work.id} work={work} index={index} useRowSpan={false} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WorksSection;
