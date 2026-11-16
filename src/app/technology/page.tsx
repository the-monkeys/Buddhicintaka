import { pageMetadata } from "../../data/pageMetadata";
import Link from "next/link";
import { ActionLink } from "../../components/ActionLink";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CollectionJsonLd } from "../../components/JsonLd";
import { technologyPages } from "../../data/technology";

export const metadata: Metadata = pageMetadata(
    "/technology",
    "Application, AI and cloud engineering services",
    "Explore our work in application development, AI and data, cloud operations, identity, resilience and systems integration.",
);

export default function TechnologyPage() {
    return (
        <div>
            <CollectionJsonLd
                name="Technology services"
                description="Application engineering, AI and data, cloud infrastructure and workplace technology from Buddhicintaka."
                path="/technology"
                items={technologyPages.map((page) => ({
                    name: page.title,
                    path: `/technology/${page.slug}`,
                }))}
            />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">Technology</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        Technology services
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        We build applications, deploy cloud infrastructure and integrate AI into the tools teams use every day.
                    </p>
                </div>
            </section>

            <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-12">
                    {technologyPages.map((page) => (
                        <a
                            key={page.slug}
                            href={`/technology/${page.slug}`}
                            className="group block"
                        >
                            <span className="block w-8 h-[2px] bg-[var(--brand)] mb-5" />
                            <h2 className="text-2xl sm:text-3xl font-medium text-[var(--text-primary)] mb-3 group-hover:text-[var(--brand)] transition-colors">
                                {page.title}
                            </h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                                {page.lede}
                            </p>
                            <span className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold">
                                Read more
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-16 sm:px-8 lg:px-12">
                <ActionLink href="/contact">Talk to us</ActionLink>
                <Link href="/consulting#offerings" className="font-medium underline underline-offset-4">
                    View all services
                </Link>
            </div>
        </div>
    );
}
