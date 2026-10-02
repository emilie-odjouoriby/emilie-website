import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/constants/seo";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  /** Omet le <title> de page (hérite du titre par défaut du root layout) — utile pour l'accueil. */
  skipTitleTag?: boolean;
}

// Construit les metadata (title/description/OG/canonical) communes à chaque page.
export function buildMetadata({
  title,
  description,
  path,
  skipTitleTag = false,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    ...(skipTitleTag ? {} : { title }),
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [{ url: DEFAULT_OG_IMAGE, alt: title }],
    },
  };
}
