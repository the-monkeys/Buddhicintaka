import * as motion from "motion/react-client";
import { heroStats } from "../hero/heroData";

const Stats = () => {
    return (
        <section id="stats" className="bg-[#1a1a1a] text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                    {heroStats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="lg:border-l lg:border-white/15 lg:pl-8 first:lg:border-l-0 first:lg:pl-0"
                        >
                            <p className="text-4xl sm:text-5xl font-medium text-[var(--accent)] mb-2">
                                {stat.value}
                            </p>
                            <p className="text-sm text-white/65">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
