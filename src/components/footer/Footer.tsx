import Link from "next/link";
import { COMPANY_X_URL } from "../../data/company";

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-[#b0b0b0] pt-16 pb-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
                    <div>
                        <Link href="/" className="inline-block mb-4 text-[var(--brand)] font-semibold text-xl">
                            BUDDHICINTAKA
                        </Link>
                        <p className="text-sm text-[#7a7a7a]">
                            Software engineering, cloud infrastructure and applied AI.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-white">About us</Link></li>
                            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                            <li><a href={COMPANY_X_URL} className="hover:text-white">Buddhicintaka on X</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">What we do</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/products" className="hover:text-white">Products</Link></li>
                            <li><Link href="/consulting" className="hover:text-white">Consulting</Link></li>
                            <li><Link href="/technology" className="hover:text-white">Technology</Link></li>
                            <li><Link href="/industries" className="hover:text-white">Industries</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">Insights</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="https://monkeys.com.co/buddhicintaka"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white"
                                >
                                    Articles
                                </a>
                            </li>
                            <li><Link href="/press" className="hover:text-white">Press releases</Link></li>
                            <li><Link href="/investors" className="hover:text-white">Investors</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-[#333] text-xs text-[#7a7a7a]">
                    <p>&copy; {new Date().getFullYear()} Buddhicintaka (OPC) Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
