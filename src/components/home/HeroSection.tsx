import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const trustBadges = [
  "Technická správa",
  "Ekonomická správa",
  "Komunikácia s vlastníkmi",
];

export default function HeroSection() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden bg-soft-radial">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-2 md:gap-10 md:pt-24 md:pb-28">
        <div className="reveal is-visible">
          <span className="inline-flex items-center rounded-full border border-brand-100 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
            Správa bytových domov
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tightish text-ink-900 sm:text-5xl md:text-[3.25rem]">
            Správa bytových domov bez chaosu
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-700 sm:text-lg">
            Technická, ekonomická a komunikačná správa pre bytové domy —
            prehľadne, spoľahlivo a s dôrazom na potreby vlastníkov.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
            >
              Kontaktujte nás
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-5 py-3 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900"
            >
              Pozrieť služby
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1.5 text-xs font-medium text-ink-700 shadow-sm"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-brand-500"
                  aria-hidden="true"
                />
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal is-visible">
          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand-100/60 via-white to-ink-50 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-ink-50 to-white">
                <DotLottieReact
                  src="/animations/city-building-construction.lottie"
                  autoplay={!reduced}
                  loop
                  renderConfig={{ autoResize: true }}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="flex items-center justify-between border-t border-ink-100 px-5 py-3 text-xs text-ink-500">
                <span className="font-medium text-ink-700">ISMAA</span>
                <span>Správa · Servis · Komunikácia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
