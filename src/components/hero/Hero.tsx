"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroSlides } from "../../data/homeContent";

export function Hero() {
    const [index, setIndex] = useState(0);
    const slide = heroSlides[index];

    useEffect(() => {
        const timer = window.setInterval(() => {
            setIndex((current) => (current + 1) % heroSlides.length);
        }, 3000);
        return () => window.clearInterval(timer);
    }, [index]);

    return (
        <section className="relative min-h-[78vh] lg:min-h-[82vh] overflow-hidden text-white">
            {heroSlides.map((item, i) => (
                <Image
                    key={item.image}
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority={i === 0}
                    className={[
                        "object-cover object-center transition-opacity duration-700",
                        i === index ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    sizes="100vw"
                />
            ))}
            <div className="absolute inset-0 bg-black/15" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center min-h-[78vh] lg:min-h-[82vh] pt-28 pb-16">
                <div className="max-w-xl bg-white/20 backdrop-blur-md p-8 sm:p-10">
                    <h1 className="text-4xl sm:text-5xl font-medium leading-[1.12] tracking-tight mb-5">
                        {slide.title}
                    </h1>
                    <p className="text-sm sm:text-base text-white/95 leading-relaxed mb-8">
                        {slide.body}
                    </p>
                    <a
                        href={slide.href}
                        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white border border-white hover:bg-white hover:text-black transition-colors"
                    >
                        {slide.cta}
                    </a>
                </div>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {heroSlides.map((item, i) => (
                        <button
                            key={item.title}
                            type="button"
                            aria-label={`Show slide ${i + 1}`}
                            onClick={() => setIndex(i)}
                            className={[
                                "h-2.5 w-2.5 rounded-full border border-white",
                                i === index ? "bg-white" : "bg-transparent",
                            ].join(" ")}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
