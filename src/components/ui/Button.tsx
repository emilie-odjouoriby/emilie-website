import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "bg-corail text-encre hover:bg-corail/90",
  secondary:
    "border border-dore/40 bg-beige-clair text-encre hover:bg-beige-clair/70",
  ghost: "bg-transparent text-encre hover:bg-beige-clair/60",
  // Bleu de la charte : touche ponctuelle uniquement, jamais en grande surface —
  // encre est la seule couleur de la charte offrant un contraste AA sur ce bleu (~7.9:1).
  accent: "bg-bleu text-encre shadow-md hover:bg-bleu/90",
};

// Contraste vérifié (Phase 1) : toujours du texte encre sur corail, jamais blanc.
const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-encre";

interface CommonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
    href?: undefined;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  if (rest.href) {
    const { href, ...anchorProps } = rest as LinkButtonProps;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = rest as NativeButtonProps;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
