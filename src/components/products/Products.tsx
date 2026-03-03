import { ArrowRight } from 'lucide-react'
import * as motion from "motion/react-client";
import { productConstants } from './productConstants';

const Products = () => {
    return (
        <section id="products" className="py-32 bg-white relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
                <span className="text-[12rem] md:text-[20rem] font-bold text-stone-50 leading-none whitespace-nowrap">
                    products
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                            Our Flagship <span className="text-amber-600">Products</span>
                        </h2>
                        <p className="text-xl text-stone-600 leading-relaxed">
                            Open-source tools designed to solve complex problems with
                            simplicity and elegance. Enterprise-ready, scalable, and secure.
                        </p>
                    </div>
                    <a
                        href="https://github.com/the-monkeys"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 font-bold flex items-center hover:underline group"
                    >
                        View all projects{' '}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {productConstants.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="group bg-white rounded-2xl p-10 shadow-xl border border-stone-100 hover:border-amber-200 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg--to-br from-amber-50 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>

                            <div
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${product.color} shadow-sm`}
                            >
                                <product.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
                                {product.title}
                            </h3>

                            <p className="text-stone-600 mb-8 leading-relaxed text-lg">
                                {product.description}
                            </p>

                            <a
                                href={product.link}
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-stone-900 font-bold group-hover:text-amber-600 transition-colors border-b-2 border-transparent group-hover:border-amber-600 pb-1"
                            >
                                Learn more
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Products;