import * as motion from "motion/react-client";
import { Server, HardDrive, Shield, Zap } from 'lucide-react';

const Infrastructure = () => {
    const features = [
        {
            icon: Server,
            title: '100% Self-Hosted',
            description: 'We own our hardware. No third-party cloud dependencies.',
        },
        {
            icon: Zap,
            title: 'Bare Metal Performance',
            description:
                'Direct hardware access for maximum throughput and low latency.',
        },
        {
            icon: HardDrive,
            title: 'Full Data Sovereignty',
            description: 'Your data stays on our infrastructure, under our control.',
        },
        {
            icon: Shield,
            title: 'Zero Cloud Dependency',
            description:
                "Resilient architecture that doesn't rely on public cloud providers.",
        },
    ];

    return (
        <section className="py-24 text-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="mb-16 md:w-2/3">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Powered by Our{' '}
                        <span className="text-amber-400">Infrastructure</span>
                    </h2>
                    <p className="text-xl text-gray-900">
                        We don't just write code; we run it. Our bare-metal infrastructure
                        ensures unmatched performance, security, and control for your
                        mission-critical applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{
                                opacity: 0,
                                y: 20,
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
                            className="bg-white border border-slate-700/40 p-8 rounded-xl hover:border-amber-500/30 transition-colors group"
                        >
                            <feature.icon className="w-10 h-10 text-amber-400 mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-black text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Infrastructure;