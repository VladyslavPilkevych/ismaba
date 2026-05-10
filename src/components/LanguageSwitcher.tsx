import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, type Language } from "../i18n";

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  const current = (i18n.resolvedLanguage ?? i18n.language).split(
    "-",
  )[0] as Language;

  return (
    <div
      className="inline-flex items-center rounded-full border border-ink-100 bg-white p-0.5 text-xs font-medium"
      role="group"
      aria-label={t("common.language.switchTo")}
    >
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isActive = current === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => i18n.changeLanguage(lang)}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              isActive
                ? "bg-ink-900 text-white"
                : "text-ink-700 hover:text-ink-900"
            }`}
          >
            {t(`common.language.${lang}`)}
          </button>
        );
      })}
    </div>
  );
}
