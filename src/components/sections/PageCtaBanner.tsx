import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface PageCtaBannerProps {
  heading?: string;
  children: ReactNode;
  buttonLabel: string;
  buttonHref: string;
}

export function PageCtaBanner({
  heading,
  children,
  buttonLabel,
  buttonHref,
}: PageCtaBannerProps) {
  return (
    <section className="px-4 rounded-t-lg bg-corail py-20 sm:px-6 md:px-10">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <RevealOnScroll>
          {heading ? (
            <h2 className="font-display text-3xl text-encre md:text-4xl">
              {heading}
            </h2>
          ) : null}
          <p
            className={`text-lg leading-relaxed text-encre/80 ${heading ? "mt-6" : ""}`}
          >
            {children}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* variant="secondary" pour rester visible sur le fond corail de la section (primary s'y fondrait). */}
            <Button href={buttonHref} variant="secondary">
              {buttonLabel}
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
