import type { MetadataRoute } from "next";
import { SITE_URL } from "../data/company";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = SITE_URL;

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/products/monkeys`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/products/aasriva`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/consulting`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...["agentic-modernization", "workflow-transformation", "cybersecurity", "people-and-performance"].map(
            (slug) => ({
                url: `${baseUrl}/consulting/${slug}`,
                lastModified: new Date(),
                changeFrequency: "monthly" as const,
                priority: 0.7,
            }),
        ),
        ...["collaborative", "bridge", "vital"].map((slug) => ({
            url: `${baseUrl}/how-we-work/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
        {
            url: `${baseUrl}/how-we-work`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/technology`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...[
            "applications",
            "ai-and-data",
            "cloud",
            "cyber-resilience",
            "digital-workplace",
            "mainframe",
            "networks",
        ].map((slug) => ({
            url: `${baseUrl}/technology/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        {
            url: `${baseUrl}/industries`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        ...[
            "consumer-and-retail",
            "government",
            "manufacturing",
            "technology-media-telecom",
        ].map((slug) => ({
            url: `${baseUrl}/industries/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        {
            url: `${baseUrl}/careers`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/leadership`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/team`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/early-careers`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        ...["culture", "history", "purpose", "inclusion"].map((slug) => ({
            url: `${baseUrl}/company/${slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        })),
        {
            url: `${baseUrl}/press`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/investors`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
    ];
}
