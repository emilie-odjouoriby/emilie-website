import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-dore/40 bg-beige-clair/60 px-2.5 py-1 text-xs font-medium text-encre ${className}`}
    >
      {children}
    </span>
  );
}
