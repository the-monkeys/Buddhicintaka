"use client";

import React, { useRef, useEffect, useState } from 'react';

import { ScrollRevealProps } from '@/src/lib/interfaces';

export default function ScrollReveal({
    children,
    className = "",
    threshold = 0.1,
    delay = 0,
    ...props
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: threshold,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    const style = {
        transitionDelay: `${delay}s`,
    };

    return (
        <div
            ref={ref}
            style={style}
            className={`transition-all duration-700 ease-out transform ${
                isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
            } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}