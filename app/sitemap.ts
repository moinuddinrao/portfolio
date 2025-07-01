import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.moinuddinrao.com",
      lastModified: new Date("2025-07-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
