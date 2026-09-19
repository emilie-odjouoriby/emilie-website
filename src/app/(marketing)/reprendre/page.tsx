import Image from "next/image";
import { BulletList } from "@/components/ui/BulletList";
import { Card } from "@/components/ui/Card";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PageCtaBanner } from "@/components/sections/PageCtaBanner";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";

const QUESTIONS = [
  "Le prix est-il juste pour moi et pour l'entreprise ?",
  "Comment allez-vous être perçu par les équipes ?",
  "Comment allez-vous construire votre légitimité ?",
  "Comment allez-vous travailler avec le cédant pendant la période de transition ?",
  "Quelles décisions devrez-vous prendre en premier ?",
  "Comment faire évoluer l'entreprise sans remettre en cause ce qui fonctionne déjà ?",
] as const;

const SUPPORT_STEPS = [
  {
    title: "Avant",
    description:
      "Comprendre la cible avant de vous engager, son histoire, sa culture, les collaborateurs qui la font vivre au quotidien.",
  },
  {
    title: "Pendant",
    description:
      "Sécuriser votre schéma de reprise, votre prise de fonction, en construisant votre légitimité sans chercher à tout changer dès les premiers mois.",
  },
  {
    title: "Après",
    description:
      "Accompagner la transition, pour trouver le bon équilibre entre continuité et transformation.",
  },
] as const;

export default function ReprendrePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <DecorativeBlob className="-right-40 -top-0 hidden h-[28rem] w-[28rem] bg-corail/70 md:h-[28rem] md:w-[34rem] lg:block" />
        <DecorativeBlob className="right-10 top-40 hidden h-56 w-56 bg-dore/30 md:h-72 md:w-72 lg:block" />
        <DecorativeBlob className="right-56 top-4 hidden h-24 w-24 bg-beige-clair lg:block" />

        <div className="relative mx-auto max-w-6xl px-6  pb-16 lg:pb-36 pt-20 lg:pt-40">
          <RevealOnScroll className="max-w-3xl">
            <h1 className="font-display text-4xl text-encre md:text-5xl">
              Reprendre une entreprise
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-encre/80">
              Une reprise ne se résume pas à trouver une entreprise, obtenir un
              financement et signer.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Vous allez prendre la direction d&apos;une entreprise qui a une
              histoire, des équipes, des habitudes et une culture qui lui sont
              propres.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Vous allez aussi devoir{" "}
              <span className="italic text-corail">trouver votre place</span>.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <RevealOnScroll delay={0.1} className="relative hidden md:block">
            <DecorativeBlob className="-bottom-6 -left-6 h-28 w-28 bg-dore/40" />
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/photos/photo5.webp"
                alt="Émilie Odjouoriby"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <Eyebrow index="01">Vos questions</Eyebrow>
            <h2 className="mt-4 font-display text-2xl text-encre">
              Vous vous demandez peut-être
            </h2>
            <BulletList items={QUESTIONS} className="mt-6" />
            <p className="mt-6 text-encre/80">
              Ces questions peuvent se préparer avant même la signature.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <RevealOnScroll className="max-w-2xl">
            <Eyebrow index="02">Mon accompagnement</Eyebrow>
            <h2 className="mt-4 font-display text-2xl text-encre">
              Je vous accompagne avant, pendant et après la reprise
            </h2>
          </RevealOnScroll>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SUPPORT_STEPS.map((step, index) => (
              <RevealOnScroll key={step.title} delay={index * 0.1}>
                <div className="h-full rounded-lg bg-beige-clair/40 p-8">
                  <span className="font-display text-3xl text-corail">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-encre">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-encre/80">
                    {step.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <Eyebrow index="03">Une situation que j&apos;accompagne</Eyebrow>
            <div className="relative mt-4">
              <DecorativeBlob className="-right-6 -top-6 h-28 w-28 bg-dore/30" />
              <Card className="relative border-l-4 border-corail">
                <span className="font-display text-6xl leading-none text-corail/30">
                  &ldquo;
                </span>
                <p className="-mt-6 italic leading-relaxed text-encre/80">
                  Une salariée reprend l&apos;entreprise dans laquelle elle
                  travaille depuis 7 ans. Elle connaît parfaitement
                  l&apos;activité, mais s&apos;interroge sur sa légitimité à
                  devenir la dirigeante de ses anciens collègues.
                  L&apos;accompagnement porte le choix du mode de reprise,
                  l&apos;établissement du calendrier de cession, sa posture, sa
                  prise de décision et la transition avec le dirigeant
                  précédent. Elle prend progressivement sa place et construit
                  une nouvelle relation avec les équipes.
                </p>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <PageCtaBanner
        buttonLabel="Parlons de votre projet de reprise"
        buttonHref={ROUTES.contact}
      >
        Basée au Bignon, en Loire-Atlantique, j&apos;interviens en présentiel en
        Pays de la Loire et en Bretagne sud, et en visio partout ailleurs, y
        compris pour les entrepreneurs que j&apos;accompagne au Bénin.
      </PageCtaBanner>
    </>
  );
}
