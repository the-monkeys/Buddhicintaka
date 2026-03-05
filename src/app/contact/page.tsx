import { Metadata } from "next";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with Buddhicintaka for enterprise consulting, custom development, or open-source support.",
};

const Contact = () => {
    return (
        <section className="pt-32 pb-20 sm:pb-28 bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <span className="text-[var(--accent)] text-xs font-semibold tracking-[0.2em] uppercase block mb-4">
                            Contact
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
                            Let's build something together.
                        </h1>
                        <p className="text-lg text-[var(--text-secondary)] mb-12 leading-relaxed">
                            Whether you need enterprise consulting, custom development, or
                            want to contribute to our open-source projects, we'd love to hear
                            from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] rounded-full flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Email Us
                                    </h4>
                                    <a
                                        href="mailto:mail.themonkeys.life@gmail.com"
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        mail.themonkeys.life@gmail.com
                                    </a>
                                    <p className="text-sm text-[var(--text-tertiary)] mt-1">
                                        We'll respond within 24 hours.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] rounded-full flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Call Us
                                    </h4>
                                    <a
                                        href="tel:+919611808267"
                                        className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        +91 96118 08267
                                    </a>
                                    <p className="text-sm text-[var(--text-tertiary)] mt-1">
                                        Mon-Fri, 9am-6pm IST.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[var(--accent-subtle)] rounded-full flex items-center justify-center text-[var(--accent)] shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                                        Visit Us
                                    </h4>
                                    <p className="text-[var(--text-secondary)]">
                                        Phulwaria, Paroo, Muzaffarpur<br />
                                        Bihar 843107, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[var(--bg-secondary)] p-8 md:p-10 rounded-3xl border border-[var(--border-primary)]">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-[var(--text-secondary)]">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)]"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-[var(--text-secondary)]">
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-tertiary)] text-[var(--text-primary)] appearance-none"
                                >
                                    <option value="">Select a topic...</option>
                                    <option value="consulting">Enterprise Consulting</option>
                                    <option value="outsourcing">Outsourcing / Dedicated Team</option>
                                    <option value="opensource">Open Source Support</option>
                                    <option value="careers">Careers</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-[var(--text-secondary)]">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-[var(--border-primary)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-subtle)] outline-none transition-all bg-[var(--bg-tertiary)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-[var(--accent)] text-white font-bold rounded-lg hover:bg-[var(--accent-hover)] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Send Message
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
