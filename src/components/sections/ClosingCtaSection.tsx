import { PageCtaBanner } from "@/components/sections/PageCtaBanner";
import { ROUTES } from "@/constants/routes";

export function ClosingCtaSection() {
  return (
    <PageCtaBanner
      heading="Vous souhaitez parler de votre situation ?"
      buttonLabel="Réserver un créneau dans mon agenda"
      buttonHref={ROUTES.contact}
    >
      Vous n&apos;avez pas besoin d&apos;avoir toutes les réponses avant de me
      contacter. Un premier échange nous permettra de comprendre votre situation
      et de voir si mon accompagnement peut vous être utile.
    </PageCtaBanner>
  );
}
