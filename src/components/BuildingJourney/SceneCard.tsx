import type { Scene } from "./scenes";

type Props = {
  scene: Scene;
  /** Adds a className hook so the parent (GSAP) can target this card. */
  index: number;
};

export default function SceneCard({ scene, index }: Props) {
  const baseClass = "bj-scene-card";
  const kindClass = `bj-scene-${scene.kind}`;
  const indexClass = `bj-scene-${index}`;

  if (scene.kind === "opening" || scene.kind === "final") {
    return (
      <div
        className={`${baseClass} ${kindClass} ${indexClass} max-w-xl`}
        data-scene-index={index}
      >
        {scene.chapter && (
          <div className="text-xs uppercase tracking-[0.2em] text-brand-600 font-medium mb-4">
            {scene.chapter}
          </div>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tightish text-ink-900 leading-[1.15]">
          {scene.title}
        </h1>
        {scene.subtitle && (
          <p className="mt-5 text-base md:text-lg text-ink-500 leading-relaxed max-w-lg">
            {scene.subtitle}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {scene.ctaPrimary && (
            <a
              href={scene.ctaPrimary.href}
              className="inline-flex items-center rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-ink-800 transition-colors"
            >
              {scene.ctaPrimary.label}
            </a>
          )}
          {scene.ctaSecondary && (
            <a
              href={scene.ctaSecondary.href}
              className="inline-flex items-center rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-medium text-ink-900 hover:bg-ink-50 transition-colors"
            >
              {scene.ctaSecondary.label}
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${baseClass} ${kindClass} ${indexClass} max-w-xl`}
      data-scene-index={index}
    >
      {scene.chapter && (
        <div className="text-xs uppercase tracking-[0.2em] text-brand-600 font-medium mb-4">
          {scene.chapter}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tightish text-ink-900 leading-[1.15]">
        {scene.title}
      </h2>

      {scene.problem && (
        <div className="mt-7 inline-flex max-w-md items-start gap-3 rounded-2xl rounded-tl-sm border border-ink-200 bg-white px-4 py-3 shadow-card">
          <span className="mt-1 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-ink-100 text-ink-700 text-xs font-medium">
            VL
          </span>
          <span className="text-sm md:text-[15px] text-ink-700 leading-relaxed">
            „{scene.problem}"
          </span>
        </div>
      )}

      {scene.solutionTitle && (
        <div className="mt-5 max-w-md rounded-2xl border border-brand-100 bg-brand-50/70 p-5 shadow-card">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-brand-700 font-medium">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
            ISMAA
          </div>
          <h3 className="mt-2 text-lg md:text-xl font-semibold text-ink-900">
            {scene.solutionTitle}
          </h3>
          {scene.solutionBody && (
            <p className="mt-2 text-sm md:text-[15px] text-ink-700 leading-relaxed">
              {scene.solutionBody}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
