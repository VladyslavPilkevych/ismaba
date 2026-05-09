export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-ink-100">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-white font-semibold">
            I
          </span>
          <span className="text-base font-semibold tracking-tightish text-ink-900">
            ISMAA
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-700">
          <a href="#sluzby" className="hover:text-ink-900 transition-colors">
            Služby
          </a>
          <a href="#cesta" className="hover:text-ink-900 transition-colors">
            Ako to funguje
          </a>
          <a href="#kontakt" className="hover:text-ink-900 transition-colors">
            Kontakt
          </a>
        </nav>
        <a
          href="#kontakt"
          className="inline-flex items-center rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800 transition-colors"
        >
          Kontaktujte nás
        </a>
      </div>
    </header>
  );
}
