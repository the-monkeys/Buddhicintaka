import type { Metadata } from "next";
import { COMPANY_SHORT_NAME, COMPANY_X_HANDLE } from "./company";

export function pageMetadata(path: string, title: string, description: string): Metadata {
    const fullTitle = path === "/" ? title : `${title} | ${COMPANY_SHORT_NAME}`;
    return {
        title: { absolute: fullTitle },
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "website",
            siteName: COMPANY_SHORT_NAME,
            locale: "en_IN",
            title: fullTitle,
            description,
            url: path,
            images: ["/opengraph-image"],
        },
        twitter: {
            card: "summary_large_image",
            site: COMPANY_X_HANDLE,
            title: fullTitle,
            description,
            images: ["/opengraph-image"],
        },
    };
}
