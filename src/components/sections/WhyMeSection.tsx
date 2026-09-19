import Image from "next/image";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import photo from "../../../public/photos/photo2.webp";

const CREDENTIALS = [
  "Professionnelle du droit depuis 2007",
  "Coach professionnelle certifiée ICF, praticienne PNL",
  "500+ sociétés créées, 50+ transmissions accompagnées",
  "Basée au Bignon, Pays de la Loire & Bretagne sud",
] as const;

export function WhyMeSection() {
  return (
    <section id="pourquoi-moi" className="scroll-mt-24 bg-beige-clair/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <RevealOnScroll>
          <Eyebrow index="02">Pourquoi moi</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-encre">
            Pourquoi faire appel à{" "}
            <span className="italic text-corail">moi</span> ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Je connais les enjeux juridiques et les réalités humaines qui se
            rencontrent dans la vie d&apos;une entreprise.
          </p>
          <p className="mt-4 text-lg font-semibold text-encre">
            Je ne sécurise pas qu&apos;une opération : je sécurise un passage.
          </p>
          <p className="mt-4 text-encre/80">
            J&apos;ai accompagné la création de plus de 500 sociétés et plus de
            50 transmissions ces dix dernières années.
          </p>

          <h3 className="mt-10 font-display text-xl text-encre">
            Je travaille en complément de vos conseils habituels
          </h3>
          <p className="mt-4 text-encre/80">
            Je ne remplace pas votre avocat, votre expert-comptable, votre
            notaire ou votre conseil en cession. J&apos;interviens à leurs côtés
            pour vous aider à prendre du recul, préparer les décisions et
            travailler les dimensions humaines et organisationnelles de votre
            projet.
          </p>

          <p className="mt-8 text-sm text-encre/70">
            Basée au Bignon, j&apos;interviens en Pays de la Loire et en
            Bretagne sud, et en visio partout ailleurs.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="relative">
          <div className="relative hidden md:block">
            <DecorativeBlob className="-right-6 -top-6 h-32 w-32 bg-corail/50" />
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={photo}
                alt="Émilie Odjouoriby, juriste et coach professionnelle"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-dore md:mt-6">
            En bref
          </p>
          <ul className="mt-4 space-y-2">
            {CREDENTIALS.map((credential) => (
              <li key={credential} className="flex gap-2 text-sm text-encre/80">
                <span aria-hidden className="text-corail">
                  —
                </span>
                {credential}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </div>
    </section>
  );
}
