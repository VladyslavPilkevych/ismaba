import { Link, NavLink } from "react-router-dom";

const navLinkClass = "hover:text-ink-900 transition-colors";

const navItemClass = ({ isActive }: { isActive: boolean }) =>
  `${navLinkClass} ${isActive ? "text-ink-900 font-medium" : ""}`;

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-ink-100">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-white font-semibold">
            I
          </span>
          <span className="text-base font-semibold tracking-tightish text-ink-900">
            ISMAA
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-700">
          <NavLink to="/services" className={navItemClass}>
            Služby
          </NavLink>
          <NavLink to="/about" className={navItemClass}>
            O nás
          </NavLink>
          <NavLink to="/contact" className={navItemClass}>
            Kontakt
          </NavLink>
        </nav>
        <Link
          to="/contact"
          className="inline-flex items-center rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800 transition-colors"
        >
          Kontaktujte nás
        </Link>
      </div>
    </header>
  );
}
