import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                            Let's build something <br />
                            <span className="text-amber-600">together.</span>
                        </h2>
                        <p className="text-lg text-stone-600 mb-12 leading-relaxed">
                            Whether you need enterprise consulting, custom development, or
                            want to contribute to our open-source projects, we'd love to hear
                            from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-stone-900 mb-1">
                                        Email Us
                                    </h4>
                                    <a
                                        href="mailto:hello@buddhicintaka.com"
                                        className="text-stone-600 hover:text-amber-600 transition-colors"
                                    >
                                        hello@buddhicintaka.com
                                    </a>
                                    <p className="text-sm text-stone-500 mt-1">
                                        We'll respond within 24 hours.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-stone-900 mb-1">
                                        Call Us
                                    </h4>
                                    <a
                                        href="tel:+919876543210"
                                        className="text-stone-600 hover:text-amber-600 transition-colors"
                                    >
                                        +91 98765 43210
                                    </a>
                                    <p className="text-sm text-stone-500 mt-1">
                                        Mon-Fri, 9am-6pm IST.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-stone-900 mb-1">
                                        Visit Us
                                    </h4>
                                    <p className="text-stone-600">
                                        123 Innovation Hub, Tech Park,
                                        <br />
                                        Bangalore, India 560001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-stone-50 p-8 md:p-10 rounded-3xl border border-stone-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-stone-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-medium text-stone-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium text-stone-700"
                                >
                                    Subject
                                </label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white appearance-none"
                                >
                                    <option value="">Select a topic...</option>
                                    <option value="consulting">Enterprise Consulting</option>
                                    <option value="outsourcing">
                                        Outsourcing / Dedicated Team
                                    </option>
                                    <option value="opensource">Open Source Support</option>
                                    <option value="careers">Careers</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium text-stone-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all bg-white resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
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