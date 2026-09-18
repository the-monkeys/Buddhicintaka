import {
    COMPANY_ADDRESS_ONE_LINE,
    COMPANY_COUNTRY,
    COMPANY_COUNTRY_NAME,
    COMPANY_DESCRIPTION,
    COMPANY_EMAIL,
    COMPANY_GST,
    COMPANY_LEGAL_NAME,
    COMPANY_LOCALITY,
    COMPANY_PHONE_E164,
    COMPANY_POSTAL_CODE,
    COMPANY_REGION,
    COMPANY_SHORT_NAME,
    COMPANY_STREET,
    PRODUCTS,
    SAME_AS,
    SITE_URL,
} from "./company";

const orgId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

export function organizationGraph() {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
                "@id": orgId,
                name: COMPANY_LEGAL_NAME,
                alternateName: COMPANY_SHORT_NAME,
                legalName: COMPANY_LEGAL_NAME,
                url: SITE_URL,
                logo: `${SITE_URL}/opengraph-image`,
                image: `${SITE_URL}/opengraph-image`,
                description: COMPANY_DESCRIPTION,
                email: COMPANY_EMAIL,
                telephone: COMPANY_PHONE_E164,
                foundingDate: "2025",
                areaServed: {
                    "@type": "Country",
                    name: COMPANY_COUNTRY_NAME,
                },
                address: {
                    "@type": "PostalAddress",
                    streetAddress: COMPANY_STREET,
                    addressLocality: COMPANY_LOCALITY,
                    addressRegion: COMPANY_REGION,
                    postalCode: COMPANY_POSTAL_CODE,
                    addressCountry: COMPANY_COUNTRY,
                },
                ...(COMPANY_GST
                    ? {
                          taxID: COMPANY_GST,
                          identifier: {
                              "@type": "PropertyValue",
                              name: "GSTIN",
                              value: COMPANY_GST,
                          },
                      }
                    : {}),
                sameAs: [...SAME_AS, "https://monkeys.com.co/buddhicintaka"],
                founder: {
                    "@type": "Person",
                    name: "Dave",
                    jobTitle: "Managing Director",
                    url: `${SITE_URL}/leadership`,
                },
                knowsAbout: [
                    "Software development",
                    "Open source",
                    "Content platforms",
                    "Marketplaces",
                    "Government e-Marketplace",
                    "Orbitor AI",
                    COMPANY_LOCALITY,
                    COMPANY_REGION,
                    COMPANY_COUNTRY_NAME,
                ],
            },
            {
                "@type": "WebSite",
                "@id": websiteId,
                url: SITE_URL,
                name: COMPANY_SHORT_NAME,
                description: COMPANY_DESCRIPTION,
                inLanguage: "en-IN",
                publisher: { "@id": orgId },
            },
        ],
    };
}

export function monkeysProductJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: PRODUCTS.monkeys.name,
        url: PRODUCTS.monkeys.url,
        description: PRODUCTS.monkeys.description,
        applicationCategory: "CommunicationApplication",
        operatingSystem: "Web",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
        },
        publisher: { "@id": orgId },
        isAccessibleForFree: true,
        sameAs: [PRODUCTS.monkeys.source],
    };
}

export function aasrivaProductJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: PRODUCTS.aasriva.name,
        url: PRODUCTS.aasriva.url,
        description: PRODUCTS.aasriva.description,
        publisher: { "@id": orgId },
        areaServed: {
            "@type": "Country",
            name: COMPANY_COUNTRY_NAME,
        },
    };
}

export function aboutPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: `About ${COMPANY_SHORT_NAME}`,
        url: `${SITE_URL}/about`,
        description: COMPANY_DESCRIPTION,
        mainEntity: { "@id": orgId },
        about: {
            "@type": "PostalAddress",
            streetAddress: COMPANY_STREET,
            addressLocality: COMPANY_LOCALITY,
            addressRegion: COMPANY_REGION,
            postalCode: COMPANY_POSTAL_CODE,
            addressCountry: COMPANY_COUNTRY,
            name: COMPANY_ADDRESS_ONE_LINE,
        },
    };
}

export function breadcrumbJsonLd(
    items: { name: string; path: string }[],
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
        })),
    };
}

export function serviceJsonLd(
    name: string,
    description: string,
    path: string,
) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `${SITE_URL}${path}`,
        provider: { "@id": orgId },
        areaServed: {
            "@type": "Country",
            name: COMPANY_COUNTRY_NAME,
        },
    };
}

export function webPageJsonLd(
    name: string,
    description: string,
    path: string,
) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name,
        description,
        url: `${SITE_URL}${path}`,
        isPartOf: { "@id": websiteId },
        about: { "@id": orgId },
        inLanguage: "en-IN",
    };
}

export function collectionIndexJsonLd(
    name: string,
    description: string,
    path: string,
    items: { name: string; path: string }[],
) {
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                name,
                description,
                url: `${SITE_URL}${path}`,
                isPartOf: { "@id": websiteId },
                about: { "@id": orgId },
                inLanguage: "en-IN",
            },
            {
                "@type": "ItemList",
                name,
                itemListElement: items.map((item, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    name: item.name,
                    url: `${SITE_URL}${item.path}`,
                })),
            },
        ],
    };
}
