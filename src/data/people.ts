import { COMPANY_MOTTO } from "./company";

export interface CompanySection {
    title: string;
    body: string;
    link?: { label: string; href: string };
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
        title: "Engineering culture and open-source contributions",
        description: "Learn how our remote software team collaborates through written decisions, shared repositories and code reviews, and how to contribute to Monkeys.",
        lede: "Our team works entirely remotely. Much of our engineering work happens in shared repositories, where colleagues can see what changed, ask questions and review one another’s work.",
        sections: [
            {
                title: "Working across locations",
                body: "Most of our developers are based in Patna and Bangalore. Written decisions and code reviews give colleagues the context they need wherever they work.",
                link: { label: "How we work", href: "/how-we-work" },
            },
            {
                title: "Learning through contribution",
                body: "A contribution might be a documentation correction, a useful bug report or a new feature. Monkeys gives people a place to learn from the maintainers who review their work.",
                link: { label: "Explore our repositories", href: "https://github.com/the-monkeys" },
            },
            {
                title: "Respect at work",
                body: "We value colleagues for the quality of their work and how they treat other people. That expectation extends to workshops, project meetings and community discussions.",
                link: { label: "Our approach to inclusion", href: "/company/inclusion" },
            },
        ],
    },
    {
        slug: "history",
        eyebrow: "Company",
        title: "Company history and early software products",
        description: "Buddhicintaka was incorporated in Muzaffarpur, Bihar, in 2025. Explore the company's early work on publishing, notifications and marketplaces.",
        lede: "Buddhicintaka was incorporated in 2025 in Muzaffarpur, Bihar. Our early work has centred on building software products and maintaining the open-source community around Monkeys.",
        sections: [
            {
                title: "The company",
                body: "Buddhicintaka began as a software company registered in Bihar. Today our developers work remotely, primarily from Patna and Bangalore.",
            },
            {
                title: "Our early products",
                body: "Monkeys supports publishing, groups and events. FreeRange Notify handles application notifications. We also work with OSDuo Tech LLP on Aasriva, a marketplace for manufacturers and artisans.",
                link: { label: "Explore our products", href: "/products" },
            },
            {
                title: "The Monkeys community",
                body: "Contributors develop the platform in public, review code and maintain its frontend and backend. Others help with documentation and community events.",
                link: { label: "Meet the maintainers", href: "/team" },
            },
        ],
    },
    {
        slug: "purpose",
        eyebrow: "Company",
        title: "Our purpose in open source and technology education",
        description: "Discover how our motto, Inspire, inform and innovate, guides open-source participation, knowledge publishing and software development.",
        lede: COMPANY_MOTTO,
        sections: [
            {
                title: "Inspire",
                body: "Give students and developers a place to make their first contribution to software that people use.",
                link: { label: "Explore Monkeys on GitHub", href: "https://github.com/the-monkeys" },
            },
            {
                title: "Inform",
                body: "Help people publish research and articles, share what they know in groups and learn from one another at events.",
                link: { label: "Explore Monkeys", href: "/products/monkeys" },
            },
            {
                title: "Innovate",
                body: "Build software that solves a specific problem, from delivering application notifications to helping a team find information in its own documents.",
                link: { label: "Explore our services", href: "/consulting#offerings" },
            },
        ],
    },
    {
        slug: "inclusion",
        eyebrow: "Company",
        title: "Diversity, inclusion and equal opportunity",
        description: "Read our approach to hiring and fair treatment, and our commitment to a respectful workplace and open-source community for women and LGBTQ+ people.",
        lede: "Everyone deserves to be safe and respected at work. We welcome women and LGBTQ+ people as colleagues, leaders and contributors across our company and open-source community.",
        sections: [
            {
                title: "Equal opportunity",
                body: "We base hiring and opportunities for growth on skills, experience and the requirements of the role. We do not tolerate discrimination based on gender, gender identity, sexual orientation, caste, religion, disability or background.",
            },
            {
                title: "Respect in everyday work",
                body: "We expect respectful conduct in team calls, messages, code reviews and community events. Harassment, intimidation and discriminatory remarks have no place in our work.",
            },
            {
                title: "Participation in our community",
                body: "We welcome people at different stages of their careers. Contributors can ask questions, report an issue, improve documentation or submit code for review.",
                link: { label: "Explore our open-source community", href: "https://github.com/the-monkeys" },
            },
        ],
    },
    {
        slug: "early-careers",
        eyebrow: "People",
        title: "Early careers",
        description: "Engineering workshops, practical AI training and open-source opportunities for students and early-career developers.",
        lede: "Students and early-career developers can learn with us through workshops, project mentoring and contributions to Monkeys.",
        sections: [
            {
                title: "Training and workshops",
                body: "Engineering sessions cover software development and applied AI. Practical AI workshops help students and faculty use these tools in research and everyday work.",
                link: { label: "Explore the training tracks", href: "/consulting/people-and-performance" },
            },
            {
                title: "Contribute to Monkeys",
                body: "Start by exploring a repository and its open issues. Documentation, bug reports and code changes are all ways to contribute.",
                link: { label: "Find the Monkeys repositories", href: "https://github.com/the-monkeys" },
            },
            {
                title: "Work with us",
                body: "Visit Careers for roles and application details. Our engineering team works entirely remotely.",
                link: { label: "View careers", href: "/careers" },
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
