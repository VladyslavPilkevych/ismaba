import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BuildingSVG from "./BuildingSVG";
import SceneCard from "./SceneCard";
import MobileJourney from "./MobileJourney";
import { scenes, type Scene } from "./scenes";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { useIsMobile } from "../../hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

/**
 * Camera math.
 *  - The building element is positioned absolutely at the top of a viewport
 *    (overflow:hidden) and rendered at its natural aspect ratio (taller than
 *    the viewport). Transform-origin is "50% 0%", so scaling happens around
 *    the horizontal center and the top edge.
 *  - For a focus point f (0..1 of building height) and scale s, the
 *    translateY needed to put that point at the viewport vertical center is:
 *        tY = vH/2 - s * f * bH
 */
function cameraFor(scene: Scene, vH: number, bH: number) {
  return {
    y: vH / 2 - scene.scale * scene.focus * bH,
    scale: scene.scale,
  };
}

function DesktopJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const measure = () => ({
        vH: viewportRef.current?.offsetHeight ?? 700,
        bH: buildingRef.current?.offsetHeight ?? 1920,
      });

      // Initial state — set synchronously so first paint is correct.
      const { vH: v0, bH: b0 } = measure();
      const cam0 = cameraFor(scenes[0], v0, b0);
      gsap.set(buildingRef.current, {
        y: cam0.y,
        scale: cam0.scale,
        transformOrigin: "50% 0%",
        force3D: true,
      });
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 24 });
      });
      const allHighlights = svgRef.current?.querySelectorAll(".bj-highlight");
      if (allHighlights) gsap.set(allHighlights, { opacity: 0 });

      // Master scrubbed timeline.
      const tl = gsap.timeline({
        defaults: { overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressFillRef.current) {
              progressFillRef.current.style.transform = `scaleY(${self.progress})`;
            }
          },
        },
      });

      // 1) Camera moves between scenes (N-1 transitions, duration 1 each).
      for (let i = 1; i < scenes.length; i++) {
        const target = scenes[i];
        tl.to(
          buildingRef.current,
          {
            y: () => {
              const { vH, bH } = measure();
              return cameraFor(target, vH, bH).y;
            },
            scale: () => cameraFor(target, measure().vH, measure().bH).scale,
            ease: "power1.inOut",
            duration: 1,
          },
          i - 1
        );
      }

      // 2) Scene card crossfades.
      scenes.forEach((_, i) => {
        const card = cardsRef.current[i];
        if (!card) return;

        // Fade in
        if (i > 0) {
          tl.to(
            card,
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 },
            i - 0.55
          );
        }

        // Fade out
        if (i < scenes.length - 1) {
          tl.to(
            card,
            { opacity: 0, y: -24, ease: "power2.in", duration: 0.5 },
            i - 0.05
          );
        }
      });

      // 3) Highlight pulses on the active floor.
      scenes.forEach((scene, i) => {
        if (!scene.highlight) return;
        const hl = svgRef.current?.querySelector(`.bj-highlight-${scene.id}`);
        if (!hl) return;
        tl.to(
          hl,
          { opacity: 1, ease: "power2.out", duration: 0.45 },
          i - 0.4
        );
        tl.to(
          hl,
          { opacity: 0, ease: "power2.in", duration: 0.45 },
          i + 0.15
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cesta"
      ref={sectionRef}
      className="relative bg-soft-radial"
      style={{ height: `${scenes.length * 100}vh` }}
      aria-label="Interaktívna cesta budovou"
    >
      <div ref={pinRef} className="h-screen overflow-hidden">
        <div className="h-full mx-auto max-w-7xl px-6 grid grid-cols-12 gap-8 items-center">
          {/* Vertical scroll progress indicator */}
          <div
            className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 h-[58%] w-px bg-ink-100 overflow-hidden"
            aria-hidden="true"
          >
            <div
              ref={progressFillRef}
              className="absolute inset-0 bg-brand-500 origin-top"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          {/* Building viewport */}
          <div className="col-span-5 relative h-[78%]">
            <div
              ref={viewportRef}
              className="absolute inset-0 overflow-hidden rounded-3xl border border-ink-100 bg-white bg-grid shadow-soft"
            >
              <div
                ref={buildingRef}
                className="absolute inset-x-0 top-0 will-change-transform"
              >
                <BuildingSVG
                  ref={svgRef}
                  className="block w-full h-auto select-none"
                />
              </div>
              {/* Soft fades so building edges don't cut sharply */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white via-white/85 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-white/85 to-transparent" />
            </div>

            {/* Tiny chip indicating it's an architectural cutaway */}
            <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-500 shadow-card">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
              Bytový dom — rez
            </div>
          </div>

          {/* Scenes panel */}
          <div className="col-span-7 relative h-[78%]">
            {scenes.map((scene, i) => (
              <div
                key={scene.id}
                ref={(el) => {
                  cardsRef.current[i] = el;
                }}
                className="absolute inset-0 flex items-center"
              >
                <SceneCard scene={scene} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BuildingJourney() {
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  if (reduced || isMobile) {
    return <MobileJourney />;
  }
  return <DesktopJourney />;
}
