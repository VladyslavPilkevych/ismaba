type FallbackKind =
  | "zateplenie"
  | "kurenie"
  | "elektrina"
  | "financovanie"
  | "poistenie";

const wrapperClass = "h-full w-full text-brand-600";

export default function ServiceFallbackIcon({ kind }: { kind: FallbackKind }) {
  switch (kind) {
    case "zateplenie":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className={wrapperClass}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="28" y="30" width="64" height="70" rx="3" fill="#EEF6F5" />
          <path
            d="M28 30h64v70H28z"
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.4"
          />
          <path
            d="M28 30l32-14 32 14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            fill="#D6ECEA"
          />
          <g opacity="0.7">
            <path d="M36 44h48M36 56h48M36 68h48M36 80h48" stroke="currentColor" strokeWidth="1" />
            <path d="M44 36v60M60 36v60M76 36v60" stroke="currentColor" strokeWidth="1" />
          </g>
          <rect x="52" y="74" width="16" height="24" rx="1" fill="#1F8C84" opacity="0.85" />
          <path d="M16 110h88" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      );

    case "kurenie":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className={wrapperClass}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="32" y="34" width="56" height="56" rx="6" fill="#EEF6F5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M44 34v56M56 34v56M68 34v56M80 34v56"
            stroke="currentColor"
            strokeWidth="1.4"
            opacity="0.5"
          />
          <path d="M32 46h-8M32 78h-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M88 46h8M88 78h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M60 96c4-3 4-7 0-11-4-4-4-9 0-14"
            stroke="#1F8C84"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );

    case "elektrina":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className={wrapperClass}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="60" cy="60" r="40" fill="#EEF6F5" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
          <path
            d="M64 32L44 66h14l-6 22 24-34H62l6-22h-4z"
            fill="#1F8C84"
            stroke="#0F5F59"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "financovanie":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className={wrapperClass}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="20" y="34" width="80" height="56" rx="6" fill="#EEF6F5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M20 50h80" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
          <rect x="30" y="68" width="22" height="14" rx="2" fill="#D6ECEA" stroke="currentColor" strokeWidth="1" />
          <circle cx="80" cy="75" r="8" fill="#1F8C84" />
          <text x="80" y="79" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">€</text>
        </svg>
      );

    case "poistenie":
      return (
        <svg
          viewBox="0 0 120 120"
          fill="none"
          className={wrapperClass}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M60 18l32 10v22c0 22-14 38-32 50-18-12-32-28-32-50V28l32-10z"
            fill="#EEF6F5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M48 60l9 9 16-18"
            stroke="#1F8C84"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
  }
}

export type { FallbackKind };
