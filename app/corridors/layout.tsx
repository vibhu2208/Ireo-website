import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IREO The Corridors - Ready-to-Move Apartments in Sector 67A, Gurgaon",
  description:
    "Discover IREO The Corridors in Sector 67A, Gurgaon — ready-to-move 2 & 3 BHK apartments with extensive green spaces, premium amenities, and excellent connectivity.",
  keywords:
    "IREO The Corridors, Sector 67A Gurgaon, ready to move apartments, 2 BHK, 3 BHK, premium amenities, large greens, master plan",
  alternates: {
    canonical: "/corridors",
  },
  openGraph: {
    title: "IREO The Corridors - Ready-to-Move Apartments in Sector 67A, Gurgaon",
    description:
      "Explore IREO The Corridors — spacious residences with extensive landscaped greens, premium clubhouse, and superior connectivity in Sector 67A, Gurgaon.",
    url: "/corridors",
    images: [
      {
        url: "/corridors-gallery-01.webp",
        width: 1200,
        height: 630,
        alt: "IREO The Corridors - Apartments in Sector 67A, Gurgaon",
      },
    ],
  },
}

export default function CorridorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
