import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import { edutainmentTracks } from "./constant";

const Edutainment = () => {
    return (
        <section id="edutainment" className="py-20 sm:py-28 bg-[var(--bg-secondary)] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Messaging */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[var(--accent)] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                                Skill India Initiative
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6 leading-tight"
                        >
                            Learn. Build. Ship.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed"
                        >
                            We train the next generation of engineers through real
                            open-source contribution. Supporting India's Skill India vision
                            with structured internships that bridge academic knowledge and
                            enterprise-grade development.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="/careers"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-[var(--accent)] rounded-lg hover:bg-[var(--accent-hover)] transition-all"
                            >
                                Explore Careers
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-[var(--text-primary)] border border-[var(--border-secondary)] rounded-lg hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-all"
                            >
                                Partner With Us
                            </a>
                        </motion.div>
                    </div>

                    {/* Right - Feature list */}
                    <div className="space-y-4">
                        {edutainmentTracks.map((track, index) => (
                            <motion.div
                                key={track.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)] hover:border-[var(--accent-border)] transition-all group"
                            >
                                <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors shrink-0">
                                    <track.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                                        {track.title}
                                    </h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                        {track.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Edutainment;
