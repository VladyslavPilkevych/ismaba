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
 *  - Building wrapper is positioned absolutely at the top of a viewport
 *    (overflow:hidden) and rendered at its natural aspect ratio. Transform
 *    origin is "50% 0%" — scale pivots around the building's horizontal
 *    centre and top edge.
 *  - For focus point f (0..1 of building rendered height) and scale s, the
 *    translateY needed to centre that point in the viewport is:
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
        bH: buildingRef.current?.offsetHeight ?? 1500,
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

      // 1) Camera path (N-1 transitions, duration 1 each).
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
        if (i > 0) {
          tl.to(
            card,
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.5 },
            i - 0.55
          );
        }
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
        tl.to(hl, { opacity: 1, ease: "power2.out", duration: 0.45 }, i - 0.4);
        tl.to(hl, { opacity: 0, ease: "power2.in", duration: 0.45 }, i + 0.15);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cesta"
      ref={sectionRef}
      className="relative bg-sky overflow-hidden"
      style={{ height: `${scenes.length * 100}vh` }}
      aria-label="Interaktívna cesta budovou"
    >
      <div ref={pinRef} className="h-screen w-full overflow-hidden">
        <div className="relative h-full mx-auto max-w-[1400px] px-6 grid grid-cols-12 gap-8 items-stretch">
          {/* Vertical scroll progress on the far left */}
          <div
            className="hidden lg:block absolute left-2 top-1/2 -translate-y-1/2 h-[64%] w-px bg-ink-900/10 overflow-hidden"
            aria-hidden="true"
          >
            <div
              ref={progressFillRef}
              className="absolute inset-0 bg-brand-600 origin-top"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          {/* ----------- Building stage (dominant) ----------- */}
          <div className="col-span-7 relative h-full flex items-center">
            <div
              ref={viewportRef}
              className="relative w-full h-[92%] overflow-hidden"
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
              {/* Soft sky-coloured fades so building edges blend into the sky */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-24"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(216,234,242,0.95), rgba(216,234,242,0))",
                }}
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
                style={{
                  background:
                    "linear-gradient(to top, rgba(242,247,248,0.95), rgba(242,247,248,0))",
                }}
              />
            </div>
          </div>

          {/* ----------- Scenes panel (right) ----------- */}
          <div className="col-span-5 relative h-full">
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
