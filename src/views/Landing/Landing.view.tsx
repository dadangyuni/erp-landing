import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import PricingSection from "../../components/PricingSection";

const LandingView = () => {
  return (
    <main className="bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default LandingView;
