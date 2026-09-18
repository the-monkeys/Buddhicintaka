import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CollectionJsonLd } from "../../components/JsonLd";
import { howWeWorkPages, whatWeOffer } from "../../data/consulting";

export const metadata: Metadata = {
    title: "How we work",
    description:
        "How Buddhicintaka works: collaborative delivery from Muzaffarpur, Bihar, software used across India, and systems that have to stay up.",
    alternates: { canonical: "/how-we-work" },
    openGraph: {
        title: "How we work | Buddhicintaka",
        description:
            "Collaborative delivery from Muzaffarpur, Bihar, for software used across India.",
        url: "/how-we-work",
        locale: "en_IN",
    },
};

export default function HowWeWorkIndexPage() {
    return (
        <div>
            <CollectionJsonLd
                name="How we work"
                description="How Buddhicintaka works: collaborative delivery from Muzaffarpur, Bihar, software used across India, and systems that have to stay up."
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
                        Open with your team. Built in Bihar. Made to last.
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        Shared repos, nationwide products, and the systems people
                        notice when they break.
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

            <section className="bg-[var(--bg-primary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)] max-w-2xl mb-14">
                        What we can take on
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
                        {whatWeOffer.map((item) => (
                            <div key={item.title}>
                                <h3 className="text-lg font-medium text-[var(--text-primary)] mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {item.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
