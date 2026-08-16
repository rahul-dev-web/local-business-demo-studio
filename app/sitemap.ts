import type { MetadataRoute } from "next";
import { getPersonalizedDemoSlugs } from "@/data/personalized-demos";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://local-business-demo-studio.vercel.app";

const industryRoutes = [
  "restaurant",
  "salon",
  "gym",
  "clinic",
  "coaching",
  "hotel",
  "bakery",
  "retail",
  "automobile",
  "real-estate",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    ...industryRoutes,
  ].map((route) => ({
    url: `${baseUrl}/${route}`.replace(/\/$/, "") || baseUrl,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const personalizedRoutes = getPersonalizedDemoSlugs().map((slug) => ({
    url: `${baseUrl}/client/${slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...personalizedRoutes];
}
