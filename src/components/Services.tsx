import * as motion from "motion/react-client";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-32 bg-stone-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6">
                        Services & <span className="text-amber-600">Expertise</span>
                    </h2>
                    <p className="text-xl text-stone-600 max-w-3xl leading-relaxed">
                        We leverage our deep open-source experience to help enterprises
                        build, scale, and maintain critical software infrastructure.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Consulting Card */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl group"
                    >
                        <div className="h-64 bg-stone-900 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-900/40 to-stone-900/90 z-10"></div>
                            {/* Abstract Pattern */}
                            <div
                                className="absolute inset-0 opacity-30"
                                style={{
                                    backgroundImage:
                                        'radial-gradient(#F59E0B 1px, transparent 1px)',
                                    backgroundSize: '20px 20px',
                                }}
                            ></div>
                            <div className="absolute bottom-8 left-8 z-20">
                                <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                                    Strategic
                                </span>
                                <h3 className="text-3xl font-bold text-white">Consulting</h3>
                            </div>
                        </div>

                        <div className="p-10">
                            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                Strategic technology consulting to help you make the right
                                decisions. From architecture reviews to tech stack selection and
                                scalability planning.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    'System Architecture Design',
                                    'Performance Optimization',
                                    'Security Audits',
                                    'Cloud Migration Strategy',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center text-stone-800 font-medium"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors"
                            >
                                Get a Consultation <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Outsourcing Card */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            delay: 0.2,
                        }}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl group"
                    >
                        <div className="h-64 bg-amber-600 relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-amber-500 to-amber-700 z-10"></div>
                            {/* Abstract Pattern */}
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    backgroundImage:
                                        'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff), linear-gradient(45deg, #fff 25%, transparent 25%, transparent 75%, #fff 75%, #fff)',
                                    backgroundSize: '60px 60px',
                                    backgroundPosition: '0 0, 30px 30px',
                                }}
                            ></div>
                            <div className="absolute bottom-8 left-8 z-20">
                                <span className="bg-white text-amber-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                                    Execution
                                </span>
                                <h3 className="text-3xl font-bold text-white">Outsourcing</h3>
                            </div>
                        </div>

                        <div className="p-10">
                            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                Dedicated engineering teams that integrate seamlessly with your
                                workflow. We provide full-stack development, DevOps, and QA
                                expertise.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    'Dedicated Development Teams',
                                    'Full-Stack Engineering',
                                    'DevOps & Infrastructure',
                                    'QA & Testing Automation',
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center text-stone-800 font-medium"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-amber-500 mr-3 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors"
                            >
                                Build Your Team <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;