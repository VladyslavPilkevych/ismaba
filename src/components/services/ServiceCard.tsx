import ServiceCardIcon from "./ServiceCardIcon";
import type { FallbackKind } from "./ServiceFallbackIcon";

export interface ServiceItem {
  id: FallbackKind;
  title: string;
  description: string;
  bullets: string[];
  animation: string;
  intro: string;
  includes: string[];
  helps: string[];
  suitableFor: string;
}

interface Props {
  service: ServiceItem;
  onOpen: (id: FallbackKind) => void;
}

export default function ServiceCard({ service, onOpen }: Props) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-card md:p-8">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 transition-colors duration-300 group-hover:bg-brand-100">
        <ServiceCardIcon kind={service.id} />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold tracking-tightish text-ink-900">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          {service.description}
        </p>

        <ul className="mt-4 space-y-2">
          {service.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-2 text-sm text-ink-700"
            >
              <span
                className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500"
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-2">
          <button
            type="button"
            onClick={() => onOpen(service.id)}
            className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
            aria-haspopup="dialog"
          >
            Zistiť viac
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M3.5 8h9m0 0L9 4.5M12.5 8 9 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
