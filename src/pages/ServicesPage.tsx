import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesProcess from "../components/services/ServicesProcess";
import WhyIsmaba from "../components/services/WhyIsmaba";
import ServicesCTA from "../components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <WhyIsmaba />
      <ServicesCTA />
    </>
  );
}
