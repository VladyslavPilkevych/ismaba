import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServiceAnimation from "./ServiceAnimation";
import ServiceFallbackIcon from "./ServiceFallbackIcon";
import type { ServiceItem } from "./ServiceCard";
import { ROUTES } from "../../router/paths";

interface Props {
  service: ServiceItem | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: Props) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!service) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [service, onClose]);

  if (!service) return null;

  const titleId = `service-modal-title-${service.id}`;
  const title = t(`services.${service.id}.title`);
  const intro = t(`services.${service.id}.intro`);
  const includes = t(`services.${service.id}.includes`, {
    returnObjects: true,
  }) as string[];
  const helps = t(`services.${service.id}.helps`, {
    returnObjects: true,
  }) as string[];
  const suitableFor = t(`services.${service.id}.suitableFor`);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink-900/40 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[940px] max-h-[92vh] overflow-y-auto rounded-t-3xl bg-white shadow-soft sm:max-h-[88vh] sm:rounded-3xl">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label={t("common.buttons.closeAria")}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-100 bg-white text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/40"
        >
          <svg
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M4 4l8 8M12 4l-8 8"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="grid gap-0 md:grid-cols-[35%_65%]">
          <div className="bg-gradient-to-br from-ink-50 to-white p-6 md:border-r md:border-ink-100 md:p-8">
            <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white">
              <div className="aspect-square w-full">
                <div className="grid h-full w-full place-items-center p-5">
                  <ServiceAnimation
                    src={service.animation}
                    label={title}
                    fallback={
                      <div className="h-full max-h-28 w-full max-w-[120px]">
                        <ServiceFallbackIcon kind={service.id} />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8 md:px-10">
            <span className="text-xs font-medium uppercase tracking-wider text-brand-700">
              {t("servicesPage.modal.label")}
            </span>
            <h2
              id={titleId}
              className="mt-2 text-2xl font-semibold tracking-tightish text-ink-900 sm:text-3xl"
            >
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700 sm:text-base">
              {intro}
            </p>

            <Section title={t("servicesPage.modal.includes")}>
              <ul className="space-y-1.5">
                {includes.map((item) => (
                  <BulletRow key={item}>{item}</BulletRow>
                ))}
              </ul>
            </Section>

            <Section title={t("servicesPage.modal.helps")}>
              <ul className="space-y-1.5">
                {helps.map((item) => (
                  <BulletRow key={item}>{item}</BulletRow>
                ))}
              </ul>
            </Section>

            <Section title={t("servicesPage.modal.suitableFor")}>
              <p className="text-sm leading-relaxed text-ink-700">
                {suitableFor}
              </p>
            </Section>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to={ROUTES.contact}
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-800"
              >
                {t("common.buttons.contact")}
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:border-ink-900"
              >
                {t("common.buttons.close")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-xs font-medium uppercase tracking-wider text-ink-500">
        {title}
      </h3>
      <div className="mt-2.5">{children}</div>
    </div>
  );
}

function BulletRow({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-ink-700">
      <span
        className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500"
        aria-hidden="true"
      />
      <span>{children}</span>
    </li>
  );
}
