import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section id="cta" className="py-32 relative overflow-hidden bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-amber-900/10 to-blue-900/10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-2/3">
                        <h2 className="text-5xl md:text-7xl font-bold text-stone-900 mb-6 leading-tight">
                            Let's Get There <br />
                            <span className="text-amber-400">Together.</span>
                        </h2>
                        <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
                            Partner with Buddhicintaka to transform your digital
                            infrastructure with open-source innovation and enterprise
                            reliability.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex flex-col gap-4 w-full">
                        <button className="w-full py-5 bg-linear-to-r from-amber-500 to-amber-400 text-slate-900 text-xl font-bold rounded-full hover:from-amber-400 hover:to-amber-300 transition-all shadow-lg shadow-amber-500/15 flex items-center justify-center gap-3 group">
                            Start a Project
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a href="/careers" className="w-full py-5 bg-transparent border-2 border-slate-600 text-stone-900 text-xl font-bold rounded-full hover:bg-white/5 hover:border-slate-400 transition-all flex items-center justify-center">
                            Explore Careers
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;