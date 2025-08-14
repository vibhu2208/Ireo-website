import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IREO Gurgaon Hills - Luxury Residences at Gwal Pahari, Gurgaon",
  description:
    "Discover IREO Gurgaon Hills at Gwal Pahari — expansive 3, 4 & 5 BHK luxury residences with Aravalli views, premium amenities, and serene green surroundings.",
  keywords:
    "IREO Gurgaon Hills, Gwal Pahari, Gurgaon luxury residences, 3 BHK, 4 BHK, 5 BHK, Aravalli views, premium amenities",
  alternates: {
    canonical: "/gurgaonhills",
  },
  openGraph: {
    title: "IREO Gurgaon Hills - Luxury Residences at Gwal Pahari, Gurgaon",
    description:
      "Experience IREO Gurgaon Hills — ultra-spacious homes with premium amenities and green surroundings near Golf Course Road.",
    url: "/gurgaonhills",
    images: [
      {
        url: "/gurgaonhills-gallery-01.webp",
        width: 1200,
        height: 630,
        alt: "IREO Gurgaon Hills - Luxury Residences at Gwal Pahari, Gurgaon",
      },
    ],
  },
}

export default function GurgaonHillsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
