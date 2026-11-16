export interface OfferItem {
    title: string;
    body: string;
}

export const whatWeOffer: OfferItem[] = [
    {
        title: "Custom software and product development",
        body: "We build web and mobile applications, customer portals, dashboards, APIs and backend services. We also extend existing products and develop internal tools for the people who run them.",
    },
    {
        title: "Systems integration and data engineering",
        body: "We connect applications through APIs and build data pipelines for reporting. For example, an approved request can update the finance system and notify the person who submitted it.",
    },
    {
        title: "Cloud hosting and DevOps",
        body: "We review usage and hosting costs, compare infrastructure options and plan migrations. We set up servers, containers, deployment pipelines, monitoring and backups, with ongoing operations where needed.",
    },
    {
        title: "Maintenance, contracts and tenders",
        body: "We take on software development contracts, annual maintenance agreements and eligible tenders or RFPs. Support can cover bug fixes, dependency upgrades, performance improvements and new releases.",
    },
    {
        title: "AI development and workflow automation",
        body: "We build knowledge assistants that cite approved documents, extract data from forms and reports, and develop agents that carry out routine steps with human approval. We evaluate pilots on agreed examples before expanding them.",
    },
    {
        title: "Identity and application security",
        body: "We review architecture and code and implement authentication, single sign-on, multi-factor authentication and access policies. Monkeys Identity is our open-source identity and access project.",
    },
    {
        title: "Notifications and messaging",
        body: "FreeRange Notify delivers application alerts by email, SMS, push and live in-app updates. We help teams connect reminders, order updates and operational alerts to their own systems.",
    },
    {
        title: "Technical AI training",
        body: "Engineering students, faculty and software teams work with transformers, attention, small-model training, fine-tuning and evaluation. Applied sessions cover retrieval-augmented generation, AI agents and deployment.",
    },
    {
        title: "Practical AI training",
        body: "Students, faculty and professionals can learn without a programming background. Sessions cover research, drafting, summarising documents, checking outputs and handling information responsibly.",
    },
    {
        title: "Engineering education and open-source collaboration",
        body: "We teach full-stack development, Go APIs, cloud and DevOps, and data structures and algorithms with Java. We offer workshops, faculty development and project mentoring, including supervised contributions to Monkeys.",
    },
    {
        title: "Architecture and delivery consulting",
        body: "We review existing systems, agree on requirements and define what a team needs to build, integrate or replace. Engagements can start with a technical assessment or a limited pilot.",
    },
    {
        title: "Social media management",
        body: "We manage Instagram and X accounts for businesses and institutions, including content planning and publishing.",
    },
    {
        title: "Government procurement and IT hardware",
        body: "Through the Government e-Marketplace, we participate in eligible bids for software, training and application security. We also supply branded IT hardware and coordinate manufacturer warranty support.",
    },
];

export interface TopicPage {
    slug: string;
    title: string;
    description: string;
    lede: string;
    focus: OfferItem[];
    related: { label: string; href: string };
}

export const consultingPages: TopicPage[] = [
    {
        slug: "agentic-modernization",
        title: "AI agents for existing applications",
        description: "Build supervised AI agents into existing applications for document search, drafting and request routing. Define approvals and evaluate results before deployment.",
        lede: "We add AI to the tools your team already uses. A pilot starts with a specific task, the documents it can use and the decisions a person must approve.",
        related: { label: "AI and document processing", href: "/technology/ai-and-data" },
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
        title: "Business workflow automation",
        description: "Replace spreadsheet and email handoffs with approval workflows, internal dashboards and integrations that track requests from submission to completion.",
        lede: "A shared request portal lets people submit a request, review the decision and track its status. We connect it to the systems that already hold the relevant records.",
        related: { label: "Application development", href: "/technology/applications" },
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
                body: "Connect the new app to mail, payments, shipping, or the systems you already pay for, through documented interfaces.",
            },
        ],
    },
    {
        slug: "cybersecurity",
        title: "Application security consulting",
        description: "Review authentication, access controls and software architecture. Get concrete engineering changes and a delivery plan for the application your team operates.",
        lede: "We review how people sign in, what information they can access and where controls belong in an application's design.",
        related: { label: "Monkeys Identity", href: "/products/monkeys-identity" },
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
        title: "AI training for engineers and non-technical teams",
        description: "Compare technical AI courses in transformers, model training and evaluation with practical AI workshops for students, faculty and professionals.",
        lede: "We design courses for students, faculty and working teams. The technical track covers how AI systems are built. The practical track focuses on using AI in everyday work.",
        related: { label: "Workshops and early careers", href: "/early-careers" },
        focus: [
            {
                title: "Engineering track",
                body: "Participants work with transformers, attention, model training and evaluation. They can also build a document search application, connect an agent to tools and deploy a model.",
            },
            {
                title: "Non-technical track",
                body: "Participants practise research, drafting, summarisation and fact-checking with AI tools. Exercises cover privacy and reviewing results before using them.",
            },
            {
                title: "Workshops and mentoring",
                body: "We offer faculty development, software engineering workshops and supervised open-source projects. We agree on prerequisites, exercises and delivery format with each group.",
            },
        ],
    },
];

export const howWeWorkPages: TopicPage[] = [
    {
        slug: "collaborative",
        title: "Software project planning and reviews",
        description: "See how we turn a client's requirements into agreed milestones, testable deliverables and working software their team can review.",
        lede: "We start with the people who use the system. Together we identify the problem, agree on the scope and decide how to test the result.",
        related: { label: "Architecture and delivery consulting", href: "/consulting#offerings" },
        focus: [
            {
                title: "Discovery",
                body: "We review the existing process, the systems involved and the people who will use the software.",
            },
            {
                title: "Scope and milestones",
                body: "We agree on the deliverables, the expected effort and what a working result should look like.",
            },
            {
                title: "Reviews",
                body: "Clients can review working software and give feedback while changes are still small. We record decisions alongside the work.",
            },
        ],
    },
    {
        slug: "bridge",
        title: "Remote software development from Patna and Bangalore",
        description: "Learn how our fully remote engineering team coordinates code reviews, client walkthroughs and open-source contributions across Patna and Bangalore.",
        lede: "Our developers work remotely. Most are based in Patna, Bihar, and Bangalore. Shared repositories and written reviews keep work moving across locations.",
        related: { label: "Meet our engineering community", href: "/team" },
        focus: [
            {
                title: "Day-to-day engineering",
                body: "Developers use issues to describe work and pull requests to explain proposed changes. Maintainers review the changes before they are merged.",
            },
            {
                title: "Working with clients",
                body: "Walkthroughs give the client team time to try a feature, ask questions and agree on the next change.",
            },
            {
                title: "Open-source contributions",
                body: "Monkeys contributors use the same public repositories to report issues, improve documentation and submit code for review.",
            },
        ],
    },
    {
        slug: "vital",
        title: "Software handover and maintenance",
        description: "Learn what clients receive at release, from tested code and deployment instructions to documentation, maintenance and agreed support terms.",
        lede: "At handover, the team taking ownership needs the source code, deployment instructions and a clear understanding of support arrangements.",
        related: { label: "Cloud operations and deployment", href: "/technology/cloud" },
        focus: [
            {
                title: "Testing and release",
                body: "We test the agreed workflows and deploy the application to the chosen infrastructure.",
            },
            {
                title: "Documentation",
                body: "We document how to configure, run and maintain the software so the team can operate it after launch.",
            },
            {
                title: "Ongoing maintenance",
                body: "Where support is agreed, we handle fixes, dependency updates, performance reviews and subsequent releases.",
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
