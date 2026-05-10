import AnimatedServiceIcon from "./AnimatedServiceIcon";

export interface ServiceItem {
  title: string;
  text: string;
  icon: "lamp" | "pipe" | "elevator" | "chart" | "documents" | "messages";
}

export default function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article
      tabIndex={0}
      className="group relative flex flex-col gap-4 rounded-3xl border border-ink-100 bg-white p-6 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-card focus-visible:-translate-y-1 focus-visible:border-brand-100 focus-visible:shadow-card focus-visible:ring-2 focus-visible:ring-brand-500/40"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 transition-colors duration-300 group-hover:bg-brand-100 group-focus-within:bg-brand-100">
        <AnimatedServiceIcon kind={service.icon} />
      </div>
      <div>
        <h3 className="text-lg font-semibold tracking-tightish text-ink-900">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">
          {service.text}
        </p>
      </div>
    </article>
  );
}
