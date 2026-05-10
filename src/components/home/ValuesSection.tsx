import { useReveal } from "../../hooks/useReveal";

const values = [
  {
    title: "Informovanosť",
    text: "Vlastníci majú mať jasný prehľad o tom, čo sa v dome deje.",
  },
  {
    title: "Serióznosť",
    text: "Správa domu musí byť zodpovedná, vecná a spoľahlivá.",
  },
  {
    title: "Manažment",
    text: "Technické, ekonomické a organizačné veci potrebujú jasné vedenie.",
  },
  {
    title: "Aktivita",
    text: "Problémy netreba odkladať. Treba ich riešiť včas.",
  },
];

export default function ValuesSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="hodnoty" className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            Hodnoty
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
            Na čom stojí naša správa
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="group rounded-3xl border border-ink-100 bg-ink-50/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:bg-white hover:shadow-card"
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
  );
}
