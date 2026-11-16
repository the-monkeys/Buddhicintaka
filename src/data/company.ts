export const SITE_URL = "https://buddhicintaka.com";

export const COMPANY_LEGAL_NAME = "Buddhicintaka (OPC) Private Limited";
export const COMPANY_SHORT_NAME = "Buddhicintaka";
export const COMPANY_TRADE_NAME = "buddhicintaka";

export const COMPANY_CIN = "U62090BR2025OPC073988";
export const COMPANY_UDYAM = "UDYAM-BR-23-0115125";
export const COMPANY_GST = "10AANCB2931M1ZQ";

export const COMPANY_STREET = "Phulwaria, Paroo";
export const COMPANY_LOCALITY = "Muzaffarpur";
export const COMPANY_REGION = "Bihar";
export const COMPANY_POSTAL_CODE = "843107";
export const COMPANY_COUNTRY = "IN";
export const COMPANY_COUNTRY_NAME = "India";

export const COMPANY_ADDRESS_LINES = [
    "Phulwaria, Paroo",
    "Muzaffarpur",
    "Bihar 843107, India",
] as const;

export const COMPANY_ADDRESS_ONE_LINE =
    "Phulwaria, Paroo, Muzaffarpur 843107, Bihar, India";

export const COMPANY_EMAIL = "monkey.admin@monkeys.com.co";
export const COMPANY_PHONE_DISPLAY = "+91 62030 96513";
export const COMPANY_PHONE_E164 = "+916203096513";

export const COMPANY_MOTTO = "Inspire, inform and innovate.";

export const COMPANY_DESCRIPTION =
    "Buddhicintaka is a technology company founded in Bihar. We develop software platforms, maintain the Monkeys open-source community and provide cloud and AI engineering services.";

export const COMPANY_DEFAULT_TITLE =
    "Buddhicintaka | Software and AI Technology Company in Bihar";

export const COMPANY_X_HANDLE = "@buddhicintaka";
export const COMPANY_X_URL = `https://x.com/${COMPANY_X_HANDLE.slice(1)}`;

export const SAME_AS = [
    "https://github.com/the-monkeys",
    COMPANY_X_URL,
    "https://www.linkedin.com/company/buddhicintaka-private-limited/",
] as const;

export const PRODUCTS = {
    monkeys: {
        name: "Monkeys",
        url: "https://monkeys.com.co",
        source: "https://github.com/the-monkeys/the_monkeys",
        social: "https://x.com/monkeys_com_co",
        description:
            "Open-source community and content platform for research, articles, events, groups, and Studio.",
    },
    aasriva: {
        name: "Aasriva",
        url: "https://aasriva.in",
        vendorRegister: "https://aasriva.in/vendor-register/",
        description:
            "Marketplace for Indian manufacturers and local artisans. A joint venture of Buddhicintaka and OSDuo Tech LLP.",
    },
} as const;
