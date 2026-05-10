import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-soft-radial">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl reveal is-visible">
          <span className="inline-flex items-center rounded-full border border-brand-100 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Služby ISMAA
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tightish text-ink-900 sm:text-5xl md:text-[3.25rem]">
            Služby pre obnovu a správu bytových domov
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
            Pomáhame vlastníkom riešiť technické, ekonomické a organizačné
            potreby domu — od zateplenia a kúrenia až po financovanie obnovy a
            poistenie.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
            >
              Kontaktujte nás
            </Link>
            <a
              href="#postup"
              className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900"
            >
              Pozrieť postup spolupráce
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
