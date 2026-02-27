import { ArrowRight, MessageSquare } from 'lucide-react';
import { NetworkVisualization } from './NetworkVisualization';
import { heroStats } from './heroData';

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-white min-h-screen flex items-center">
            {/* Network visualization — right side, subtle */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full md:w-3/5 h-full opacity-40">
                    <NetworkVisualization />
                </div>
                {/* Fade into white background on left/top/bottom */}
                <div className="absolute top-0 left-0 w-2/3 h-full bg-linear-to-r from-white via-white/90 to-transparent z-10" />
                <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-white to-transparent z-10" />
                <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white to-transparent z-10" />
            </div>

            {/* Warm glow */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-amber-200/15 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 w-full pt-32 pb-16 md:pt-44 md:pb-24">
                <div className="max-w-3xl">
                    {/* Tag line */}
                    <div
                        className="animate-fade-in-up flex items-center gap-4 mb-8"
                        style={{ animationDelay: '0ms' }}
                    >
                        <div className="h-[2px] w-12 bg-amber-500" />
                        <span className="text-amber-600 font-semibold tracking-[0.2em] uppercase text-xs">
                            Innovation through Open Source
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-stone-900 leading-[1.05] mb-8 tracking-tight"
                        style={{ animationDelay: '100ms' }}
                    >
                        Open Source. <br />
                        <span className="text-amber-600">Enterprise Ready.</span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className="animate-fade-in-up text-lg md:text-xl text-stone-500 mb-12 max-w-xl leading-relaxed"
                        style={{ animationDelay: '200ms' }}
                    >
                        We bridge the gap between community-driven innovation and
                        enterprise-grade reliability. Consulting, outsourcing, and products
                        — all built on our own bare-metal infrastructure.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="animate-fade-in-up flex flex-col sm:flex-row gap-4 mb-16"
                        style={{ animationDelay: '300ms' }}
                    >
                        <a
                            href="#products"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-stone-900 rounded-lg hover:bg-stone-800 transition-all hover:-translate-y-0.5"
                        >
                            Explore Our Products
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-stone-700 border-2 border-stone-200 rounded-lg hover:border-amber-500 hover:text-amber-600 transition-all"
                        >
                            <MessageSquare className="mr-2 w-5 h-5" />
                            Talk to Us
                        </a>
                    </div>
                </div>

                {/* Stats strip */}
                <div
                    className="animate-fade-in-up flex flex-wrap gap-x-10 gap-y-3 border-t border-stone-200 pt-8"
                    style={{ animationDelay: '500ms' }}
                >
                    {heroStats.map((stat) => (
                        <div key={stat.label} className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-amber-600">
                                {stat.value}
                            </span>
                            <span className="text-sm text-stone-400 uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}