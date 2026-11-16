import { pageMetadata } from "../../data/pageMetadata";
import { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { EnquiryForm } from "./EnquiryForm";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../data/jsonLd";
import {
    COMPANY_ADDRESS_LINES,
    COMPANY_ADDRESS_ONE_LINE,
    COMPANY_EMAIL,
    COMPANY_X_HANDLE,
    COMPANY_X_URL,
    COMPANY_LEGAL_NAME,
    COMPANY_PHONE_DISPLAY,
    COMPANY_PHONE_E164,
    SITE_URL,
} from "../../data/company";

export const metadata: Metadata = pageMetadata(
    "/contact",
    "Contact our software engineering team",
    "Email Buddhicintaka about a software project, training or cloud services. Find our phone number, registered office in Bihar and official X account.",
);

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <div>
                        <p className="section-label mb-5">Contact</p>
                        <h1 className="text-4xl md:text-5xl font-medium text-[var(--text-primary)] mb-6 tracking-tight">
                            Get in touch.
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed">
                            For project enquiries, email us or call. You can also connect with Buddhicintaka on X.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Email
                                    </h2>
                                    <a
                                        href={`mailto:${COMPANY_EMAIL}`}
                                        className="[overflow-wrap:anywhere] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        {COMPANY_EMAIL}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Phone
                                    </h2>
                                    <a
                                        href={`tel:${COMPANY_PHONE_E164}`}
                                        className="[overflow-wrap:anywhere] text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        {COMPANY_PHONE_DISPLAY}
                                    </a>
                                    <p className="text-sm text-[var(--text-tertiary)] mt-1">
                                        Mon-Fri, 9am-6pm IST
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--accent-subtle)] text-[var(--accent)]">
                                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="mb-1 text-lg font-bold">X (Twitter)</h2>
                                    <a href={COMPANY_X_URL} className="text-[var(--text-secondary)] hover:underline">
                                        {COMPANY_X_HANDLE}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Office
                                    </h2>
                                    <p className="text-[var(--text-secondary)]">
                                        {COMPANY_ADDRESS_LINES.map((line) => <span key={line} className="block">{line}</span>)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="min-w-0 bg-[var(--bg-secondary)] p-5 sm:p-8 lg:p-10 border border-[var(--border-primary)]">
                        <EnquiryForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
