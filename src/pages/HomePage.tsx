import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import ValuesSection from "../components/home/ValuesSection";
import FinalCTA from "../components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <ValuesSection />
      <FinalCTA />
    </>
  );
}
