/**
 * Homepage section copy, in page order.
 */

export interface HeroSlide {
    title: string;
    body: string;
    cta: string;
    href: string;
    image: string;
    alt: string;
}

export const heroSlides: HeroSlide[] = [
    {
        title: "Software from Muzaffarpur, Bihar",
        body: "Buddhicintaka (OPC) Private Limited designs, develops, and operates software products used across India.",
        cta: "About the company",
        href: "/about",
        image: "/hero/buddhicintaka-hero.jpg",
        alt: "Buddhicintaka, a technology company in Muzaffarpur, Bihar",
    },
    {
        title: "Monkeys is live",
        body: "An open-source community and content platform for research, articles, events, groups, and Studio.",
        cta: "See Monkeys",
        href: "/products/monkeys",
        image: "/hero/buddhicintaka-hero-2.jpg",
        alt: "Monkeys, an open-source platform built by Buddhicintaka",
    },
    {
        title: "Aasriva for makers across India",
        body: "A marketplace for Indian manufacturers and local artisans. A joint venture with OSDuo Tech LLP.",
        cta: "See Aasriva",
        href: "/products/aasriva",
        image: "/hero/buddhicintaka-hero-3.jpg",
        alt: "Aasriva, a marketplace for manufacturers and artisans in India",
    },
];

export interface StoryCard {
    label: string;
    title: string;
    href: string;
}

export const stories: StoryCard[] = [
    {
        label: "eBook",
        title: "India's manufacturing boom: Winning the next decade",
        href: "/about",
    },
    {
        label: "Press release",
        title: "Powering smarter banking with agentic AI",
        href: "/about",
    },
    {
        label: "Playbook",
        title: "The cost of trust - Inside India's DPDP Act and the future of responsible growth",
        href: "/about",
    },
];

export interface InsightCard {
    label: string;
    title: string;
    body: string;
    cta: string;
    href: string;
}

export const insights: InsightCard[] = [
    {
        label: "Institute",
        title: "Rethinking your business model in the age of AI",
        body: "The Innovation Show brings together five leaders to discuss how AI is evolving current business models.",
        cta: "Listen now",
        href: "/about",
    },
    {
        label: "AI",
        title: "A historical blueprint for the new industrial age of AI",
        body: "The global economy is entering a structural transformation as profound as the Industrial Revolution - but unfolding in a fraction of the time.",
        cta: "Read the article",
        href: "/about",
    },
    {
        label: "Social impact",
        title: "Closing the sustainability gap",
        body: "In an age of instability, awareness of the increasingly volatile threat landscape is more important than ever.",
        cta: "Learn more",
        href: "/about",
    },
];

export const awards: string[] = [
    "Leader in U.S. Private and Hybrid Cloud - Data Center Services",
    "Leader in Data Center Outsourcing Services",
    "Leader in Worldwide Hybrid IT Consulting and Integration Services",
    "Named to the Top 100 Most Loved Workplaces list",
];

export interface HelpItem {
    n: string;
    title: string;
    body: string;
}

export const howWeHelp: HelpItem[] = [
    {
        n: "01",
        title: "Simplify digital transformation",
        body: "Drive innovation and simplify digital transformation with strategic visioning, architecture design, and organizational change management.",
    },
    {
        n: "02",
        title: "Overcome business challenges",
        body: "Services combine deep industry expertise with modern skills and advanced technology to uncover new opportunities for growth.",
    },
    {
        n: "03",
        title: "Orchestrate and innovate",
        body: "An open integration platform designed to help orchestrate and innovate across your IT environment, enabling continuous learning and quicker time to value.",
    },
    {
        n: "04",
        title: "Enable hybrid IT with strategic partners",
        body: "Make the right technology investments with global alliance partnerships that enable today's complex hybrid ecosystems.",
    },
];

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
}

export const testimonials: Testimonial[] = [
    {
        quote:
            "The next era of enterprise transformation will not be defined by isolated AI pilots - it will be defined by how organizations industrialise AI at scale, modernise core operations, strengthen resilience, and convert technology into measurable business impacts.",
        name: "Hitesh Shah",
        role: "Vice President, Manufacturing Business",
    },
    {
        quote:
            "We are co-creating seamless customer experiences using data and AI to fuel innovation and deliver better outcomes for our customers.",
        name: "Hussain Zaidi",
        role: "Vice President, BFSI Client Unit",
    },
];

export const partners: string[] = [
    "Microsoft",
    "Google",
    "Amazon",
    "Cisco",
    "Red Hat",
    "VMware",
];

export interface FaqCategory {
    id: string;
    label: string;
}

export const faqCategories: FaqCategory[] = [
    { id: "company", label: "Answers to questions about the company" },
    { id: "consulting", label: "Consulting" },
    { id: "platform", label: "Our platform" },
    { id: "alliances", label: "Alliances and partners" },
    { id: "investing", label: "Investing" },
    { id: "culture", label: "Culture" },
];
