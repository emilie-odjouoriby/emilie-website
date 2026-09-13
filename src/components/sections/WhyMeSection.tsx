import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function WhyMeSection() {
  return (
    <section className="bg-beige-clair/40 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <RevealOnScroll>
          <h2 className="font-display text-3xl text-encre">Pourquoi faire appel à moi ?</h2>
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
      </div>
    </section>
  );
}
