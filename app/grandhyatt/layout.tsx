import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IREO Grand Hyatt - Luxury Branded Residences in Sector 58, Gurgaon",
  description: "Discover IREO Grand Hyatt - Ultra-luxury branded residences with Hyatt hospitality services in Sector 58, Gurgaon. 2, 3 & 4 BHK apartments with world-class amenities. Starting ₹4.5 Cr.",
  keywords: "IREO Grand Hyatt, Sector 58 Gurgaon, luxury branded residences, Hyatt hospitality, premium apartments, 2 BHK, 3 BHK, 4 BHK",
  alternates: {
    canonical: "/grandhyatt",
  },
  openGraph: {
    title: "IREO Grand Hyatt - Luxury Branded Residences in Sector 58, Gurgaon",
    description: "Discover IREO Grand Hyatt - Ultra-luxury branded residences with Hyatt hospitality services in Sector 58, Gurgaon.",
    url: "/grandhyatt",
    images: [
      {
        url: "/grandhyatt-gallery-01.jpg",
        width: 1200,
        height: 630,
        alt: "IREO Grand Hyatt - Luxury Branded Residences in Gurgaon",
      },
    ],
  },
}

export default function GrandHyattLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
