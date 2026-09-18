import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CollectionJsonLd } from "../../components/JsonLd";
import { whatWeOffer } from "../../data/consulting";
import { industryPages } from "../../data/industries";

export const metadata: Metadata = {
    title: "Industries",
    description:
        "Buddhicintaka work in consumer retail, manufacturing, government, and technology media: Aasriva, GeM, and Monkeys, from Muzaffarpur, Bihar.",
    alternates: { canonical: "/industries" },
    openGraph: {
        title: "Industries | Buddhicintaka",
        description:
            "Retail, manufacturing, government, and technology media work from Muzaffarpur, Bihar.",
        url: "/industries",
        locale: "en_IN",
    },
};

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
                    <a
                        href="/contact"
                        className="mt-16 inline-flex items-center gap-2 pl-6 pr-2 py-2.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
                    >
                        Talk to us
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </a>
                </div>
            </section>
        </div>
    );
}
