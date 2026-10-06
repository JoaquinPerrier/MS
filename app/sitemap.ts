import type { MetadataRoute } from "next";

const siteUrl = "https://jampe.com.ar";

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
