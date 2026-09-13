import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";

const PROFILES = [
  {
    title: "Vous préparez la transmission ou la cession de votre entreprise",
    description:
      "Vous savez qu'il est temps de préparer la suite, mais vous ne savez pas toujours par où commencer. Vous pouvez aussi avoir du mal à imaginer ce que sera votre vie après l'entreprise. Je vous accompagne pour préparer votre transmission, votre entreprise et votre passage de relais.",
    cta: "Préparer ma transmission",
    href: ROUTES.transmettreCeder,
  },
  {
    title: "Vous reprenez une entreprise",
    description:
      "Vous vous apprêtez à reprendre une entreprise ? Je vous accompagne pour prendre votre place avec confiance, dès les premiers mois, sans perdre ce qui fait sa force. Je vous accompagne avant, pendant et après la reprise.",
    cta: "Préparer ma reprise",
    href: ROUTES.reprendre,
  },
  {
    title: "Vous dirigez avec un ou plusieurs associés",
    description:
      "Vous n'êtes pas forcément en conflit, mais certaines discussions sont devenues difficiles. Les décisions prennent plus de temps et les tensions commencent à peser sur l'entreprise. Je vous aide à retrouver un fonctionnement plus clair et plus serein entre associés.",
    cta: "Coopérer avec mon associé",
    href: ROUTES.cooperer,
  },
] as const;

export function ProfilesSection() {
  return (
    <section className="bg-beige-clair/30 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {PROFILES.map((profile, index) => (
            <RevealOnScroll key={profile.href} delay={index * 0.1}>
              <Card className="flex h-full flex-col justify-between">
                <div>
                  <h2 className="font-display text-xl text-encre">{profile.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-encre/80">{profile.description}</p>
                </div>
                <Button href={profile.href} variant="secondary" className="mt-6 self-start">
                  {profile.cta}
                </Button>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
