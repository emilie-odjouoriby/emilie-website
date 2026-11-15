import { EDITOR, EMAIL_PROVIDER, HOST, PENDING_INFO } from "@/constants/legal";
import { ROUTES } from "@/constants/routes";
import { buildMetadata } from "@/lib/seo";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site emilieodjouoriby.com.",
  path: ROUTES.mentionsLegales,
});

function PendingValue({ value }: { value: string }) {
  if (value !== PENDING_INFO) return <>{value}</>;
  return <span className="italic text-corail">({PENDING_INFO})</span>;
}

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-20">
      <RevealOnScroll>
        <h1 className="font-display text-4xl text-encre md:text-5xl">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-8 text-encre/80">
          <div>
            <h2 className="font-display text-xl text-encre">
              Éditrice du site
            </h2>
            <p className="mt-3">
              {EDITOR.name}
              <br />
              Statut juridique : <PendingValue value={EDITOR.legalStatus} />
              <br />
              SIRET : <PendingValue value={EDITOR.siret} />
              <br />
              N° de TVA intracommunautaire :{" "}
              <PendingValue value={EDITOR.vatNumber} />
              <br />
              Lieu d&apos;exercice : {EDITOR.city}
              <br />
              Email de contact : {EDITOR.contactEmail}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Directrice de la publication
            </h2>
            <p className="mt-3">{EDITOR.name}</p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">Hébergement</h2>
            <p className="mt-3">
              {HOST.name}
              <br />
              {HOST.address}
              <br />
              <a href={HOST.url} className="underline hover:text-corail">
                {HOST.url}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Propriété intellectuelle
            </h2>
            <p className="mt-3">
              L&apos;ensemble des contenus de ce site (textes, images, logo,
              mise en page) est protégé par le droit d&apos;auteur. Toute
              reproduction, même partielle, est soumise à autorisation préalable
              de {EDITOR.name}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Liens vers des sites tiers
            </h2>
            <p className="mt-3">
              Ce site peut contenir des liens vers des services tiers (Calendly,{" "}
              {EMAIL_PROVIDER.name}, réseaux sociaux). {EDITOR.name} n&apos;est
              pas responsable du contenu ni des pratiques de confidentialité de
              ces sites tiers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Données personnelles
            </h2>
            <p className="mt-3">
              Le traitement des données personnelles collectées sur ce site est
              détaillé dans notre{" "}
              <a
                href={ROUTES.politiqueConfidentialite}
                className="underline hover:text-corail"
              >
                politique de confidentialité
              </a>
              .
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
