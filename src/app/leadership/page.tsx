import { pageMetadata } from "../../data/pageMetadata";
import Link from "next/link";
import { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../data/jsonLd";
import { SITE_URL } from "../../data/company";

export const metadata: Metadata = pageMetadata(
    "/leadership",
    "Leadership and the open-source community in Bihar",
    "Meet Dave, Managing Director of Buddhicintaka, and the developers who maintain its open-source community, publishing platform and software projects in Bihar.",
);

export default function LeadershipPage() {
    return (
        <div>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Leadership", path: "/leadership" },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Dave",
                    jobTitle: "Managing Director",
                    worksFor: {
                        "@type": "Organization",
                        name: "Buddhicintaka (OPC) Private Limited",
                        url: SITE_URL,
                    },
                    url: `${SITE_URL}/leadership`,
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Muzaffarpur",
                        addressRegion: "Bihar",
                        addressCountry: "IN",
                    },
                }}
            />
            <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">Leadership</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] text-[var(--text-primary)]">
                        Dave
                    </h1>
                    <p className="mt-3 text-lg text-[var(--text-secondary)]">
                        Managing Director
                    </p>
                    <span className="mt-8 block w-10 h-[2px] bg-[var(--brand)]" />
                    <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
                        Dave leads Buddhicintaka, the software company behind Monkeys and
                        FreeRange Notify. His work brings together product engineering,
                        technical education and the company’s open-source community.
                    </p>
                </div>
            </section>
            <section className="bg-[var(--bg-secondary)] py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-12">
                    <h2 className="mb-6 text-3xl font-medium tracking-tight sm:text-4xl">
                        Open-source leadership in Bihar
                    </h2>
                    <div className="max-w-2xl space-y-5 leading-relaxed text-[var(--text-secondary)]">
                        <p>
                            We lead Monkeys, which we consider Bihar’s largest open-source
                            technology community. Its maintainers develop the publishing platform,
                            review contributions and organise events where people can
                            share their work.
                        </p>
                        <p>
                            The work is public. A developer can follow a feature from its
                            first discussion through code review, or contribute to the
                            frontend, backend and notification services.
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 font-medium text-[var(--text-primary)] underline underline-offset-4">
                            <Link href="/team">Meet the maintainers</Link>
                            <a href="https://github.com/the-monkeys">Explore the repositories</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
