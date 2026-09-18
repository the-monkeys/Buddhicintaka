import { ArrowRight } from "lucide-react";
import type { OfferItem } from "../../data/consulting";
import { whatWeOffer } from "../../data/consulting";
import { JsonLd } from "../JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "../../data/jsonLd";

interface TopicPageLayoutProps {
    eyebrow: string;
    title: string;
    lede: string;
    focus: OfferItem[];
    path: string;
    parent: { name: string; path: string };
}

export function TopicPageLayout({
    eyebrow,
    title,
    lede,
    focus,
    path,
    parent,
}: TopicPageLayoutProps) {
    return (
        <div>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    parent,
                    { name: title, path },
                ])}
            />
            <JsonLd data={serviceJsonLd(title, lede, path)} />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">{eyebrow}</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-10">
                        {lede}
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 pl-6 pr-2 py-2.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
                    >
                        Talk to us
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </a>
                </div>
            </section>

            <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)] max-w-2xl mb-14">
                        On this work
                    </h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        {focus.map((item) => (
                            <div key={item.title}>
                                <span className="block w-8 h-[2px] bg-[var(--brand)] mb-5" />
                                <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
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

            <section className="bg-[var(--bg-primary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)] max-w-2xl mb-4">
                        What we can take on
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-14 leading-relaxed">
                        The same set of services on every one of these pages.
                        Pick a starting point. We still do the rest.
                    </p>
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

            <section className="bg-[var(--bg-primary)] pb-24 sm:pb-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 pl-6 pr-2 py-2.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
                    >
                        Write to us
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </a>
                </div>
            </section>
        </div>
    );
}
