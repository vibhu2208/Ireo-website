"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const heroImages = [
  "/placeholder.svg?height=800&width=1200&text=IREO+Luxury+Residences",
  "/placeholder.svg?height=800&width=1200&text=IREO+Premium+Amenities",
  "/placeholder.svg?height=800&width=1200&text=IREO+Modern+Architecture",
  "/placeholder.svg?height=800&width=1200&text=IREO+Lifestyle+Living",
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
    image: "/placeholder.svg?height=400&width=600&text=Grand+Hyatt+Residences",
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
    image: "/placeholder.svg?height=400&width=600&text=Grand+Arch+Apartments",
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
    image: "/placeholder.svg?height=400&width=600&text=Uptown+Modern+Living",
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
    image: "/placeholder.svg?height=400&width=600&text=Skyon+High+Rise",
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
    image: "/placeholder.svg?height=400&width=600&text=The+Corridors+Commercial",
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
    image: "/placeholder.svg?height=400&width=600&text=City+Central+Mixed+Use",
    features: ["Central Location", "Mixed-use", "Premium Amenities"],
  },
  {
    id: 7,
    name: "IREO Gurgaonhills",
    slug: "gurgaonhills",
    location: "Sector 58, Gurgaon",
    type: "Waterfront Residences",
    price: "₹4.2 Cr - ₹12.8 Cr",
    area: "1750 – 5200 SQ.FT",
    accommodation: "3, 4 & 5 BHK",
    status: "Ready to Move",
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600&text=Waterfront+Living",
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
    image: "/placeholder.svg?height=400&width=600&text=The+Village+Villas",
    features: ["Independent Villas", "Gated Community", "Private Gardens"],
  },
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
                  <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">IREO Projects</h1>
                  <p className="text-2xl md:text-3xl mb-6 text-gray-200">Luxury Living Redefined</p>
                  <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-4xl mx-auto">
                    Discover premium residential and commercial properties in Gurgaon's most sought-after locations
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-10 py-5 text-xl"
                    >
                      <Phone className="h-6 w-6 mr-3" />
                      Call 9811750130
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-10 py-5 text-xl"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
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
                      <a href={`/${project.slug}`}>
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="px-3 bg-transparent">
                      <Phone className="h-4 w-4" />
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
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] opacity-10"></div>
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
                IREO is a leading real estate developer in Gurgaon, creating premium residential and commercial
                properties that redefine luxury living and working spaces.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  Twitter
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white bg-transparent"
                >
                  LinkedIn
                </Button>
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
                <a href="/gurgaonhills" className="text-gray-400 hover:text-white block">
                  Gurgaon Hills
                </a>
                <a href="/victoryvalley" className="text-gray-400 hover:text-white block">
                  Victory Valley
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  9811750130
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Gurgaon, Haryana
                </p>
                <p>📧 info@ireo.in</p>
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
