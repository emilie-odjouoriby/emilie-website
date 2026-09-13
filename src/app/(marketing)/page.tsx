import { HeroSection } from "@/components/sections/HeroSection";
import { ProfilesSection } from "@/components/sections/ProfilesSection";
import { WhyMeSection } from "@/components/sections/WhyMeSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProfilesSection />
      <WhyMeSection />
    </>
  );
}
