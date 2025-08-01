"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const heroSlides = [
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Premium Living Spaces in Gurgaon",
    subtitle: "Discover Your Dream Home with IREO Projects",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "World-Class Amenities & Infrastructure",
    subtitle: "Experience Luxury Living at Its Finest",
  },
]

const properties = [
  {
    id: 1,
    slug: "grandhyatt",
    status: "Booking Open",
    statusColor: "bg-gradient-to-r from-green-500 to-green-600",
    image: "/placeholder.svg?height=300&width=400&text=Grand+Hyatt+Luxury",
    name: "IREO The Grand Hyatt",
    type: "Residential Apartments",
    location: "Sector 58, Gurgaon",
    size: "1375 – 2850 SQ.FT",
    rating: 4.8,
    units: "450+ Units",
    possession: "Dec 2025",
  },
  {
    id: 2,
    slug: "grandarch",
    status: "Ready to Move",
    statusColor: "bg-gradient-to-r from-blue-500 to-blue-600",
    image: "/placeholder.svg?height=300&width=400&text=Grand+Arch+Premium",
    name: "IREO The Grand Arch",
    type: "Premium Residences",
    location: "Sector 67, Gurgaon",
    size: "1650 – 4200 SQ.FT",
    rating: 4.7,
    units: "320+ Units",
    possession: "Ready",
  },
  {
    id: 3,
    slug: "uptown",
    status: "Booking Open",
    statusColor: "bg-gradient-to-r from-green-500 to-green-600",
    image: "/placeholder.svg?height=300&width=400&text=Uptown+Luxury+Villas",
    name: "IREO Uptown",
    type: "Luxury Villas",
    location: "Sector 66, Gurgaon",
    size: "2400 – 8500 SQ.FT",
    rating: 4.9,
    units: "180+ Villas",
    possession: "Mar 2026",
  },
  {
    id: 4,
    slug: "skyon",
    status: "Pre-Launch",
    statusColor: "bg-gradient-to-r from-orange-500 to-orange-600",
    image: "/placeholder.svg?height=300&width=400&text=Skyon+Sky+Residences",
    name: "IREO Skyon",
    type: "Sky Residences",
    location: "Sector 60, Gurgaon",
    size: "1580 – 3200 SQ.FT",
    rating: 4.6,
    units: "280+ Units",
    possession: "Jun 2026",
  },
  {
    id: 5,
    slug: "corridors",
    status: "Ready to Move",
    statusColor: "bg-gradient-to-r from-blue-500 to-blue-600",
    image: "/placeholder.svg?height=300&width=400&text=Corridors+Premium",
    name: "IREO The Corridors",
    type: "Premium Apartments",
    location: "Sector 67, Gurgaon",
    size: "1890 – 4500 SQ.FT",
    rating: 4.8,
    units: "380+ Units",
    possession: "Ready",
  },
  {
    id: 6,
    slug: "citycentral",
    status: "Booking Open",
    statusColor: "bg-gradient-to-r from-green-500 to-green-600",
    image: "/placeholder.svg?height=300&width=400&text=City+Central+Mixed",
    name: "IREO City Central",
    type: "Mixed Development",
    location: "Sector 59, Gurgaon",
    size: "1200 – 3800 SQ.FT",
    rating: 4.5,
    units: "500+ Units",
    possession: "Aug 2025",
  },
  {
    id: 7,
    slug: "waterfront",
    status: "Ready to Move",
    statusColor: "bg-gradient-to-r from-blue-500 to-blue-600",
    image: "/placeholder.svg?height=300&width=400&text=Waterfront+Residences",
    name: "IREO Waterfront",
    type: "Waterfront Residences",
    location: "Sector 58, Gurgaon",
    size: "1750 – 5200 SQ.FT",
    rating: 4.7,
    units: "220+ Units",
    possession: "Ready",
  },
  {
    id: 8,
    slug: "penthouses",
    status: "Pre-Launch",
    statusColor: "bg-gradient-to-r from-orange-500 to-orange-600",
    image: "/placeholder.svg?height=300&width=400&text=Ultra+Luxury+Penthouses",
    name: "IREO The Penthouses",
    type: "Ultra Luxury",
    location: "Sector 66, Gurgaon",
    size: "3500 – 8500 SQ.FT",
    rating: 4.9,
    units: "50+ Penthouses",
    possession: "Dec 2026",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src="/placeholder.svg?height=40&width=120" alt="IREO Projects" className="h-10" />
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">9811750130</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-xl md:text-2xl">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Property Listings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">IREO Projects in Gurgaon</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <Card
                key={property.id}
                className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  index >= 6 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="relative">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className={`absolute top-4 left-4 ${property.statusColor} text-white`}>
                    {property.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
                  <p className="text-gray-600 mb-1">{property.type}</p>
                  <p className="text-gray-600 mb-3">{property.location}</p>
                  <p className="text-lg font-semibold text-gray-900 mb-3">{property.size}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-blue-600">Call for Price</span>
                    <a href={`/${property.slug}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                      >
                        View Details
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">IREO Projects in Gurgaon</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              IREO is a leading real estate developer in India, known for creating world-class residential and
              commercial spaces that redefine modern living. With a strong presence in Gurgaon, IREO has established
              itself as a trusted name in the real estate industry, delivering projects that combine innovative design,
              premium amenities, and strategic locations.
            </p>

            <p className="mb-6">
              Our commitment to excellence is reflected in every project we undertake. From luxury apartments and
              premium villas to mixed-use developments, IREO projects are designed to meet the evolving needs of modern
              homebuyers. We focus on creating sustainable communities that offer not just homes, but complete lifestyle
              experiences.
            </p>

            <p className="mb-6">
              Located in prime areas of Gurgaon, our projects offer excellent connectivity to major business districts,
              educational institutions, healthcare facilities, and entertainment hubs. Each IREO development is
              thoughtfully planned with state-of-the-art amenities, green spaces, and modern infrastructure to ensure
              residents enjoy the highest quality of life.
            </p>

            <p>
              With a vision to transform the real estate landscape, IREO continues to set new benchmarks in design,
              quality, and customer satisfaction. Our portfolio includes some of the most sought-after residential
              projects in Gurgaon, making us the preferred choice for discerning homebuyers who value quality, luxury,
              and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">© 2025. All Rights Reserved. | IREO Projects | 9811750130</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
