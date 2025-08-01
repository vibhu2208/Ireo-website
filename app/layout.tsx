import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "IREO Projects - Premium Real Estate Developer in Gurgaon",
    template: "%s | IREO Projects",
  },
  description:
    "Discover luxury residential and commercial properties by IREO in Gurgaon. Premium apartments, villas, and commercial spaces with world-class amenities.",
  keywords: "IREO projects, Gurgaon real estate, luxury apartments, premium villas, commercial spaces",
  authors: [{ name: "IREO" }],
  creator: "IREO",
  publisher: "IREO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ireo-projects.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "IREO Projects",
    title: "IREO Projects - Premium Real Estate Developer in Gurgaon",
    description: "Discover luxury residential and commercial properties by IREO in Gurgaon.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IREO Projects - Premium Real Estate Portfolio in Gurgaon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IREO Projects - Premium Real Estate Developer in Gurgaon",
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1e40af" />
        <style>{`
          html { scroll-behavior: smooth; }
          body { overflow-x: hidden; }
        `}</style>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
