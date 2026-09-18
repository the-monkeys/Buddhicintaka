export interface CompanySection {
    title: string;
    body: string;
}

export interface CompanyStory {
    slug: string;
    eyebrow: string;
    title: string;
    description: string;
    lede: string;
    sections: CompanySection[];
}

export const companyStories: CompanyStory[] = [
    {
        slug: "culture",
        eyebrow: "Company",
        title: "Our culture",
        description:
            "Open source, shared repos, and software built in Muzaffarpur, Bihar. How Buddhicintaka works day to day.",
        lede: "We write software in the open when we can, we review in public, and we stay close to the people who run what we ship.",
        sections: [
            {
                title: "Transparent by default",
                body: "The founding principle is that software should be transparent, community-driven, and built to last, not locked behind walls. That is why the Monkeys organisation lives on GitHub.",
            },
            {
                title: "Work you can see",
                body: "Contributors maintain the open-source community. Repositories, reviews, and event work are visible. You can inspect the code and join the same channels.",
            },
            {
                title: "Rooted in Bihar",
                body: "The company is registered in Muzaffarpur. Programming, application work, security, and training are done in India.",
            },
        ],
    },
    {
        slug: "history",
        eyebrow: "Company",
        title: "History",
        description:
            "Buddhicintaka (OPC) Private Limited was incorporated in 2025 in Muzaffarpur, Bihar, and ships Monkeys and Aasriva.",
        lede: "Buddhicintaka (OPC) Private Limited was incorporated in 2025 in Muzaffarpur, Bihar. The work that followed is software people already use.",
        sections: [
            {
                title: "The company",
                body: "Registered office: Phulwaria, Paroo, Muzaffarpur 843107. GSTIN 10AANCB2931M1ZQ. Class-I local supplier, 100% local content. Registered vendor on the Government e-Marketplace.",
            },
            {
                title: "Products that shipped",
                body: "Monkeys is an open-source community and content platform. Aasriva is a marketplace for Indian manufacturers and local artisans, a joint venture with OSDuo Tech LLP.",
            },
            {
                title: "The community around it",
                body: "Open-source work sits under github.com/the-monkeys. Maintainers keep the repos moving. Monkeys events are run by Gautam.",
            },
        ],
    },
    {
        slug: "purpose",
        eyebrow: "How we work",
        title: "Our purpose",
        description:
            "Inspire, Inform, Innovate. Buddhicintaka builds software from Muzaffarpur, Bihar, for use across India.",
        lede: "Inspire, Inform, Innovate. We build software from Muzaffarpur that people across India can actually run.",
        sections: [
            {
                title: "Inspire",
                body: "Show that production software can come from Bihar: live products, open repositories, and training that uses the same stack.",
            },
            {
                title: "Inform",
                body: "Monkeys is built for research, articles, events, and groups. The point is accurate writing, not volume for its own sake.",
            },
            {
                title: "Innovate",
                body: "Ship the next piece: identity, notifications, marketplaces, and AI inside tools people already open. Keep the code inspectable.",
            },
        ],
    },
    {
        slug: "inclusion",
        eyebrow: "How we work",
        title: "Inclusion",
        description:
            "Buddhicintaka open-source community on GitHub: inspect, fork, and contribute. Workshops for campuses and professionals across India.",
        lede: "Anyone who can work in the open can take part. The door is the repository, the workshop room, and the event, not a closed office list.",
        sections: [
            {
                title: "Open source is the entry",
                body: "github.com/the-monkeys is public. Maintainers review work from people we have not met in person. That is how the community grows.",
            },
            {
                title: "Rooms and campuses",
                body: "We run tech classes and workshops for students and professionals, on-site or remote, across India.",
            },
            {
                title: "What we do not claim",
                body: "This is not a corporate inclusion programme with a separate office. It is the way the community already works.",
            },
        ],
    },
    {
        slug: "early-careers",
        eyebrow: "People",
        title: "Early careers",
        description:
            "Campus workshops, first contributions on GitHub, and training on the stack Buddhicintaka uses in Muzaffarpur, Bihar.",
        lede: "If you are early in engineering, the path here is a workshop, a first pull request, or a class on the stack we actually ship.",
        sections: [
            {
                title: "Workshops",
                body: "Hands-on sessions on modern web, APIs, and practical AI for campuses and working groups.",
            },
            {
                title: "Contribute in public",
                body: "Open issues and pull requests on github.com/the-monkeys. Maintainers review the work. That is real delivery, not a mock assignment.",
            },
            {
                title: "Roles when they exist",
                body: "Full-time openings are listed on Careers. Early work often starts in the community and in training rooms, not a separate graduate scheme.",
            },
        ],
    },
];

export function getCompanyStory(slug: string) {
    return companyStories.find((page) => page.slug === slug);
}

export interface Maintainer {
    name: string;
    role: string;
    github?: string;
    instagram?: string;
    avatar?: string;
}

export const maintainers: Maintainer[] = [
    {
        name: "Atul Kumar",
        github: "https://github.com/atul030702",
        avatar: "https://avatars.githubusercontent.com/u/159458922?v=4",
        role: "Open source maintainer",
    },
    {
        name: "Tanishq Singla",
        github: "https://github.com/TanishqSingla",
        avatar: "https://avatars.githubusercontent.com/u/26207583?v=4",
        role: "Open source maintainer",
    },
    {
        name: "Shivam Vishwakarma",
        github: "https://github.com/shivamvishwakarm",
        avatar: "https://avatars.githubusercontent.com/u/80755217?v=4",
        role: "Open source maintainer",
    },
    {
        name: "Rishi Anand",
        github: "https://github.com/RishiAnand108",
        avatar: "https://avatars.githubusercontent.com/u/147248472?v=4",
        role: "Open source maintainer",
    },
    {
        name: "Pranav Tripathi",
        github: "https://github.com/prnvtripathi",
        avatar: "https://avatars.githubusercontent.com/u/111558974?v=4",
        role: "Open source maintainer",
    },
    {
        name: "Gautam Kumar",
        github: "https://github.com/Gautam7352",
        avatar: "https://avatars.githubusercontent.com/u/62495093?v=4",
        role: "Open source maintainer. Monkeys events.",
    },
    {
        name: "Suraj Gorai",
        github: "https://github.com/surajgoraicse",
        avatar: "https://avatars.githubusercontent.com/u/146419909?v=4",
        role: "Open source maintainer",
    },
    {
        name: "Rohit Kumar Singh",
        instagram: "https://www.instagram.com/monkeys_com_co/",
        role: "Monkeys Instagram, marketing and promotion",
    },
];
