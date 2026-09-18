import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "../../components/JsonLd";
import { aboutPageJsonLd, breadcrumbJsonLd } from "../../data/jsonLd";
import {
    COMPANY_ADDRESS_LINES,
    COMPANY_DESCRIPTION,
    COMPANY_GST,
    COMPANY_LEGAL_NAME,
    PRODUCTS,
} from "../../data/company";

export const metadata: Metadata = {
    title: "About",
    description: COMPANY_DESCRIPTION,
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Buddhicintaka",
        description: COMPANY_DESCRIPTION,
        url: "/about",
        type: "website",
        locale: "en_IN",
    },
};

const shipped = [
    {
        name: PRODUCTS.monkeys.name,
        href: "/products/monkeys",
        image: "/work/monkeys-landing.png",
        alt: "Monkeys community and content platform",
        line: "Open-source writing, events, groups, and Studio.",
    },
    {
        name: PRODUCTS.aasriva.name,
        href: "/products/aasriva",
        image: "/work/aasriva-shop.png",
        alt: "Aasriva marketplace shop",
        line: "A marketplace for Indian manufacturers and artisans, with OSDuo Tech LLP.",
    },
];

const pillars = [
    {
        title: "Work stays in India",
        body: "Programming, applications, security, and training are done in India. Class-I local supplier, 100% local content.",
    },
    {
        title: "GeM vendor",
        body: "Registered on the Government e-Marketplace for software, training, and related work.",
    },
    {
        title: "Open source",
        body: (
            <>
                Code and community live at{" "}
                <a
                    href="https://github.com/the-monkeys"
                    className="text-[var(--brand)] font-medium hover:underline underline-offset-4"
                >
                    github.com/the-monkeys
                </a>
                .
            </>
        ),
    },
];

export default function AboutPage() {
    return (
        <div>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                ])}
            />
            <JsonLd data={aboutPageJsonLd()} />

            <section className="grid lg:grid-cols-12 lg:min-h-[100svh]">
                <div className="lg:col-span-5 flex flex-col justify-end px-6 sm:px-8 lg:px-12 xl:px-16 pt-32 pb-14 lg:py-24">
                    <h1 className="text-[2.7rem] sm:text-5xl md:text-6xl xl:text-[4.35rem] font-medium tracking-tight leading-[1.05] text-[var(--text-primary)] max-w-md">
                        From Muzaffarpur.
                        <br />
                        Built for India.
                    </h1>
                    <span className="mt-8 block w-10 h-[2px] bg-[var(--brand)]" />
                    <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] max-w-md">
                        {COMPANY_LEGAL_NAME} designs, develops, and operates
                        software from Bihar. The work is used across the
                        country.
                    </p>
                </div>
                <div className="lg:col-span-7 relative h-[62vh] sm:h-[70vh] lg:h-auto lg:min-h-[100svh]">
                    <Image
                        src="/team/dave.jpg"
                        alt="Dave, Managing Director of Buddhicintaka"
                        fill
                        priority
                        className="object-cover object-[82%_16%]"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 to-transparent" />
                    <p className="absolute bottom-5 left-5 sm:left-8 text-sm text-white">
                        Dave, Managing Director
                    </p>
                </div>
            </section>

            <section className="bg-[var(--bg-secondary)] py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-[var(--text-primary)] max-w-2xl mb-14">
                        Two products, already live.
                    </h2>
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
                        {shipped.map((item) => (
                            <a key={item.name} href={item.href} className="group block">
                                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-tertiary)] mb-5">
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        fill
                                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    {item.line}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[var(--bg-primary)] py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid md:grid-cols-3 gap-12 md:gap-10">
                    {pillars.map((item) => (
                        <div key={item.title}>
                            <span className="block w-8 h-[2px] bg-[var(--brand)] mb-5" />
                            <h2 className="text-2xl font-medium text-[var(--text-primary)] mb-3 tracking-tight">
                                {item.title}
                            </h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#1a1a1a] text-white py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <blockquote className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] max-w-4xl">
                        We believe software should be transparent, community-driven,
                        and built to last, not locked behind walls.
                    </blockquote>
                    <p className="mt-8 text-sm tracking-[0.16em] uppercase text-white/50">
                        Founding Principle
                    </p>
                </div>
            </section>

            <section className="bg-[var(--bg-primary)] py-24 sm:py-28">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
                    <div className="lg:col-span-6">
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--text-primary)] mb-6">
                            Muzaffarpur, Bihar
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            {COMPANY_ADDRESS_LINES.map((line) => (
                                <span key={line} className="block">
                                    {line}
                                </span>
                            ))}
                        </p>
                        {COMPANY_GST ? (
                            <p className="mt-6 text-sm tracking-[0.08em] text-[var(--text-tertiary)]">
                                GSTIN {COMPANY_GST}
                            </p>
                        ) : null}
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8">
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
                </div>
            </section>
        </div>
    );
}
