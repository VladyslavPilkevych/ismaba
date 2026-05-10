import { useState } from "react";
import { useTranslation } from "react-i18next";
import ServiceCard, { type ServiceItem } from "./ServiceCard";
import ServiceModal from "./ServiceModal";
import type { FallbackKind } from "./ServiceFallbackIcon";
import { useReveal } from "../../hooks/useReveal";

export const services: ServiceItem[] = [
  { id: "zateplenie", animation: "/animations/zateplenie.lottie" },
  { id: "kurenie", animation: "/animations/kurenie.lottie" },
  { id: "elektrina", animation: "/animations/elektrina.lottie" },
  { id: "financovanie", animation: "/animations/financovanie-obnovy.lottie" },
  { id: "poistenie", animation: "/animations/poistenie.lottie" },
];

export default function ServicesGrid() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useTranslation();
  const [openId, setOpenId] = useState<FallbackKind | null>(null);
  const activeService = openId
    ? services.find((s) => s.id === openId) ?? null
    : null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            {t("servicesPage.grid.label")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
            {t("servicesPage.grid.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            {t("servicesPage.grid.description")}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpen={setOpenId}
            />
          ))}
        </div>
      </div>

      <ServiceModal service={activeService} onClose={() => setOpenId(null)} />
    </section>
  );
}
