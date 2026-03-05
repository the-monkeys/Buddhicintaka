import * as motion from "motion/react-client";
import { ArrowRight, MessageSquare } from 'lucide-react';
import { NetworkVisualization } from './NetworkVisualization'

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
            {/* Network visualization — right side, subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full md:w-3/5 h-full opacity-40">
                    <NetworkVisualization />
                </div>
                {/* Fade the network into the white bg on the left */}
                <div className="absolute top-0 left-0 w-2/3 h-full bg-linear-to-r from-white via-white/90 to-transparent z-10"></div>
                <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent z-10"></div>
            </div>

            {/* Subtle warm glow */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-200/15 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full pt-32 pb-16 md:pt-44 md:pb-24">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-[2px] w-12 bg-amber-500"></div>
                        <span className="text-amber-600 font-semibold tracking-[0.2em] uppercase text-xs">
                            Innovation through Open Source
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                        }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-stone-900 leading-[1.05] mb-8 tracking-tight"
                    >
                        Open Source. <br />
                        <span className="text-amber-600">Enterprise Ready.</span>
                    </motion.h1>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                        className="text-lg md:text-xl text-stone-500 mb-12 max-w-xl leading-relaxed"
                    >
                        We bridge the gap between community-driven innovation and
                        enterprise-grade reliability. Consulting, outsourcing, and products
                        — all built on our own bare-metal infrastructure.
                    </motion.p>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                        }}
                        className="flex flex-col sm:flex-row gap-4 mb-16"
                    >
                        <a
                            href="#products"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all hover:-translate-y-0.5"
                        >
                            Explore Our Products
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-stone-700 border-2 border-stone-200 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-all"
                        >
                            <MessageSquare className="mr-2 w-5 h-5" />
                            Talk to Us
                        </a>
                    </motion.div>
                </div>

                {/* Bottom quick stats — like Kyndryl's info strip below hero */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.5,
                    }}
                    className="flex flex-wrap gap-x-10 gap-y-3 border-t border-stone-200 pt-8"
                >
                    {[
                        {
                            value: '15+',
                            label: 'Open Source Projects',
                        },
                        {
                            value: '50+',
                            label: 'Enterprise Clients',
                        },
                        {
                            value: '100%',
                            label: 'Self-Hosted Infrastructure',
                        },
                    ].map((stat) => (
                        <div key={stat.label} className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-amber-600">
                                {stat.value}
                            </span>
                            <span className="text-sm text-stone-400 uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}