import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WorksSection from "@/components/WorksSection";
import MediumSection from "@/components/MediumSection";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorksSection />
      <MediumSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
