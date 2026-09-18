import type { CompanySection } from "../../data/people";
import { JsonLd } from "../JsonLd";
import { breadcrumbJsonLd, webPageJsonLd } from "../../data/jsonLd";

interface CompanyStoryLayoutProps {
    eyebrow: string;
    title: string;
    lede: string;
    sections: CompanySection[];
    path: string;
}

export function CompanyStoryLayout({
    eyebrow,
    title,
    lede,
    sections,
    path,
}: CompanyStoryLayoutProps) {
    return (
        <div>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: title, path },
                ])}
            />
            <JsonLd data={webPageJsonLd(title, lede, path)} />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">{eyebrow}</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        {lede}
                    </p>
                </div>
            </section>
            <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-3 gap-12">
                    {sections.map((item) => (
                        <div key={item.title}>
                            <span className="block w-8 h-[2px] bg-[var(--brand)] mb-5" />
                            <h2 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                                {item.title}
                            </h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
