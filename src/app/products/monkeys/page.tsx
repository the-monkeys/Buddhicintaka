import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "../../../components/JsonLd";
import { monkeysProductJsonLd } from "../../../data/jsonLd";

export const metadata: Metadata = {
    title: "Monkeys",
    description:
        "Monkeys is an open-source community and content platform by Buddhicintaka in Muzaffarpur, Bihar, for research, articles, events, groups, and Studio.",
    alternates: { canonical: "/products/monkeys" },
    openGraph: {
        title: "Monkeys | Buddhicintaka",
        description:
            "Open-source community and content platform by Buddhicintaka in Muzaffarpur, Bihar.",
        url: "/products/monkeys",
        locale: "en_IN",
    },
};

const features = [
    {
        title: "Research, articles, and blogs",
        body: "Write and publish research, articles, and blogs. Monkeys recommends research publications and data-oriented writing.",
    },
    {
        title: "Collaborative writing",
        body: "Invite co-authors to write an article with you. You can invite one co-author, or more than one, on the same piece.",
    },
    {
        title: "Events",
        body: "Schedule events the way you would on Luma or Meetup. Invite co-hosts. Events can be public, private, or unlisted.",
    },
    {
        title: "Groups",
        body: "Create a group or community, host events for it, and publish articles for it. Groups can be public, private, or unlisted.",
    },
    {
        title: "Studio",
        body: "Turn articles into shareable cards for Instagram, X, LinkedIn, and other social channels.",
    },
    {
        title: "Digital business card",
        body: "Generate your digital business card and download it.",
    },
];

export default function MonkeysPage() {
    return (
        <div>
            <JsonLd data={monkeysProductJsonLd()} />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">Products</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        Monkeys
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
                        An open-source community and content platform by Buddhicintaka.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <a
                            href="https://monkeys.com.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 pl-6 pr-2 py-2.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
                        >
                            Visit Monkeys
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>
                        <a
                            href="https://github.com/the-monkeys/the_monkeys"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold hover:underline underline-offset-8"
                        >
                            View source
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[var(--bg-tertiary)]">
                        <Image
                            src="/work/monkeys-landing.png"
                            alt="Monkeys community and content platform"
                            fill
                            className="object-cover object-top"
                            sizes="100vw"
                            priority
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[var(--bg-primary)] py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.12] text-[var(--text-primary)] max-w-3xl mb-16">
                        Write together. Host events. Share your work.
                    </h2>
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        {features.map((feature, index) => (
                            <div key={feature.title}>
                                <p className="text-sm text-[var(--text-tertiary)] mb-3">
                                    0{index + 1}
                                </p>
                                <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {feature.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
