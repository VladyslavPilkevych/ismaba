import { Link } from "react-router-dom";
import { useReveal } from "../../hooks/useReveal";

export default function ServicesCTA() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="bg-soft-radial py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-4xl px-6 text-center reveal ${visible ? "is-visible" : ""}`}
      >
        <h2 className="text-3xl font-semibold tracking-tightish text-ink-900 sm:text-4xl">
          Potrebujete vyriešiť službu pre váš bytový dom?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
          Napíšte nám a pozrieme sa na možnosti riešenia pre váš dom.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
          >
            Kontaktujte nás
          </Link>
        </div>
      </div>
    </section>
  );
}
