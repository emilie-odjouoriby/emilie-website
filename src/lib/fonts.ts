import localFont from "next/font/local";

// Polices de la charte graphique (CLAUDE.md §3.2), fichiers woff2 dans public/fonts/.
export const signatureFont = localFont({
  src: "../../public/fonts/Autography.woff2",
  variable: "--font-signature",
  weight: "400",
  display: "swap",
});

// Cocomat Pro utilisée pour les titres ET le texte courant (retour d'Émilie : Holla
// jugée moins lisible). --font-display pointe désormais vers le même fichier que
// --font-body, aucun composant à modifier (la classe font-display reste valide).
export const displayFont = localFont({
  src: "../../public/fonts/CocomatPro-Regular.woff2",
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

export const bodyFont = localFont({
  src: "../../public/fonts/CocomatPro-Regular.woff2",
  variable: "--font-body",
  weight: "400",
  display: "swap",
});
