import type { Metadata } from "next"
import WaterfrontPage from "./waterfront-page"

export const metadata: Metadata = {
  title: "IREO Waterfront - Luxury Waterfront Residences in Sector 58 Gurgaon",
  description:
    "Experience luxury waterfront living at IREO Waterfront in Sector 58, Gurgaon. Premium 3, 4 & 5 BHK residences with yacht club, water views, and world-class amenities. Ready to move.",
  keywords:
    "IREO Waterfront, waterfront residences Gurgaon, Sector 58 apartments, yacht club, luxury apartments, water view homes, ready to move",
  alternates: {
    canonical: "/waterfront",
  },
  openGraph: {
    title: "IREO Waterfront - Luxury Waterfront Residences in Sector 58 Gurgaon",
    description: "Experience luxury waterfront living with yacht club, water views, and premium amenities.",
    url: "/waterfront",
    images: [
      {
        url: "/og-waterfront.jpg",
        width: 1200,
        height: 630,
        alt: "IREO Waterfront - Luxury waterfront residences with yacht club in Gurgaon",
      },
    ],
  },
}

export default function Page() {
  return <WaterfrontPage />
}
