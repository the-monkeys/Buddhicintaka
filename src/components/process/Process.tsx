import * as motion from "motion/react-client";

const steps = [
    {
        number: "01",
        title: "Discover",
        description:
            "We listen first - product goals, training needs, or the public presence your organisation should have.",
    },
    {
        number: "02",
        title: "Build",
        description:
            "Platforms, integrations, and support plans shipped by engineers who also maintain our open-source stack.",
    },
    {
        number: "03",
        title: "Train & support",
        description:
            "Classes, AI workshops, and ongoing support so your people can run what we leave behind.",
    },
    {
        number: "04",
        title: "Grow",
        description:
            "Consultancy and Instagram and X management so the work keeps compounding.",
    },
];

const Process = () => {
    return (
        <section id="process" className="py-24 sm:py-32 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <p className="section-label mb-5">How we work</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--text-primary)] tracking-tight mb-16 max-w-3xl leading-[1.15]">
                    A clear path from conversation to outcomes.
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="border-t border-[var(--border-primary)] pt-8"
                        >
                            <p className="text-[var(--accent)] text-sm font-semibold mb-4">
                                {step.number}
                            </p>
                            <h3 className="text-xl font-medium text-[var(--text-primary)] mb-3">
                                {step.title}
                            </h3>
                            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
