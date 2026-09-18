export interface HomeSection {
    id: string;
    nav: string;
    headline: string;
    body: string;
}

export const homeSections: HomeSection[] = [
    {
        id: "software",
        nav: "Software",
        headline: "High-performance, cloud-native software.",
        body: "Buddhicintaka delivers high-performance, cloud-native software solutions that ensure your digital operations are both scalable and secure.",
    },
    {
        id: "brand",
        nav: "Brand",
        headline: "Digital footprints that elevate your brand.",
        body: "We create end-to-end digital footprints to elevate your brand presence through strategic marketing and professional brand management.",
    },
    {
        id: "consulting",
        nav: "Consulting",
        headline: "Consultation that transforms operations.",
        body: "Our team provides expert consultation, including HR solutions and guidance to successfully transform your business operations.",
    },
    {
        id: "community",
        nav: "Community",
        headline: "Hackathons, mentorship, and workshops.",
        body: "We foster the tech community by organizing hackathons, mentorship programs, and workshops to share knowledge and develop future talent.",
    },
    {
        id: "open-source",
        nav: "Open source",
        headline: "A marketplace, and an open-source movement.",
        body: "We are building a comprehensive marketplace and nurturing an open-source movement to make innovation accessible and collaborative for everyone.",
    },
    {
        id: "monkeys",
        nav: "Monkeys",
        headline: "The Monkeys platform.",
        body: "We showcase the Monkeys platform to present innovative community and content management capabilities.",
    },
    {
        id: "local-ai",
        nav: "Local AI",
        headline: "Specialized, efficient local AI.",
        body: "We explore lightweight architectures and fine-tuning methods to develop specialized, efficient local AI solutions for targeted applications.",
    },
];
