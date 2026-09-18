import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../data/jsonLd";
import { PRESS_STORY_TITLE, pressReleases } from "../../data/press";
import { SITE_URL } from "../../data/company";

export const metadata: Metadata = {
    title: "Press releases",
    description:
        "Press coverage of Buddhicintaka building Orbitor AI for analysis and fact-checking.",
    alternates: { canonical: "/press" },
    openGraph: {
        title: "Press releases | Buddhicintaka",
        description:
            "Coverage of Buddhicintaka building Orbitor AI for analysis and fact-checking.",
        url: "/press",
        locale: "en_IN",
    },
};

export default function PressPage() {
    return (
        <section className="pt-28 pb-24 sm:pb-32 bg-[var(--bg-primary)]">
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Press releases", path: "/press" },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "NewsArticle",
                    headline: PRESS_STORY_TITLE,
                    url: `${SITE_URL}/press`,
                    inLanguage: "en-IN",
                    publisher: {
                        "@type": "Organization",
                        name: "Buddhicintaka (OPC) Private Limited",
                        url: SITE_URL,
                    },
                    sameAs: pressReleases.map((item) => item.href),
                }}
            />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <p className="section-label mb-5">Press</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                    Press releases
                </h1>
                <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-16">
                    {PRESS_STORY_TITLE}. The same story ran on these outlets.
                </p>
                <ul className="max-w-2xl space-y-6">
                    {pressReleases.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-start gap-3 text-[var(--text-primary)] hover:text-[var(--brand)]"
                            >
                                <span>
                                    <span className="block text-xl font-medium mb-1">
                                        {item.outlet}
                                    </span>
                                    <span className="text-[var(--text-secondary)] group-hover:text-[var(--brand)]">
                                        {PRESS_STORY_TITLE}
                                    </span>
                                </span>
                                <ArrowRight className="w-4 h-4 mt-1.5 shrink-0" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
