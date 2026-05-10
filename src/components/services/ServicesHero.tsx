import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../router/paths";

export default function ServicesHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-soft-radial">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl reveal is-visible">
          <span className="inline-flex items-center rounded-full border border-brand-100 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            {t("servicesPage.hero.label")}
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tightish text-ink-900 sm:text-5xl md:text-[3.25rem]">
            {t("servicesPage.hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {t("servicesPage.hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to={ROUTES.contact}
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
            >
              {t("servicesPage.hero.primary")}
            </Link>
            <a
              href="#postup"
              className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900"
            >
              {t("servicesPage.hero.secondary")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
