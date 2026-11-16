import { pageMetadata } from "../../data/pageMetadata";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CollectionJsonLd } from "../../components/JsonLd";
import { howWeWorkPages } from "../../data/consulting";

const description = "Our fully remote team works primarily from Patna and Bangalore. Learn how we plan projects, review changes and support software after release.";

export const metadata: Metadata = pageMetadata(
    "/how-we-work",
    "How our remote engineering team works",
    description,
);

export default function HowWeWorkIndexPage() {
    return (
        <div>
            <CollectionJsonLd
                name="How we work"
                description={description}
                path="/how-we-work"
                items={howWeWorkPages.map((page) => ({
                    name: page.title,
                    path: `/how-we-work/${page.slug}`,
                }))}
            />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">How we work</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        How our remote team works
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        Buddhicintaka works entirely remotely. Most of our developers are based in
                        Patna, Bihar, and Bangalore. We plan projects with clients, review changes
                        in shared repositories and document how to run the software we deliver.
                    </p>
                </div>
            </section>

            <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-3 gap-12">
                    {howWeWorkPages.map((page) => (
                        <a
                            key={page.slug}
                            href={`/how-we-work/${page.slug}`}
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


        </div>
    );
}
