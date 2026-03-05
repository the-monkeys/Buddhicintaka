import { Github, Linkedin, X } from "lucide-react";
import { Logo } from "../navbar/Logo";

const Footer = () => {
    return (
        <footer className="bg-[var(--bg-primary)] text-[var(--text-secondary)] pt-20 pb-10 border-t border-[var(--border-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <a href="/" className="inline-block mb-6">
                            <Logo variant="light" size="sm" />
                        </a>
                        <p className="text-sm leading-relaxed mb-6 max-w-sm text-[var(--text-tertiary)]">
                            Inspire, Inform, Innovate. Building production-grade
                            open-source software from Muzaffarpur, Bihar, India.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://github.com/the-monkeys" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:border-[var(--accent-border)] transition-all">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="https://x.com/monkeys_com_co" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:border-[var(--accent-border)] transition-all">
                                <X className="w-4 h-4" />
                            </a>
                            <a href="https://www.linkedin.com/company/monkeys-com-co/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-tertiary)] hover:text-[var(--accent)] hover:border-[var(--accent-border)] transition-all">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-5">Products</h3>
                        <ul className="space-y-3">
                            <li><a href="/products#monkeys" className="text-sm hover:text-[var(--accent)] transition-colors">Monkeys</a></li>
                            <li><a href="/products#iam" className="text-sm hover:text-[var(--accent)] transition-colors">Monkeys IAM</a></li>
                            <li><a href="/products#notify" className="text-sm hover:text-[var(--accent)] transition-colors">FreeRange Notify</a></li>
                            <li><a href="/products#orbitor" className="text-sm hover:text-[var(--accent)] transition-colors">Orbitor</a></li>
                            <li><a href="/products#ape" className="text-sm hover:text-[var(--accent)] transition-colors">A.P.E.</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-5">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="/careers" className="text-sm hover:text-[var(--accent)] transition-colors">Careers</a></li>
                            <li><a href="/contact" className="text-sm hover:text-[var(--accent)] transition-colors">Contact</a></li>
                            <li><a href="https://monkeys.com.co" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent)] transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div>
                        <h3 className="text-[var(--text-primary)] font-semibold text-sm mb-5">Connect</h3>
                        <ul className="space-y-3">
                            <li><a href="https://github.com/the-monkeys" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent)] transition-colors">GitHub</a></li>
                            <li><a href="https://discord.com/invite/6fK9YuV8FV" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent)] transition-colors">Discord</a></li>
                            <li><a href="https://t.me/monkeys_com_co" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent)] transition-colors">Telegram</a></li>
                            <li><a href="https://www.instagram.com/monkeys_com_co/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[var(--accent)] transition-colors">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-[var(--border-primary)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-tertiary)]">
                    <p>&copy; {new Date().getFullYear()} Buddhicintaka (OPC) Pvt. Ltd. All rights reserved.</p>
                    <p>Muzaffarpur, Bihar, India</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
