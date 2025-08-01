import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "IREO Projects - Premium Real Estate in Gurgaon",
    template: "%s | IREO Projects",
  },
  description:
    "Discover luxury residential and commercial properties by IREO in Gurgaon. Premium apartments, villas, and commercial spaces with world-class amenities.",
  keywords:
    "IREO, Gurgaon real estate, luxury apartments, premium villas, commercial spaces, Sector 58, Sector 66, Sohna Road",
  authors: [{ name: "IREO Projects" }],
  creator: "IREO Projects",
  publisher: "IREO Projects",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ireo-projects.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ireo-projects.com",
    title: "IREO Projects - Premium Real Estate in Gurgaon",
    description:
      "Discover luxury residential and commercial properties by IREO in Gurgaon. Premium apartments, villas, and commercial spaces with world-class amenities.",
    siteName: "IREO Projects",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IREO Projects - Luxury Real Estate in Gurgaon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IREO Projects - Premium Real Estate in Gurgaon",
    description: "Discover luxury residential and commercial properties by IREO in Gurgaon.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
