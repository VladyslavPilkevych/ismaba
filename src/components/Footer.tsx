export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-500 text-white font-semibold">
              I
            </span>
            <span className="text-base font-semibold tracking-tightish text-ink-900">
              ISMAA
            </span>
          </div>
          <p className="mt-4 text-sm text-ink-500 max-w-xs">
            Správa bytových domov — technický, ekonomický a poradenský servis
            pre vlastníkov bytov a nebytových priestorov.
          </p>
        </div>

        <div className="text-sm text-ink-700">
          <h4 className="text-xs uppercase tracking-wider text-ink-500 mb-3">
            Kontakt
          </h4>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-ink-900" href="tel:+421905352554">
                0905 352 554
              </a>
            </li>
            <li>
              <a className="hover:text-ink-900" href="mailto:info@ismaa.sk">
                info@ismaa.sk
              </a>
            </li>
            <li>Handlovská 2981/28</li>
          </ul>
        </div>

        <div className="text-sm text-ink-700">
          <h4 className="text-xs uppercase tracking-wider text-ink-500 mb-3">
            Služby
          </h4>
          <ul className="space-y-2">
            <li>Technická správa</li>
            <li>Ekonomická správa</li>
            <li>Poradenstvo a modernizácia</li>
            <li>Komunikácia s vlastníkmi</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-ink-500 flex flex-col sm:flex-row gap-2 sm:justify-between">
          <span>© {new Date().getFullYear()} ISMAA. Všetky práva vyhradené.</span>
          <span>Správa bytových domov · Slovensko</span>
        </div>
      </div>
    </footer>
  );
}
