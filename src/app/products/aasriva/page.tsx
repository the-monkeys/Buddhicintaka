import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "../../../components/JsonLd";
import { aasrivaProductJsonLd } from "../../../data/jsonLd";

export const metadata: Metadata = {
    title: "Aasriva",
    description:
        "Aasriva is a marketplace for Indian manufacturers and local artisans, built by Buddhicintaka in Bihar as a joint venture with OSDuo Tech LLP.",
    alternates: { canonical: "/products/aasriva" },
    openGraph: {
        title: "Aasriva | Buddhicintaka",
        description:
            "Marketplace for Indian manufacturers and artisans. A Buddhicintaka joint venture with OSDuo Tech LLP.",
        url: "/products/aasriva",
        locale: "en_IN",
    },
};

const features = [
    {
        title: "Sell pan India",
        body: "A marketplace for Indian manufacturers and local artisans. We own and operate the platform so sellers can reach customers across India.",
    },
    {
        title: "Vendor registration",
        body: "Sellers register on Aasriva. After we approve the registration, they can list products. There are no registration or listing charges today. This policy may change in the future.",
    },
    {
        title: "Orders, packing, and shipping",
        body: "When a customer places an order, the vendor sees it in the vendor portal, packs it, and our integrated shipping aggregator picks it up and delivers it to the customer.",
    },
    {
        title: "Payouts",
        body: "Vendors receive payment from Aasriva after the product return window has closed.",
    },
    {
        title: "Returns and replacements",
        body: "The vendor decides whether a product is returnable or replace-only, and sets the return window.",
    },
    {
        title: "Pincode-level selling",
        body: "Vendors can limit selling to specific pincodes. That matters for goods that cannot ship pan India, such as cakes and pastries with a shelf life of a few hours.",
    },
];

export default function AasrivaPage() {
    return (
        <div>
            <JsonLd data={aasrivaProductJsonLd()} />
            <section className="pt-28 pb-16 sm:pb-20 bg-[var(--bg-primary)]">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <p className="section-label mb-5">Products</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-6 tracking-tight leading-[1.1] max-w-3xl">
                        Aasriva
                    </h1>
                    <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-4">
                        A marketplace for Indian manufacturers and local artisans.
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl mb-8">
                        A joint venture of Buddhicintaka and OSDuo Tech LLP.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <a
                            href="https://aasriva.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 pl-6 pr-2 py-2.5 text-sm font-semibold text-white rounded-full bg-[var(--cta)] hover:bg-[var(--cta-hover)] transition-colors"
                        >
                            Visit Aasriva
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>
                        <a
                            href="https://aasriva.in/vendor-register/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold hover:underline underline-offset-8"
                        >
                            Become a vendor
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[var(--bg-tertiary)]">
                        <Image
                            src="/work/aasriva-shop.png"
                            alt="Aasriva marketplace shop"
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
                        From listing to last-mile delivery.
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
