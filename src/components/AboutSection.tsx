import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Brand Identity", level: 88 },
    { name: "Illustration", level: 82 },
    { name: "Motion Design", level: 75 },
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
              <div className="w-full aspect-square max-w-md mx-auto gradient-card rounded-3xl shadow-elevated p-8 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-8 right-8 w-20 h-20 bg-primary/20 rounded-full" />
                <div className="absolute bottom-16 left-8 w-32 h-32 bg-accent/30 organic-border" />
                
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 h-full items-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="gradient-glass rounded-2xl p-6 text-center border border-white/20"
                  >
                    <span className="block text-4xl font-serif text-primary mb-1">50+</span>
                    <span className="text-sm text-muted-foreground">Projects</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="gradient-glass rounded-2xl p-6 text-center border border-white/20"
                  >
                    <span className="block text-4xl font-serif text-primary mb-1">30+</span>
                    <span className="text-sm text-muted-foreground">Clients</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="gradient-glass rounded-2xl p-6 text-center border border-white/20"
                  >
                    <span className="block text-4xl font-serif text-primary mb-1">5+</span>
                    <span className="text-sm text-muted-foreground">Years</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="gradient-glass rounded-2xl p-6 text-center border border-white/20"
                  >
                    <span className="block text-4xl font-serif text-primary mb-1">15</span>
                    <span className="text-sm text-muted-foreground">Awards</span>
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
              Menciptakan Desain yang{" "}
              <span className="italic text-primary">Bermakna</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Saya adalah seorang creative designer dengan passion yang mendalam untuk menciptakan 
              pengalaman visual yang tidak hanya indah, tetapi juga fungsional dan bermakna. 
              Setiap proyek adalah kesempatan untuk menceritakan sebuah kisah melalui desain.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dengan pengalaman lebih dari 5 tahun, saya telah bekerja dengan berbagai brand 
              dari startup hingga perusahaan besar, membantu mereka mengkomunikasikan identitas 
              mereka secara visual.
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
