import Image from "next/image";
import { BulletList } from "@/components/ui/BulletList";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { PageCtaBanner } from "@/components/sections/PageCtaBanner";
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
      <section className="relative overflow-x-hidden">
        <DecorativeBlob className="-right-40 -top-0 h-[28rem] w-[28rem] bg-corail/70 md:h-[28rem] md:w-[34rem] hidden lg:block" />
        <DecorativeBlob className="right-10 top-40 h-56 w-56 bg-dore/30 md:h-72 md:w-72 hidden lg:block" />
        <DecorativeBlob className="right-56 top-4 h-24 w-24 bg-beige-clair lg:block hidden" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 lg:pb-26 pt-20 lg:pt-40">
          <RevealOnScroll className="max-w-3xl">
            <h1 className="font-display text-4xl text-encre md:text-5xl">
              Transmettre ou <span className="italic text-corail">céder</span>{" "}
              mon entreprise
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-encre/80">
              Transmettre ou céder son entreprise est une étape importante.
              Pourtant, le sujet est souvent repoussé jusqu&apos;au moment où il
              devient urgent.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Le dirigeant se dit « pressé de partir » mais « pas pressé de
              vendre ». L&apos;intention est là, mais l&apos;action n&apos;est
              pas posée.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Vous savez qu&apos;il faut préparer la suite, mais vous ne savez
              pas toujours par où commencer. Vous pouvez aussi avoir du mal à
              imaginer votre vie après l&apos;entreprise.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <RevealOnScroll>
            <Eyebrow index="01">Vos blocages</Eyebrow>
            <h2 className="mt-4 font-display text-2xl text-encre">
              Qu&apos;est-ce qui vous empêche de passer à l&apos;action ?
            </h2>
            <BulletList items={BLOCKING_QUESTIONS} className="mt-6" />
            <p className="mt-6 text-encre/80">
              Ces questions méritent d&apos;être posées avant que la
              transmission ne devienne urgente.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="relative hidden md:block">
            <DecorativeBlob className="-bottom-6 -right-6 h-28 w-28 bg-dore/40" />
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/photos/photo4.webp"
                alt="Émilie Odjouoriby"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <NumberedSteps
        eyebrowIndex="02"
        eyebrowLabel="La méthode"
        heading="Comment se déroule l'accompagnement ?"
        steps={STEPS}
      />

      <PageCtaBanner
        buttonLabel="Parlons de votre projet de transmission"
        buttonHref={ROUTES.contact}
      >
        Basée au Bignon, au sud de Nantes, j&apos;interviens en présentiel en
        Pays de la Loire et en Bretagne sud, et en visio partout ailleurs, y
        compris pour mes clients établis au Bénin. J&apos;accompagne aussi les
        transmissions intra-familiales et les reprises par les salariés.
      </PageCtaBanner>
    </>
  );
}
