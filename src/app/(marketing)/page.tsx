import { HeroSection } from "@/components/sections/HeroSection";
import { DiagnosticSection } from "@/components/sections/DiagnosticSection";
import { ProfilesSection } from "@/components/sections/ProfilesSection";
import { WhyMeSection } from "@/components/sections/WhyMeSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { AboutTeaserSection } from "@/components/sections/AboutTeaserSection";
import { ClosingCtaSection } from "@/components/sections/ClosingCtaSection";

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
