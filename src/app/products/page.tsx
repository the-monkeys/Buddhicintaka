import { Metadata } from "next";
import * as motion from "motion/react-client";
import { ArrowUpRight, Github } from "lucide-react";
import { products } from "../../data/products";

export const metadata: Metadata = {
    title: "Products",
    description: "Explore Buddhicintaka's open-source products — IAM, notification services, web crawlers, content platforms, and more.",
};

const ProductsPage = () => {
    return (
        <section className="pt-32 pb-20 sm:pb-28 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <span className="text-[var(--accent)] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                        Our Products
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
                        Built open. Built to last.
                    </h1>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                        Every product we ship is open source, community-driven, and enterprise-ready.
                        Explore them below and join the community.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product, index) => {
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={product.id}
                                id={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-8 hover:border-[var(--accent-border)] transition-all duration-300 flex flex-col h-full group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[var(--accent-subtle)] flex items-center justify-center mb-5">
                                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                                </div>

                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                                    {product.title}
                                </h3>
                                <p className="text-[var(--accent)] text-xs font-medium mb-3">
                                    {product.shortDescription}
                                </p>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 grow">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {product.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs font-medium bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] rounded-md border border-[var(--border-primary)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[var(--border-primary)]">
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
                                    >
                                        Visit
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </a>
                                    <a
                                        href={product.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors inline-flex items-center gap-1"
                                    >
                                        <Github className="w-3.5 h-3.5" />
                                        Source
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 pt-12 border-t border-[var(--border-primary)]">
                    <p className="text-[var(--text-secondary)] mb-6">
                        All our projects live on GitHub. Stars and contributions welcome.
                    </p>
                    <a
                        href="https://github.com/the-monkeys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[var(--accent)] rounded-lg hover:bg-[var(--accent-hover)] transition-all"
                    >
                        <Github className="w-4 h-4" />
                        View all on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;
