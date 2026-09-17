import { Metadata } from "next";
import * as motion from "motion/react-client";
import { ArrowRight, Users, Heart, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Careers at Buddhicintaka (OPC) Private Limited. Remote-first roles at a software company based in Muzaffarpur, Bihar.",
    alternates: { canonical: "/careers" },
    openGraph: {
        title: "Careers | Buddhicintaka",
        description:
            "Remote-first roles at Buddhicintaka, a software company based in Muzaffarpur, Bihar.",
        url: "/careers",
        locale: "en_IN",
    },
};

const jobs = [
    {
        title: "Senior Backend Engineer",
        type: "Full-time",
        location: "Remote",
        tech: "Go / Rust",
        description:
            "Build and maintain backend systems for the company.",
    },
    {
        title: "Frontend Developer",
        type: "Full-time",
        location: "Remote",
        tech: "React / TypeScript",
        description:
            "Build intuitive interfaces for our developer tools and client projects.",
    },
    {
        title: "DevOps Engineer",
        type: "Contract",
        location: "Remote",
        tech: "Kubernetes / Bare Metal",
        description: "Manage our self-hosted infrastructure and CI/CD pipelines.",
    },
    {
        title: "Technical Writer",
        type: "Part-time",
        location: "Remote",
        tech: "Markdown / Docs",
        description:
            "Create clear, helpful documentation for our projects.",
    },
];

const perks = [
    {
        icon: Users,
        title: "Community First",
        description: "Work on real projects with a growing open-source team.",
    },
    {
        icon: Zap,
        title: "High Performance",
        description: "Solve complex engineering challenges.",
    },
    {
        icon: Heart,
        title: "Inclusive Culture",
        description: "Remote-first, diverse, and supportive.",
    },
];

const Careers = () => {
    return (
        <section className="pt-28 pb-20 sm:pb-28 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row gap-16 mb-16">
                    <div className="md:w-1/3">
                        <p className="section-label mb-5">
                            Careers
                        </p>
                        <h1 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-6 tracking-tight">
                            Build something meaningful with us.
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] mb-10 leading-relaxed">
                            Join the team in Muzaffarpur, Bihar. Remote-first.
                        </p>

                        <div className="space-y-6">
                            {perks.map((perk) => {
                                const Icon = perk.icon;
                                return (
                                    <div key={perk.title} className="flex items-start gap-4">
                                        <div className="p-3 bg-[var(--accent-subtle)] rounded-lg text-[var(--accent)] shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[var(--text-primary)]">
                                                {perk.title}
                                            </h4>
                                            <p className="text-sm text-[var(--text-secondary)]">
                                                {perk.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="md:w-2/3 grid gap-4">
                        {jobs.map((job, index) => (
                            <motion.div
                                key={job.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[var(--bg-secondary)] p-6 border border-[var(--border-primary)] hover:border-[var(--accent-border)] transition-all group flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                                        {job.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 text-sm mt-2 mb-3">
                                        <span className="bg-[var(--bg-primary)] text-[var(--text-tertiary)] px-2.5 py-1 rounded text-xs border border-[var(--border-primary)]">
                                            {job.type}
                                        </span>
                                        <span className="bg-[var(--bg-primary)] text-[var(--text-tertiary)] px-2.5 py-1 rounded text-xs border border-[var(--border-primary)]">
                                            {job.location}
                                        </span>
                                        <span className="bg-[var(--accent-subtle)] text-[var(--accent)] px-2.5 py-1 rounded text-xs border border-[var(--accent-border)]">
                                            {job.tech}
                                        </span>
                                    </div>
                                    <p className="text-[var(--text-secondary)] text-sm max-w-md">
                                        {job.description}
                                    </p>
                                </div>
                                <a
                                    href={`mailto:mail.themonkeys.life@gmail.com?subject=Application: ${job.title}`}
                                    className="px-5 py-2 bg-[var(--accent)] text-white text-sm font-medium rounded-lg hover:bg-[var(--accent-hover)] transition-colors flex items-center gap-2 whitespace-nowrap"
                                >
                                    Apply Now
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Careers;
