import { pageMetadata } from "../../data/pageMetadata";
import { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../data/jsonLd";
import { funders } from "../../data/press";
import { SITE_URL } from "../../data/company";

export const metadata: Metadata = pageMetadata(
    "/investors",
    "Company investors and funding",
    "Learn who backs Buddhicintaka and how its managing director and early supporters have funded the software company in Bihar.",
);

export default function InvestorsPage() {
    return (
        <div>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Investors", path: "/investors" },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Dave",
                    jobTitle: "Managing Director",
                    url: `${SITE_URL}/leadership`,
                    knowsAbout:
                        "Investor in Buddhicintaka (OPC) Private Limited",
                }}
            />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">Investors</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        Investors and company funding
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        Buddhicintaka is backed by its managing director, Dave. Other early supporters
                        have also contributed funding to the company.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-medium underline underline-offset-4">
                        <Link href="/products">Explore the product portfolio</Link>
                        <Link href="/contact">Company enquiries</Link>
                    </div>
                </div>
            </section>
            <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-2 gap-16">
                    <div>
                        <span className="block w-8 h-[2px] bg-[var(--brand)] mb-5" />
                        <p className="text-sm tracking-[0.14em] uppercase text-[var(--text-tertiary)] mb-3">
                            Investor
                        </p>
                        <h2 className="text-3xl font-medium text-[var(--text-primary)] mb-3">
                            Dave
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            Dave leads the software company and is its investor.
                        </p>
                        <a
                            href="/leadership"
                            className="inline-block mt-6 text-[var(--brand)] font-semibold hover:underline underline-offset-4"
                        >
                            Leadership
                        </a>
                    </div>
                    <div>
                        <span className="block w-8 h-[2px] bg-[var(--brand)] mb-5" />
                        <p className="text-sm tracking-[0.14em] uppercase text-[var(--text-tertiary)] mb-3">
                            Early support
                        </p>
                        <h2 className="text-3xl font-medium text-[var(--text-primary)] mb-3">
                            Funding contributors
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                            The company acknowledges the following people for their financial support.
                        </p>
                        <ul className="space-y-3 text-lg text-[var(--text-primary)]">
                            {funders.map((name) => (
                                <li key={name}>{name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
