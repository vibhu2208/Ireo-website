"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Home, Users, Calendar, Star, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import ScheduleVisitPopup from "@/components/schedule-visit-popup"
import Footer from "@/components/footer"

const projectData = {
  name: "IREO Skyon",
  slug: "skyon",
  heroImages: [
    "/skyon-gallery-01.webp"
  ],
  quickFacts: {
    type: "Sky Residences",
    location: "Sector 60, Gurgaon",
    area: "1580 – 3200 SQ.FT",
    price: "₹2.8 Cr - ₹6.2 Cr",
    accommodation: "2, 3 & 4 BHK",
    status: "Pre-Launch",
    possession: "June 2026",
    rating: 4.6,
  },
  description: [
    "IREO Skyon redefines high-rise living with its innovative sky residences that offer breathtaking views and modern amenities. This architectural marvel features contemporary design elements and premium finishes throughout.",
    "Located in the heart of Sector 60, Skyon provides excellent connectivity to major business districts and entertainment hubs. Each residence is designed to maximize natural light and ventilation while offering panoramic city views.",
    "The development features state-of-the-art amenities including a sky lounge, infinity pool, fitness center, and landscaped terraces. With its pre-launch status, early investors can benefit from attractive pricing and payment plans.",
  ],
  amenities: [
    { name: "Club House", icon: "🏠", description: "Exclusive club house for residents" },
    { name: "Meditation Centre", icon: "🧘", description: "Peaceful meditation and wellness center" },
    { name: "Sports Facility", icon: "⚽", description: "Multi-sport facilities for active living" },
    { name: "Kids Play Area", icon: "🎮", description: "Safe and fun children's play zone" },
    { name: "Swimming Pool", icon: "🏊", description: "Refreshing swimming pool" },
    { name: "Gymnasium", icon: "💪", description: "State-of-the-art fitness center" },
    { name: "Parks", icon: "🌳", description: "Beautiful landscaped parks" },
    { name: "Power Backup", icon: "⚡", description: "100% power backup facility" },
    { name: "24x7 Water Supply", icon: "💧", description: "Round-the-clock water supply" },
    { name: "Covered Parking", icon: "🚗", description: "Secure covered parking spaces" },
    { name: "Open Spaces", icon: "🌿", description: "Spacious open areas for recreation" },
    { name: "3 Tier Security", icon: "🛡️", description: "Advanced three-tier security system" },
  ],
  gallery: [
    "/skyon-gallery-01.webp",
    "/skyon-gallery-02.webp",
    "/skyon-gallery-03.webp",
    "/skyon-gallery-04.webp",
    "/skyon-gallery-05.webp",
    "/skyon-gallery-06.webp",
  ],
  floorPlans: [
    "/skyon-floor-plan-01.webp",
    "/skyon-floor-plan-02.webp",
    "/skyon-floor-plan-03.webp",
    "/skyon-floor-plan-4.webp",
  ],
  pricing: [
    {
      typology: "2 BHK",
      block: "A, F",
      size: "1365",
      resalePrice: "₹ 9,000/- SQ.FT",
      freshBooking: "₹ 12,750/- SQ.FT"
    },
    {
      typology: "2 BHK + SQ",
      block: "A, C, F",
      size: "1524",
      resalePrice: "₹ 9,000/- SQ.FT",
      freshBooking: "₹ 12,750/- SQ.FT"
    },
    {
      typology: "3 BHK + SQ",
      block: "A, C, D, E, F",
      size: "2045",
      resalePrice: "₹ 9,000/- SQ.FT",
      freshBooking: "₹ 12,750/- SQ.FT"
    },
    {
      typology: "4 BHK + SQ",
      block: "B",
      size: "2768",
      resalePrice: "₹ 9,500/- SQ.FT",
      freshBooking: "₹ 13,800/- SQ.FT"
    },
    {
      typology: "4 BHK + SQ",
      block: "B",
      size: "2791",
      resalePrice: "₹ 9,500/- SQ.FT",
      freshBooking: "₹ 13,800/- SQ.FT"
    }
  ],
  locationHighlights: {
    description:
      "IREO Skyon is located within the 600 acre IREO City, offering a unique concept of low rise within high rise living. The project is based on home console automation and features space age homes with fully automated smart home systems.",
    benefits: [
      "30 Min Drive From IGI Airport",
      "VRV Airconditioning",
      "Modular Kitchen with Chimney and Hob",
      "Fully Automated Smart Home Systems",
      "Located within 600 acre IREO City",
      "Low Rise within High Rise Concept",
    ],
    images: [
      "/location-skyon.webp",
    ],
  },
  masterPlan: "/master-plan-skyon.webp",
}

