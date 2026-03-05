import * as motion from "motion/react-client";

const IdentityBanner = () => {
    return (
        <section className="py-20 sm:py-28 bg-(--bg-secondary)">
            <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="w-12 h-0.5 bg-accent mb-10" />
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
                >
                    Community-driven.{" "}
                    <br className="hidden sm:block" />
                    Enterprise-ready.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-(--text-secondary) mb-10 max-w-2xl leading-relaxed"
                >
                    Building the future of open software with bare-metal performance and
                    ethical impact. 100% local content, built entirely in India.
                </motion.p>
            </div>
        </section>
    );
};

export default IdentityBanner;
