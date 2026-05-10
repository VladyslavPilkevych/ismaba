import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../router/paths";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinkClass = "hover:text-ink-900 transition-colors";

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `${navLinkClass} ${isActive ? "text-ink-900 font-medium" : ""}`;

export default function Header() {
  const { t } = useTranslation();

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
        </div>
      </div>
    </header>
  );
}
