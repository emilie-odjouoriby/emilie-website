export const ROUTES = {
  home: "/",
  transmettreCeder: "/transmettre-ceder",
  reprendre: "/reprendre",
  cooperer: "/cooperer",
  quiSuisJe: "/qui-suis-je",
  contact: "/contact",
  diagnostic: "/#diagnostic",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.transmettreCeder, label: "Transmettre ou céder" },
  { href: ROUTES.reprendre, label: "Reprendre" },
  { href: ROUTES.cooperer, label: "CoOpérer" },
  { href: ROUTES.quiSuisJe, label: "Qui suis-je" },
  { href: ROUTES.contact, label: "Contact" },
] as const;
