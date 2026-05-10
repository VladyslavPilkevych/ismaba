import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const servicesList = t("footer.servicesList", {
    returnObjects: true,
  }) as string[];

  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-white font-semibold">
              I
            </span>
            <span className="text-base font-semibold tracking-tightish text-ink-900">
              {t("common.brand")}
            </span>
          </div>
          <p className="mt-4 text-sm text-ink-500 max-w-xs">
            {t("footer.description")}
          </p>
        </div>

        <div className="text-sm text-ink-700">
          <h4 className="text-xs uppercase tracking-wider text-ink-500 mb-3">
            {t("footer.contactHeading")}
          </h4>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-ink-900" href="tel:+421905352554">
                0905 352 554
              </a>
            </li>
            <li>
              <a className="hover:text-ink-900" href="mailto:info@ismaba.sk">
                info@ismaba.sk
              </a>
            </li>
            <li>Handlovská 2981/28</li>
          </ul>
        </div>

        <div className="text-sm text-ink-700">
          <h4 className="text-xs uppercase tracking-wider text-ink-500 mb-3">
            {t("footer.servicesHeading")}
          </h4>
          <ul className="space-y-2">
            {servicesList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-ink-500 flex flex-col sm:flex-row gap-2 sm:justify-between">
          <span>
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </span>
          <span>{t("footer.tagline")}</span>
        </div>
      </div>
    </footer>
  );
}
