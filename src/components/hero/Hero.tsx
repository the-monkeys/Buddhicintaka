"use client";

import Image from "next/image";
import { ActionLink } from "../ActionLink";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Pause, Play } from "lucide-react";
import { featuredProducts } from "../../data/homeContent";
import styles from "./Hero.module.css";

const slideNames = ["Company", ...featuredProducts.map((product) => product.name)];
const motionPreference = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(notify: () => void) {
    const query = window.matchMedia(motionPreference);
    query.addEventListener("change", notify);
    return () => query.removeEventListener("change", notify);
}

export function Hero() {
    const [active, setActive] = useState(0);
    const [playback, setPlayback] = useState<boolean | null>(null);
    const prefersReducedMotion = useSyncExternalStore(
        subscribeToMotionPreference,
        () => window.matchMedia(motionPreference).matches,
        () => true,
    );
    const playing = playback ?? !prefersReducedMotion;

    useEffect(() => {
        if (!playing) return;
        const timer = window.setInterval(() => {
            if (!document.hidden) setActive((index) => (index + 1) % slideNames.length);
        }, 7000);
        return () => window.clearInterval(timer);
    }, [playing]);

    function selectSlide(index: number) {
        setActive(index);
        setPlayback(false);
    }

    return (
        <section className={styles.hero} aria-label="Company and products" aria-roledescription="carousel">
            <div className={styles.stage} aria-live={playing ? "off" : "polite"} onFocusCapture={() => setPlayback(false)}>
                <article
                    className={styles.slide}
                    data-active={active === 0}
                    inert={active !== 0}
                    aria-hidden={active !== 0}
                    aria-label="1 of 3, Company"
                    aria-roledescription="slide"
                >
                    <Image src="/hero/server-racks.webp" alt="Rows of server racks at the NERSC computing facility" fill preload sizes="100vw" className={styles.photo} />
                    <div className={styles.shade} />
                    <div className={styles.content}>
                        <div className={styles.copy}>
                            <h1>Software platforms<br />and AI systems</h1>
                            <p>We build publishing platforms, marketplaces, and tools that automate business workflows.</p>
                            <ActionLink href="/about">About Buddhicintaka</ActionLink>
                        </div>
                    </div>
                    <a className={styles.credit} href="/hero/photo-credit.txt">Photo credit</a>
                </article>
                {featuredProducts.map((product, index) => {
                    const isActive = active === index + 1;
                    return (
                        <article
                            key={product.href}
                            className={`${styles.slide} ${styles.productSlide}`}
                            data-product={product.name}
                            data-active={isActive}
                            inert={!isActive}
                            aria-hidden={!isActive}
                            aria-label={`${index + 2} of 3, ${product.name}`}
                            aria-roledescription="slide"
                        >
                            <div className={`${styles.content} ${styles.productContent}`}>
                                <div className={styles.copy}>
                                    <h2>{product.name}</h2>
                                    <p>{product.summary}</p>
                                    <ActionLink href={product.href}>Explore {product.name}</ActionLink>
                                </div>
                                <div className={styles.screen}>
                                    <Image
                                        src={product.image}
                                        alt={product.alt}
                                        fill
                                        sizes="(min-width: 1400px) 760px, (min-width: 768px) 55vw, 90vw"
                                        className={styles.productImage}
                                    />
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
            <div className={styles.controls}>
                <div className={styles.rail}>
                    {slideNames.map((name, index) => (
                        <button
                            type="button" key={name} className={styles.selector}
                            aria-label={`Show ${name} slide`} aria-current={active === index ? "true" : undefined}
                            onClick={() => selectSlide(index)}
                        >
                            {name}
                        </button>
                    ))}
                    <button
                        type="button" className={styles.playback} aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                        onClick={() => setPlayback(!playing)}
                    >
                        {playing ? <Pause size={17} aria-hidden="true" /> : <Play size={17} aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </section>
    );
}
