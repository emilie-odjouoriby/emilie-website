import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function TestimonialSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <DecorativeBlob className="-left-20 top-1/2 h-72 w-72 -translate-y-1/2 bg-beige-clair" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <RevealOnScroll>
          <Eyebrow index="03" className="justify-center">
            Ce que l&apos;on dit de moi
          </Eyebrow>
          <span className="mt-6 block font-display text-6xl leading-none text-corail/40">
            &ldquo;
          </span>
          <blockquote className="-mt-6 font-display text-2xl italic leading-snug text-encre md:text-3xl">
            « Émilie se distingue par ses qualités de pleine écoute, à la fois
            attentive et silencieuse, une intuition fine et une profonde volonté
            de respect d&apos;elle-même et des autres. »
          </blockquote>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-dore">
            — Céline, consultante en stratégie d&apos;entreprise et coach
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
