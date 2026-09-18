export function SpotlightArt({ variant = "consulting" }: { variant?: string }) {
    if (variant === "people") {
        return (
            <svg
                viewBox="0 0 320 360"
                className="h-full w-full"
                aria-hidden="true"
                fill="none"
            >
                <circle cx="160" cy="118" r="36" stroke="#ff4f3a" strokeWidth="1.5" />
                <circle cx="160" cy="118" r="8" fill="#ff4f3a" />
                <path
                    d="M96 250c10-42 38-64 64-64s54 22 64 64"
                    stroke="#ffffff"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                />
                <circle cx="78" cy="168" r="22" stroke="#ffffff" strokeOpacity="0.28" />
                <circle cx="242" cy="168" r="22" stroke="#ffffff" strokeOpacity="0.28" />
                <path d="M100 168h38M182 168h38" stroke="#ff4f3a" strokeOpacity="0.7" />
                <rect x="48" y="268" width="224" height="1" fill="#ffffff" fillOpacity="0.12" />
            </svg>
        );
    }

    return (
        <svg
            viewBox="0 0 320 360"
            className="h-full w-full"
            aria-hidden="true"
            fill="none"
        >
            <rect x="36" y="36" width="248" height="150" rx="4" stroke="#ffffff" strokeOpacity="0.18" />
            <rect x="52" y="52" width="88" height="10" rx="2" fill="#ff4f3a" />
            <rect x="52" y="74" width="216" height="6" rx="2" fill="#ffffff" fillOpacity="0.2" />
            <rect x="52" y="90" width="168" height="6" rx="2" fill="#ffffff" fillOpacity="0.12" />
            <rect x="52" y="118" width="70" height="44" rx="3" stroke="#ff4f3a" strokeOpacity="0.85" />
            <rect x="134" y="118" width="70" height="44" rx="3" stroke="#ffffff" strokeOpacity="0.28" />
            <rect x="216" y="118" width="52" height="44" rx="3" stroke="#ffffff" strokeOpacity="0.18" />

            <circle cx="86" cy="250" r="7" fill="#ff4f3a" />
            <circle cx="160" cy="228" r="5" stroke="#ffffff" strokeOpacity="0.45" />
            <circle cx="232" cy="258" r="6" stroke="#ff4f3a" />
            <circle cx="196" cy="300" r="4" fill="#ffffff" fillOpacity="0.35" />
            <path
                d="M86 250L160 228L232 258L196 300L86 250"
                stroke="#ff4f3a"
                strokeOpacity="0.55"
            />
            <path d="M160 186v42" stroke="#ffffff" strokeOpacity="0.2" />
        </svg>
    );
}
