import * as motion from "motion/react-client";
import { ourPrinciples } from "./ourPrinciples";

const Principles = () => {
    return (
        <section className="py-20 sm:py-28 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="mb-16">
                    <span className="text-[var(--accent)] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                        Our Principles
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)]">
                        What drives us.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {ourPrinciples.map((item, index) => (
                        <motion.div
                            key={item.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <span className="text-5xl md:text-6xl font-bold text-[var(--text-tertiary)]/30 mb-4 block">
                                {item.number}
                            </span>
                            <div className="w-6 h-[2px] bg-[var(--accent)] mb-5" />
                            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Principles;
