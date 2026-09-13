import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WhyMeSection() {
  return (
    <section className="bg-beige-clair/40 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <RevealOnScroll>
          <Eyebrow index="02">Pourquoi moi</Eyebrow>
          <h2 className="mt-4 font-display text-3xl text-encre">
            Pourquoi faire appel à <span className="italic text-corail">moi</span> ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Je connais les enjeux juridiques et les réalités humaines qui se rencontrent dans la vie
            d&apos;une entreprise.
          </p>
          <p className="mt-4 text-lg font-semibold text-encre">
            Je ne sécurise pas qu&apos;une opération : je sécurise un passage.
          </p>
          <p className="mt-4 text-encre/80">
            J&apos;ai accompagné la création de plus de 500 sociétés et plus de 50 transmissions ces
            dix dernières années.
          </p>

          <h3 className="mt-10 font-display text-xl text-encre">
            Je travaille en complément de vos conseils habituels
          </h3>
          <p className="mt-4 text-encre/80">
            Je ne remplace pas votre avocat, votre expert-comptable, votre notaire ou votre conseil en
            cession. J&apos;interviens à leurs côtés pour vous aider à prendre du recul, préparer les
            décisions et travailler les dimensions humaines et organisationnelles de votre projet.
          </p>

          <p className="mt-8 text-sm text-encre/70">
            Basée au Bignon, j&apos;interviens en Pays de la Loire et en Bretagne sud, et en visio
            partout ailleurs.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="relative hidden aspect-square md:block">
          <div className="absolute inset-0 rounded-lg bg-dore/20" />
          <DecorativeBlob className="inset-x-12 top-12 bottom-24 bg-corail/60" />
          <DecorativeBlob className="bottom-8 left-16 right-24 top-1/2 bg-beige-clair" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
