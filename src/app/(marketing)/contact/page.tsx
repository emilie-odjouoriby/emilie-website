import { Button } from "@/components/ui/Button";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Pill } from "@/components/ui/Pill";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const SUBJECT_OPTIONS = [
  "Céder ou transmettre mon entreprise",
  "Reprendre une entreprise",
  "Coaching d'associés",
  "Coaching individuel",
  "Autre demande",
] as const;

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <DecorativeBlob className="-right-40 -top-0 hidden h-[28rem] w-[28rem] bg-corail/70 md:h-[28rem] md:w-[34rem] lg:block" />
        <DecorativeBlob className="right-10 top-40 hidden h-56 w-56 bg-dore/30 md:h-72 md:w-72 lg:block" />
        <DecorativeBlob className="right-56 top-4 hidden h-24 w-24 bg-beige-clair lg:block" />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20">
          <RevealOnScroll className="max-w-3xl">
            <h1 className="font-display text-4xl text-encre md:text-5xl">
              Vous souhaitez parler de votre situation ?
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-encre/80">
              Vous préparez la transmission ou la cession de votre entreprise.
              Vous envisagez de reprendre une entreprise. Vous rencontrez des
              tensions ou des difficultés avec vos associés.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Vous n&apos;avez pas besoin d&apos;avoir toutes les réponses avant
              de me contacter.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-encre/80">
              Un premier échange nous permettra de comprendre votre situation et
              de voir si mon accompagnement peut vous être utile.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-beige-clair/30 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start">
          <RevealOnScroll>
            <Eyebrow index="01">Un premier échange</Eyebrow>
            <h2 className="mt-4 font-display text-2xl text-encre">
              Vous préférez échanger directement ?
            </h2>
            <p className="mt-4 text-encre/80">
              Sans attendre de retour de ma part, réservez directement un
              créneau qui vous convient.
            </p>
            {/* URL Calendly réelle à obtenir du développeur — bouton inerte en attendant. */}
            <Button type="button" className="mt-6">
              Réserver un créneau dans mon agenda
            </Button>
            <p className="mt-2 text-xs text-encre/60">
              (lien Calendly à venir)
            </p>

            <div className="mt-10 rounded-lg border-l-4 border-dore bg-white p-6 shadow-soft">
              <p className="text-sm leading-relaxed text-encre/70">
                Les informations que vous me confiez lors de ce premier échange
                restent confidentielles.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <form className="rounded-lg bg-white p-8 shadow-soft md:p-10">
              <Eyebrow index="02">Premier contact</Eyebrow>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-encre"
                  >
                    Nom et prénom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-encre"
                  >
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-encre"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-encre"
                >
                  Objet de votre demande
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre"
                >
                  {SUBJECT_OPTIONS.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-encre"
                >
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre"
                />
              </div>
              {/* Formulaire non fonctionnel — validation Zod + envoi Resend arrivent en Phase 6. */}
              <Button type="button" className="mt-6 w-full">
                Envoyer le message
              </Button>
            </form>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
