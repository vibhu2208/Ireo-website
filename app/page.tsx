import type { Metadata } from "next"
import HomePage from "./home-page"

export const metadata: Metadata = {
  title: "IREO Projects - Premium Real Estate Developer in Gurgaon",
  description:
    "Discover luxury residential and commercial properties by IREO in Gurgaon. Premium apartments, villas, and commercial spaces with world-class amenities in Sector 58, 66, and Sohna Road.",
  keywords:
    "IREO projects, Gurgaon real estate, luxury apartments, premium villas, commercial spaces, ready to move, under construction",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "IREO Projects - Premium Real Estate Developer in Gurgaon",
    description: "Discover luxury residential and commercial properties by IREO in Gurgaon.",
    url: "/",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "IREO Projects - Premium Real Estate Portfolio in Gurgaon",
      },
    ],
  },
}

export default function Page() {
  return <HomePage />
}
