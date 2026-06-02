import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductGrid from "@/components/ProductGrid";
import FeatureCard from "@/components/FeatureCard";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import { SEO, SITE_URL, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SITE_URL,
    images: [
      {
        url: absoluteUrl(SEO.ogImage),
        width: 1200,
        height: 630,
        alt: `${SEO.siteName} — Commercial Food Equipment in Accra, Ghana`,
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ProductGrid />
      <FeatureCard />
      <Gallery />
      <Location />
      <Contact />
    </>
  );
}
