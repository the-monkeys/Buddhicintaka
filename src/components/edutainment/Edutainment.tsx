import * as motion from "motion/react-client";
import { ArrowRight, Sparkles } from 'lucide-react';

import { edutainmentTracks } from "./constant";

const Edutainment = () => {
    return (
        <section
            id="edutainment"
            className="py-32 bg-white relative overflow-hidden"
        >
            {/* Watermark */}
            <div className="absolute bottom-0 right-0 w-full text-right pointer-events-none select-none z-0 overflow-hidden">
                <span className="text-[8rem] md:text-[14rem] font-bold text-amber-50 leading-none whitespace-nowrap">
                    edutainment
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left - Messaging */}
                    <div className="lg:w-5/12">
                        <motion.div
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
                        >
                            <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-2 mb-4">
                                <Sparkles className="w-4 h-4 text-amber-600" />
                                <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">
                                    Skill India Initiative
                                </span>
                            </div>
                        </motion.div>

                        <motion.h2
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
                                delay: 0.1,
                            }}
                            className="text-4xl md:text-6xl font-bold text-stone-900 mb-8 leading-none"
                        >
                            Education meets <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-orange-500">
                                Entertainment.
                            </span>
                        </motion.h2>

                        <motion.p
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
                                delay: 0.2,
                            }}
                            className="text-xl text-stone-600 mb-4 leading-relaxed"
                        >
                            We believe the best way to learn is by building. Our{' '}
                            <strong className="text-stone-900">Edutainment</strong> program
                            transforms freshers into industry-ready engineers through hands-on
                            open-source contributions, gamified learning, and real-world
                            mentorship.
                        </motion.p>

                        <motion.p
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
                                delay: 0.3,
                            }}
                            className="text-lg text-stone-500 mb-8 leading-relaxed"
                        >
                            Supporting the Indian Government's{' '}
                            <strong className="text-stone-700">Skill India</strong> vision, we
                            provide structured internships that bridge the gap between
                            academic knowledge and enterprise-grade software development.
                        </motion.p>

                        <motion.div
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
                                delay: 0.4,
                            }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#careers"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-amber-500 rounded-full hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:-translate-y-1"
                            >
                                Apply for Internship
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-stone-700 border-2 border-stone-200 rounded-full hover:border-amber-500 hover:text-amber-600 transition-all"
                            >
                                Partner With Us
                            </a>
                        </motion.div>
                    </div>

                    {/* Right - Program Features */}
                    <div className="lg:w-7/12">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {edutainmentTracks.map((track, index) => (
                                <motion.div
                                    key={track.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: 0.1 + index * 0.1,
                                    }}
                                    className="group bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300"
                                >
                                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                                        <track.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                                        {track.title}
                                    </h3>
                                    <p className="text-stone-600 leading-relaxed">
                                        {track.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skill India Badge */}
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            whileInView={{
                                opacity: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: 0.5,
                            }}
                            className="mt-8 flex items-center gap-4 p-4 bg-stone-50 rounded-xl border border-stone-100"
                        >
                            <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white shrink-0">
                                <span className="text-lg font-black">🇮🇳</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-stone-900">
                                    Aligned with Skill India Mission
                                </p>
                                <p className="text-xs text-stone-500">
                                    Empowering India's youth through technology and open-source
                                    education.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Edutainment;