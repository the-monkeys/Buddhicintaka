import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Partners from "../Partners";
import ScrollReveal from "../animation/ScrollReveal";

const Hero = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row items-stretch min-h-screen">
            
            <div className="lg:w-1/2 flex flex-col justify-between pt-12 lg:pt-20 px-6 lg:px-12 bg-bg-secondary">
                
                <div className="hidden lg:block flex-1" />

                <div className="max-w-xl w-full ml-auto"> 
                    <ScrollReveal>
                        <ScrollReveal delay={0.1}
                            className="inline-flex items-center gap-3 bg-white/50 border border-slate-200 rounded-full px-4 py-2 mb-8"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                            <span className="text-brand font-semibold tracking-[0.15em] uppercase text-xs">
                                Community Born · Built to Scale
                            </span>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.1}
                            className="text-4xl lg:text-6xl font-display font-bold leading-[1.05] mb-6 text-black tracking-tight"
                        >
                            Architecting Lean & High-Performance Systems with Ethical Precision<span className="text-brand">.</span>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.1}
                            className="text-base sm:text-lg text-slate-800 mb-8 leading-relaxed"
                        >
                            Built on a foundation of high-traffic systems, we deliver simple, compact, and powerful software necessary for your sustainable growth.
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.1} className="flex flex-wrap gap-4">
                            <Link href="/services" className="px-8 py-4 rounded-full bg-brand text-white font-semibold hover:bg-brand-hover transition-all flex items-center gap-2">
                                Get Started Now <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </ScrollReveal>
                    </ScrollReveal>
                </div>

                <div className="flex-1 flex items-end justify-end">
                    <Partners />
                </div>
            </div>
        
            <div className="lg:w-1/2 w-full min-h-100 lg:min-h-full relative overflow-hidden">
                <ScrollReveal
                    delay={0.3}
                    className="absolute inset-0"
                >
                    <Image 
                        src="/hero.webp"
                        alt="Buddhicintaka - Best Software Development company" 
                        fill 
                        priority
                        sizes="50vw"
                        className="object-cover"
                        draggable="false" 
                    />
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Hero;