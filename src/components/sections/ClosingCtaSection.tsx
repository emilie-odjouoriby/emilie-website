import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";

export function ClosingCtaSection() {
  return (
    <section className="bg-corail py-20 rounded-t-lg">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <RevealOnScroll>
          <h2 className="font-display text-3xl text-encre md:text-4xl">
            Vous souhaitez parler de votre situation ?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-encre/80">
            Vous n&apos;avez pas besoin d&apos;avoir toutes les réponses avant
            de me contacter. Un premier échange nous permettra de comprendre
            votre situation et de voir si mon accompagnement peut vous être
            utile.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* variant="secondary" pour rester visible sur le fond corail de la section (primary s'y fondrait). */}
            <Button href={ROUTES.contact} variant="secondary">
              Réserver un créneau dans mon agenda
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
