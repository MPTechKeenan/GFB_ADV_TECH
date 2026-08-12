import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/company";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gfbfederalsolutions.com";

export const metadata: Metadata = {
  title: `${company.shortName} | Federal Data, Architecture & AI Solutions`,
  description: company.positioning,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: `${company.shortName} | Federal Data, Architecture & AI Solutions`,
    description: company.positioning,
    url: siteUrl,
    siteName: company.shortName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${company.shortName} — Federal Technology, Data, Architecture, AI`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.shortName} | Federal Data, Architecture & AI Solutions`,
    description: company.positioning,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
