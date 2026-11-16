import { pageMetadata } from "../../../data/pageMetadata";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActionLink } from "../../../components/ActionLink";
import { JsonLd } from "../../../components/JsonLd";
import { SITE_URL } from "../../../data/company";
import { breadcrumbJsonLd } from "../../../data/jsonLd";
import { developerProducts } from "../../../data/products";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return developerProducts.map(({ detail }) => ({ slug: detail.slug }));
}

function getProduct(slug: string) {
    const product = developerProducts.find((item) => item.detail.slug === slug);
    if (!product) notFound();
    return product;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const product = getProduct((await params).slug);
    const title = `${product.title} | ${product.shortDescription}`;
    const url = `/products/${product.detail.slug}`;
    return pageMetadata(url, title, product.description);
}

export default async function DeveloperProductPage({ params }: PageProps) {
    const product = getProduct((await params).slug);
    const path = `/products/${product.detail.slug}`;
    return (
        <>
            <JsonLd data={breadcrumbJsonLd([
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: product.title, path },
            ])} />
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "SoftwareSourceCode",
                name: product.title,
                url: `${SITE_URL}${path}`,
                description: product.description,
                codeRepository: product.repoUrl,
                publisher: { "@id": `${SITE_URL}/#organization` },
            }} />
            <section className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-12">
                <Link href="/products" className="font-medium underline underline-offset-4">Products</Link>
                <h1 className="my-6 text-4xl font-medium tracking-tight sm:text-6xl">{product.title}</h1>
                <p className="mb-8 max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)]">{product.description}</p>
                <ActionLink href={product.repoUrl}>View source on GitHub</ActionLink>
            </section>
            <section className="bg-[var(--bg-secondary)] py-16 sm:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 md:grid-cols-3 lg:px-12">
                    {product.detail.features.map((feature) => (
                        <div key={feature.title}>
                            <h2 className="mb-3 text-2xl font-medium tracking-tight">{feature.title}</h2>
                            <p className="leading-relaxed text-[var(--text-secondary)]">{feature.body}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
