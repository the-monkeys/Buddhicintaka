import { Metadata } from "next";
import Image from "next/image";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd } from "../../data/jsonLd";
import { SITE_URL } from "../../data/company";

export const metadata: Metadata = {
    title: "Leadership",
    description:
        "Dave is Managing Director of Buddhicintaka (OPC) Private Limited, a technology company in Muzaffarpur, Bihar.",
    alternates: { canonical: "/leadership" },
    openGraph: {
        title: "Leadership | Buddhicintaka",
        description:
            "Dave, Managing Director of Buddhicintaka (OPC) Private Limited, Muzaffarpur, Bihar.",
        url: "/leadership",
        locale: "en_IN",
    },
};

export default function LeadershipPage() {
    return (
        <div>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name: "Leadership", path: "/leadership" },
                ])}
            />
            <JsonLd
                data={{
                    "@context": "https://schema.org",
                    "@type": "Person",
                    name: "Dave",
                    jobTitle: "Managing Director",
                    worksFor: {
                        "@type": "Organization",
                        name: "Buddhicintaka (OPC) Private Limited",
                        url: SITE_URL,
                    },
                    url: `${SITE_URL}/leadership`,
                    image: `${SITE_URL}/team/dave.jpg`,
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Muzaffarpur",
                        addressRegion: "Bihar",
                        addressCountry: "IN",
                    },
                }}
            />
            <section className="grid lg:grid-cols-12 lg:min-h-[100svh]">
                <div className="lg:col-span-5 flex flex-col justify-end px-6 sm:px-8 lg:px-12 xl:px-16 pt-32 pb-14 lg:py-24">
                    <p className="section-label mb-5">Leadership</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight leading-[1.08] text-[var(--text-primary)]">
                        Dave
                    </h1>
                    <p className="mt-3 text-lg text-[var(--text-secondary)]">
                        Managing Director
                    </p>
                    <span className="mt-8 block w-10 h-[2px] bg-[var(--brand)]" />
                    <p className="mt-8 text-lg sm:text-xl leading-relaxed text-[var(--text-secondary)] max-w-md">
                        Dave leads Buddhicintaka (OPC) Private Limited from
                        Muzaffarpur, Bihar. The company designs, develops, and
                        operates software used across India, including Monkeys
                        and Aasriva.
                    </p>
                </div>
                <div className="lg:col-span-7 relative h-[62vh] sm:h-[70vh] lg:h-auto lg:min-h-[100svh]">
                    <Image
                        src="/team/dave.jpg"
                        alt="Dave, Managing Director of Buddhicintaka"
                        fill
                        priority
                        className="object-cover object-[82%_16%]"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                </div>
            </section>
        </div>
    );
}
