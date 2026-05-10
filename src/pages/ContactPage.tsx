import { useEffect, useState, type FormEvent } from "react";
import { useReveal } from "../hooks/useReveal";

interface ContactCard {
  label: string;
  value: string;
  href?: string;
  icon: "phone" | "email" | "address" | "callcenter";
}

const cards: ContactCard[] = [
  {
    label: "Telefón",
    value: "0905 352 554",
    href: "tel:+421905352554",
    icon: "phone",
  },
  {
    label: "Email",
    value: "info@ismaa.sk",
    href: "mailto:info@ismaa.sk",
    icon: "email",
  },
  {
    label: "Adresa",
    value: "Handlovská 2981/28",
    icon: "address",
  },
  {
    label: "Call centrum",
    value: "0905 352 554",
    href: "tel:+421905352554",
    icon: "callcenter",
  },
];

const callCenterHours: { day: string; hours: string }[] = [
  { day: "Pondelok", hours: "09:00 – 11:00" },
  { day: "Utorok", hours: "13:00 – 17:00" },
  { day: "Streda", hours: "08:00 – 10:00" },
  { day: "Štvrtok", hours: "08:00 – 12:00" },
];

const ADDRESS = "Handlovská 2981/28";
const MAP_QUERY = encodeURIComponent(ADDRESS);
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_OPEN_HREF = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

function ContactIcon({ kind }: { kind: ContactCard["icon"] }) {
  const cls = "h-5 w-5 text-brand-700";
  switch (kind) {
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M5 4h4l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="m3.5 7 8.5 6 8.5-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "address":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="10"
            r="2.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "callcenter":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M4 12a8 8 0 1 1 16 0v4a2 2 0 0 1-2 2h-1v-6h3"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M4 12v4a2 2 0 0 0 2 2h1v-6H4z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const cardsReveal = useReveal<HTMLDivElement>();
  const hoursReveal = useReveal<HTMLDivElement>();
  const formReveal = useReveal<HTMLDivElement>();
  const mapReveal = useReveal<HTMLDivElement>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-soft-radial">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl reveal is-visible">
            <span className="inline-flex items-center rounded-full border border-brand-100 bg-white/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-700">
              Kontakt
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tightish text-ink-900 sm:text-5xl md:text-[3.25rem]">
              Poďme sa pozrieť na potreby vášho bytového domu.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
              Napíšte nám alebo zavolajte. Radi sa s vami spojíme a dohodneme
              ďalší postup.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div
          ref={cardsReveal.ref}
          className={`mx-auto max-w-6xl px-6 reveal ${cardsReveal.visible ? "is-visible" : ""}`}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => {
              const inner = (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50">
                    <ContactIcon kind={card.icon} />
                  </div>
                  <div className="mt-4 text-xs font-medium uppercase tracking-wider text-ink-500">
                    {card.label}
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink-900">
                    {card.value}
                  </div>
                </>
              );

              const className =
                "block rounded-3xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-card";

              return card.href ? (
                <a key={card.label} href={card.href} className={className}>
                  {inner}
                </a>
              ) : (
                <div key={card.label} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 md:py-20">
        <div
          ref={hoursReveal.ref}
          className={`mx-auto max-w-3xl px-6 reveal ${hoursReveal.visible ? "is-visible" : ""}`}
        >
          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
                  Otváracie hodiny
                </span>
                <h2 className="mt-2 text-2xl font-semibold tracking-tightish text-ink-900 sm:text-3xl">
                  Call centrum
                </h2>
              </div>
              <a
                href="tel:+421905352554"
                className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100"
              >
                <ContactIcon kind="phone" />
                0905 352 554
              </a>
            </div>

            <ul className="mt-6 divide-y divide-ink-100 border-y border-ink-100">
              {callCenterHours.map((row) => (
                <li
                  key={row.day}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-ink-700">{row.day}</span>
                  <span className="font-medium tabular-nums text-ink-900">
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-ink-500">
              Mimo uvedených hodín nás môžete kontaktovať e-mailom alebo cez
              kontaktný formulár.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink-50 py-16 md:py-24">
        <div
          ref={formReveal.ref}
          className={`mx-auto max-w-3xl px-6 reveal ${formReveal.visible ? "is-visible" : ""}`}
        >
          <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-10">
            <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
              Formulár
            </span>
            <h2 className="mt-2 text-2xl font-semibold tracking-tightish text-ink-900 sm:text-3xl">
              Napíšte nám
            </h2>

            {submitted ? (
              <div
                role="status"
                className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-5 text-sm text-brand-900"
              >
                Ďakujeme. Vašu správu sme prijali.
              </div>
            ) : (
              <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="name" label="Meno" required />
                  <Field id="email" label="Email" type="email" required />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="phone" label="Telefón" type="tel" />
                  <Field id="building" label="Názov bytového domu" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-wider text-ink-500"
                  >
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
                  >
                    Odoslať správu
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div
          ref={mapReveal.ref}
          className={`mx-auto max-w-6xl px-6 reveal ${mapReveal.visible ? "is-visible" : ""}`}
        >
          <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-100 px-5 py-4 sm:px-6">
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-500">
                  Adresa
                </span>
                <div className="mt-1 text-sm font-medium text-ink-900">
                  {ADDRESS}
                </div>
              </div>
              <a
                href={MAP_OPEN_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900"
              >
                Otvoriť mapu
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    d="M6 3h7v7M13 3 6.5 9.5M3 6v7h7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <div className="aspect-[16/9] w-full bg-ink-50">
              <iframe
                title={`Mapa — ${ADDRESS}`}
                src={MAP_EMBED_SRC}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}

function Field({ id, label, type = "text", required }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium uppercase tracking-wider text-ink-500"
      >
        {label}
        {required && <span className="text-brand-700"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}
