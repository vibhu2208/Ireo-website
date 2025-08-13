import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IREO Victory Valley - Luxury Residential Apartments in Sector 67 Gurgaon",
  description:
    "Experience luxury residential living at IREO Victory Valley in Sector 67, Gurgaon. Premium 2, 3 & 4 BHK apartments with world-class amenities, ready to move. 25-acre residential destination.",
  keywords:
    "IREO Victory Valley, residential apartments Gurgaon, Sector 67 apartments, luxury apartments, ready to move, 2 BHK, 3 BHK, 4 BHK",
  alternates: {
    canonical: "/victoryvalley",
  },
  openGraph: {
    title: "IREO Victory Valley - Luxury Residential Apartments in Sector 67 Gurgaon",
    description: "Experience luxury residential living with world-class amenities and ready to move apartments.",
    url: "/victoryvalley",
    images: [
      {
        url: "/og-victory-valley.jpg",
        width: 1200,
        height: 630,
        alt: "IREO Victory Valley - Luxury residential apartments in Sector 67 Gurgaon",
      },
    ],
  },
}

export default function VictoryValleyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 