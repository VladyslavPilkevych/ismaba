import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../router/paths";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinkClass = "hover:text-ink-900 transition-colors";

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `${navLinkClass} ${isActive ? "text-ink-900 font-medium" : ""}`;

const mobileItemClass = ({ isActive }: { isActive: boolean }) =>
  `block rounded-md px-3 py-3 text-base transition-colors ${
    isActive
      ? "bg-ink-50 text-ink-900 font-medium"
      : "text-ink-700 hover:bg-ink-50 hover:text-ink-900"
  }`;

export default function Header() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-ink-100">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between gap-6">
        <Link to={ROUTES.home} className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-white font-semibold">
            I
          </span>
          <span className="text-base font-semibold tracking-tightish text-ink-900">
            {t("common.brand")}
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-700">
          <NavLink to={ROUTES.home} end className={navItemClass}>
            {t("nav.home")}
          </NavLink>
          <NavLink to={ROUTES.services} className={navItemClass}>
            {t("nav.services")}
          </NavLink>
          <NavLink to={ROUTES.about} className={navItemClass}>
            {t("nav.about")}
          </NavLink>
          <NavLink to={ROUTES.contact} className={navItemClass}>
            {t("nav.contact")}
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            to={ROUTES.contact}
            className="hidden sm:inline-flex items-center rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800 transition-colors"
          >
            {t("common.buttons.contact")}
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? t("common.buttons.close") : t("nav.home")}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-700 hover:bg-ink-50 hover:text-ink-900 transition-colors"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-ink-100 bg-white/95 backdrop-blur"
        >
          <nav className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-1 text-ink-700">
            <NavLink to={ROUTES.home} end className={mobileItemClass}>
              {t("nav.home")}
            </NavLink>
            <NavLink to={ROUTES.services} className={mobileItemClass}>
              {t("nav.services")}
            </NavLink>
            <NavLink to={ROUTES.about} className={mobileItemClass}>
              {t("nav.about")}
            </NavLink>
            <NavLink to={ROUTES.contact} className={mobileItemClass}>
              {t("nav.contact")}
            </NavLink>
            <Link
              to={ROUTES.contact}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-ink-900 px-4 py-3 text-sm font-medium text-white hover:bg-ink-800 transition-colors sm:hidden"
            >
              {t("common.buttons.contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
