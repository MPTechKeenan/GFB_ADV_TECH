import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gfbadvanced.com";

export const metadata: Metadata = {
  title: "GFB Advanced Technologies | Data Architecture & IT Consulting",
  description:
    "Enterprise-grade data solutions built for small businesses. GFB Advanced Technologies provides business automation, web development, data analytics, and IT support in Jacksonville, FL.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "GFB Advanced Technologies | Data Architecture & IT Consulting",
    description:
      "Enterprise-grade data solutions built for small businesses. Business automation, web development, data analytics, and IT support.",
    url: siteUrl,
    siteName: "GFB Advanced Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GFB Advanced Technologies | Data Architecture & IT Consulting",
    description:
      "Enterprise-grade data solutions built for small businesses.",
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased noise-overlay">{children}</body>
    </html>
  );
}
