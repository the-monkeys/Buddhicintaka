import { pageMetadata } from "../../data/pageMetadata";
import Link from "next/link";
import { ActionLink } from "../../components/ActionLink";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CollectionJsonLd } from "../../components/JsonLd";
import { industryPages } from "../../data/industries";

export const metadata: Metadata = pageMetadata(
    "/industries",
    "Software for retail, manufacturing and government",
    "See how our engineering work supports sellers, manufacturers, public-sector buyers and publishers through marketplaces, integrations and content platforms.",
);

export default function IndustriesPage() {
    return (
        <div>
            <CollectionJsonLd
                name="Industries"
                description="Buddhicintaka work in consumer retail, manufacturing, government, and technology media: Aasriva, GeM, and Monkeys, from Muzaffarpur, Bihar."
                path="/industries"
                items={industryPages.map((page) => ({
                    name: page.title,
                    path: `/industries/${page.slug}`,
                }))}
            />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">Industries</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        Where the work already lives.
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        Retail and manufacturing through Aasriva. Government
                        through GeM. Technology and media through Monkeys and
                        the software we ship.
                    </p>
                </div>
            </section>

            <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-12">
                    {industryPages.map((page) => (
                        <a
                            key={page.slug}
                            href={`/industries/${page.slug}`}
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
