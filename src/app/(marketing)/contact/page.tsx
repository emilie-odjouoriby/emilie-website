import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { DecorativeBlob } from "@/components/ui/DecorativeBlob";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Besoin d'échanger sur votre projet de transmission, de reprise ou de coaching d'associés ? Réservez un créneau ou écrivez-moi directement.",
  path: ROUTES.contact,
});

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
            <h2 className="mt-4 font-display text-3xl text-encre">
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
            <ContactForm />
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
