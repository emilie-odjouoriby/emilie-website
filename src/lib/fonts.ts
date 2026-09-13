import { Beau_Rivage, Bricolage_Grotesque, Inter } from "next/font/google";

// TEMPORAIRE — polices de secours en attendant les fichiers licenciés
// Autography / Holla / Cocomat Pro (CLAUDE.md §3.2). Ne modifier QUE ce fichier
// pour basculer vers next/font/local dès réception des woff2.

export const signatureFont = Beau_Rivage({
  variable: "--font-signature",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});
