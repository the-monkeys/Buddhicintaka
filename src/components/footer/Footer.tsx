import Link from "next/link";

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
                            Software from Muzaffarpur, Bihar. Building for India.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/about" className="hover:text-white">About us</a></li>
                            <li><a href="/careers" className="hover:text-white">Careers</a></li>
                            <li><a href="/contact" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">What we do</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/products" className="hover:text-white">Products</a></li>
                            <li><a href="/about" className="hover:text-white">Consulting</a></li>
                            <li><a href="/about" className="hover:text-white">Technology</a></li>
                            <li><a href="/about" className="hover:text-white">Industries</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-sm font-semibold mb-4">Insights</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="/about" className="hover:text-white">Newsroom</a></li>
                            <li><a href="/about" className="hover:text-white">Articles</a></li>
                            <li><a href="/about" className="hover:text-white">Press releases</a></li>
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
