import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import sk from "./locales/sk.json";
import en from "./locales/en.json";

export const SUPPORTED_LANGUAGES = ["sk", "en"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

const STORAGE_KEY = "ismaba.lang";

function readInitialLanguage(): Language {
  if (typeof window === "undefined") return "sk";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && (SUPPORTED_LANGUAGES as readonly string[]).includes(stored)) {
    return stored as Language;
  }
  return "sk";
}

i18n.use(initReactI18next).init({
  resources: {
    sk: { translation: sk },
    en: { translation: en },
  },
  lng: readInitialLanguage(),
  fallbackLng: "sk",
  interpolation: { escapeValue: false },
  returnNull: false,
});

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng;
  }
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}

export default i18n;
