import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useReveal } from "../../hooks/useReveal";
import { ROUTES } from "../../router/paths";

export default function FinalCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useTranslation();

  return (
    <section className="bg-soft-radial py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 text-center reveal ${visible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
          {t("home.finalCta.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
          {t("home.finalCta.text")}
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to={ROUTES.contact}
            className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
          >
            {t("home.finalCta.button")}
          </Link>
        </div>
      </div>
    </section>
  );
}
