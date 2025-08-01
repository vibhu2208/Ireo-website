"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Home, Users, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: 1,
    name: "IREO Grand Hyatt Residences",
    slug: "grandhyatt",
    location: "Sector 58, Gurgaon",
    type: "Luxury Residences",
    area: "1800 – 4500 SQ.FT",
    price: "₹3.5 Cr - ₹12 Cr",
    accommodation: "3, 4 & 5 BHK",
    status: "Ready to Move",
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600&text=Grand+Hyatt+Residences",
    features: ["5-Star Hotel Services", "Branded Residences", "Premium Location"],
  },
  {
    id: 2,
    name: "IREO Grand Arch",
    slug: "grandarch",
    location: "Sector 58, Gurgaon",
    type: "Premium Apartments",
    area: "1650 – 3200 SQ.FT",
    price: "₹2.8 Cr - ₹8.5 Cr",
    accommodation: "3 & 4 BHK",
    status: "Ready to Move",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600&text=Grand+Arch",
    features: ["Architectural Marvel", "Premium Finishes", "Golf Course Views"],
  },
  {
    id: 3,
    name: "IREO Uptown",
    slug: "uptown",
    location: "Sector 66, Gurgaon",
    type: "Urban Living",
    area: "1200 – 2800 SQ.FT",
    price: "₹1.8 Cr - ₹6.2 Cr",
    accommodation: "2, 3 & 4 BHK",
    status: "Ready to Move",
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=600&text=Uptown",
    features: ["Modern Design", "Central Location", "Smart Homes"],
  },
  {
    id: 4,
    name: "IREO Skyon",
    slug: "skyon",
    location: "Sector 143, Gurgaon",
    type: "Sky Residences",
    area: "2200 – 4800 SQ.FT",
    price: "₹4.2 Cr - ₹11.5 Cr",
    accommodation: "3, 4 & 5 BHK",
    status: "Under Construction",
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600&text=Skyon",
    features: ["Sky-high Living", "Panoramic Views", "Ultra-luxury"],
  },
  {
    id: 5,
    name: "IREO The Corridors",
    slug: "corridors",
    location: "Sector 67, Gurgaon",
    type: "Commercial Spaces",
    area: "500 – 2000 SQ.FT",
    price: "₹85 L - ₹3.2 Cr",
    accommodation: "Office Spaces",
    status: "Ready to Move",
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=600&text=The+Corridors",
    features: ["Prime Commercial", "Modern Offices", "Business Hub"],
  },
  {
    id: 6,
    name: "IREO City Central",
    slug: "citycentral",
    location: "Sector 61, Gurgaon",
    type: "Mixed Development",
    area: "1400 – 3500 SQ.FT",
    price: "₹2.2 Cr - ₹7.8 Cr",
    accommodation: "2, 3 & 4 BHK",
    status: "Under Construction",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600&text=City+Central",
    features: ["Mixed-use", "Central Location", "Integrated Living"],
  },
  {
    id: 7,
    name: "IREO Waterfront",
    slug: "waterfront",
    location: "Sector 58, Gurgaon",
    type: "Waterfront Residences",
    area: "1750 – 5200 SQ.FT",
    price: "₹4.2 Cr - ₹12.8 Cr",
    accommodation: "3, 4 & 5 BHK",
    status: "Ready to Move",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600&text=Waterfront",
    features: ["Water Views", "Yacht Club", "Waterfront Living"],
  },
  {
    id: 8,
    name: "IREO The Village",
    slug: "thevillage",
    location: "Sector 114, Gurgaon",
    type: "Independent Villas",
    area: "3500 – 8000 SQ.FT",
    price: "₹8.5 Cr - ₹18.5 Cr",
    accommodation: "4 & 5 BHK Villas",
    status: "Under Construction",
    rating: 4.9,
    image: "/placeholder.svg?height=400&width=600&text=The+Village",
    features: ["Independent Villas", "Gated Community", "Private Gardens"],
  },
]

const heroImages = [
  "/placeholder.svg?height=800&width=1200&text=IREO+Luxury+Living",
  "/placeholder.svg?height=800&width=1200&text=Premium+Residences",
  "/placeholder.svg?height=800&width=1200&text=Modern+Architecture",
  "/placeholder.svg?height=800&width=1200&text=Gurgaon+Skyline",
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img src="/placeholder.svg?height=40&width=120&text=IREO+Logo" alt="IREO Projects" className="h-10" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-gray-700">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">9811750130</span>
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-6xl">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-semibold mb-6">
                    Premium Real Estate
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">IREO Projects</h1>
                  <p className="text-xl md:text-2xl mb-4 text-gray-200">Luxury Living Redefined in Gurgaon</p>
                  <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                    Discover premium residential and commercial properties with world-class amenities and unmatched
                    quality
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call 9811750130
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-4 text-lg"
                    >
                      Explore Projects
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
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
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Premium Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover luxury living across Gurgaon with our portfolio of premium residential and commercial
              developments
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`${
                        project.status === "Ready to Move"
                          ? "bg-green-500 hover:bg-green-600"
                          : "bg-orange-500 hover:bg-orange-600"
                      } text-white border-0`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">{project.rating}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    <span className="text-sm">{project.location}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Type:</span>
                      <span className="font-semibold text-gray-900">{project.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Area:</span>
                      <span className="font-semibold text-gray-900">{project.area}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Config:</span>
                      <span className="font-semibold text-gray-900">{project.accommodation}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-lg font-bold text-blue-600">{project.price}</p>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      <a href={`/${project.slug}`}>
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IREO Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose IREO</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-600">World-class construction with premium materials and finishes</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prime Locations</h3>
              <p className="text-gray-600">Strategic locations in Gurgaon with excellent connectivity</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Developer</h3>
              <p className="text-gray-600">Years of experience in delivering quality projects on time</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Amenities</h3>
              <p className="text-gray-600">World-class amenities and facilities for modern living</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Explore our premium projects and discover luxury living in Gurgaon's most sought-after locations
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">RERA Approved</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">Ready to Move</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              Premium Locations
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="h-6 w-6 mr-3" />
              Call 9811750130
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-4 text-lg font-semibold"
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img
                src="/placeholder.svg?height=40&width=120&text=IREO+Logo"
                alt="IREO Projects"
                className="h-10 mb-4"
              />
              <p className="text-gray-400 mb-4">
                IREO Projects is a leading real estate developer in Gurgaon, committed to delivering premium residential
                and commercial properties with world-class amenities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 9811750130</p>
                <p>📧 info@ireo.in</p>
                <p>📍 Gurgaon, Haryana</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="/" className="text-gray-400 hover:text-white block">
                  Home
                </a>
                <a href="/grandhyatt" className="text-gray-400 hover:text-white block">
                  Grand Hyatt
                </a>
                <a href="/grandarch" className="text-gray-400 hover:text-white block">
                  Grand Arch
                </a>
                <a href="/uptown" className="text-gray-400 hover:text-white block">
                  Uptown
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IREO Projects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
