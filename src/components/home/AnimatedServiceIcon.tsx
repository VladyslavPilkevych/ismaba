type IconKind =
  | "lamp"
  | "pipe"
  | "elevator"
  | "chart"
  | "documents"
  | "messages";

interface Props {
  kind: IconKind;
}

const baseClass = "h-12 w-12 text-brand-600";

export default function AnimatedServiceIcon({ kind }: Props) {
  switch (kind) {
    case "lamp":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <circle
            cx="24"
            cy="22"
            r="12"
            className="origin-center scale-75 fill-brand-300/0 opacity-0 transition-all duration-500 ease-out [.group:hover_&]:scale-100 [.group:hover_&]:fill-brand-300/40 [.group:hover_&]:opacity-100 [.group:focus-within_&]:scale-100 [.group:focus-within_&]:fill-brand-300/40 [.group:focus-within_&]:opacity-100"
          />
          <path
            d="M24 9c-5 0-9 3.6-9 8.4 0 3 1.6 5.3 3.7 6.8.6.4 1 1 1 1.7v1.6c0 .8.6 1.5 1.5 1.5h5.6c.9 0 1.5-.7 1.5-1.5v-1.6c0-.7.4-1.3 1-1.7 2.1-1.5 3.7-3.8 3.7-6.8 0-4.8-4-8.4-9-8.4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className="fill-white transition-colors duration-300 [.group:hover_&]:fill-brand-50 [.group:focus-within_&]:fill-brand-50"
          />
          <path
            d="M20 32h8M21.5 35.5h5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    case "pipe":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <path
            id="ismaba-pipe-path"
            d="M6 14h12a4 4 0 0 1 4 4v12a4 4 0 0 0 4 4h16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            className="opacity-80"
          />
          <circle r="2.4" fill="#1F8C84" className="ismaba-flow-dot opacity-0">
            <animateMotion
              dur="1.8s"
              repeatCount="indefinite"
              path="M6 14h12a4 4 0 0 1 4 4v12a4 4 0 0 0 4 4h16"
            />
          </circle>
        </svg>
      );

    case "elevator":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <rect
            x="10"
            y="6"
            width="28"
            height="36"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
            className="fill-white"
          />
          <line
            x1="24"
            y1="6"
            x2="24"
            y2="42"
            stroke="currentColor"
            strokeWidth="1.2"
            className="opacity-30"
          />
          <rect
            x="13"
            y="11"
            width="8"
            height="16"
            rx="1.5"
            className="ismaba-elevator-car fill-brand-100"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <rect
            x="27"
            y="21"
            width="8"
            height="16"
            rx="1.5"
            className="ismaba-elevator-car-right fill-brand-100"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      );

    case "chart":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <path
            d="M8 40h32"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <rect
            x="12"
            y="28"
            width="6"
            height="10"
            rx="1.5"
            className="ismaba-bar fill-brand-300 origin-bottom"
          />
          <rect
            x="21"
            y="20"
            width="6"
            height="18"
            rx="1.5"
            className="ismaba-bar fill-brand-500 origin-bottom"
            style={{ animationDelay: "60ms" }}
          />
          <rect
            x="30"
            y="12"
            width="6"
            height="26"
            rx="1.5"
            className="ismaba-bar fill-brand-700 origin-bottom"
            style={{ animationDelay: "120ms" }}
          />
        </svg>
      );

    case "documents":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <rect
            x="12"
            y="12"
            width="22"
            height="28"
            rx="2.5"
            className="ismaba-doc ismaba-doc-1 fill-white"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <rect
            x="9"
            y="9"
            width="22"
            height="28"
            rx="2.5"
            className="ismaba-doc ismaba-doc-2 fill-white"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <line
            x1="14"
            y1="17"
            x2="26"
            y2="17"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-60"
          />
          <line
            x1="14"
            y1="22"
            x2="26"
            y2="22"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-40"
          />
          <line
            x1="14"
            y1="27"
            x2="22"
            y2="27"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            className="opacity-30"
          />
        </svg>
      );

    case "messages":
      return (
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={baseClass}
          aria-hidden="true"
        >
          <path
            d="M8 14a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-8l-6 5v-5h-2a4 4 0 0 1-4-4v-8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className="ismaba-bubble ismaba-bubble-1 fill-white"
          />
          <path
            d="M18 28a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2v4l-5-4h-7a4 4 0 0 1-4-4v-6Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            className="ismaba-bubble ismaba-bubble-2 fill-brand-50"
          />
        </svg>
      );
  }
}
