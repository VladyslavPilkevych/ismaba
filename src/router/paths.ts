export const ROUTES = {
  home: "/",
  services: "/services",
  about: "/about",
  contact: "/contact",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
