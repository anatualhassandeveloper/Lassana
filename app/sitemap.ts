import type { MetadataRoute } from "next";
import { NAV_LINKS } from "@/lib/constants";
import { SITE_URL } from "@/lib/seo";

/** Public sitemap URL: `${SITE_URL}/sitemap.xml` */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sectionEntries: MetadataRoute.Sitemap = NAV_LINKS.map((link) => ({
    url: `${SITE_URL}${link.href}`,
    lastModified,
    changeFrequency: link.href === "#products" ? "weekly" : "monthly",
    priority: link.href === "#products" ? 0.9 : 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sectionEntries,
  ];
}
