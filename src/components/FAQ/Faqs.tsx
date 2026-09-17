"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "./constants";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 sm:py-32 bg-[var(--bg-primary)]" id="faq">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="mb-12 max-w-3xl">
                    <p className="section-label mb-5">
                        FAQ
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-4 tracking-tight">
                        Common questions.
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg">
                        Platforms, training, consultancy, and social media - the usual questions.
                    </p>
                </div>

                <div>
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="border-t border-[var(--border-primary)] last:border-b overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between py-6 text-left focus:outline-none cursor-pointer"
                            >
                                <span className="text-lg font-medium text-[var(--text-primary)] pr-4">
                                    {faq.question}
                                </span>
                                <span className={`p-1.5 rounded-full transition-colors shrink-0`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="pb-6 pl-6 border-l-[3px] border-[var(--accent)]">
                                            <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
