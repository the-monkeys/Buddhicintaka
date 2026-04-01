import Link from "next/link";
import { Bell, Code2, Lock, PenTool } from "lucide-react";

import ScrollReveal from "../animation/ScrollReveal";

const ProductSection = () => {
    return (
        <section id="products" className="py-24 px-6 md:px-12 bg-[#F9F8F6]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 mb-4 uppercase tracking-wider">
                    <Code2 className="w-4 h-4" /> Our Products
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900">Open Source Solutions</h2>
                </div>
                
                <div className="space-y-12">
                    {/* Product 1: Monkeys */}
                    <ScrollReveal delay={0.3} className="flex flex-col md:flex-row bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="md:w-5/12 p-8 md:p-12 flex flex-col justify-center">
                            <div className="text-xs font-bold text-brand uppercase tracking-wider mb-2 flex items-center gap-1">
                                <PenTool className="w-3 h-3" /> Collaborative Writing
                            </div>
                            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">Monkeys</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                A simplified and scalable collaborative writing platform designed for ambitious teams. The project aims to build a sophisticated environment to make it easy to exchange services securely and professionally.
                            </p>
                            <div>
                                <Link href="https://monkeys.com.co" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                    Know more
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-7/12 bg-indigo-50/50 p-8 flex items-center justify-center relative overflow-hidden">
                            <div className="w-full max-w-md aspect-4/3 bg-white rounded-xl shadow-xl border border-slate-100 p-4 flex flex-col gap-3 transform md:translate-x-8 md:translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500">
                                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                                    <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                                    </div>
                                    <div className="w-16 h-2 bg-slate-100 rounded-full" />
                                </div>
                                <div className="flex gap-4 h-full">
                                    <div className="w-1/4 h-full border-r border-slate-100 pr-2 flex flex-col gap-2">
                                        <div className="w-full h-2 bg-indigo-100 rounded-full" />
                                        <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
                                        <div className="w-5/6 h-2 bg-slate-100 rounded-full" />
                                    </div>
                                    <div className="w-3/4 h-full flex flex-col gap-3 pt-2">
                                        <div className="w-1/2 h-4 bg-slate-200 rounded-md" />
                                        <div className="w-full h-2 bg-slate-100 rounded-full" />
                                        <div className="w-full h-2 bg-slate-100 rounded-full" />
                                        <div className="w-4/5 h-2 bg-slate-100 rounded-full" />
                                        <div className="w-full h-2 bg-slate-100 rounded-full mt-2" />
                                        <div className="w-3/4 h-2 bg-slate-100 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Product 2: FreeRange Notify */}
                    <ScrollReveal delay={0.2} className="flex flex-col md:flex-row-reverse bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="md:w-5/12 p-8 md:p-12 flex flex-col justify-center">
                            <div className="text-xs font-bold text-brand uppercase tracking-wider mb-2 flex items-center gap-1">
                                <Bell className="w-3 h-3" /> Notifications
                            </div>
                            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">FreeRange Notify</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                A high-performance, Go-based notification system designed for reliable end-to-end delivery. Built to handle massive scale with minimal latency for enterprise applications.
                            </p>
                            <div>
                                <Link href="https://www.freerangenotify.com/" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                    Know more
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-7/12 bg-emerald-50/50 p-8 flex items-center justify-center relative overflow-hidden">
                            <div className="w-full max-w-md aspect-4/3 bg-white rounded-xl shadow-xl border border-slate-100 p-6 flex flex-col gap-4 transform md:-translate-x-8 md:translate-y-8 group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-500">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                        <Bell className="w-5 h-5 text-brand" />
                                    </div>
                                    <div>
                                    <div className="w-24 h-3 bg-slate-200 rounded-full mb-2" />
                                    <div className="w-16 h-2 bg-slate-100 rounded-full" />
                                    </div>
                                </div>
                                <div className="space-y-3 mt-2">
                                    <div className="w-full p-3 rounded-lg border border-slate-100 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                                    </div>
                                    <div className="w-full p-3 rounded-lg border border-slate-100 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                                    </div>
                                    <div className="w-full p-3 rounded-lg border border-slate-100 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-slate-200" />
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Product 3: IAM Suite */}
                    <ScrollReveal delay={0.2} className="flex flex-col md:flex-row bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 group">
                        <div className="md:w-5/12 p-8 md:p-12 flex flex-col justify-center">
                            <div className="text-xs font-bold text-brand uppercase tracking-wider mb-2 flex items-center gap-1">
                                <Lock className="w-3 h-3" /> Security
                            </div>
                            <h3 className="text-3xl font-display font-bold text-slate-900 mb-4">IAM Suite</h3>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Comprehensive Identity and Access Management suite for securing modern applications and infrastructure. Manage users, roles, and permissions with ease.
                            </p>
                            <div>
                                <Link href="https://github.com/the-monkeys" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-colors">
                                    Know more
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-7/12 bg-blue-50/50 p-8 flex items-center justify-center relative overflow-hidden">
                            <div className="w-full max-w-md aspect-4/3 bg-white rounded-xl shadow-xl border border-slate-100 p-6 flex flex-col gap-4 transform md:translate-x-8 md:translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="w-24 h-4 bg-slate-200 rounded-full" />
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Lock className="w-5 h-5 text-brand" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="h-20 rounded-xl bg-slate-50 border border-slate-100 p-3 flex flex-col justify-between">
                                        <div className="w-5 h-5 rounded-full bg-blue-200" />
                                        <div className="w-16 h-2 bg-slate-200 rounded-full" />
                                    </div>
                                    <div className="h-20 rounded-xl bg-slate-50 border border-slate-100 p-3 flex flex-col justify-between">
                                        <div className="w-5 h-5 rounded-full bg-emerald-200" />
                                        <div className="w-16 h-2 bg-slate-200 rounded-full" />
                                    </div>
                                </div>
                                <div className="flex-1 rounded-xl bg-slate-50 border border-slate-100 p-4">
                                    <div className="w-1/3 h-2 bg-slate-200 rounded-full mb-4" />
                                    <div className="space-y-3">
                                        <div className="w-full h-2 bg-slate-100 rounded-full" />
                                        <div className="w-5/6 h-2 bg-slate-100 rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;