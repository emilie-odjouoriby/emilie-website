import type { ReactNode } from "react";

type PillTone = "beige" | "corail" | "jaune";

interface PillProps {
  children: ReactNode;
  tone?: PillTone;
  className?: string;
}

// Contraste vérifié (Phase 1) : texte encre sur les trois tons, jamais blanc/jaune en texte.
const TONE_CLASSES: Record<PillTone, string> = {
  beige: "bg-beige-clair text-encre",
  corail: "bg-corail text-encre",
  jaune: "bg-jaune-soleil text-encre",
};

export function Pill({ children, tone = "beige", className = "" }: PillProps) {
  return (
    <span
      className={`inline-flex items-center rounded-pill px-4 py-1.5 text-xs font-semibold uppercase tracking-wide ${TONE_CLASSES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
