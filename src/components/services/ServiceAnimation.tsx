import { useEffect, useState, type ReactNode } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

interface Props {
  src: string;
  fallback: ReactNode;
  label?: string;
}

type Status = "checking" | "available" | "missing";

export default function ServiceAnimation({ src, fallback, label }: Props) {
  const reduced = usePrefersReducedMotion();
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let cancelled = false;
    setStatus("checking");

    fetch(src, { method: "HEAD" })
      .then((res) => {
        if (cancelled) return;
        setStatus(res.ok ? "available" : "missing");
      })
      .catch(() => {
        if (!cancelled) setStatus("missing");
      });

    return () => {
      cancelled = true;
    };
  }, [src]);

  if (status !== "available") {
    return <>{fallback}</>;
  }

  return (
    <DotLottieReact
      src={src}
      autoplay={!reduced}
      loop
      renderConfig={{ autoResize: true }}
      style={{ width: "100%", height: "100%" }}
      aria-label={label}
    />
  );
}
