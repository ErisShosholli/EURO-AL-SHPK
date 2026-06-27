import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://euro-al-shpk.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EURO AL-SHPK | Sisteme Alumini Premium në Kosovë",
    template: "%s | EURO AL-SHPK"
  },
  description:
    "EURO AL-SHPK ofron dyer, dritare, roleta, fasada ventiluese, fasada strukturale dhe curtain wall systems për projekte banimi, afariste dhe industriale.",
  keywords: [
    "EURO AL-SHPK",
    "sisteme alumini",
    "dyer alumini",
    "dritare alumini",
    "fasada strukturale",
    "fasada ventiluese",
    "curtain wall",
    "Mitrovicë",
    "Kosovë"
  ],
  authors: [{ name: "EURO AL-SHPK" }],
  creator: "EURO AL-SHPK",
  publisher: "EURO AL-SHPK",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "sq_XK",
    url: siteUrl,
    siteName: "EURO AL-SHPK",
    title: "EURO AL-SHPK | Sisteme Alumini Premium",
    description:
      "Sisteme moderne alumini për ndërtesa banimi, objekte afariste dhe projekte industriale në Kosovë dhe Evropë.",
    images: [
      {
        url: "/images/site/hero-building.jpeg",
        width: 1200,
        height: 630,
        alt: "Objekt modern me sisteme alumini EURO AL-SHPK"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "EURO AL-SHPK | Sisteme Alumini Premium",
    description:
      "Dyer, dritare, roleta dhe fasada alumini me standarde evropiane.",
    images: ["/images/site/hero-building.jpeg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EURO AL-SHPK",
  image: `${siteUrl}/images/site/hero-building.jpeg`,
  url: siteUrl,
  telephone: "+38349345666",
  email: "euro-al@outlook.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shipol, Rruga e Kombit",
    addressLocality: "Mitrovicë",
    addressCountry: "XK"
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Kosovë"
    },
    {
      "@type": "Place",
      name: "Evropë"
    }
  ],
  description:
    "Sisteme moderne alumini, dyer, dritare, roleta, fasada ventiluese, fasada strukturale dhe curtain wall systems.",
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dyer Alumini" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dritare Alumini" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fasada Strukturale" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Curtain Wall Systems" } }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
