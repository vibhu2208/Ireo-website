import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IREO Grand Arch - Premium Apartments in Sector 58, Gurgaon",
  description: "Discover IREO Grand Arch - Premium 3 & 4 BHK apartments in Sector 58, Gurgaon. Ready to move with luxury amenities, swimming pool, fitness center & more. Starting ₹2.8 Cr.",
  keywords: "IREO Grand Arch, Sector 58 Gurgaon, premium apartments, 3 BHK, 4 BHK, ready to move, luxury amenities",
  alternates: {
    canonical: "/grandarch",
  },
  openGraph: {
    title: "IREO Grand Arch - Premium Apartments in Sector 58, Gurgaon",
    description: "Discover IREO Grand Arch - Premium 3 & 4 BHK apartments in Sector 58, Gurgaon. Ready to move with luxury amenities.",
    url: "/grandarch",
    images: [
      {
        url: "/placeholder.svg?height=600&width=1000&text=Grand+Arch+Exterior",
        width: 1200,
        height: 630,
        alt: "IREO Grand Arch - Premium Apartments in Gurgaon",
      },
    ],
  },
}

export default function GrandArchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
