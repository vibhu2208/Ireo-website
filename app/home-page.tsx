"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

const heroImages = [
  {
    src: "/hero-luxury-residences.jpg",
    alt: "IREO Luxury Residences - Premium apartments and villas in Gurgaon",
  },
  {
    src: "/hero-amenities.jpg",
    alt: "World-class amenities at IREO projects including pools, gyms, and clubhouses",
  },
  {
    src: "/hero-architecture.jpg",
    alt: "Modern architecture and design at IREO developments in Gurgaon",
  },
  {
    src: "/hero-lifestyle.jpg",
    alt: "Luxury lifestyle living at IREO premium residential projects",
  },
]

const projects = [
  {
    id: 1,
    name: "IREO Grand Hyatt Residences",
    slug: "grandhyatt",
    location: "Sector 58, Gurgaon",
    type: "Luxury Branded Residences",
    price: "₹6.5 Cr - ₹15.2 Cr",
    area: "2200 – 4500 SQ.FT",
    accommodation: "3, 4 & 5 BHK",
    status: "Ready to Move",
    rating: 4.9,
    image: "/projects/grand-hyatt-residences.jpg",
    alt: "IREO Grand Hyatt Residences - Luxury branded apartments in Sector 58 Gurgaon",
    features: ["Hyatt Branded", "Concierge Services", "Premium Amenities"],
  },
  {
    id: 2,
    name: "IREO Grand Arch",
    slug: "grandarch",
    location: "Sector 58, Gurgaon",
    type: "Premium Apartments",
    price: "₹4.8 Cr - ₹11.5 Cr",
    area: "1850 – 3200 SQ.FT",
    accommodation: "3 & 4 BHK",
    status: "Ready to Move",
    rating: 4.8,
    image: "/projects/grand-arch-apartments.jpg",
    alt: "IREO Grand Arch - Premium apartments with golf course views in Sector 58",
    features: ["Golf Course Views", "Premium Finishes", "Spacious Layouts"],
  },
  {
    id: 3,
    name: "IREO Uptown",
    slug: "uptown",
    location: "Sector 66, Gurgaon",
    type: "Modern Apartments",
    price: "₹3.2 Cr - ₹8.8 Cr",
    area: "1450 – 2800 SQ.FT",
    accommodation: "2, 3 & 4 BHK",
    status: "Ready to Move",
    rating: 4.7,
    image: "/projects/uptown-modern-living.jpg",
    alt: "IREO Uptown - Modern apartments in Sector 66 with smart home features",
    features: ["Urban Living", "Modern Design", "Great Connectivity"],
  },
  {
    id: 4,
    name: "IREO Skyon",
    slug: "skyon",
    location: "Sector 143, Gurgaon",
    type: "Sky-high Residences",
    price: "₹5.5 Cr - ₹13.2 Cr",
    area: "1950 – 3800 SQ.FT",
    accommodation: "3, 4 & 5 BHK",
    status: "Under Construction",
    rating: 4.8,
    image: "/projects/skyon-high-rise.jpg",
    alt: "IREO Skyon - Sky-high luxury residences in Sector 143 with panoramic views",
    features: ["Sky-high Views", "Luxury Amenities", "Modern Architecture"],
  },
  {
    id: 5,
    name: "IREO The Corridors",
    slug: "corridors",
    location: "Sector 67, Gurgaon",
    type: "Commercial Spaces",
    price: "₹2.8 Cr - ₹12.5 Cr",
    area: "800 – 5000 SQ.FT",
    accommodation: "Office & Retail",
    status: "Ready to Move",
    rating: 4.6,
    image: "/projects/corridors-commercial.jpg",
    alt: "IREO The Corridors - Premium commercial spaces and offices in Sector 67",
    features: ["Prime Location", "Modern Offices", "Retail Spaces"],
  },
  {
    id: 6,
    name: "IREO City Central",
    slug: "citycentral",
    location: "Sector 59, Gurgaon",
    type: "Mixed-use Development",
    price: "₹4.2 Cr - ₹9.8 Cr",
    area: "1650 – 2900 SQ.FT",
    accommodation: "2, 3 & 4 BHK",
    status: "Under Construction",
    rating: 4.7,
    image: "/projects/city-central-mixed-use.jpg",
    alt: "IREO City Central - Mixed-use development with residential and commercial spaces",
    features: ["Central Location", "Mixed-use", "Premium Amenities"],
  },
  {
    id: 7,
    name: "IREO Waterfront",
    slug: "waterfront",
    location: "Sector 58, Gurgaon",
    type: "Waterfront Residences",
    price: "₹4.2 Cr - ₹12.8 Cr",
    area: "1750 – 5200 SQ.FT",
    accommodation: "3, 4 & 5 BHK",
    status: "Ready to Move",
    rating: 4.7,
    image: "/projects/waterfront-living.jpg",
    alt: "IREO Waterfront - Luxury waterfront residences with yacht club in Sector 58",
    features: ["Water Views", "Yacht Club", "Waterfront Promenade"],
  },
  {
    id: 8,
    name: "IREO The Village",
    slug: "thevillage",
    location: "Sector 14, Sohna Road, Gurgaon",
    type: "Independent Villas",
    price: "₹8.5 Cr - ₹18.2 Cr",
    area: "3500 – 8000 SQ.FT",
    accommodation: "4 & 5 BHK Villas",
    status: "Under Construction",
    rating: 4.8,
    image: "/projects/village-villas.jpg",
    alt: "IREO The Village - Independent luxury villas in gated community on Sohna Road",
    features: ["Independent Villas", "Gated Community", "Private Gardens"],
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((heroImage, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={heroImage.src || "/placeholder.svg"}
              alt={heroImage.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-6xl">
                <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">IREO Projects</h1>
                <p className="text-2xl md:text-3xl mb-6 text-gray-200">Luxury Living Redefined</p>
                <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto">
                  Discover premium residential and commercial properties in Gurgaon's most sought-after locations
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-10 py-5 text-xl"
                    asChild
                  >
                    <a href="tel:+919811750130">
                      <Phone className="h-6 w-6 mr-3" />
                      Call 9811750130
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-10 py-5 text-xl"
                    asChild
                  >
                    <a href="#projects">Explore Projects</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Premium Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our collection of luxury residential and commercial properties across Gurgaon
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.alt}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        project.status === "Ready to Move"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-orange-500 hover:bg-orange-600"
                      } text-white`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">{project.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{project.type}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold text-gray-900">{project.price}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Area:</span>
                      <span className="font-semibold text-gray-900">{project.area}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold text-gray-900">{project.accommodation}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                      asChild
                    >
                      <Link href={`/${project.slug}`}>
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" className="px-3 bg-transparent" asChild>
                      <a href="tel:+919811750130" aria-label="Call for more information">
                        <Phone className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Connect with our experts to explore the best properties that match your lifestyle and investment goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">RERA Approved</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              Premium Locations
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              Luxury Amenities
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">Ready to Move</Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="tel:+919811750130">
                <Phone className="h-6 w-6 mr-3" />
                Call 9811750130
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-4 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">Schedule Site Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/logo-white.png"
                alt="IREO Projects Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">
                IREO is a leading real estate developer in Gurgaon, creating premium residential and commercial
                properties that redefine luxury living and working spaces.
              </p>
              <div className="flex space-x-4">
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
                <Link href="/careers" className="text-gray-400 hover:text-white">
                  Careers
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Projects</h3>
              <div className="space-y-2">
                <Link href="/grandhyatt" className="text-gray-400 hover:text-white block">
                  Grand Hyatt Residences
                </Link>
                <Link href="/grandarch" className="text-gray-400 hover:text-white block">
                  Grand Arch
                </Link>
                <Link href="/waterfront" className="text-gray-400 hover:text-white block">
                  Waterfront
                </Link>
                <Link href="/thevillage" className="text-gray-400 hover:text-white block">
                  The Village
                </Link>
                <Link href="/uptown" className="text-gray-400 hover:text-white block">
                  Uptown
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href="tel:+919811750130" className="hover:text-white">
                    9811750130
                  </a>
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Gurgaon, Haryana
                </p>
                <p>
                  <a href="mailto:info@ireo.in" className="hover:text-white">
                    info@ireo.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 IREO Projects. All rights reserved. |
              <Link href="/privacy-policy" className="hover:text-white ml-2">
                Privacy Policy
              </Link>{" "}
              |
              <Link href="/terms-of-service" className="hover:text-white ml-2">
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
