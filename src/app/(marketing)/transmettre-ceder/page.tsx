import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";

const BLOCKING_QUESTIONS = [
  "Vous vous demandez combien vaut l'entreprise, vos parts, le fonds ? Comment préparer votre cession et par où commencer ?",
  "Vous hésitez entre vendre votre entreprise, la transmettre à vos enfants ou permettre à un salarié de la reprendre.",
  "Vous êtes encore très présent dans l'entreprise et vous ne voyez pas comment vous en retirer progressivement.",
  "Vous vous interrogez sur votre projet post cession, ce que vous allez faire après avoir quitté l'entreprise que vous avez construite.",
] as const;

const STEPS = [
  {
    title: "Le diagnostic",
    description:
      "Pour savoir précisément où en est votre entreprise sur le plan économique, financier, humain et juridique.",
  },
  {
    title: "La structuration",
    description:
      "Pour clarifier la gouvernance, formaliser les responsabilités, et réduire la dépendance de l'entreprise à votre seule personne pour faciliter la transmission et la reprise.",
  },
  {
    title: "La sécurisation du passage de relais",
    description:
      "Pour préparer le choix du repreneur, organiser la transmission des savoir-faire, et coordonner les partenaires impliqués.",
  },
] as const;

export default function TransmettreCederPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
        <RevealOnScroll>
          <h1 className="font-display text-4xl text-encre md:text-5xl">
            Transmettre ou céder mon entreprise
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Transmettre ou céder son entreprise est une étape importante. Pourtant, le sujet est
            souvent repoussé jusqu&apos;au moment où il devient urgent.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Le dirigeant se dit « pressé de partir » mais « pas pressé de vendre ».
            L&apos;intention est là, mais l&apos;action n&apos;est pas posée.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Vous savez qu&apos;il faut préparer la suite, mais vous ne savez pas toujours par où
            commencer. Vous pouvez aussi avoir du mal à imaginer votre vie après l&apos;entreprise.
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <h2 className="font-display text-2xl text-encre">
              Qu&apos;est-ce qui vous empêche de passer à l&apos;action ?
            </h2>
            <BulletList items={BLOCKING_QUESTIONS} className="mt-6" />
            <p className="mt-6 text-encre/80">
              Ces questions méritent d&apos;être posées avant que la transmission ne devienne
              urgente.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <NumberedSteps
        eyebrowIndex="01"
        eyebrowLabel="La méthode"
        heading="Comment se déroule l'accompagnement ?"
        steps={STEPS}
      />

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <RevealOnScroll>
          <p className="text-encre/80">
            Basée au Bignon, au sud de Nantes, j&apos;interviens en présentiel en Pays de la Loire
            et en Bretagne sud, et en visio partout ailleurs, y compris pour mes clients établis au
            Bénin. J&apos;accompagne aussi les transmissions intra-familiales et les reprises par
            les salariés.
          </p>
          <Button href={ROUTES.contact} className="mt-8">
            Parlons de votre projet de transmission
          </Button>
        </RevealOnScroll>
      </section>
    </>
  );
}
