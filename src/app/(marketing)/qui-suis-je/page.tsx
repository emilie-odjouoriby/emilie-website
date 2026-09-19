import Image from "next/image";
import { ClosingCtaSection } from "@/components/sections/ClosingCtaSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export default function QuiSuisJePage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
        <RevealOnScroll>
          <h1 className="font-display text-4xl text-encre md:text-5xl">Qui suis-je</h1>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Je suis professionnelle du droit depuis 2007, et coach professionnelle accréditée ICF.
            Praticienne en programmation neurolinguistique (PNL), j&apos;allie ces deux expertises
            pour accompagner mes clients TPE-PME, de 0 à 250 salariés.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Je travaille en complément de vos conseils habituels et en lien avec eux lorsque cela
            est nécessaire.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Basée au Bignon, en Loire-Atlantique, j&apos;interviens en présentiel en Pays de la
            Loire et en Bretagne sud, et en visio partout ailleurs, y compris pour les entrepreneurs
            que j&apos;accompagne au Bénin.
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <RevealOnScroll>
            <h2 className="font-display text-2xl text-encre">
              Une expérience concrète de l&apos;entreprise
            </h2>
            <p className="mt-4 text-encre/80">
              Avec plus de 500 sociétés créées et plus de 50 transmissions réalisées ces dix
              dernières années, j&apos;accompagne les dirigeants et les associés dans leurs projets
              entrepreneuriaux.
            </p>
            <p className="mt-4 text-encre/80">
              Au fil de ces expériences, j&apos;ai constaté que les difficultés rencontrées par les
              dirigeants ne sont pas uniquement juridiques ou techniques.
            </p>
            <p className="mt-4 text-encre/80">
              Une transmission/reprise peut être juridiquement bien préparée et rester difficile à
              vivre pour le dirigeant.
            </p>
            <p className="mt-4 text-encre/80">
              Des associés peuvent avoir toutes les compétences nécessaires et ne plus réussir à
              travailler ensemble.
            </p>
            <p className="mt-4 text-encre/80">
              Depuis 2020, j&apos;accompagne également mon mari dans son projet entrepreneurial.
            </p>
            <p className="mt-4 text-encre/80">
              Cette expérience a une place importante dans mon approche, car elle me permet de
              connaître aussi l&apos;entreprise de l&apos;intérieur, les questions d&apos;un
              dirigeant, les décisions à prendre et la place que l&apos;entreprise peut prendre
              dans la vie personnelle.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="relative hidden md:block">
            <DecorativeBlob className="-right-6 -top-6 h-28 w-28 bg-corail/40" />
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/photos/photo3.webp"
                alt="Émilie Odjouoriby"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <TestimonialSection />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <RevealOnScroll>
          <h2 className="font-display text-2xl text-encre">Au-delà de l&apos;entreprise</h2>
          <p className="mt-4 text-encre/80">
            Franco-béninoise passionnée par la découverte des cultures, je partage mon temps entre
            la France et le Bénin, au travers de projets familiaux, professionnels et humanitaires.
          </p>
          <p className="mt-4 text-encre/80">
            J&apos;accompagne aussi, en parallèle, des particuliers dans des démarches de coaching
            personnel notamment au travers de séjours au Bénin.
          </p>
        </RevealOnScroll>
      </section>

      <ClosingCtaSection />
    </>
  );
}
