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
    art?: "consulting" | "people";
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
                href: "/consulting",
                links: [
                    { name: "Agentic modernization", href: "/consulting/agentic-modernization" },
                    { name: "Business workflow transformation", href: "/consulting/workflow-transformation" },
                    { name: "Cybersecurity", href: "/consulting/cybersecurity" },
                    { name: "People and performance", href: "/consulting/people-and-performance" },
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
                href: "/technology",
                links: [
                    { name: "Applications", href: "/technology/applications" },
                    { name: "Artificial intelligence and data", href: "/technology/ai-and-data" },
                    { name: "Cloud", href: "/technology/cloud" },
                    { name: "Cyber resilience", href: "/technology/cyber-resilience" },
                    { name: "Digital workplace", href: "/technology/digital-workplace" },
                    { name: "Mainframe", href: "/technology/mainframe" },
                    { name: "Networks", href: "/technology/networks" },
                ],
            },
            {
                title: "Industries",
                href: "/industries",
                links: [
                    // { name: "Automotive", href: "/about" },
                    // { name: "Banking and financial markets", href: "/about" },
                    // { name: "Chemical, oil and gas", href: "/about" },
                    { name: "Consumer and retail", href: "/industries/consumer-and-retail" },
                    { name: "Government", href: "/industries/government" },
                    // { name: "Healthcare", href: "/about" },
                    // { name: "Insurance", href: "/about" },
                    { name: "Manufacturing", href: "/industries/manufacturing" },
                    {
                        name: "Technology, media and telecom",
                        href: "/industries/technology-media-telecom",
                    },
                    // { name: "Travel and transportation", href: "/about" },
                    // { name: "Utilities", href: "/about" },
                ],
            },
        ],
        extras: {
            title: "How we work",
            href: "/how-we-work",
            links: [
                { name: "Collaborative", href: "/how-we-work/collaborative" },
                { name: "Bridge", href: "/how-we-work/bridge" },
                { name: "Vital", href: "/how-we-work/vital" },
            ],
        },
        spotlight: {
            label: "Spotlight",
            title: "What we can take on",
            description:
                "Software, training, security, and AI workflows from Muzaffarpur, used across India.",
            href: "/consulting",
            art: "consulting",
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
                    { name: "Leadership", href: "/leadership" },
                    { name: "Our culture", href: "/company/culture" },
                    { name: "History", href: "/company/history" },
                ],
            },
            {
                title: "People",
                href: "/team",
                links: [
                    { name: "Careers", href: "/careers" },
                    { name: "Early careers", href: "/early-careers" },
                    { name: "Team", href: "/team" },
                    // { name: "Life here", href: "/careers" },
                ],
            },
            {
                title: "Connect",
                href: "/contact",
                links: [
                    { name: "Contact", href: "/contact" },
                    // { name: "Newsroom", href: "/about" },
                    { name: "Investors", href: "/investors" },
                ],
            },
        ],
        extras: {
            title: "How we work",
            href: "/company/purpose",
            links: [
                { name: "Our purpose", href: "/company/purpose" },
                { name: "Inclusion", href: "/company/inclusion" },
            ],
        },
        spotlight: {
            label: "Spotlight",
            title: "Work with us",
            description: "Remote-first roles at a software company based in Muzaffarpur, Bihar.",
            href: "/careers",
            art: "people",
        },
    },
    {
        id: "insights",
        label: "Insights",
        kind: "bar",
        columns: [],
        barLinks: [
            // { name: "Newsroom", href: "/about" },
            { name: "Articles", href: "https://monkeys.com.co/buddhicintaka" },
            { name: "Press releases", href: "/press" },
            // { name: "Topics", href: "/about" },
            { name: "Investors", href: "/investors" },
        ],
    },
];

export const topLinks: MegaLink[] = [
    // { name: "News", href: "/about" },
    { name: "Careers", href: "/careers" },
];
