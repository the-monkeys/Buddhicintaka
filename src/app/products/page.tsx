import { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CollectionJsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Products from Buddhicintaka in Muzaffarpur, Bihar: Monkeys, an open-source content platform, and Aasriva, a marketplace for Indian manufacturers and artisans.",
    alternates: { canonical: "/products" },
    openGraph: {
        title: "Products | Buddhicintaka",
        description:
            "Monkeys and Aasriva, software products from Buddhicintaka in Muzaffarpur, Bihar.",
        url: "/products",
        locale: "en_IN",
    },
};

const catalog = [
    {
        name: "Monkeys",
        href: "/products/monkeys",
        image: "/work/monkeys-landing.png",
        summary:
            "Open-source community and content platform for research, articles, events, groups, and Studio.",
    },
    {
        name: "Aasriva",
        href: "/products/aasriva",
        image: "/work/aasriva-shop.png",
        summary:
            "Marketplace for Indian manufacturers and local artisans. A joint venture with OSDuo Tech LLP.",
    },
];

export default function ProductsPage() {
    return (
        <section className="pt-28 pb-24 sm:pb-32 bg-[var(--bg-primary)]">
            <CollectionJsonLd
                name="Products"
                description="Products from Buddhicintaka in Muzaffarpur, Bihar: Monkeys, an open-source content platform, and Aasriva, a marketplace for Indian manufacturers and artisans."
                path="/products"
                items={catalog.map((item) => ({
                    name: item.name,
                    path: item.href,
                }))}
            />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <p className="section-label mb-5">Products</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-16 tracking-tight leading-[1.1] max-w-3xl">
                    What we build.
                </h1>
                <div className="grid md:grid-cols-2 gap-12">
                    {catalog.map((product) => (
                        <a key={product.name} href={product.href} className="group block">
                            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-tertiary)] mb-6">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-medium text-[var(--text-primary)] mb-3 group-hover:text-[var(--brand)] transition-colors">
                                {product.name}
                            </h2>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                                {product.summary}
                            </p>
                            <span className="inline-flex items-center gap-2 text-[var(--brand)] font-semibold">
                                Learn more
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
