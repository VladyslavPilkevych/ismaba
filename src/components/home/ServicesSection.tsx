import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServiceCard, { type ServiceItem } from "./ServiceCard";
import { useReveal } from "../../hooks/useReveal";
import { ROUTES } from "../../router/paths";

type HomeServiceContent = { title: string; text: string };

const icons: ServiceItem["icon"][] = ["lamp", "chart", "messages"];

export default function ServicesSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useTranslation();
  const items = t("home.services.items", {
    returnObjects: true,
  }) as HomeServiceContent[];

  return (
    <section id="sluzby" className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            {t("home.services.label")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
            {t("home.services.title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-700">
            {t("home.services.description")}
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <ServiceCard
              key={item.title}
              service={{
                title: item.title,
                text: item.text,
                icon: icons[idx] ?? "lamp",
              }}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to={ROUTES.services}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900"
          >
            {t("common.buttons.allServices")}
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
