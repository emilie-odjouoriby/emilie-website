import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NumberedSteps } from "@/components/sections/NumberedSteps";
import { PageCtaBanner } from "@/components/sections/PageCtaBanner";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";

const TABLE_TOPICS = [
  "Déposer les non-dits et clarifier les rôles et responsabilités de chacun.",
  "Mettre en place des méthodes de décision qui permettent d'intégrer les différentes perspectives.",
  "Utiliser des outils concrets pour désamorcer les tensions.",
  "Retrouver un alignement commun sur la vision, les valeurs et les objectifs de l'entreprise.",
] as const;

const STEPS = [
  {
    title: "Le premier échange",
    description:
      "Un premier entretien nous permet d'identifier ensemble les thématiques et vos besoins.",
  },
  {
    title: "L'accompagnement",
    description: "Des séances de coaching individuelles et/ou collectives.",
  },
  {
    title: "Le suivi",
    description:
      "Un suivi régulier, pour ajuster et consolider ce qui a été mis en place.",
  },
] as const;

export default function CooperePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <DecorativeBlob className="-right-40 -top-0 hidden h-[28rem] w-[28rem] bg-corail/70 md:h-[28rem] md:w-[34rem] lg:block" />
        <DecorativeBlob className="right-10 top-40 hidden h-56 w-56 bg-dore/30 md:h-72 md:w-72 lg:block" />
        <DecorativeBlob className="right-56 top-4 hidden h-24 w-24 bg-beige-clair lg:block" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20">
          <RevealOnScroll className="max-w-3xl">
            <h1 className="font-display text-4xl text-encre md:text-5xl">
              Retrouver un fonctionnement plus{" "}
              <span className="italic text-corail">serein</span> entre associés
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-encre/80">
              Diriger une entreprise à plusieurs peut être une vraie force. Avec
              le temps, les rôles peuvent cependant devenir moins clairs et
              certaines tensions peuvent s&apos;installer.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Vous n&apos;êtes pas forcément en conflit mais vous ne vous parlez
              plus comme avant.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Les mêmes sujets reviennent régulièrement. Les décisions
              deviennent plus longues à prendre. Certains sujets sont évités
              parce qu&apos;ils risquent de provoquer une nouvelle discussion.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Lorsque la relation entre associés commence à peser sur le
              quotidien de l&apos;entreprise, il est important de pouvoir en
              parler.
            </p>
            <Pill tone="beige" className="mt-6">
              J&apos;accompagne les associés et codirigeants, jusqu&apos;à cinq
              personnes
            </Pill>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll className="max-w-2xl">
            <Eyebrow index="01">Vos sujets</Eyebrow>
            <h2 className="mt-4 font-display text-2xl text-encre">
              Je vous aide à remettre les sujets importants sur la table et à :
            </h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {TABLE_TOPICS.map((topic, index) => (
              <RevealOnScroll key={topic} delay={index * 0.1}>
                <div className="h-full rounded-lg bg-white p-8 shadow-soft">
                  <span className="font-display text-2xl text-corail">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-encre/80">
                    {topic}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <NumberedSteps
        eyebrowIndex="02"
        eyebrowLabel="Comment je vous accompagne"
        heading="Le déroulé de l'accompagnement"
        steps={STEPS}
      />

      <PageCtaBanner
        buttonLabel="Parlons de votre situation entre associés"
        buttonHref={ROUTES.contact}
      >
        Un premier échange, sans engagement, permet de poser les bases d&apos;un
        accompagnement adapté à votre situation.
      </PageCtaBanner>
    </>
  );
}
