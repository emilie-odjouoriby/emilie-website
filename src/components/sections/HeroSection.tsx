import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
      <RevealOnScroll className="max-w-3xl">
        <h1 className="font-display text-4xl leading-tight text-encre md:text-5xl">
          Céder votre entreprise, en reprendre une ou mieux travailler avec vos associés
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-encre/80">
          Céder une entreprise, en reprendre une, ou mieux vous entendre avec vos associés, sont des
          étapes qui engagent l&apos;avenir de l&apos;entreprise et de ceux qui la dirigent. Je vous
          accompagne à chacune de ces étapes, avec un regard qui allie expertise technique et écoute
          humaine.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div
          id="diagnostic"
          className="mt-10 scroll-mt-28 rounded-lg bg-beige-clair p-8 shadow-soft md:flex md:items-center md:justify-between md:gap-8"
        >
          <div className="max-w-xl">
            <Pill tone="jaune">Diagnostic gratuit</Pill>
            <p className="mt-4 text-lg font-semibold text-encre">
              Votre entreprise est-elle prête à être transmise ? En 20 minutes, gratuitement et sans
              engagement, faites un premier point sur sa transmissibilité.
            </p>
          </div>
          {/* Cible temporaire /contact — /Phase 7 branchera le vrai formulaire de diagnostic ici. */}
          <Button href={ROUTES.contact} className="mt-6 shrink-0 md:mt-0">
            Faire mon diagnostic gratuit
          </Button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
