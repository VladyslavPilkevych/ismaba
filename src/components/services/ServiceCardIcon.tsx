import type { FallbackKind } from "./ServiceFallbackIcon";

const baseClass = "h-7 w-7 text-brand-700";

export default function ServiceCardIcon({ kind }: { kind: FallbackKind }) {
  switch (kind) {
    case "zateplenie":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <path
            d="M4 21V9l8-5 8 5v12"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            d="M4 21h16M8 13h2M8 17h2M14 13h2M14 17h2"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case "kurenie":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <rect
            x="5"
            y="6"
            width="14"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M9 6v13M13 6v13M17 6v13"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <path
            d="M5 9H3M5 16H3M21 9h-2M21 16h-2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "elektrina":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <path
            d="M13 3 5 13h6l-1 8 8-10h-6l1-8z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );

    case "financovanie":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="13"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M3 10h18" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="16" cy="15" r="1.6" fill="currentColor" />
        </svg>
      );

    case "poistenie":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <path
            d="M12 3l8 2.5V11c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V5.5L12 3z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 12l2.2 2.2L15 10.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
