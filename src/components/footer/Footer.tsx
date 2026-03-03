import { Github, Linkedin, X } from 'lucide-react';
import { Logo } from '../navbar/Logo';

const Footer = () => {
    return (
        <footer className="bg-[#060D1B] text-slate-400 py-20 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-2">
                        <a href="#" className="inline-block mb-8">
                            <Logo variant="light" size="md" />
                        </a>
                        <p className="text-lg leading-relaxed mb-8 max-w-sm text-slate-500">
                            Building the future of open-source software. High-performance
                            tools for modern developers, powered by bare-metal infrastructure.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/the-monkeys"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800/60 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://x.com/monkeys_com_co"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800/60 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all"
                            >
                                <X className="w-5 h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/monkeys-com-co/"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-800/60 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Products</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Monkeys IAM
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Freerange Notify
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Monkeys
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Orbitor
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    A.P.E.
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Consulting
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Outsourcing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Support Plans
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Infrastructure
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Training
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#careers"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-amber-400 transition-colors">
                                    Partners
                                </a>
                            </li>
                            <li>
                                <a href="https://monkeys.com.co" className="hover:text-amber-400 transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
                    <p>&copy; {new Date().getFullYear()} Buddhicintaka Pvt. Ltd. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Security
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;