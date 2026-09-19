import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ROUTES } from "@/constants/routes";
import oeil from "../../../public/brand/oeil.webp";

export function DiagnosticSection() {
  return (
    <section id="diagnostic" className="scroll-mt-24 bg-beige-clair py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <RevealOnScroll>
          {/* Badge circulaire (motif de la marque) accolé au pill, en intro compacte. */}
          <div className="flex items-center justify-center gap-3">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white shadow-soft">
              <Image
                src={oeil}
                alt=""
                aria-hidden
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-6 text-2xl font-semibold leading-snug text-encre md:text-3xl">
            Votre entreprise est-elle prête à être transmise ?
          </p>
          <p className="mt-4 text-lg leading-relaxed text-encre/80">
            En 20 minutes, gratuitement et sans engagement, faites un premier
            point sur sa transmissibilité.
          </p>
          {/* Cible temporaire /contact — Phase 7 branchera le vrai formulaire de diagnostic ici. */}
          <Button href={ROUTES.contact} className="mt-8">
            Faire mon diagnostic gratuit
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
