import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { products } from "../../data/products";

const Products = () => {
    const featured = products.slice(0, 3);

    return (
        <section id="products" className="py-20 sm:py-28 bg-[var(--bg-surface)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[var(--accent)] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                            Our Products
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-on-light)] mb-4">
                            What we build.
                        </h2>
                        <p className="text-lg text-[var(--text-on-light-muted)] leading-relaxed">
                            Open-source tools designed to solve complex problems with
                            simplicity. Enterprise-ready, scalable, and secure.
                        </p>
                    </div>
                    <a
                        href="/products"
                        className="text-[var(--text-on-light-muted)] font-semibold flex items-center hover:text-[var(--accent)] transition-colors group whitespace-nowrap"
                    >
                        View all products
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {featured.map((product, index) => (
                        <motion.a
                            key={product.id}
                            href={`/products#${product.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-[var(--bg-surface-muted)] rounded-xl p-8 border border-[var(--border-on-light)] hover:border-[var(--accent-border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="w-10 h-10 rounded-lg bg-[var(--bg-surface-muted)] flex items-center justify-center mb-6 text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors">
                                <product.icon className="w-5 h-5" />
                            </div>

                            <h3 className="text-xl font-bold text-[var(--text-on-light)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                                {product.title}
                            </h3>

                            <p className="text-[var(--text-on-light-muted)] mb-6 leading-relaxed text-sm">
                                {product.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 bg-[var(--bg-surface-muted)] text-[var(--text-on-light-muted)] text-xs font-medium rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <span className="inline-flex items-center text-sm text-[var(--text-tertiary)] font-medium group-hover:text-[var(--accent)] transition-colors">
                                Learn more
                                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
