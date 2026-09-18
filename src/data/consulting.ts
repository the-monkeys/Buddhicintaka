export interface OfferItem {
    title: string;
    body: string;
}

export const whatWeOffer: OfferItem[] = [
    {
        title: "Custom software and web platforms",
        body: "Design, build, and run web applications in Go, TypeScript, and Next.js, including admin tools, APIs, and customer-facing products.",
    },
    {
        title: "Product engineering",
        body: "Ship live products such as Monkeys and Aasriva, and take on similar builds: content platforms, marketplaces, and vendor portals.",
    },
    {
        title: "Identity and access",
        body: "Authentication, organisation accounts, roles, and policy-based access, including work based on our IAM stack.",
    },
    {
        title: "Notifications and messaging",
        body: "Email, push, SMS, and live updates so people hear about orders, events, and system changes when they should.",
    },
    {
        title: "Application security",
        body: "Reviews of application architecture and code, hardening of auth, and secure defaults on software we deliver.",
    },
    {
        title: "AI features and workflow automation",
        body: "Add practical AI to existing tools: drafting, document Q&A, routing, and automations around the software we build.",
    },
    {
        title: "Tech classes and training",
        body: "Structured courses for teams on Go, TypeScript, full-stack delivery, and day-to-day engineering practice.",
    },
    {
        title: "Workshops for campuses and professionals",
        body: "Hands-on sessions on modern web, APIs, and practical AI for colleges, companies, and working groups.",
    },
    {
        title: "Architecture and delivery consultancy",
        body: "A clear build plan: what to ship first, how the pieces connect, and how to keep the system maintainable.",
    },
    {
        title: "Instagram and X for companies",
        body: "Account management and a consistent posting rhythm for organisations that do not want an in-house social team.",
    },
    {
        title: "GeM-aligned software work",
        body: "Software development, training, and application security work as a registered Government e-Marketplace vendor.",
    },
];

export interface TopicPage {
    slug: string;
    title: string;
    description: string;
    lede: string;
    focus: OfferItem[];
}

export const consultingPages: TopicPage[] = [
    {
        slug: "agentic-modernization",
        title: "Agentic modernization",
        description:
            "Add practical AI to the software people already use: drafting, document Q&A, routing, and automations. Buddhicintaka, Muzaffarpur, Bihar.",
        lede: "We put AI where work already happens. That means features inside your apps, not a separate science project.",
        focus: [
            {
                title: "AI inside existing tools",
                body: "Assistants, summaries, and search over your own documents, wired into the product your team already opens.",
            },
            {
                title: "Workflow automations",
                body: "Route requests, draft replies, and flag exceptions so people spend time on decisions, not copy-paste.",
            },
            {
                title: "Built with the rest of the stack",
                body: "The same Go and TypeScript systems we use for products, with clear logs and a path to change the prompt later.",
            },
        ],
    },
    {
        slug: "workflow-transformation",
        title: "Business workflow transformation",
        description:
            "Replace spreadsheet and email loops with web apps, APIs, and notifications. Custom software from Buddhicintaka in Bihar.",
        lede: "Most stuck work is a process with no home. We give it a screen, an API, and a notification when something moves.",
        focus: [
            {
                title: "Internal tools",
                body: "Admin panels, approvals, vendor portals, and ops dashboards that match how your team actually works.",
            },
            {
                title: "Customer-facing flows",
                body: "Sign-up, orders, listings, and status updates, including marketplace patterns we run on Aasriva.",
            },
            {
                title: "Integrations",
                body: "Connect the new app to mail, payments, shipping, or the systems you already pay for, without a sprawl of one-off scripts.",
            },
        ],
    },
    {
        slug: "cybersecurity",
        title: "Cybersecurity",
        description:
            "Application security, identity, and access control for software we design and review. Buddhicintaka, Muzaffarpur, Bihar.",
        lede: "We treat security as part of the build: who can sign in, what they can do, and how the application is put together.",
        focus: [
            {
                title: "Identity and access",
                body: "Login, sessions, roles, and policy-based permissions, including work based on our IAM system.",
            },
            {
                title: "Application review",
                body: "Walk through architecture and code to find weak auth, exposed endpoints, and secrets that should not be there.",
            },
            {
                title: "Secure delivery",
                body: "Hardening on the software we ship, with changes you can see in the repository, not a PDF that sits unused.",
            },
        ],
    },
    {
        slug: "people-and-performance",
        title: "People and performance",
        description:
            "Tech classes, campus workshops, and team training in modern web, Go, TypeScript, and practical AI. Buddhicintaka, Bihar.",
        lede: "Software sticks when people can run it. We teach the stack we use, in rooms and on calls, for campuses and companies.",
        focus: [
            {
                title: "Team courses",
                body: "Go, TypeScript, Next.js, and delivery habits your engineers can use on Monday.",
            },
            {
                title: "Campus and professional workshops",
                body: "Short, hands-on sessions on APIs, modern web, and practical AI for students and working groups.",
            },
            {
                title: "Learn while we build",
                body: "Pair with your team on a live codebase so the training is the project, not a slide deck.",
            },
        ],
    },
];

export const howWeWorkPages: TopicPage[] = [
    {
        slug: "collaborative",
        title: "Collaborative",
        description:
            "How Buddhicintaka works with your team: shared repos, clear reviews, and software you can keep after we leave.",
        lede: "We work in the open with your people. You see the code, the decisions, and the next change.",
        focus: [
            {
                title: "Shared workspace",
                body: "Repositories, reviews, and a written trail of what changed and why.",
            },
            {
                title: "Your team stays in the loop",
                body: "We do not disappear behind a black box. Pairing and walkthroughs are part of delivery.",
            },
            {
                title: "Handover that works",
                body: "Docs and ownership so you can run the system after the build, including open-source pieces where they fit.",
            },
        ],
    },
    {
        slug: "bridge",
        title: "Bridge",
        description:
            "Software from Muzaffarpur, Bihar, used across India. Buddhicintaka connects local delivery with nationwide products.",
        lede: "We are based in Muzaffarpur and we ship for use across India. Local delivery, national reach.",
        focus: [
            {
                title: "Built in India",
                body: "Programming, application work, security, and training are done in India. Class-I local supplier, 100% local content.",
            },
            {
                title: "Products already live nationwide",
                body: "Monkeys and Aasriva are used beyond Bihar. New work can follow the same pattern.",
            },
            {
                title: "Public and private work",
                body: "GeM-registered vendor for software, training, and application security, plus direct product and consulting work.",
            },
        ],
    },
    {
        slug: "vital",
        title: "Vital",
        description:
            "Identity, notifications, and platforms that have to keep running. Essential software from Buddhicintaka.",
        lede: "We focus on the systems people notice when they break: login, messages, and the product in production.",
        focus: [
            {
                title: "Identity that holds",
                body: "Accounts, roles, and access rules designed so the wrong person does not walk in.",
            },
            {
                title: "Notifications that arrive",
                body: "The message after an order, an event, or a failure, through channels you choose.",
            },
            {
                title: "Software that stays up",
                body: "Operate and maintain what we ship, with logs, backups, and a path to fix what fails.",
            },
        ],
    },
];

export function getConsultingPage(slug: string) {
    return consultingPages.find((page) => page.slug === slug);
}

export function getHowWeWorkPage(slug: string) {
    return howWeWorkPages.find((page) => page.slug === slug);
}
