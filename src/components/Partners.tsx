import * as motion from "motion/react-client";
import Image from "next/image";

const Partners = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
                        Our Partners
                    </h2>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        Collaborating with industry leaders to drive innovation.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-amber-100 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative z-10 bg-white p-8 rounded-2xl border border-stone-100 shadow-lg hover:shadow-xl transition-shadow text-center max-w-md">
                            <Image
                                src="/circuit-nation.png"
                                width={96}
                                height={96}
                                className="bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-3xl"
                                alt="Circuit Nation Logo"
                                draggable="false"
                            />
                            <h3 className="text-2xl font-bold text-stone-900 mb-2">
                                Circuit Nation
                            </h3>
                            <p className="text-stone-500 text-sm font-medium uppercase tracking-wider mb-4">
                                Premier Media Partner
                            </p>
                            <p className="text-stone-600 leading-relaxed">
                                India's leading F1 and racing sports media agency. Delivering
                                high-speed content with our high-performance infrastructure.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Partners;