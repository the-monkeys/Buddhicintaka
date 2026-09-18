import { Shield, Bell, PenTool, Search, Store } from "lucide-react";

export interface Product {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    icon: typeof Shield;
    tags: string[];
    link: string;
    repoUrl: string;
}

export const products: Product[] = [
    {
        id: "monkeys",
        title: "Monkeys",
        shortDescription: "Open-source community and content platform",
        description:
            "Open-source community and content platform by Buddhicintaka. Write research, articles, and blogs. Schedule events. Create groups. Share from Studio. Invite co-authors and co-hosts.",
        icon: PenTool,
        tags: ["Next.js", "TypeScript", "Go"],
        link: "https://monkeys.com.co",
        repoUrl: "https://github.com/the-monkeys/the_monkeys",
    },
    {
        id: "aasriva",
        title: "Aasriva",
        shortDescription: "Marketplace for Indian manufacturers and local artisans",
        description:
            "A marketplace for Indian manufacturers and local artisans to sell pan India. Joint venture of Buddhicintaka and OSDuo Tech LLP.",
        icon: Store,
        tags: ["Marketplace", "Vendors", "Shipping"],
        link: "https://aasriva.in",
        repoUrl: "https://aasriva.in/vendor-register/",
    },
    {
        id: "iam",
        title: "Monkeys IAM",
        shortDescription: "Identity & Access Management",
        description:
            "IAM system with Zero Trust security, RBAC/ABAC/PBAC access control, MFA, OIDC/SAML federation, and audit trails.",
        icon: Shield,
        tags: ["Go", "Fiber", "PostgreSQL", "Redis"],
        link: "https://identity.monkeys.support/",
        repoUrl: "https://github.com/the-monkeys/monkeys-identity",
    },
    {
        id: "notify",
        title: "FreeRange Notify",
        shortDescription: "Universal Notification Service",
        description:
            "Generic, pluggable notification service with multi-channel delivery - push, email, SMS, and real-time Server-Sent Events. Multi-tenant with API key auth.",
        icon: Bell,
        tags: ["Go", "Fiber", "Redis", "Elasticsearch"],
        link: "https://freerangenotify.vercel.app",
        repoUrl: "https://github.com/the-monkeys/freerangenotify",
    },
    {
        id: "orbitor",
        title: "Orbitor",
        shortDescription: "Web Crawler & Search Engine",
        description:
            "Fast, scalable web crawler and search engine. Built for speed and accuracy.",
        icon: Search,
        tags: ["Go", "Docker"],
        link: "https://github.com/the-monkeys",
        repoUrl: "https://github.com/the-monkeys",
    }
];
