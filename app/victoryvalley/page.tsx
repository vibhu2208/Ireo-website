"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Home, Users, Calendar, Star, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import ScheduleVisitPopup from "@/components/schedule-visit-popup"

const projectData = {
  name: "IREO Victory Valley",
  slug: "victoryvalley",
  heroImages: [
    "/victory-valley-gallery-01.webp"
  ],
  quickFacts: {
    type: "Residential Apartments",
    location: "Sector 67, Gurgaon",
    area: "1435 - 5970 SQ.FT",
    price: "₹ 1.32 Cr Onwards",
    accommodation: "2, 3 & 4 BHK",
    status: "Ready To Move",
    possession: "Ready To Move",
    rating: 4.5,
  },
  description: [
    "Ireo victory valley is a new residential destination embellishing the address of Sector 67, Gurgaon. The individuals seeking an excellent and comprehensive residential solution now have an access to every amenity that they have been dreaming of. With an area of 25 acres and more then 750 apartments in simplex and duplex form, the Ireo Victory Valley is simply an incredible residential dream come true.",
    "This Residential township exudes great architectural designing and indulging modern lifestyle. There is an engulfing cover of vast greenery around Ireo Victory Valley in the form of a Central Garden, and themed gardens. Also at disposal are tennis & squash courts, Theater Plaza, Fitness Centers and an exciting club. Residents can choose from the options of 2, 3, and 4 bedroom residential units having exotic interiors and striking exteriors. The residents will get a villa-like experience of living with lots and comfort and grandeur floating around.",
  ],
  amenities: [
    { name: "Club House", icon: "🏠", description: "Exclusive clubhouse facilities" },
    { name: "Meditation Centre", icon: "🧘", description: "Peaceful meditation spaces" },
    { name: "Sports Facility", icon: "⚽", description: "Multi-sport facilities" },
    { name: "Kids Play Area", icon: "🎮", description: "Safe children's zone" },
    { name: "Swimming Pool", icon: "🏊", description: "Community swimming pool" },
    { name: "Gymnasium", icon: "💪", description: "Modern gym facilities" },
    { name: "Parks", icon: "🌳", description: "Green recreational spaces" },
    { name: "Power Backup", icon: "⚡", description: "24/7 power backup" },
    { name: "24x7 Water Supply", icon: "💧", description: "Continuous water supply" },
    { name: "Covered Parking", icon: "🚗", description: "Secure covered parking" },
    { name: "Open Spaces", icon: "🌿", description: "Spacious open areas" },
    { name: "3 Tier Security", icon: "🛡️", description: "Multi-level security system" },
  ],
  gallery: [
    "/victory-valley-gallery-01.webp",
    "/victory-valley-gallery-02.webp",
    "/victory-valley-gallery-03.webp",
    "/victory-valley-gallery-04.webp",
    "/victory-valley-gallery-05.webp",
    "/victory-valley-gallery-06.webp",
  ],
  floorPlans: [
    "/Victory-valley-floor-plan-1435.webp",
    "/Victory-valley-floor-plan-2452.webp",
    "/Victory-valley-floor-plan-2847.webp",
    "/Victory-valley-floor-plan-3192.webp",
    "/Victory-valley-floor-plan-5970.webp",
  ],
  locationHighlights: {
    description:
      "Victory Valley offers a premium residential experience with innovative design features and world-class amenities. The development is strategically designed to maximize comfort, luxury, and modern living standards.",
    benefits: [
      "Possession Linked Payment Plan - Pay 25 % within 30 days, 20% in 12 months and balance on possession",
      "Subvention Payment Plan - Pay 20% now and balance in EMIs after possession",
      "VRV Airconditioning | Modular Kitchen with Chimney and hobb",
      "Sprawled over 25 Acres of Land",
      "High Rise and Mid Rise Towers",
      "7.4 Acres 8 Themed Central Valley",
      "3 - Side Open Villa like Apartments",
      "Rooftop Viewing Gallery-cum Party Area on the 51st Floor",
      "Intelligent Hot and Cold Air Conditioning",
    ],
    images: [
      "/Victory-valley-location.webp",
    ],
  },
  masterPlan: "/victory-valley-master-plan.webp",
  pricing: [
    {
      typology: "2 BHK + 2T",
      block: "Tower C",
      size: "1435",
      resalePrice: "₹ 8,200/- SQ.FT",
      freshBookings: "₹ 10,325/- SQ.FT"
    },
    {
      typology: "3 BHK + SQ",
      block: "Tower A, B",
      size: "2452",
      resalePrice: "₹ 7,800/- SQ.FT",
      freshBookings: "₹ 10,325/- SQ.FT"
    },
    {
      typology: "3 BHK + SQ",
      block: "Midrise Towers",
      size: "2527",
      resalePrice: "₹ 7,800/- SQ.FT",
      freshBookings: "₹ 10,175/- SQ.FT"
    },
    {
      typology: "4 BHK + SQ",
      block: "Midrise Towers",
      size: "2847",
      resalePrice: "₹ 7,800/- SQ.FT",
      freshBookings: "₹ 10,175/- SQ.FT"
    },
    {
      typology: "4 BHK + SQ",
      block: "Tower A, B",
      size: "3192",
      resalePrice: "₹ 7,800/- SQ.FT",
      freshBookings: "₹ 10,325/- SQ.FT"
    },
    {
      typology: "4 BHK + 2 SQ + ST",
      block: "Midrise Towers",
      size: "5970",
      resalePrice: "Call for Resale Price",
      freshBookings: "₹ 10,175/- SQ.FT"
    }
  ]
}

