import { MetadataRoute } from "next";

export const dynamic = "force-static"; // ✅ IMPORTANT

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aarnaclasses.netlify.app/sitemap.xml",
  };
}