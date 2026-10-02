import { HeroSection } from "@/components/sections/HeroSection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { ProfilesSection } from "@/components/sections/ProfilesSection";
import { WhyMeSection } from "@/components/sections/WhyMeSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";
import { ClosingCtaSection } from "@/components/sections/ClosingCtaSection";
import { buildMetadata } from "@/lib/seo";
import { ROUTES } from "@/constants/routes";

export const metadata = buildMetadata({
  skipTitleTag: true,
  title: "Émilie Odjouoriby — Transmission, reprise et coaching d'associés",
  description:
    "Juriste et coach certifiée ICF, j'accompagne les dirigeants de TPE-PME en Pays de la Loire et en Bretagne sud dans la transmission, la cession, la reprise d'entreprise et le coaching d'associés. Diagnostic gratuit.",
  path: ROUTES.home,
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProfilesSection />
      <WhyMeSection />
      <DiagnosticSection />
      <AboutTeaserSection />
      <TestimonialSection />
      <ClosingCtaSection />
    </>
  );
}
