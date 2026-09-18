import * as motion from "motion/react-client";
import { ArrowRight } from "lucide-react";
import { servicePillars } from "../data/services";

const Services = () => {
    return (
        <section id="services" className="scroll-mt-20 py-24 sm:py-32 bg-[var(--bg-secondary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="max-w-3xl mb-16">
                    <p className="section-label mb-5">How we help</p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--text-primary)] tracking-tight leading-[1.15] mb-5">
                        Open software + operational support.
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                        Six capabilities for companies, institutions, students, and
                        professionals - from platforms you can run to channels we keep
                        moving.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
                    {servicePillars.map((service, index) => (
                        <motion.a
                            key={service.id}
                            href={service.href}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.04 }}
                            className="group py-10 border-t border-[var(--border-primary)]"
                        >
                            <p className="text-[var(--accent)] text-sm font-semibold mb-3">
                                0{index + 1}
                            </p>
                            <h3 className="text-2xl font-medium text-[var(--text-primary)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed mb-5 max-w-xl">
                                {service.description}
                            </p>
                            <span className="accent-link text-sm">
                                Learn more
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
