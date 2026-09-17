import {
    Layers,
    Headphones,
    GraduationCap,
    Sparkles,
    Briefcase,
    Share2,
    type LucideIcon,
} from "lucide-react";

export interface ServicePillar {
    id: string;
    title: string;
    shortTitle: string;
    description: string;
    items: string[];
    icon: LucideIcon;
    href: string;
}

export const servicePillars: ServicePillar[] = [
    {
        id: "platforms",
        title: "Software Platforms",
        shortTitle: "Software Platforms",
        description:
            "We design, build, and operate production platforms - identity, notifications, content, and search - that teams can run and extend.",
        items: ["Monkeys", "Monkeys IAM", "FreeRange Notify", "Orbitor"],
        icon: Layers,
        href: "/products",
    },
    {
        id: "services",
        title: "Software Services & Support",
        shortTitle: "Services & Support",
        description:
            "Custom development, integration, and ongoing support so your software stays reliable after launch.",
        items: ["Custom development", "API & integration", "Maintenance", "Incident support"],
        icon: Headphones,
        href: "/#services",
    },
    {
        id: "training",
        title: "Tech Classes & Training",
        shortTitle: "Tech Classes",
        description:
            "Structured courses for teams and learners who need modern engineering skills they can use at work.",
        items: ["Go & TypeScript", "Full-stack delivery", "DevOps practices", "Team upskilling"],
        icon: GraduationCap,
        href: "/#training",
    },
    {
        id: "workshops",
        title: "Workshops for Students & Professionals",
        shortTitle: "AI Workshops",
        description:
            "Hands-on workshops on modern tech and AI for campuses, institutions, and working professionals.",
        items: ["Modern web & APIs", "Practical AI", "Campus programmes", "Professional cohorts"],
        icon: Sparkles,
        href: "/#training",
    },
    {
        id: "consultancy",
        title: "Consultancy",
        shortTitle: "Consultancy",
        description:
            "Architecture, delivery, and technology advisory for companies and institutions that need a clear path to ship.",
        items: ["Architecture review", "Delivery planning", "Security advisory", "Platform strategy"],
        icon: Briefcase,
        href: "/contact",
    },
    {
        id: "social",
        title: "Social Media for Companies & Institutions",
        shortTitle: "Social Media",
        description:
            "We manage Instagram and X accounts for organisations that want a consistent, professional presence.",
        items: ["Instagram management", "X / Twitter management", "Content calendars", "Institutional branding"],
        icon: Share2,
        href: "/contact",
    },
];

export const highlightCards = [
    {
        title: "Platforms",
        description: "Production software we build and operate.",
        href: "/products",
        icon: Layers,
    },
    {
        title: "Services & Support",
        description: "Custom development, integration, and maintenance.",
        href: "/#services",
        icon: Headphones,
    },
    {
        title: "Training",
        description: "Classes and workshops for students and professionals.",
        href: "/#training",
        icon: GraduationCap,
    },
    {
        title: "Social",
        description: "Instagram and X management for companies and institutions.",
        href: "/#services",
        icon: Share2,
    },
] as const;
