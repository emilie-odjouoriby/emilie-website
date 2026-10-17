import type { ReactNode } from "react";

interface EyebrowProps {
  index?: string;
  children: ReactNode;
  className?: string;
}

export function Eyebrow({ index, children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-encre/70 ${className}`}
    >
      {index ? (
        <>
          <span>{index}</span>
          <span aria-hidden>·</span>
        </>
      ) : null}
      <span>{children}</span>
    </p>
  );
}
