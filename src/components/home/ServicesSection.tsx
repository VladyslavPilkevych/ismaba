import { Link } from "react-router-dom";
import ServiceCard, { type ServiceItem } from "./ServiceCard";
import { useReveal } from "../../hooks/useReveal";

const services: ServiceItem[] = [
  {
    title: "Technická správa",
    text: "Každodenné požiadavky, údržba a koordinácia dodávateľov.",
    icon: "lamp",
  },
  {
    title: "Ekonomická správa",
    text: "Prehľadné hospodárenie, platby a doklady pre vlastníkov.",
    icon: "chart",
  },
  {
    title: "Komunikácia",
    text: "Schôdze, hlasovania a zrozumiteľné informovanie vlastníkov.",
    icon: "messages",
  },
];

export default function ServicesSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="sluzby" className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            Služby
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
            Čo pre váš dom riešime
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            Komplexná správa bytového domu, ktorá pokrýva technickú údržbu,
            financie aj komunikáciu s vlastníkmi.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900"
          >
            Všetky služby
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path
                d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
