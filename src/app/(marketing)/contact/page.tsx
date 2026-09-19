import { Button } from "@/components/ui/Button";
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
    <section className="mx-auto max-w-4xl px-6 py-20">
      <RevealOnScroll>
        <h1 className="font-display text-4xl text-encre md:text-5xl">
          Vous souhaitez parler de votre situation ?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-encre/80">
          Vous préparez la transmission ou la cession de votre entreprise. Vous envisagez de
          reprendre une entreprise. Vous rencontrez des tensions ou des difficultés avec vos
          associés.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-encre/80">
          Vous n&apos;avez pas besoin d&apos;avoir toutes les réponses avant de me contacter.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-encre/80">
          Un premier échange nous permettra de comprendre votre situation et de voir si mon
          accompagnement peut vous être utile.
        </p>
      </RevealOnScroll>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <RevealOnScroll>
          <p className="text-encre/80">
            Vous préférez échanger directement, sans attendre de retour de ma part ?
          </p>
          {/* URL Calendly réelle à obtenir du développeur — bouton inerte en attendant. */}
          <Button type="button" className="mt-4">
            Réserver un créneau dans mon agenda
          </Button>
          <p className="mt-2 text-xs text-encre/60">(lien Calendly à venir)</p>

          <p className="mt-8 text-sm text-encre/70">
            Les informations que vous me confiez lors de ce premier échange restent
            confidentielles.
          </p>

          <div className="mt-8 space-y-1 text-sm text-encre/70">
            {/* URLs réelles (avis Google, LinkedIn) à obtenir avant de coder les liens définitifs. */}
            <p>Ce que mes clients en disent : avis Google (à venir)</p>
            <p>Suivez-moi : LinkedIn (à venir)</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <form className="space-y-4 rounded-lg bg-beige-clair/40 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-widest text-dore">
              Premier contact
            </p>
            <div>
              <label htmlFor="name" className="text-sm font-medium text-encre">
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
              <label htmlFor="phone" className="text-sm font-medium text-encre">
                Téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-encre">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium text-encre">
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
            <div>
              <label htmlFor="message" className="text-sm font-medium text-encre">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border border-dore/30 bg-white px-3 py-2 text-sm text-encre"
              />
            </div>
            {/* Formulaire non fonctionnel — validation Zod + envoi Resend arrivent en Phase 6. */}
            <Button type="button" className="w-full">
              Envoyer le message
            </Button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
