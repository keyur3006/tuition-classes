import { MetadataRoute } from "next";

export const dynamic = "force-static"; // ✅ IMPORTANT

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aarnaclasses.netlify.app/",
      lastModified: new Date(),
    },
  ];
}