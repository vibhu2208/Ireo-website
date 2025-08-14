import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IREO City Central - Mixed-Use Development in Sector 59, Gurgaon",
  description:
    "Explore IREO City Central in Sector 59, Gurgaon — premium mixed-use development with retail and residential convenience. Excellent connectivity and modern amenities.",
  keywords:
    "IREO City Central, Sector 59 Gurgaon, mixed-use development, premium retail, residential convenience, commercial space, lifestyle destination",
  alternates: {
    canonical: "/citycentral",
  },
  openGraph: {
    title: "IREO City Central - Mixed-Use Development in Sector 59, Gurgaon",
    description:
      "Discover IREO City Central — a premium lifestyle destination with modern amenities and excellent connectivity in Sector 59, Gurgaon.",
    url: "/citycentral",
    images: [
      {
        url: "/city-central-gallery-01.webp",
        width: 1200,
        height: 630,
        alt: "IREO City Central - Mixed-Use Development in Sector 59, Gurgaon",
      },
    ],
  },
}

export default function CityCentralLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
