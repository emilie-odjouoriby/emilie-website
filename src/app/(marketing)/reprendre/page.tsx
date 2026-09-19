import { BulletList } from "@/components/ui/BulletList";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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

const SUPPORT_POINTS = [
  "Comprendre la cible avant de vous engager, son histoire, sa culture, les collaborateurs qui la font vivre au quotidien.",
  "Sécuriser votre schéma de reprise, votre prise de fonction, en construisant votre légitimité sans chercher à tout changer dès les premiers mois.",
  "Accompagner la transition, pour trouver le bon équilibre entre continuité et transformation.",
] as const;

export default function ReprendrePage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pb-16 pt-20">
        <RevealOnScroll>
          <h1 className="font-display text-4xl text-encre md:text-5xl">Reprendre une entreprise</h1>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Une reprise ne se résume pas à trouver une entreprise, obtenir un financement et
            signer.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Vous allez prendre la direction d&apos;une entreprise qui a une histoire, des équipes,
            des habitudes et une culture qui lui sont propres.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            Vous allez aussi devoir trouver votre place.
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <h2 className="font-display text-2xl text-encre">Vous vous demandez peut-être</h2>
            <BulletList items={QUESTIONS} className="mt-6" />
            <p className="mt-6 text-encre/80">
              Ces questions peuvent se préparer avant même la signature.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <h2 className="font-display text-2xl text-encre">
              Je vous accompagne avant, pendant et après la reprise pour :
            </h2>
            <BulletList items={SUPPORT_POINTS} className="mt-6" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <RevealOnScroll>
            <p className="text-xs font-semibold uppercase tracking-widest text-dore">
              Une situation que j&apos;accompagne
            </p>
            <Card className="mt-4">
              <p className="italic leading-relaxed text-encre/80">
                Une salariée reprend l&apos;entreprise dans laquelle elle travaille depuis 7 ans.
                Elle connaît parfaitement l&apos;activité, mais s&apos;interroge sur sa légitimité à
                devenir la dirigeante de ses anciens collègues. L&apos;accompagnement porte le choix
                du mode de reprise, l&apos;établissement du calendrier de cession, sa posture, sa
                prise de décision et la transition avec le dirigeant précédent. Elle prend
                progressivement sa place et construit une nouvelle relation avec les équipes.
              </p>
            </Card>
          </RevealOnScroll>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <RevealOnScroll>
          <Button href={ROUTES.contact}>Parlons de votre projet de reprise</Button>
        </RevealOnScroll>
      </section>
    </>
  );
}
