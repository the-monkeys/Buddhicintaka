import { pageMetadata } from "../../data/pageMetadata";
import Link from "next/link";
﻿import { Metadata } from "next";
import Image from "next/image";
import { developerProducts } from "../../data/products";
import { featuredProducts } from "../../data/homeContent";
import { ArrowRight } from "lucide-react";
import { CollectionJsonLd } from "../../components/JsonLd";

const description = "Explore Monkeys, Aasriva, FreeRange Notify and Monkeys Identity, and learn about the Orbitor AI project.";

export const metadata: Metadata = pageMetadata(
    "/products",
    "Software products and open-source developer tools",
    description,
);

export default function ProductsPage() {
    return (
        <section className="pt-28 pb-24 sm:pb-32 bg-[var(--bg-primary)]">
            <CollectionJsonLd
                name="Products"
                description={description}
                path="/products"
                items={[
                    ...featuredProducts.map((item) => ({ name: item.name, path: item.href })),
                    ...developerProducts.map((item) => ({ name: item.title, path: `/products/${item.detail.slug}` })),
                    { name: "Orbitor AI", path: "/press" },
                ]}
            />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <p className="section-label mb-5">Products</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[var(--text-primary)] mb-16 tracking-tight leading-[1.1] max-w-3xl">
                    What we build.
                </h1>
                <div className="grid md:grid-cols-2 gap-12">
                    {featuredProducts.map((product) => (
                        <a key={product.name} href={product.href} className="group block">
                            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-tertiary)] mb-6">
                                <Image
                                    src={product.image}
                                    alt={product.alt}
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
                <h2 className="mt-20 mb-8 text-3xl font-medium tracking-tight">Developer tools</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    {developerProducts.map((product) => (
                        <article key={product.id} id={product.id} className="scroll-mt-24 border-t border-[var(--border-secondary)] pt-5">
                            <h3 className="mb-3 text-2xl font-medium">{product.title}</h3>
                            <p className="mb-4 max-w-xl leading-relaxed text-[var(--text-secondary)]">{product.description}</p>
                            <Link href={`/products/${product.detail.slug}`} className="font-medium underline underline-offset-4">
                                Explore {product.title}
                            </Link>
                        </article>
                    ))}
                </div>
                <div className="mt-16 border-t border-[var(--border-secondary)] pt-5">
                    <h2 className="mb-3 text-2xl font-medium">Orbitor AI</h2>
                    <p className="mb-4 max-w-xl leading-relaxed text-[var(--text-secondary)]">
                        We are developing Orbitor AI for analysis and fact-checking.
                    </p>
                    <Link href="/press" className="font-medium underline underline-offset-4">Read the press coverage</Link>
                </div>
            </div>
        </section>
    );
}
