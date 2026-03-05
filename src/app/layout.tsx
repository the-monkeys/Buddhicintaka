import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Buddhicintaka — Open Source Software That Runs the World",
    template: "%s | Buddhicintaka",
  },
  description:
    "Buddhicintaka (The Monkeys) builds enterprise-grade open-source software — IAM, notification services, web crawlers, and more. Community-driven, Made in India.",
  keywords: [
    "open source",
    "enterprise software",
    "IAM",
    "identity access management",
    "notification service",
    "web crawler",
    "Buddhicintaka",
    "The Monkeys",
  ],
  openGraph: {
    title: "Buddhicintaka — Open Source Software That Runs the World",
    description:
      "Community-driven, enterprise-ready open-source products. Built in India for the world.",
    type: "website",
    locale: "en_IN",
    siteName: "Buddhicintaka",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddhicintaka — Open Source Software",
    description:
      "Enterprise-grade open-source IAM, notifications & more. Community-driven, Made in India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
