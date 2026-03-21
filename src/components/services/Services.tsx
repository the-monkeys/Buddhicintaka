"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Settings } from "lucide-react";
import Link from "next/link";

import ScrollReveal from "../animation/ScrollReveal";
import { services } from "./constants";

export default function Services() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth > 768 ? scrollRef.current.clientWidth / 3 : scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <section id="services" className="py-24 px-6 md:px-12 bg-bg-secondary relative overflow-hidden">
            <div className="max-w-8xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-bold tracking-wide text-slate-800 uppercase">
                            <Settings className="w-3.5 h-3.5 text-brand" />
                            Our Software Services
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 max-w-3xl mx-auto leading-[1.1]">
                        Expertise Built on Real-World Foundations
                    </h2>
                </div>
                
                <div className="flex items-center justify-center gap-4 lg:gap-8">
                    <button 
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`hidden lg:flex w-12 h-12 rounded-full border border-slate-300 items-center justify-center transition-all shrink-0 ${canScrollLeft ? 'bg-brand text-white hover:bg-brand-hover shadow-lg shadow-[#FF5722]/30 cursor-pointer' : 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-50'}`}
                        aria-label="Previous services"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div 
                        ref={scrollRef}
                        onScroll={checkScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-6 w-full max-w-7xl pb-8 -mb-8 [&::-webkit-scrollbar]:hidden"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.map((service) => (
                        <div key={service.id} className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] shrink-0 snap-start">
                            <ScrollReveal className="bg-white rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mb-8 shadow-lg shadow-[#FF5722]/30 group-hover:scale-110 transition-transform duration-300 shrink-0">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed grow">
                                    {service.description}
                                </p>
                                <Link href="https://buddhicintaka.com/" target="_blank" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-[#FF5722] transition-colors group/link mt-auto">
                                    Learn more <ArrowUpRight className="w-4 h-4 text-brand group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </Link>
                            </ScrollReveal>
                        </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`hidden lg:flex w-12 h-12 rounded-full items-center justify-center transition-all shrink-0 ${canScrollRight ? 'bg-brand text-white hover:bg-brand-hover shadow-lg shadow-[#FF5722]/30 cursor-pointer' : 'bg-slate-200 text-slate-400 cursor-not-allowed opacity-50'}`}
                        aria-label="Next services"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-2 text-slate-800 font-medium">
                    <Link href="https://buddhicintaka.com/" target="_blank" className="text-brand font-bold flex items-center gap-1 hover:underline">
                        View All Services <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}