import type { TopicPage } from "./consulting";

export const technologyPages: TopicPage[] = [
    {
        slug: "applications",
        title: "Applications",
        description:
            "Custom web applications and product engineering from Buddhicintaka in Muzaffarpur, Bihar. Go, TypeScript, and Next.js.",
        lede: "We design, build, and run web applications: the screens people use, the APIs behind them, and the admin tools that keep work moving.",
        focus: [
            {
                title: "Customer-facing products",
                body: "Content platforms, marketplaces, vendor portals, and similar products, including patterns we already run on Monkeys and Aasriva.",
            },
            {
                title: "Internal applications",
                body: "Approvals, ops dashboards, and tools that replace a spreadsheet-and-email loop.",
            },
            {
                title: "APIs and admin",
                body: "The same Go and TypeScript stack for public APIs and the back office that operates them.",
            },
        ],
    },
    {
        slug: "ai-and-data",
        title: "Artificial intelligence and data",
        description:
            "Practical AI features and data in the software Buddhicintaka builds: search, drafting, routing, and document Q&A.",
        lede: "We add AI where the work already lives, and we keep the data in systems we can inspect, not a pile of unmanaged files.",
        focus: [
            {
                title: "Features in the product",
                body: "Drafting, summaries, document Q&A, and routing inside the application your team already opens.",
            },
            {
                title: "Data that belongs to the app",
                body: "Store, search, and show the records the product needs: users, content, orders, events, with clear ownership.",
            },
            {
                title: "Automation around delivery",
                body: "Use AI on the edges of the build: labelling, first-pass review, and the boring steps between tickets.",
            },
        ],
    },
    {
        slug: "cloud",
        title: "Cloud",
        description:
            "Package and run Buddhicintaka software with Docker on infrastructure we operate, or on infrastructure you name.",
        lede: "We package what we ship so it can run on servers we operate and on infrastructure you already have. The application is the unit, not a lock-in to one vendor console.",
        focus: [
            {
                title: "Containers and deploys",
                body: "Docker images, environment config, and a repeatable path from repository to a running service.",
            },
            {
                title: "Infrastructure we operate",
                body: "Run the stack on servers we control, including data that stays on those machines when that is the requirement.",
            },
            {
                title: "The same build elsewhere",
                body: "If you name the host, we aim for the same application, same logs, same backup path.",
            },
        ],
    },
    {
        slug: "cyber-resilience",
        title: "Cyber resilience",
        description:
            "Keep login, data, and recovery intact on software Buddhicintaka delivers: identity, application security, backups.",
        lede: "Resilience here means the application still authenticates the right people, keeps data, and can be brought back after a failure.",
        focus: [
            {
                title: "Identity that holds",
                body: "Login, sessions, roles, and policy-based access, including work based on our IAM stack.",
            },
            {
                title: "Application hardening",
                body: "Reviews of architecture and code, secrets handling, and secure defaults on what we ship.",
            },
            {
                title: "Backup and restore",
                body: "A known path to restore databases and search indexes, not a hope that someone has a copy.",
            },
        ],
    },
    {
        slug: "digital-workplace",
        title: "Digital workplace",
        description:
            "Internal tools, writing platforms, events, and digital cards so teams can work in one place. Buddhicintaka, Bihar.",
        lede: "A digital workplace, for us, is software your people open every day: writing, events, groups, and the admin around them.",
        focus: [
            {
                title: "Writing and knowledge",
                body: "Articles, research, and shared drafts, including the Monkeys platform for teams that publish.",
            },
            {
                title: "Events and groups",
                body: "Schedule events, invite hosts, and keep a group in one place instead of a scatter of chats.",
            },
            {
                title: "Cards and presence",
                body: "Digital business cards and shareable post cards for Instagram, X, and LinkedIn from the same content.",
            },
        ],
    },
    {
        slug: "mainframe",
        title: "Mainframe",
        description:
            "Applications, APIs, and identity around the core systems you already run. Buddhicintaka does not operate mainframes.",
        lede: "We do not take over a mainframe. If records still live there, we build the applications, APIs, and identity that sit around it.",
        focus: [
            {
                title: "Around the core",
                body: "Web apps and APIs that read and write through interfaces you already trust, without pretending we own the host.",
            },
            {
                title: "Identity in front",
                body: "Modern login and roles for the new layer, so access is explicit before a request reaches the core system.",
            },
            {
                title: "A honest boundary",
                body: "COBOL estates, capacity, and operations of the mainframe stay with whoever runs them today.",
            },
        ],
    },
    {
        slug: "networks",
        title: "Networks",
        description:
            "How Buddhicintaka software talks: APIs, service-to-service auth, and notification paths. Not campus cabling or telecom.",
        lede: "Network work here is how services connect: APIs, authentication between them, and the path a notification takes. We do not pull cable or run a carrier.",
        focus: [
            {
                title: "APIs between systems",
                body: "Clear contracts, auth on the wire, and the glue between the product and the tools you already pay for.",
            },
            {
                title: "Service-to-service access",
                body: "Tokens, roles, and policies so one service does not get a free pass into another.",
            },
            {
                title: "Notification paths",
                body: "Email, push, SMS, and live updates routed to the right channel when something in the system changes.",
            },
        ],
    },
];

export function getTechnologyPage(slug: string) {
    return technologyPages.find((page) => page.slug === slug);
}
