import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { JsonLd } from "../components/JsonLd";
import { organizationGraph } from "../data/jsonLd";
import {
    COMPANY_DEFAULT_TITLE,
    COMPANY_DESCRIPTION,
    COMPANY_SHORT_NAME,
    SITE_URL,
} from "../data/company";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: COMPANY_DEFAULT_TITLE,
    template: `%s | ${COMPANY_SHORT_NAME}`,
  },
  description: COMPANY_DESCRIPTION,
  keywords: [
    "Buddhicintaka",
    "Muzaffarpur",
    "Bihar",
    "India",
    "software company",
    "open source",
    "Monkeys",
    "Aasriva",
    "technology company Bihar",
  ],
  authors: [{ name: COMPANY_SHORT_NAME, url: SITE_URL }],
  creator: COMPANY_SHORT_NAME,
  publisher: COMPANY_SHORT_NAME,
  robots: { index: true, follow: true },
  openGraph: {
    title: COMPANY_DEFAULT_TITLE,
    description: COMPANY_DESCRIPTION,
    url: "/",
    type: "website",
    locale: "en_IN",
    siteName: COMPANY_SHORT_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY_DEFAULT_TITLE,
    description: COMPANY_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={organizationGraph()} />
        <>
          <Navbar />
          <main className="w-full min-h-screen">
            {children}
          </main>
          <Footer />
        </>
      </body>
    </html>
  );
}
