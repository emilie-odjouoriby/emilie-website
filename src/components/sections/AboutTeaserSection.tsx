import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";
import photo from "../../../public/photos/photo3.webp";

export function AboutTeaserSection() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <RevealOnScroll className="relative order-2 hidden md:order-1 md:block">
          <DecorativeBlob className="-bottom-6 -left-6 h-32 w-32 bg-dore/50" />
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={photo}
              alt="Portrait d'Émilie Odjouoriby"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="order-1 md:order-2">
          <Eyebrow index="04">À propos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-encre">
            Qui suis-je ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Je suis professionnelle du droit depuis 2007, et coach
            professionnelle accréditée ICF. Praticienne en programmation
            neurolinguistique (PNL), j&apos;allie ces deux expertises pour
            accompagner mes clients TPE-PME, de 0 à 250 salariés.
          </p>
          <Button href={ROUTES.quiSuisJe} variant="secondary" className="mt-8">
            En savoir plus sur mon parcours
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
