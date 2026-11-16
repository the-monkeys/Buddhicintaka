import { pageMetadata } from "../../data/pageMetadata";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "../../components/JsonLd";
import { aboutPageJsonLd, breadcrumbJsonLd } from "../../data/jsonLd";
import {
    COMPANY_ADDRESS_LINES,
    COMPANY_GST,
    COMPANY_LEGAL_NAME,
    COMPANY_MOTTO,
    PRODUCTS,
} from "../../data/company";

export const metadata: Metadata = pageMetadata(
    "/about",
    "About our technology company in Bihar",
    "Founded in Muzaffarpur in 2025, Buddhicintaka builds publishing, notification and identity platforms. Meet the company and its engineering team in Patna and Bangalore.",
);

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

            <section className="pt-28 pb-14 sm:pt-36 sm:pb-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h1 className="text-[clamp(2.15rem,10vw,2.7rem)] sm:text-5xl md:text-6xl xl:text-[4.35rem] font-medium tracking-tight leading-[1.05] text-[var(--text-primary)]">
                        About Buddhicintaka
                    </h1>
                    <span className="mt-8 block w-10 h-[2px] bg-[var(--brand)]" />
                    <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl">
                        {COMPANY_LEGAL_NAME} is a technology company founded in Muzaffarpur,
                        Bihar, in 2025. We develop Monkeys, FreeRange Notify and Monkeys
                        Identity, and work with OSDuo Tech LLP on the Aasriva marketplace.
                    </p>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
                        We describe Buddhicintaka as Bihar’s largest technology company.
                        Our fully remote team works primarily from Patna and Bangalore,
                        building products, maintaining open-source projects and teaching
                        the engineering skills behind them.
                    </p>
                    <nav aria-label="About the company" className="mt-6 flex max-w-2xl flex-wrap gap-x-6 gap-y-3 font-medium underline underline-offset-4">
                        <Link href="/products">Our products</Link>
                        <Link href="/leadership">Leadership</Link>
                        <Link href="/company/history">Company history</Link>
                        <Link href="/how-we-work">How we work</Link>
                        <Link href="/company/culture">Culture</Link>
                        <Link href="/company/inclusion">Inclusion</Link>
                    </nav>
                </div>
            </section>

            <section className="bg-[var(--bg-secondary)] py-24 sm:py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-[var(--text-primary)] max-w-2xl mb-14">
                        Our products
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
                    <p className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] max-w-4xl">
                        {COMPANY_MOTTO}
                    </p>
                    <p className="mt-8 text-sm tracking-[0.16em] uppercase text-white/50">
                        Our motto
                    </p>
                    <Link href="/company/purpose" className="mt-6 inline-block underline underline-offset-4">Our purpose</Link>
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
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 pl-6 pr-2 py-2.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
                        >
                            Write to us
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
