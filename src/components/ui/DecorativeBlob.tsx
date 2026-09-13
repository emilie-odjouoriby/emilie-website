interface DecorativeBlobProps {
  className?: string;
}

// Forme organique décorative inspirée du mockup — purement visuelle, masquée aux lecteurs d'écran.
export function DecorativeBlob({ className = "" }: DecorativeBlobProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-[63%_37%_54%_46%/40%_45%_55%_60%] ${className}`}
    />
  );
}
