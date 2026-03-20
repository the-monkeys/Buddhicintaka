import Image from "next/image";

import ScrollReveal from "./animation/ScrollReveal";

const Partners = () => {
    return (
        <div className="w-full mt-12 overflow-hidden">
            <div className="flex flex-row items-stretch justify-between gap-4 w-full">

                <ScrollReveal
                    delay={0.2}
                    className="flex-1 group flex items-center justify-center gap-3 px-4 py-4 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:border-brand/30 transition-all hover:shadow-md"
                >
                    <div className="w-8 h-8 bg-slate-100 rounded-lg shrink-0 flex items-center justify-center text-slate-600 group-hover:text-brand transition-colors font-bold text-[10px]">
                        GeM
                    </div>
                    <div className="hidden sm:block">
                        <p className="text-xs font-bold text-slate-900 leading-tight">Government e-Marketplace</p>
                        <p className="text-[10px] text-slate-500 whitespace-nowrap">Registered Firm</p>
                    </div>
                </ScrollReveal>

                <ScrollReveal
                    delay={0.2}
                    className="flex-1 group flex items-center justify-center gap-3 px-4 py-4 rounded-xl border border-slate-200 bg-white/50 backdrop-blur-sm hover:border-brand/30 transition-all hover:shadow-md"
                >
                    <Image
                        src="/circuit-nation.png"
                        width={32}
                        height={32}
                        alt="Circuit Nation"
                        className="rounded-lg transition-all shrink-0"
                    />
                    <div className="hidden sm:block">
                        <p className="text-xs font-bold text-slate-900 leading-tight">Circuit Nation</p>
                        <p className="text-[10px] text-slate-500 whitespace-nowrap">Media Partner</p>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Partners;
