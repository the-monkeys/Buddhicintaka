import type { TopicPage } from "./consulting";

export const technologyPages: TopicPage[] = [
    {
        slug: "applications",
        title: "Custom applications and API development",
        description: "Build customer portals, internal dashboards and APIs in Go and TypeScript. Explore our approach to application development and ongoing maintenance.",
        lede: "We design, build, and run web applications: the screens people use, the APIs behind them, and the admin tools that keep work moving.",
        related: { label: "Software workflow automation", href: "/consulting/workflow-transformation" },
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
        title: "AI engineering and document search",
        description: "Build knowledge assistants that cite sources, extract information from documents and automate routine work with supervised AI agents.",
        lede: "We build document search, knowledge assistants and supervised workflows for organisations that need to use information across files and applications.",
        related: { label: "AI agent consulting", href: "/consulting/agentic-modernization" },
        focus: [
            {
                title: "Knowledge search",
                body: "A knowledge assistant searches permitted documents and links answers to source passages so the reader can check them.",
            },
            {
                title: "Document processing",
                body: "We extract agreed fields from forms and reports and send uncertain results to a person for review.",
            },
            {
                title: "Supervised agents",
                body: "Agents can prepare updates or route requests between applications. We agree which steps need approval and evaluate the pilot against real examples.",
            },
        ],
    },
    {
        slug: "cloud",
        title: "Cloud hosting, DevOps and cost reviews",
        description: "Review cloud costs, plan migrations and set up deployment pipelines, monitoring and backups for an application on your chosen infrastructure.",
        lede: "We review how an application is hosted, compare options against its usage and budget, and plan the migration with the team that operates it.",
        related: { label: "Software maintenance and handover", href: "/how-we-work/vital" },
        focus: [
            {
                title: "Deployment pipelines",
                body: "We package applications in containers and set up pipelines to test changes and deploy releases.",
            },
            {
                title: "Managed infrastructure",
                body: "We configure servers, monitoring, logging and backups, and agree on what ongoing support covers.",
            },
            {
                title: "Cloud cost reviews",
                body: "We compare hosting costs against the resources the workload uses. The recommendation accounts for storage, traffic and support as well as compute.",
            },
        ],
    },
    {
        slug: "cyber-resilience",
        title: "Application resilience and recovery",
        description: "Plan for service interruptions with reliable access controls, application hardening and tested backup and recovery procedures.",
        lede: "We help teams protect access to their applications and recover data after an interruption. The work covers identity, secure configuration and restoring the systems that hold customer records.",
        related: { label: "Application security consulting", href: "/consulting/cybersecurity" },
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
        title: "Digital workplace and collaboration software",
        description: "Explore tools for shared writing, knowledge publishing, events and groups. See how these workflows work in our open-source community platform.",
        lede: "We build software for people who write together, organise events and manage groups. The same workflows are available on our open-source publishing platform.",
        related: { label: "Explore the community platform", href: "/products/monkeys" },
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
        title: "Legacy application and mainframe integration",
        description: "Connect web applications to existing mainframe systems through approved interfaces. Add modern sign-in and access rules around the records your business relies on.",
        lede: "When records live on a mainframe, we can build a web application or API that uses the interfaces its operator provides. The existing operations team retains responsibility for the host.",
        related: { label: "Application and API development", href: "/technology/applications" },
        focus: [
            {
                title: "Around the core",
                body: "Web applications can read or update records through the interfaces approved by the team operating the host.",
            },
            {
                title: "Identity in front",
                body: "Modern login and roles for the new layer, so access is explicit before a request reaches the core system.",
            },
            {
                title: "Operational scope",
                body: "COBOL estates, capacity, and operations of the mainframe stay with whoever runs them today.",
            },
        ],
    },
    {
        slug: "networks",
        title: "Service integration and notification APIs",
        description: "Connect software services with APIs, service authentication and notification delivery. Explore email, SMS, push and live application updates.",
        lede: "We connect applications to one another and to the services that deliver their messages. We agree on the API contract, access rules and delivery channel for each integration.",
        related: { label: "Explore FreeRange Notify", href: "/products/freerange-notify" },
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
