import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";
import { products } from "../../data/products";

const Products = () => {
    return (
        <section id="platforms" className="scroll-mt-20 py-24 sm:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <p className="section-label mb-5">Platforms</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--text-primary)] tracking-tight mb-4 leading-[1.15]">
                            Software we operate.
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            Open platforms for content, identity, notifications, and search -
                            built in the open from Bihar.
                        </p>
                    </div>
                    <a href="/products" className="accent-link whitespace-nowrap">
                        View all platforms
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-primary)]">
                    {products.map((product, index) => (
                        <motion.a
                            key={product.id}
                            href={`/products#${product.id}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.06 }}
                            viewport={{ once: true }}
                            className="group bg-[var(--bg-primary)] p-8 hover:bg-[var(--bg-secondary)] transition-colors"
                        >
                            <p className="text-[var(--accent)] text-xs font-semibold mb-6">
                                0{index + 1}
                            </p>
                            <h3 className="text-xl font-medium text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                                {product.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
                                {product.shortDescription}
                            </p>
                            <span className="accent-link text-sm">
                                Learn more
                                <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
