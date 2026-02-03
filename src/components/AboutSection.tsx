import { motion } from "framer-motion";
import { certificates } from "@/data/certificates";

const AboutSection = () => {
  const certificateCount = certificates.length;
  const skills = [
    { name: "Machine Learning", level: 90 },
    { name: "Python", level: 88 },
    { name: "Data Analysis", level: 85 },
    { name: "Web Development", level: 82 },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main decorative card */}
              <div className="w-full aspect-square max-w-md mx-auto gradient-card rounded-3xl shadow-elevated p-4 sm:p-6 md:p-8 relative overflow-hidden">
                {/* Decorative circles - responsive sizing for consistency */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary/20 rounded-full" />
                <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-6 md:bottom-16 md:left-8 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-accent/30 organic-border" />
                
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 h-full items-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="gradient-glass rounded-2xl p-6 text-center border border-white/20 flex flex-col items-center justify-center"
                  >
                    <span className="block text-4xl font-serif text-primary mb-1">10+</span>
                    <span className="text-sm text-muted-foreground">Projects</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="gradient-glass rounded-2xl p-6 text-center border border-white/20 flex flex-col items-center justify-center"
                  >
                    <span className="block text-4xl font-serif text-primary mb-1">Sem 5</span>
                    <span className="text-sm text-muted-foreground">Semester</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="gradient-glass rounded-2xl p-6 text-center border border-white/20 flex flex-col items-center justify-center"
                  >
                    <span className="block text-4xl font-serif text-primary mb-1">3.66</span>
                    <span className="text-sm text-muted-foreground">IPK</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="gradient-glass rounded-2xl p-6 text-center border border-white/20 flex flex-col items-center justify-center"
                  >
                    <span className="block text-4xl font-serif text-primary mb-1">{certificateCount}+</span>
                    <span className="text-sm text-muted-foreground">Sertifikat</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Tentang Saya
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Mengubah Data Menjadi{" "}
              <span className="italic text-primary">Insight</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mahasiswa Teknik Informatika semester 5 dengan spesialisasi di bidang 
              Machine Learning, Data Analysis, dan Software Development. Memiliki pengalaman 
              dalam membangun model prediktif, analisis sentimen, serta pengembangan 
              aplikasi web dan mobile.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Aktif mengikuti program pelatihan profesional dan telah memperoleh berbagai 
              sertifikasi di bidang AI, Python, dan MLOps. Berkomitmen untuk terus 
              mengembangkan keahlian teknis melalui pembelajaran berkelanjutan dan 
              implementasi project nyata.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full gradient-accent rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
