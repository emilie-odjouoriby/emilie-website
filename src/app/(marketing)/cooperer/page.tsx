import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";

const TABLE_TOPICS = [
  "Déposer les non-dits et clarifier les rôles et responsabilités de chacun.",
  "Mettre en place des méthodes de décision qui permettent d'intégrer les différentes perspectives.",
  "Utiliser des outils concrets pour désamorcer les tensions.",
  "Retrouver un alignement commun sur la vision, les valeurs et les objectifs de l'entreprise.",
] as const;

const SUPPORT_STEPS = [
  "Un premier entretien nous permet d'identifier ensemble les thématiques et vos besoins.",
  "Des séances de coaching individuelles et/ou collectives.",
  "Un suivi régulier, pour ajuster et consolider ce qui a été mis en place.",
] as const;

export default function CooperePage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
        <RevealOnScroll>
          <h1 className="font-display text-4xl text-encre md:text-5xl">
            Retrouver un fonctionnement plus serein entre associés
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Diriger une entreprise à plusieurs peut être une vraie force. Avec le temps, les rôles
            peuvent cependant devenir moins clairs et certaines tensions peuvent s&apos;installer.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Vous n&apos;êtes pas forcément en conflit mais vous ne vous parlez plus comme avant.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Les mêmes sujets reviennent régulièrement. Les décisions deviennent plus longues à
            prendre. Certains sujets sont évités parce qu&apos;ils risquent de provoquer une
            nouvelle discussion.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Lorsque la relation entre associés commence à peser sur le quotidien de
            l&apos;entreprise, il est important de pouvoir en parler.
          </p>
          <p className="mt-4 font-semibold text-encre">
            J&apos;accompagne les associés et codirigeants, jusqu&apos;à cinq personnes.
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <h2 className="font-display text-2xl text-encre">
              Je vous aide à remettre les sujets importants sur la table et à :
            </h2>
            <BulletList items={TABLE_TOPICS} className="mt-6" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <h2 className="font-display text-2xl text-encre">Comment je vous accompagne ?</h2>
            <BulletList items={SUPPORT_STEPS} className="mt-6" />
            <p className="mt-6 text-encre/80">
              Les séances se déroulent en présentiel en Pays de la Loire et en Bretagne sud, ou en
              visio, selon votre organisation.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <RevealOnScroll>
          <Button href={ROUTES.contact}>Parlons de votre situation entre associés</Button>
        </RevealOnScroll>
      </section>
    </>
  );
}
