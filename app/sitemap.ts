import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const siteUrl = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/servicios`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/metodologia`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contacto`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