export default function SkyonPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const [expandedImage, setExpandedImage] = useState<string | null>(null)

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
                <img src="/logo.webp" alt="IREO Projects" className="h-10" />
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
            {projectData.description.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sky-High Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience elevated living with our premium amenities designed for modern lifestyles.
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

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {projectData.floorPlans.map((image, index) => {
               const sizes = ["1524", "2045", "2768", "2791"];
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
                     <p className="text-lg font-semibold text-gray-900">{sizes[index]} sq ft. (Avg.)</p>
                   </div>
                 </div>
               );
             })}
           </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pricing & Availability</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our competitive pricing structure for different typologies and blocks.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl shadow-xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-lg">Typology</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Block</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Size (SQ.FT)</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Resale Price</th>
                    <th className="px-6 py-4 text-left font-bold text-lg">Fresh Booking</th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.pricing.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-100 transition-all duration-300 hover:bg-blue-50 hover:shadow-md ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">{item.typology}</td>
                      <td className="px-6 py-4 text-gray-700">{item.block}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{item.size}</td>
                      <td className="px-6 py-4 text-gray-700">{item.resalePrice}</td>
                      <td className="px-6 py-4 text-blue-600 font-bold">{item.freshBooking}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-4">
            {projectData.pricing.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border border-gray-200"
              >
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{item.typology}</h3>
                      <p className="text-gray-600 text-sm">Block: {item.block}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">Size: {item.size} SQ.FT</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-500 text-sm">Resale Price</p>
                        <p className="font-medium text-gray-900">{item.resalePrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-blue-600 text-sm font-semibold">Fresh Booking</p>
                        <p className="text-blue-600 font-bold text-lg">{item.freshBooking}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

                     <div className="mt-8 text-center">
             <p className="text-gray-600 text-sm">
               *Prices are subject to change. Contact us for the latest pricing and availability.
             </p>
           </div>
         </div>
       </section>

       {/* Payment Plans Section */}
       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Flexible Payment Plans</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
               Choose from our convenient payment options designed to make your dream home affordable.
             </p>
             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
             {/* Possession Linked Payment Plan */}
             <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
               <CardContent className="p-8">
                 <div className="text-center mb-6">
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Possession Linked Payment Plan</h3>
                   <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                 </div>
                 <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                     <span className="font-semibold text-gray-900">Initial Payment</span>
                     <span className="text-blue-600 font-bold">35%</span>
                   </div>
                   <div className="text-sm text-gray-600 text-center">within 30 days</div>
                   
                   <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                     <span className="font-semibold text-gray-900">Construction Payment</span>
                     <span className="text-green-600 font-bold">20%</span>
                   </div>
                   <div className="text-sm text-gray-600 text-center">in 18 months</div>
                   
                   <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                     <span className="font-semibold text-gray-900">Balance Payment</span>
                     <span className="text-purple-600 font-bold">45%</span>
                   </div>
                   <div className="text-sm text-gray-600 text-center">on possession</div>
                 </div>
               </CardContent>
             </Card>

             {/* Subvention Payment Plan */}
             <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
               <CardContent className="p-8">
                 <div className="text-center mb-6">
                   <h3 className="text-2xl font-bold text-gray-900 mb-2">Subvention Payment Plan</h3>
                   <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
                 </div>
                 <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                     <span className="font-semibold text-gray-900">Initial Payment</span>
                     <span className="text-blue-600 font-bold">25%</span>
                   </div>
                   <div className="text-sm text-gray-600 text-center">now</div>
                   
                   <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                     <span className="font-semibold text-gray-900">Possession Payment</span>
                     <span className="text-green-600 font-bold">5%</span>
                   </div>
                   <div className="text-sm text-gray-600 text-center">on possession</div>
                   
                   <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                     <span className="font-semibold text-gray-900">Balance Payment</span>
                     <span className="text-purple-600 font-bold">70%</span>
                   </div>
                   <div className="text-sm text-gray-600 text-center">in EMIs after possession</div>
                 </div>
               </CardContent>
             </Card>
           </div>

           <div className="mt-12 text-center">
             <p className="text-gray-600 text-sm">
               *Terms and conditions apply. Contact our sales team for detailed payment plan information.
             </p>
           </div>
         </div>
       </section>

      {/* Image Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Get a glimpse of the stunning architecture and premium interiors of Skyon.
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
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Connected Location</h2>
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
                 alt="Skyon Location"
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
               Discover the comprehensive master plan that showcases the strategic layout and development vision of Skyon.
             </p>
             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
           </div>

           <div className="flex justify-center">
             <div className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group max-w-6xl" onClick={() => setExpandedImage(projectData.masterPlan)}>
               <img
                 src={projectData.masterPlan || "/placeholder.svg"}
                 alt="Skyon Master Plan"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pre-Launch Opportunity</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Be among the first to secure your sky residence at special pre-launch prices.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">RERA Approved</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              Pre-Launch Offer
            </Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">Sky Residences</Badge>
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

      {/* Footer */}
      <Footer />

      {showPopup && (
        <ScheduleVisitPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  )
}
