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
    detail?: { slug: string; features: { title: string; body: string }[] };
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
        detail: {
            slug: "monkeys-identity",
            features: [
                { title: "Organisation accounts", body: "Applications can manage users and permissions for separate organisations. Teams can define access by role, policy and attributes." },
                { title: "Sign-in and federation", body: "The service supports single sign-on through OIDC and SAML, as well as multi-factor authentication for accounts." },
                { title: "Sessions and auditing", body: "Administrators can track sessions and devices and use audit records to review changes in access." },
            ],
        },
        title: "Monkeys Identity",
        shortDescription: "Identity & Access Management",
        description:
            "Identity and access management for applications, including single sign-on, multi-factor authentication and policy-based permissions.",
        icon: Shield,
        tags: ["Go", "Fiber", "PostgreSQL", "Redis"],
        link: "https://identity.monkeys.support/",
        repoUrl: "https://github.com/the-monkeys/monkeys-identity",
    },
    {
        id: "notify",
        detail: {
            slug: "freerange-notify",
            features: [
                { title: "Delivery channels", body: "Applications can send order updates, reminders and service alerts by email, SMS and push. Server-sent events deliver updates while someone is using the application." },
                { title: "Application integration", body: "Each application connects through an API key. Teams can register devices and manage notification preferences for their users." },
                { title: "Operations", body: "The service exposes metrics for Prometheus and Grafana so teams can monitor their notification infrastructure." },
            ],
        },
        title: "FreeRange Notify",
        shortDescription: "Universal Notification Service",
        description:
            "Application notifications by email, SMS, push and live in-app updates. Teams can integrate the service with their own products through an API.",
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

export const developerProducts = products.flatMap((product) =>
    product.detail ? [{ ...product, detail: product.detail }] : [],
);
