import type { Metadata } from "next";
import { COMPANY, PRODUCTS } from "@/lib/constants";

/** Canonical site URL — override with NEXT_PUBLIC_SITE_URL when deploying. */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://lassanamachinery.com";
  return raw.replace(/\/+$/, "");
}

export const SITE_URL = getSiteUrl();

export const SEO = {
  siteName: COMPANY.name,
  title:
    "Lassana Food Machinery | Commercial Food Equipment Supplier in Accra, Ghana",
  description:
    "Lassana Food Machinery supplies premium commercial kitchen, bakery, and restaurant equipment in Accra, Ghana. Dough mixers, ovens, shawarma machines, fryers, dehydrators, juice dispensers, and 30+ machines with delivery across Ghana.",
  tagline: COMPANY.tagline,
  locale: "en_GH",
  themeColor: "#0F172A",
  accentColor: "#16A34A",
  ogImage: "/seo/og-image.png",
  twitterImage: "/seo/twitter-image.png",
  favicon: "/favicon-512.png",
  appleTouchIcon: "/apple-touch-icon.png",
  email: COMPANY.email,
  phone: COMPANY.phone.primary,
  phoneE164: `+233${COMPANY.phone.primary.replace(/^0/, "")}`,
  address: COMPANY.location.full,
  geo: {
    latitude: 5.5502,
    longitude: -0.2174,
  },
  keywords: [
    "Lassana Food Machinery",
    "commercial food equipment Ghana",
    "restaurant equipment Accra",
    "bakery machinery Ghana",
    "kitchen equipment supplier Accra",
    "food machinery Makola",
    "commercial dough mixer Ghana",
    "shawarma machine Accra",
    "planetary mixer Ghana",
    "gas deep fryer Ghana",
    "food dehydrator Ghana",
    "juice dispenser Ghana",
    "popcorn machine Ghana",
    "soft ice cream machine Ghana",
    "gas baking oven Ghana",
    "bain marie Ghana",
    "bone saw machine Ghana",
    "charcoal griller Ghana",
    "gas griddle fryer Ghana",
    "bread moulder Ghana",
    "waffle maker Ghana",
    "sugarcane juicer Ghana",
    "cotton candy machine Ghana",
    "stainless steel table Ghana",
    "noodle making machine Ghana",
    "gas rice steamer Ghana",
    "food display warmer Ghana",
    "commercial kitchen equipment West Africa",
    "food processing machinery Ghana",
    "catering equipment Accra",
  ],
  social: {
    whatsapp: COMPANY.social.whatsapp,
    tiktok: COMPANY.social.tiktok,
  },
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

export function buildRootMetadata(): Metadata {
  const ogImageUrl = absoluteUrl(SEO.ogImage);
  const twitterImageUrl = absoluteUrl(SEO.twitterImage);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SEO.title,
      template: `%s | ${COMPANY.name}`,
    },
    description: SEO.description,
    keywords: [...SEO.keywords],
    authors: [{ name: COMPANY.name, url: SITE_URL }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    category: "Commercial Food Equipment",
    applicationName: COMPANY.shortName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: "website",
      locale: SEO.locale,
      url: SITE_URL,
      siteName: SEO.siteName,
      title: SEO.title,
      description: SEO.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} — Commercial Food Equipment in Accra, Ghana`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SEO.title,
      description: SEO.description,
      images: [twitterImageUrl],
      creator: "@monterokitchen1",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
        { url: "/logo-icon.svg", type: "image/svg+xml" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/favicon-512.png"],
    },
    manifest: "/manifest.webmanifest",
    verification: {
      google:
        process.env.GOOGLE_SITE_VERIFICATION ??
        "0WJrX13Qu95diUq4UkUOIdHSPT4fuT-Lce5H3M1bFD4",
    },
    other: {
      "geo.region": "GH-AA",
      "geo.placename": "Accra",
      "geo.position": `${SEO.geo.latitude};${SEO.geo.longitude}`,
      ICBM: `${SEO.geo.latitude}, ${SEO.geo.longitude}`,
      "contact:phone_number": SEO.phoneE164,
      "contact:email": SEO.email,
      "contact:country_name": "Ghana",
      "contact:locality": "Accra",
      "contact:street_address": COMPANY.location.area,
    },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY.name,
    alternateName: COMPANY.shortName,
    url: SITE_URL,
    logo: absoluteUrl("/logo.svg"),
    image: absoluteUrl(SEO.ogImage),
    description: COMPANY.description,
    email: COMPANY.email,
    telephone: SEO.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.location.area,
      addressLocality: COMPANY.location.city,
      addressCountry: "GH",
    },
    sameAs: [COMPANY.social.whatsapp, COMPANY.social.tiktok],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SEO.phoneE164,
        contactType: "customer service",
        areaServed: "GH",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY.name,
    image: absoluteUrl(SEO.ogImage),
    url: SITE_URL,
    telephone: SEO.phoneE164,
    email: COMPANY.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.location.area,
      addressLocality: "Accra",
      addressRegion: "Greater Accra",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO.geo.latitude,
      longitude: SEO.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    areaServed: {
      "@type": "Country",
      name: "Ghana",
    },
    hasMap: COMPANY.mapsUrl,
    sameAs: [COMPANY.social.whatsapp, COMPANY.social.tiktok],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: COMPANY.name,
    url: SITE_URL,
    description: SEO.description,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: "en-GH",
  };
}

export function buildProductListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Commercial Food Equipment Catalog",
    description:
      "Premium commercial kitchen, bakery, and restaurant machinery available from Lassana Food Machinery in Accra, Ghana.",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.title,
        description: product.description,
        image: absoluteUrl(product.image),
        brand: {
          "@type": "Brand",
          name: COMPANY.name,
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "GHS",
          seller: {
            "@id": `${SITE_URL}/#organization`,
          },
        },
      },
    })),
  };
}

export function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where is Lassana Food Machinery located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Lassana Food Machinery is located at ${COMPANY.location.full}. Visit us near Makola Post Office in Accra for commercial food equipment.`,
        },
      },
      {
        "@type": "Question",
        name: "What types of food machinery does Lassana sell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We supply commercial dough mixers, planetary mixers, shawarma machines, gas fryers, baking ovens, food dehydrators, juice dispensers, popcorn machines, ice cream machines, bain maries, grills, and many other restaurant and bakery machines.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Lassana Food Machinery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Call or WhatsApp ${COMPANY.phone.primary}, email ${COMPANY.email}, or visit us at ${COMPANY.location.full}.`,
        },
      },
      {
        "@type": "Question",
        name: "Does Lassana deliver food equipment across Ghana?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lassana Food Machinery provides fast delivery of commercial food equipment across Accra and throughout Ghana.",
        },
      },
    ],
  };
}

export function buildAllStructuredData() {
  return [
    buildOrganizationSchema(),
    buildLocalBusinessSchema(),
    buildWebSiteSchema(),
    buildProductListSchema(),
    buildBreadcrumbSchema(),
    buildFaqSchema(),
  ];
}
