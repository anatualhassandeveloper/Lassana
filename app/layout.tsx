import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import { COMPANY } from "@/lib/constants";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lassanafoodmachinery.com"),
  title: {
    default: `${COMPANY.name} | Commercial Food Equipment Accra, Ghana`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Lassana Food Machinery supplies premium commercial kitchen and bakery equipment in Accra, Ghana. Dough mixers, ovens, shawarma machines, and more.",
  keywords: [
    "commercial food equipment",
    "bakery machinery Ghana",
    "restaurant equipment Accra",
    "food machinery supplier",
    "Lassana Food Machinery",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: "website",
    locale: "en_GH",
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Quality Food Machinery for Your Business`,
    description:
      "Reliable commercial kitchen and bakery equipment in Accra, Ghana. Trusted supplier for restaurants, bakeries, and food businesses.",
    images: [
      {
        url: "/logo.svg",
        width: 420,
        height: 96,
        alt: "Lassana Food Machinery Logo",
      },
      {
        url: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lassana Food Machinery - Commercial Kitchen Equipment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Commercial Food Equipment`,
    description:
      "Premium commercial food machinery in Accra, Ghana. Quality equipment for restaurants and bakeries.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logo-icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ScrollToTop />
      </body>
    </html>
  );
}
