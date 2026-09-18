import type { TopicPage } from "./consulting";

export const industryPages: TopicPage[] = [
    {
        slug: "consumer-and-retail",
        title: "Consumer and retail",
        description:
            "Marketplace software for Indian manufacturers and local artisans. Aasriva, a Buddhicintaka joint venture, sells across India.",
        lede: "Retail here means a live marketplace: sellers list, orders move, and goods reach customers across India.",
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
        title: "Government",
        description:
            "GeM-registered software, training, and application security work from Buddhicintaka (OPC) Private Limited, Muzaffarpur, Bihar.",
        lede: "We are a registered vendor on the Government e-Marketplace. Public work we take on is software, training, and application security, delivered in India.",
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
                title: "What stays in scope",
                body: "Programming, applications, security, and training performed in India. We do not claim every ministry vertical.",
            },
        ],
    },
    {
        slug: "manufacturing",
        title: "Manufacturing",
        description:
            "Software for Indian manufacturers who need to sell beyond their town. Aasriva and custom vendor portals from Buddhicintaka.",
        lede: "Manufacturers already sell on Aasriva. The same pattern, vendor portals, catalogues, and shipping, can sit on software we build for a single factory or a group of makers.",
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
        title: "Technology, media and telecom",
        description:
            "Technology products and content platforms from Buddhicintaka, including Monkeys. We do not operate telecom networks.",
        lede: "We are a technology company. Media, for us, is the Monkeys platform: research, articles, events, groups, and Studio. We do not run a telecom network.",
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
                title: "A honest boundary",
                body: "Spectrum, carriers, and last-mile telecom stay with operators. We connect software and notifications, not the tower.",
            },
        ],
    },
];

export function getIndustryPage(slug: string) {
    return industryPages.find((page) => page.slug === slug);
}
