import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks/useReveal";
import { ROUTES } from "../router/paths";

type Item = { title: string; text: string };

function MissionVisual() {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full text-brand-600"
      aria-hidden="true"
    >
      <rect width="320" height="220" rx="20" fill="#F8FAFC" />
      <rect
        x="56"
        y="60"
        width="72"
        height="120"
        fill="#EEF6F5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="136"
        y="40"
        width="84"
        height="140"
        fill="#D6ECEA"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <rect
        x="228"
        y="78"
        width="60"
        height="102"
        fill="#EEF6F5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <g opacity="0.6">
        <path
          d="M64 80h56M64 100h56M64 120h56M64 140h56M64 160h56"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path d="M80 60v120M104 60v120" stroke="currentColor" strokeWidth="1" />
        <path
          d="M144 60h68M144 80h68M144 100h68M144 120h68M144 140h68M144 160h68"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M164 40v140M188 40v140"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M236 96h44M236 116h44M236 136h44M236 156h44"
          stroke="currentColor"
          strokeWidth="1"
        />
        <path
          d="M252 78v102M268 78v102"
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>
      <rect x="172" y="148" width="16" height="32" fill="#1F8C84" />
      <path
        d="M40 180h240"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  const { t } = useTranslation();
  const mission = useReveal<HTMLDivElement>();
  const valuesReveal = useReveal<HTMLDivElement>();
  const diffReveal = useReveal<HTMLDivElement>();
  const ctaReveal = useReveal<HTMLDivElement>();

  const values = t("about.values.items", { returnObjects: true }) as Item[];
  const differences = t("about.differences.items", {
    returnObjects: true,
  }) as Item[];

  return (
    <>
      <section className="relative overflow-hidden bg-soft-radial">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl reveal is-visible">
            <span className="inline-flex items-center rounded-full border border-brand-100 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
              {t("about.hero.label")}
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tightish text-ink-900 sm:text-5xl md:text-[3.25rem]">
              {t("about.hero.title")}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
              {t("about.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div
          ref={mission.ref}
          className={`mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 reveal ${mission.visible ? "is-visible" : ""}`}
        >
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
              {t("about.mission.label")}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
              {t("about.mission.title")}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-700">
              {t("about.mission.text")}
            </p>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand-100/60 via-white to-ink-50 blur-2xl"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
              <div className="aspect-[16/11] w-full">
                <MissionVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-20 md:py-28">
        <div
          ref={valuesReveal.ref}
          className={`mx-auto max-w-6xl px-6 reveal ${valuesReveal.visible ? "is-visible" : ""}`}
        >
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
              {t("about.values.label")}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
              {t("about.values.title")}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group rounded-3xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-card"
              >
                <div
                  className="h-px w-10 bg-brand-500 transition-all duration-300 group-hover:w-16"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-base font-semibold tracking-tightish text-ink-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div
          ref={diffReveal.ref}
          className={`mx-auto max-w-6xl px-6 reveal ${diffReveal.visible ? "is-visible" : ""}`}
        >
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
              {t("about.differences.label")}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
              {t("about.differences.title")}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {differences.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-ink-100 bg-white p-6 transition-shadow duration-300 hover:shadow-card"
              >
                <h3 className="text-lg font-semibold tracking-tightish text-ink-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-radial py-20 md:py-28">
        <div
          ref={ctaReveal.ref}
          className={`mx-auto max-w-4xl px-6 text-center reveal ${ctaReveal.visible ? "is-visible" : ""}`}
        >
          <h2 className="text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
            {t("about.cta.title")}
          </h2>
          <div className="mt-8 flex justify-center">
            <Link
              to={ROUTES.contact}
              className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
            >
              {t("about.cta.button")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
