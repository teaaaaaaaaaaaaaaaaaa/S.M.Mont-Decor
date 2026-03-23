import HeroSection from '../components/sections/HeroSection';
import BeforeAfterSection from '../components/sections/BeforeAfterSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BeforeAfterSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
