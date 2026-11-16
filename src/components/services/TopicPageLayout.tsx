import Link from "next/link";
import { ActionLink } from "../ActionLink";
import type { OfferItem, TopicPage } from "../../data/consulting";
import { JsonLd } from "../JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "../../data/jsonLd";

interface TopicPageLayoutProps {
    eyebrow: string;
    title: string;
    lede: string;
    focus: OfferItem[];
    related: TopicPage["related"];
    path: string;
    parent: { name: string; path: string };
}

export function TopicPageLayout({
    eyebrow,
    title,
    lede,
    focus,
    related,
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
                    <ActionLink href="/contact">Talk to us</ActionLink>
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

            <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-4 px-6 py-16 sm:px-8 lg:px-12">
                <ActionLink href="/contact">Talk to us</ActionLink>
                <Link href={related.href} className="font-medium underline underline-offset-4">
                    {related.label}
                </Link>
            </div>
        </div>
    );
}
