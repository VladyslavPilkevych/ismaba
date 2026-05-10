import { useTranslation } from "react-i18next";
import { useReveal } from "../../hooks/useReveal";

type Step = { title: string; text: string };

export default function HowItWorksSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { t } = useTranslation();
  const steps = t("home.howItWorks.steps", { returnObjects: true }) as Step[];

  return (
    <section id="ako-to-funguje" className="bg-ink-50 py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            {t("home.howItWorks.label")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
            {t("home.howItWorks.title")}
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="relative rounded-3xl border border-ink-100 bg-white p-6 transition-shadow duration-300 hover:shadow-soft"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
                  {idx + 1}
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
                  {t("home.howItWorks.stepLabel", { n: idx + 1 })}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tightish text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
