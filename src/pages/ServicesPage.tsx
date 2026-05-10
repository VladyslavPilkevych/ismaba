import { useEffect } from "react";
import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesProcess from "../components/services/ServicesProcess";
import WhyIsmaa from "../components/services/WhyIsmaa";
import ServicesCTA from "../components/services/ServicesCTA";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <WhyIsmaa />
      <ServicesCTA />
    </>
  );
}
