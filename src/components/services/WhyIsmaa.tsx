import { useReveal } from "../../hooks/useReveal";

const reasons = [
  {
    title: "Prehľad",
    text: "Jasný pohľad na stav domu, financie aj plán prác. Žiadne nejasnosti.",
  },
  {
    title: "Zodpovednosť",
    text: "Vecný prístup, dohodnuté termíny a transparentná komunikácia s vlastníkmi.",
  },
  {
    title: "Komunikácia",
    text: "Schôdze, hlasovania a priebežné informovanie, aby každý vedel, čo sa deje.",
  },
  {
    title: "Dlhodobý plán",
    text: "Riešenia nielen pre dnešok — počítame s tým, čo dom potrebuje o päť rokov.",
  },
];

export default function WhyIsmaa() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl px-6 reveal ${visible ? "is-visible" : ""}`}
      >
        <div className="max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
            Prečo ISMAA
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
            Prečo riešiť služby s ISMAA
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-3xl border border-ink-100 bg-ink-50/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:bg-white hover:shadow-card"
            >
              <div
                className="h-px w-10 bg-brand-500 transition-all duration-300 group-hover:w-16"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-semibold tracking-tightish text-ink-900">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-700">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
