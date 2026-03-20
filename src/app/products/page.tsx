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
        <section className="pt-32 pb-20 sm:pb-28 bg-background">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <span className="text-accent text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                        Our Products
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                        Built open. Built to last.
                    </h1>
                    <p className="text-(--text-secondary) text-lg leading-relaxed">
                        Every product we ship is open source, community-driven, and enterprise-ready.
                        Explore them below and join the community.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                className="bg-(--bg-secondary) border border-(--border-primary) rounded-2xl p-8 hover:border-(--accent-border) transition-all duration-300 flex flex-col h-full group hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                            >
                                <div className="w-12 h-12 rounded-lg bg-(--accent-subtle) flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-background transition-all duration-300">
                                    <Icon className="w-6 h-6 text-accent group-hover:text-background" />
                                </div>

                                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-accent text-xs font-medium mb-3 opacity-80">
                                    {product.shortDescription}
                                </p>
                                <p className="text-(--text-secondary) text-sm leading-relaxed mb-6 grow">
                                    {product.description}
                                </p>

                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-(--border-primary) group-hover:border-accent group-hover:border-opacity-30 transition-colors">
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
                                    >
                                        Visit
                                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </a>
                                    <a
                                        href={product.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold text-(--text-secondary) hover:text-foreground transition-colors inline-flex items-center gap-1"
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
                <div className="text-center mt-16 pt-12 border-t border-(--border-primary)">
                    <p className="text-(--text-secondary) mb-6">
                        All our projects live on GitHub. Stars and contributions welcome.
                    </p>
                    <a
                        href="https://github.com/the-monkeys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent-hover transition-all"
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
