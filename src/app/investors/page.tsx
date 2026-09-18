import { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../data/jsonLd";
import { funders } from "../../data/press";
import { SITE_URL } from "../../data/company";

export const metadata: Metadata = {
    title: "Investors",
    description:
        "Dave is the investor in Buddhicintaka (OPC) Private Limited. Khushaboo Pandey, Shinu Joseph, and Irak Rigia have funded the company on occasions.",
    alternates: { canonical: "/investors" },
    openGraph: {
        title: "Investors | Buddhicintaka",
        description:
            "Dave is the investor in Buddhicintaka. Others have funded the company on occasions.",
        url: "/investors",
        locale: "en_IN",
    },
};

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
                        Who backs the company.
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        Buddhicintaka (OPC) Private Limited is backed by one
                        investor. Others have funded the company on occasions.
                    </p>
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
                            Managing Director, and the investor in the company.
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
                            Occasional funding
                        </p>
                        <h2 className="text-3xl font-medium text-[var(--text-primary)] mb-3">
                            Funded on occasions
                        </h2>
                        <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                            These people have funded the company on occasions.
                            They are not listed as investors.
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
