import * as motion from "motion/react-client";
import { ourPrinciples } from "./ourPrinciples";

const Principles = () => {
    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden">
            {/* Watermark */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none select-none">
                <span className="absolute top-10 -left-10 text-[10rem] md:text-[15rem] font-bold text-amber-100/40 whitespace-nowrap leading-none">
                    our principles
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {ourPrinciples.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.1,
                            }}
                            className="group"
                        >
                            <div className="text-6xl md:text-7xl font-bold text-amber-500 mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                {item.number}
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-stone-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Principles;