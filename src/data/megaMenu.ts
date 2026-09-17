export interface MegaLink {
    name: string;
    href: string;
}

export interface MegaColumn {
    title: string;
    href: string;
    links: MegaLink[];
}

export interface MegaSpotlight {
    label: string;
    title: string;
    description: string;
    href: string;
}

export interface MegaPanel {
    id: string;
    label: string;
    kind: "mega" | "bar";
    columns: MegaColumn[];
    extras?: { title: string; href: string; links: MegaLink[] };
    barLinks?: MegaLink[];
    spotlight?: MegaSpotlight;
}

export const megaMenus: MegaPanel[] = [
    {
        id: "what-we-do",
        label: "What we do",
        kind: "mega",
        columns: [
            {
                title: "Consulting services",
                href: "/about",
                links: [
                    { name: "Agentic modernization", href: "/about" },
                    { name: "Business workflow transformation", href: "/about" },
                    { name: "Cybersecurity", href: "/about" },
                    { name: "People and performance", href: "/about" },
                ],
            },
            {
                title: "Products",
                href: "/products",
                links: [
                    { name: "Monkeys", href: "/products/monkeys" },
                    { name: "Aasriva", href: "/products/aasriva" },
                ],
            },
            {
                title: "Technology services",
                href: "/about",
                links: [
                    { name: "Applications", href: "/about" },
                    { name: "Artificial intelligence and data", href: "/about" },
                    { name: "Cloud", href: "/about" },
                    { name: "Cyber resilience", href: "/about" },
                    { name: "Digital workplace", href: "/about" },
                    { name: "Mainframe", href: "/about" },
                    { name: "Networks", href: "/about" },
                ],
            },
            {
                title: "Industries",
                href: "/about",
                links: [
                    { name: "Automotive", href: "/about" },
                    { name: "Banking and financial markets", href: "/about" },
                    { name: "Chemical, oil and gas", href: "/about" },
                    { name: "Consumer and retail", href: "/about" },
                    { name: "Government", href: "/about" },
                    { name: "Healthcare", href: "/about" },
                    { name: "Insurance", href: "/about" },
                    { name: "Manufacturing", href: "/about" },
                    { name: "Technology, media and telecom", href: "/about" },
                    { name: "Travel and transportation", href: "/about" },
                    { name: "Utilities", href: "/about" },
                ],
            },
        ],
        extras: {
            title: "How we work",
            href: "/about",
            links: [
                { name: "Collaborative", href: "/about" },
                { name: "Bridge", href: "/about" },
                { name: "Vital", href: "/about" },
            ],
        },
        spotlight: {
            label: "Spotlight",
            title: "People Readiness Report 2026",
            description:
                "Workforce readiness has become one of the most important factors determining AI success.",
            href: "/about",
        },
    },
    {
        id: "who-we-are",
        label: "Who we are",
        kind: "mega",
        columns: [
            {
                title: "Company",
                href: "/about",
                links: [
                    { name: "About us", href: "/about" },
                    { name: "Leadership", href: "/about" },
                    { name: "Our culture", href: "/about" },
                    { name: "History", href: "/about" },
                ],
            },
            {
                title: "People",
                href: "/careers",
                links: [
                    { name: "Careers", href: "/careers" },
                    { name: "Early careers", href: "/careers" },
                    { name: "Life here", href: "/careers" },
                ],
            },
            {
                title: "Connect",
                href: "/contact",
                links: [
                    { name: "Contact", href: "/contact" },
                    { name: "Newsroom", href: "/about" },
                    { name: "Investors", href: "/about" },
                ],
            },
        ],
        extras: {
            title: "How we work",
            href: "/about",
            links: [
                { name: "Our purpose", href: "/about" },
                { name: "Inclusion", href: "/about" },
            ],
        },
        spotlight: {
            label: "Spotlight",
            title: "Most loved workplace",
            description: "Join a global network of consultants, architects, and engineers.",
            href: "/careers",
        },
    },
    {
        id: "insights",
        label: "Insights",
        kind: "bar",
        columns: [],
        barLinks: [
            { name: "Newsroom", href: "/about" },
            { name: "Articles", href: "/about" },
            { name: "Press releases", href: "/about" },
            { name: "Topics", href: "/about" },
            { name: "Investors", href: "/about" },
        ],
    },
];

export const topLinks: MegaLink[] = [
    { name: "News", href: "/about" },
    { name: "Careers", href: "/careers" },
];
