import type { MetadataRoute } from "next";
import { ROUTES } from "@/constants/routes";
import { SITE_URL } from "@/constants/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ROUTES.home,
    ROUTES.transmettreCeder,
    ROUTES.reprendre,
    ROUTES.cooperer,
    ROUTES.quiSuisJe,
    ROUTES.contact,
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
