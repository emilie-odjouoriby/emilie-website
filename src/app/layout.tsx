import type { Metadata } from "next";
import { signatureFont, displayFont, bodyFont } from "@/lib/fonts";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Transmission, reprise et coaching d'associés`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

// Person + ProfessionalService (CLAUDE.md §7) — champs non fournis (téléphone,
// adresse postale complète) volontairement omis plutôt qu'inventés.
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Émilie Odjouoriby",
      jobTitle: "Juriste et coach professionnelle certifiée ICF",
      url: `${SITE_URL}/qui-suis-je`,
      worksFor: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      founder: { "@id": `${SITE_URL}/#person` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nantes",
        addressRegion: "Pays de la Loire",
        addressCountry: "FR",
      },
      areaServed: ["Pays de la Loire", "Bretagne sud"],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${signatureFont.variable} ${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
        {children}
      </body>
    </html>
  );
}
