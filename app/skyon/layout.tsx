import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IREO Skyon - Sky Residences in Sector 60, Gurgaon",
  description:
    "Explore IREO Skyon in Sector 60, Gurgaon — modern sky residences with premium amenities, sky lounge, infinity pool, and landscaped terraces. 2, 3 & 4 BHK. Pre-launch pricing.",
  keywords:
    "IREO Skyon, Sector 60 Gurgaon, sky residences, premium apartments, 2 BHK, 3 BHK, 4 BHK, pre-launch, luxury amenities",
  alternates: {
    canonical: "/skyon",
  },
  openGraph: {
    title: "IREO Skyon - Sky Residences in Sector 60, Gurgaon",
    description:
      "Explore IREO Skyon — contemporary sky residences with world-class amenities and panoramic views in Sector 60, Gurgaon.",
    url: "/skyon",
    images: [
      {
        url: "/skyon-gallery-01.webp",
        width: 1200,
        height: 630,
        alt: "IREO Skyon - Sky Residences in Sector 60, Gurgaon",
      },
    ],
  },
}

export default function SkyonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
