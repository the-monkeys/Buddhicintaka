import * as motion from "motion/react-client";
import { Server, HardDrive, Shield, Zap } from "lucide-react";

const features = [
    { icon: Server, title: "Self-Hosted", description: "We own our hardware. No third-party cloud dependencies." },
    { icon: Zap, title: "Bare Metal", description: "Direct hardware access for maximum throughput and low latency." },
    { icon: HardDrive, title: "Data Sovereign", description: "Your data stays on our infrastructure, under our control." },
    { icon: Shield, title: "Zero Cloud", description: "Resilient architecture independent of public cloud providers." },
];

const Infrastructure = () => {
    return (
        <section className="py-16 bg-[var(--bg-tertiary)] border-y border-[var(--border-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <feature.icon className="w-6 h-6 text-[var(--text-tertiary)] mb-3 group-hover:text-[var(--accent)] transition-colors" />
                            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">{feature.title}</h3>
                            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;