export default function VictoryValleyPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [expandedImage, setExpandedImage] = useState<string | null>(null)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectData.heroImages.length)
    }, 4000)
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
    setCurrentSlide((prev) => (prev + 1) % projectData.heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectData.heroImages.length) % projectData.heroImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl font-bold z-10"
            >
              ×
            </button>
            <img
              src={expandedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
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
              <a href="/">
                <img src="/logo.webp" alt="IREO Logo" className="h-12 w-auto" />
              </a>
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
        {projectData.heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${image})` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
              <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                <div className="max-w-5xl">
                  <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-semibold mb-6">
                    {projectData.quickFacts.status}
                  </Badge>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{projectData.name}</h1>
                  <p className="text-xl md:text-2xl mb-4 text-gray-200">{projectData.quickFacts.location}</p>
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="text-lg font-semibold">{projectData.quickFacts.rating}</span>
                    </div>
                    <div className="text-gray-300">•</div>
                    <div className="text-lg">{projectData.quickFacts.accommodation}</div>
                    <div className="text-gray-300">•</div>
                    <div className="text-lg">Possession: {projectData.quickFacts.possession}</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call for Price
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-4 text-lg"
                      onClick={() => setShowPopup(true)}
                    >
                      Schedule Site Visit
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
          {projectData.heroImages.map((_, index) => (
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

      {/* Quick Facts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Quick Facts</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 mx-auto mb-4 text-blue-300" />
                <h3 className="font-semibold mb-2">Property Type</h3>
                <p className="text-sm text-gray-300">{projectData.quickFacts.type}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-green-300" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-sm text-gray-300">{projectData.quickFacts.location}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-purple-300" />
                <h3 className="font-semibold mb-2">Area</h3>
                <p className="text-sm text-gray-300">{projectData.quickFacts.area}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="font-semibold mb-2">Price</h3>
                <p className="text-sm text-gray-300">{projectData.quickFacts.price}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 mx-auto mb-4 text-orange-300" />
                <h3 className="font-semibold mb-2">Accommodation</h3>
                <p className="text-sm text-gray-300">{projectData.quickFacts.accommodation}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-red-300" />
                <h3 className="font-semibold mb-2">Status</h3>
                <p className="text-sm text-gray-300">{projectData.quickFacts.status}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{projectData.name}</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
            {projectData.description.slice(0, showFullDescription ? projectData.description.length : 2).map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            {!showFullDescription && projectData.description.length > 2 && (
              <div className="text-center pt-4">
                <Button
                  onClick={() => setShowFullDescription(true)}
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
                >
                  See More
                </Button>
              </div>
            )}
            
            {showFullDescription && (
              <div className="text-center pt-4">
                <Button
                  onClick={() => setShowFullDescription(false)}
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
                >
                  See Less
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Integrated Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the convenience of having everything you need within your community.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projectData.amenities.map((amenity, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-white border-0 shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {amenity.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {amenity.name}
                  </h3>
                  <p className="text-sm text-gray-600">{amenity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">IREO Victory Valley Sector 67 Price</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our competitive pricing structure for different typologies.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-lg">Typology</th>
                  <th className="px-6 py-4 text-left font-bold text-lg">Block</th>
                  <th className="px-6 py-4 text-left font-bold text-lg">Size (SQ.FT)</th>
                  <th className="px-6 py-4 text-left font-bold text-lg">Resale Price</th>
                  <th className="px-6 py-4 text-left font-bold text-lg">Fresh Bookings</th>
                </tr>
              </thead>
              <tbody>
                {projectData.pricing.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-b border-gray-200 hover:bg-blue-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.typology}</td>
                    <td className="px-6 py-4 text-gray-700">{item.block}</td>
                    <td className="px-6 py-4 text-gray-700">{item.size}</td>
                    <td className="px-6 py-4 text-blue-600 font-semibold">{item.resalePrice}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">{item.freshBookings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {projectData.pricing.map((item, index) => (
              <Card key={index} className="bg-white border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Typology:</span>
                      <span className="text-blue-600 font-bold">{item.typology}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Block:</span>
                      <span className="text-gray-700">{item.block}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Size:</span>
                      <span className="text-gray-700">{item.size} SQ.FT</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Resale Price:</span>
                      <span className="text-blue-600 font-semibold">{item.resalePrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Fresh Bookings:</span>
                      <span className="text-green-600 font-semibold">{item.freshBookings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Floor Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore the thoughtfully designed floor plans that maximize space and functionality.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.floorPlans.map((image, index) => {
              const floorNames = ["1435 SQ.FT", "2452 SQ.FT", "2847 SQ.FT", "3192 SQ.FT", "5970 SQ.FT"];
              return (
                <div key={index} className="space-y-4">
                  <div
                    className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group bg-white p-4 cursor-pointer"
                    onClick={() => setExpandedImage(image)}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Floor Plan ${index + 1}`}
                      className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">{floorNames[index]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the luxurious living experience at Victory Valley.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectData.gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => setExpandedImage(image)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Prime Location</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">{projectData.locationHighlights.description}</p>

              <div className="grid grid-cols-1 gap-4">
                {projectData.locationHighlights.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group" onClick={() => setExpandedImage(projectData.locationHighlights.images[0])}>
              <img
                src={projectData.locationHighlights.images[0] || "/placeholder.svg"}
                alt="Victory Valley Location"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Master Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover the comprehensive master plan that showcases the strategic layout and development vision of Victory Valley.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group max-w-6xl" onClick={() => setExpandedImage(projectData.masterPlan)}>
              <img
                src={projectData.masterPlan || "/placeholder.svg"}
                alt="Victory Valley Master Plan"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience Luxury Living</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Discover the perfect blend of comfort and luxury at Victory Valley. Book your dream home today!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">RERA Approved</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              Ready To Move
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">Premium Location</Badge>
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
              onClick={() => setShowPopup(true)}
            >
              Schedule Site Visit
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Schedule Visit Popup */}
      {showPopup && (
        <ScheduleVisitPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  )
}