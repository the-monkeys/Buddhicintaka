import {
    breadcrumbJsonLd,
    collectionIndexJsonLd,
} from "../data/jsonLd";

export function JsonLd({ data }: { data: unknown }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}

export function CollectionJsonLd({
    name,
    description,
    path,
    items,
}: {
    name: string;
    description: string;
    path: string;
    items: { name: string; path: string }[];
}) {
    return (
        <>
            <JsonLd
                data={breadcrumbJsonLd([
                    { name: "Home", path: "/" },
                    { name, path },
                ])}
            />
            <JsonLd
                data={collectionIndexJsonLd(name, description, path, items)}
            />
        </>
    );
}
