import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IREO Uptown - Premium Residences in Sector 66, Gurgaon",
  description:
    "Discover IREO Uptown in Sector 66, Gurgaon — premium residences with modern amenities, excellent connectivity, and a vibrant community lifestyle.",
  keywords:
    "IREO Uptown, Sector 66 Gurgaon, premium residences, luxury apartments, amenities, modern living",
  alternates: {
    canonical: "/uptown",
  },
  openGraph: {
    title: "IREO Uptown - Premium Residences in Sector 66, Gurgaon",
    description:
      "Explore IREO Uptown — contemporary living with premium amenities and superb connectivity in Sector 66, Gurgaon.",
    url: "/uptown",
    images: [
      {
        url: "/skyon-gallery-01.webp",
        width: 1200,
        height: 630,
        alt: "IREO Uptown Residences in Sector 66, Gurgaon",
      },
    ],
  },
}

export default function UptownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
