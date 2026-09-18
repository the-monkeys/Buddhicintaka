import { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../data/jsonLd";
import {
    COMPANY_ADDRESS_ONE_LINE,
    COMPANY_EMAIL,
    COMPANY_LEGAL_NAME,
    COMPANY_PHONE_E164,
    SITE_URL,
} from "../../data/company";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Contact Buddhicintaka (OPC) Private Limited in Phulwaria, Paroo, Muzaffarpur, Bihar. Email, phone, and registered office.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact | Buddhicintaka",
        description:
            "Email, phone, and registered office of Buddhicintaka in Muzaffarpur, Bihar.",
        url: "/contact",
        locale: "en_IN",
    },
};

const Contact = () => {
    return (
        <section className="pt-28 pb-20 sm:pb-28 bg-[var(--bg-primary)]">
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Contact", path: "/contact" },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    name: `Contact ${COMPANY_LEGAL_NAME}`,
                    url: `${SITE_URL}/contact`,
                    inLanguage: "en-IN",
                    mainEntity: {
                        "@type": "Organization",
                        name: COMPANY_LEGAL_NAME,
                        email: COMPANY_EMAIL,
                        telephone: COMPANY_PHONE_E164,
                        url: SITE_URL,
                        address: COMPANY_ADDRESS_ONE_LINE,
                    },
                }}
            />
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <p className="section-label mb-5">Contact</p>
                        <h1 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-6 tracking-tight">
                            Get in touch.
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed">
                            Write to us, call, or visit.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Email
                                    </h4>
                                    <a
                                        href="mailto:mail.themonkeys.life@gmail.com"
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        mail.themonkeys.life@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Phone
                                    </h4>
                                    <a
                                        href="tel:+916203096513"
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        +91 62030 96513
                                    </a>
                                    <p className="text-sm text-[var(--text-tertiary)] mt-1">
                                        Mon-Fri, 9am-6pm IST
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Office
                                    </h4>
                                    <p className="text-[var(--text-secondary)]">
                                        Phulwaria, Paroo<br />
                                        Muzaffarpur<br />
                                        Bihar 843107, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--bg-secondary)] p-8 md:p-10 border border-[var(--border-primary)]">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)]">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                                        placeholder="you@organisation.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[var(--text-secondary)]">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-primary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] resize-none"
                                    placeholder="How can we help?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[var(--cta)] text-white font-semibold rounded-full hover:bg-[var(--cta-hover)] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Send message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
