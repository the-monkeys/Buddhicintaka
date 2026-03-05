interface EcosystemChild {
    label: string;
    description: string;
    href?: string;
}

interface EcosystemBranch {
    label: string;
    children: EcosystemChild[];
}

interface EcosystemTree {
    root: { label: string; tagline: string };
    branches: EcosystemBranch[];
}

export const ecosystemTree: EcosystemTree = {
    root: {
        label: "Buddhicintaka",
        tagline: "Inspire. Inform. Innovate.",
    },
    branches: [
        {
            label: "Products",
            children: [
                {
                    label: "Monkeys",
                    description: "Content & Knowledge Platform",
                    href: "/products#monkeys",
                },
                {
                    label: "Monkeys IAM",
                    description: "Identity & Access Management",
                    href: "/products#iam",
                },
                {
                    label: "FreeRange Notify",
                    description: "Universal Notification Service",
                    href: "/products#notify",
                },
                {
                    label: "Orbitor",
                    description: "Web Crawler & Search Engine",
                    href: "/products#orbitor",
                },
                {
                    label: "A.P.E.",
                    description: "Secrets Management & Encryption",
                    href: "/products#ape",
                },
                {
                    label: "Capuchin",
                    description: "Reference Full-Stack App",
                    href: "/products#capuchin",
                },
            ],
        },
        {
            label: "Core Values",
            children: [
                {
                    label: "Inspire, Inform, Innovate",
                    description: "Lead with curiosity, share knowledge to drive meaningful innovation.",
                },
                {
                    label: "Build Simple, Generic, Compact",
                    description: "Elegant solutions that do more with less. No bloat.",
                },
                {
                    label: "Inclusion, Teamwork, Diversity",
                    description: "Great software comes from diverse minds working together.",
                },
                {
                    label: "Ethical Impact",
                    description: "Technology built with conscience, for the world.",
                },
            ],
        },
        {
            label: "Services",
            children: [
                {
                    label: "Custom Software Development",
                    description: "Full-stack web, API, and microservices",
                    href: "/contact",
                },
                {
                    label: "IAM Solutions",
                    description: "SSO, MFA, and policy-based access control",
                    href: "/contact",
                },
                {
                    label: "Notification Infrastructure",
                    description: "Multi-channel push, email, SMS, SSE",
                    href: "/contact",
                },
                {
                    label: "Platform Engineering",
                    description: "DevOps, CI/CD, containerisation",
                    href: "/contact",
                },
                {
                    label: "IT Training",
                    description: "Modern software development practices",
                    href: "/contact",
                },
                {
                    label: "Application Security",
                    description: "Audits, vulnerability assessment, secure architecture",
                    href: "/contact",
                },
            ],
        },
    ],
};
