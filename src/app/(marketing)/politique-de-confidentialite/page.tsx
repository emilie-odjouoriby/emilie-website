import { EDITOR, EMAIL_PROVIDER, HOST } from "@/constants/legal";
import { ROUTES } from "@/constants/routes";
import { buildMetadata } from "@/lib/seo";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Comment emilieodjouoriby.com collecte, utilise et protège vos données personnelles.",
  path: ROUTES.politiqueConfidentialite,
});

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-20 pt-20">
      <RevealOnScroll>
        <h1 className="font-display text-4xl text-encre md:text-5xl">
          Politique de confidentialité
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-encre/80">
          Cette page explique quelles données personnelles sont collectées sur
          ce site, pourquoi, et comment vous pouvez exercer vos droits.
        </p>

        <div className="mt-10 space-y-8 text-encre/80">
          <div>
            <h2 className="font-display text-xl text-encre">
              Responsable du traitement
            </h2>
            <p className="mt-3">
              {EDITOR.name} est responsable du traitement des données collectées
              sur ce site. Pour toute question, vous pouvez la contacter à
              l&apos;adresse : {EDITOR.contactEmail}.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Données collectées
            </h2>
            <p className="mt-3">Deux formulaires collectent des données :</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                <strong>Formulaire de contact</strong> : nom, téléphone
                (facultatif), email, objet de la demande, message.
              </li>
              <li>
                <strong>Questionnaire de pré-diagnostic</strong> : prénom et
                nom, nom de l&apos;entreprise, SIRET (facultatif), email,
                téléphone, ainsi que vos réponses aux questions du
                questionnaire.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Finalité du traitement
            </h2>
            <p className="mt-3">
              Ces données sont utilisées exclusivement pour répondre à votre
              demande : vous recontacter, échanger sur votre projet de
              transmission, de reprise ou de coaching, et vous accompagner si
              vous le souhaitez. Elles ne sont ni vendues, ni utilisées à des
              fins de prospection commerciale par des tiers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">Base légale</h2>
            <p className="mt-3">
              Le traitement repose sur votre consentement : vous transmettez
              volontairement vos informations en soumettant l&apos;un des
              formulaires de ce site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Destinataires des données
            </h2>
            <p className="mt-3">
              Vos données sont destinées exclusivement à {EDITOR.name}. Elles
              transitent par {EMAIL_PROVIDER.name}, notre prestataire
              d&apos;envoi d&apos;emails transactionnels, qui agit en tant que
              sous-traitant technique et n&apos;utilise ces données à aucune
              autre fin.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Durée de conservation
            </h2>
            <p className="mt-3">
              Vos données sont conservées le temps nécessaire au traitement de
              votre demande, puis pendant une durée n&apos;excédant pas 3 ans à
              compter de notre dernier échange, sauf obligation légale
              contraire.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Cookies et traceurs
            </h2>
            <p className="mt-3">
              Ce site n&apos;utilise aucun cookie de suivi ni d&apos;outil
              d&apos;analyse d&apos;audience tiers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Hébergement et sécurité
            </h2>
            <p className="mt-3">
              Ce site est hébergé par {HOST.name} ({HOST.address}). Les échanges
              entre votre navigateur et le site sont chiffrés (HTTPS). Les
              formulaires sont protégés contre les soumissions automatisées
              (anti-spam).
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">Vos droits</h2>
            <p className="mt-3">
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;effacement, de limitation, d&apos;opposition
              et de portabilité sur vos données. Pour exercer ces droits,
              contactez {EDITOR.name} à l&apos;adresse {EDITOR.contactEmail}.
            </p>
            <p className="mt-3">
              Vous disposez également du droit d&apos;introduire une réclamation
              auprès de la{" "}
              <a
                href="https://www.cnil.fr"
                className="underline hover:text-corail"
              >
                CNIL
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl text-encre">
              Modifications de cette politique
            </h2>
            <p className="mt-3">
              Cette politique de confidentialité peut être mise à jour.
              Consultez cette page régulièrement pour prendre connaissance des
              éventuelles modifications.
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
