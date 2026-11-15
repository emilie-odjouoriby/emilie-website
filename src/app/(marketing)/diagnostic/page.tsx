import { DiagnosticForm } from "@/components/diagnostic/DiagnosticForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";
import { DIAGNOSTIC_INTRO } from "@/lib/diagnostic/questions";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Diagnostic de transmissibilité gratuit",
  description:
    "Faites un premier point gratuit sur la transmissibilité de votre entreprise en 5 à 10 minutes, sans engagement.",
  path: ROUTES.diagnostic,
});

export default function DiagnosticPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-6 pb-20 pt-20">
        <RevealOnScroll>
          <h1 className="font-display text-center text-4xl text-encre md:text-5xl">
            Diagnostic de transmissibilité
          </h1>
          <p className="mt-6 text-lg text-center leading-relaxed text-encre/80">
            {DIAGNOSTIC_INTRO}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-10">
          <DiagnosticForm />
        </RevealOnScroll>
      </div>
    </section>
  );
}
