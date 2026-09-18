import { Metadata } from "next";
import Image from "next/image";
import { Github } from "lucide-react";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../data/jsonLd";
import { maintainers } from "../../data/people";

export const metadata: Metadata = {
    title: "Team",
    description:
        "Open-source maintainers of the Monkeys community at Buddhicintaka. Events by Gautam. Instagram marketing by Rohit Kumar Singh.",
    alternates: { canonical: "/team" },
    openGraph: {
        title: "Team | Buddhicintaka",
        description:
            "Maintainers of the open-source Monkeys community. Events by Gautam. Instagram by Rohit Kumar Singh.",
        url: "/team",
        locale: "en_IN",
    },
};

export default function TeamPage() {
    return (
        <div>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Team", path: "/team" },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    name: "Buddhicintaka team",
                    itemListElement: maintainers.map((person, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        item: {
                            "@type": "Person",
                            name: person.name,
                            jobTitle: person.role,
                            ...(person.avatar ? { image: person.avatar } : {}),
                            sameAs: [person.github, person.instagram].filter(
                                Boolean,
                            ),
                        },
                    })),
                }}
            />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">People</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        The people around Monkeys.
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        Maintainers keep github.com/the-monkeys moving. Monkeys
                        events are managed by Gautam. Rohit Kumar Singh runs the
                        Monkeys Instagram for marketing and promotion.
                    </p>
                </div>
            </section>
            <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {maintainers.map((person) => {
                        const href = person.github ?? person.instagram;
                        const inner = (
                            <>
                                <div className="relative aspect-square overflow-hidden bg-[var(--bg-tertiary)] mb-5 flex items-center justify-center">
                                    {person.avatar ? (
                                        <Image
                                            src={person.avatar}
                                            alt={person.name}
                                            fill
                                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <span className="text-4xl font-medium text-[var(--brand)]">
                                            {person.name
                                                .split(" ")
                                                .map((part) => part[0])
                                                .slice(0, 2)
                                                .join("")}
                                        </span>
                                    )}
                                </div>
                                <h2 className="text-xl font-medium text-[var(--text-primary)] mb-1 group-hover:text-[var(--brand)] transition-colors">
                                    {person.name}
                                </h2>
                                <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                                    {person.role}
                                </p>
                                {person.github ? (
                                    <span className="inline-flex items-center gap-2 text-sm text-[var(--brand)]">
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </span>
                                ) : person.instagram ? (
                                    <span className="inline-flex items-center gap-2 text-sm text-[var(--brand)]">
                                        Instagram
                                    </span>
                                ) : null}
                            </>
                        );

                        if (!href) {
                            return (
                                <div key={person.name} className="group block">
                                    {inner}
                                </div>
                            );
                        }

                        return (
                            <a
                                key={person.name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                {inner}
                            </a>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
