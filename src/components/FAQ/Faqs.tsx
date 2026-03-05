"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { faqData } from "./constants";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 sm:py-28 bg-[var(--bg-primary)]">
            <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <span className="text-[var(--accent)] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Common questions.
                    </h2>
                    <p className="text-[var(--text-secondary)] text-lg">
                        Everything you need to know about our products and services.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-[var(--bg-secondary)] rounded-xl border overflow-hidden transition-all duration-300`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                            >
                                <span className="text-base font-semibold text-[var(--text-primary)] pr-4">
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
                                        <div className="px-6 pb-6 border-l-[3px] border-[var(--accent)] ml-6">
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
