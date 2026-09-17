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

export const COMPANY_EMAIL = "mail.themonkeys.life@gmail.com";
export const COMPANY_PHONE_DISPLAY = "+91 62030 96513";
export const COMPANY_PHONE_E164 = "+916203096513";

export const COMPANY_MOTTO = "Inspire, Inform, Innovate.";

export const COMPANY_DESCRIPTION =
    "Buddhicintaka (OPC) Private Limited is a technology company in Muzaffarpur, Bihar. We design, develop, and operate software products used across India, including Monkeys and Aasriva.";

export const COMPANY_DEFAULT_TITLE =
    "Buddhicintaka | Software from Muzaffarpur, Bihar";

export const SAME_AS = [
    "https://github.com/the-monkeys",
    "https://monkeys.com.co",
    "https://aasriva.in",
    "https://x.com/monkeys_com_co",
    "https://www.instagram.com/monkeys_com_co/",
] as const;

export const PRODUCTS = {
    monkeys: {
        name: "Monkeys",
        url: "https://monkeys.com.co",
        source: "https://github.com/the-monkeys/the_monkeys",
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
