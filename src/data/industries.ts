import type { TopicPage } from "./consulting";

export const industryPages: TopicPage[] = [
    {
        slug: "consumer-and-retail",
        title: "Retail and marketplace software",
        description: "See how Aasriva supports product listings, seller onboarding, orders, payouts and shipping for Indian manufacturers and independent artisans.",
        lede: "Retail here means a live marketplace: sellers list, orders move, and goods reach customers across India.",
        related: { label: "Explore the Aasriva marketplace", href: "/products/aasriva" },
        focus: [
            {
                title: "Aasriva is live",
                body: "A marketplace for Indian manufacturers and local artisans, owned and operated with OSDuo Tech LLP. No registration or listing charge today.",
            },
            {
                title: "From listing to delivery",
                body: "Vendor approval, orders, packing, an integrated shipping aggregator, payouts, and return windows the seller controls.",
            },
            {
                title: "Pincode-level selling",
                body: "Vendors can limit where they sell, which matters for goods that cannot ship pan India.",
            },
        ],
    },
    {
        slug: "government",
        title: "Government software procurement and GeM services",
        description: "Review our scope as a GeM vendor for software development, IT training and application security, and contact our team about eligible tenders.",
        lede: "We are a registered vendor on the Government e-Marketplace. Public work we take on is software, training, and application security, delivered in India.",
        related: { label: "Discuss a tender or RFP", href: "/contact" },
        focus: [
            {
                title: "GeM vendor",
                body: "Bids and catalogue work for custom software, application programming, IT training, and application security.",
            },
            {
                title: "Make in India",
                body: "Class-I local supplier under the Public Procurement (Preference to Make in India) Order, with 100% local content.",
            },
            {
                title: "Procurement enquiries",
                body: "Share the tender reference, delivery requirements and submission deadline so we can review the scope and eligibility.",
            },
        ],
    },
    {
        slug: "manufacturing",
        title: "Vendor portals and software for manufacturers",
        description: "Connect product catalogues, vendor registrations, order updates and shipping workflows through a marketplace or a custom manufacturer portal.",
        lede: "Manufacturers already sell on Aasriva. The same pattern, vendor portals, catalogues, and shipping, can sit on software we build for a single factory or a group of makers.",
        related: { label: "Manufacturer and vendor features", href: "/products/aasriva" },
        focus: [
            {
                title: "Sellers on Aasriva",
                body: "Indian manufacturers and artisans list products, pack orders, and get paid after the return window closes.",
            },
            {
                title: "Vendor tools",
                body: "Registration, listings, pincode limits, and order status without a custom stack for every workshop.",
            },
            {
                title: "Around the shop floor",
                body: "We build the web layer: catalogues, orders, identity, notifications. Plant machinery and ERP takeovers are outside this work.",
            },
        ],
    },
    {
        slug: "technology-media-telecom",
        title: "Publishing platforms and communications software",
        description: "Explore open-source publishing, identity and notification infrastructure for technology and media teams, with examples from our own products.",
        lede: "We build the software behind publishing and digital communications. Examples include collaborative writing on Monkeys and multi-channel alerts through FreeRange Notify.",
        related: { label: "Browse our software products", href: "/products" },
        focus: [
            {
                title: "Technology products",
                body: "Open-source platforms, IAM, notifications, and custom applications in Go, TypeScript, and Next.js.",
            },
            {
                title: "Media and content",
                body: "Monkeys is live for writing, co-authors, events, groups, and shareable cards for Instagram, X, and LinkedIn.",
            },
            {
                title: "Operational scope",
                body: "Spectrum, carriers, and last-mile telecom stay with operators. We connect software and notifications, not the tower.",
            },
        ],
    },
];

export function getIndustryPage(slug: string) {
    return industryPages.find((page) => page.slug === slug);
}
