"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Home, Users, Calendar, Star, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import ScheduleVisitPopup from "@/components/schedule-visit-popup"

const projectData = {
  name: "IREO Uptown",
  slug: "uptown",
     heroImages: [
     "/skyon-gallery-01.webp",
     "/skyon-gallery-02.webp",
     "/skyon-gallery-03.webp",
     "/skyon-gallery-04.webp",
   ],
  quickFacts: {
    type: "Luxury Villas",
    location: "Sector 66, Gurgaon",
    area: "2400 – 8500 SQ.FT",
    price: "₹5.8 Cr - ₹18.5 Cr",
    accommodation: "4 & 5 BHK Villas",
    status: "Booking Open",
    possession: "March 2026",
    rating: 4.9,
  },
  description: [
    "Ireo Uptown, in Sector 66, Gurgaon, is spread across 10.96 acres with residential apartments devoted to your aspirations. Each apartment here is a pool of fresh ideas moulded into living spaces. When you step out of your home, you’ll feel its pulse - in recreational hubs, green expanses and high-tech facilities designed around you. Browse through this website and you'll agree. Much thought has gone into making your home.",
    
  ],
     amenities: [
     { name: "Club House", icon: "🏛️", description: "Exclusive community clubhouse" },
     { name: "Meditation Centre", icon: "🧘", description: "Peaceful meditation and wellness space" },
     { name: "Sports Facility", icon: "⚽", description: "Multi-sport facilities for residents" },
     { name: "Kids Play Area", icon: "🎮", description: "Dedicated children's play zone" },
     { name: "Swimming Pool", icon: "🏊", description: "Refreshing swimming pool" },
     { name: "Gymnasium", icon: "💪", description: "State-of-the-art fitness center" },
     { name: "Parks", icon: "🌳", description: "Beautiful landscaped parks" },
     { name: "Power Backup", icon: "⚡", description: "24/7 uninterrupted power supply" },
     { name: "24x7 Water Supply", icon: "💧", description: "Round-the-clock water availability" },
     { name: "Covered Parking", icon: "🚗", description: "Secure covered parking spaces" },
     { name: "Open Spaces", icon: "🌿", description: "Extensive open green spaces" },
     { name: "3 Tier Security", icon: "🛡️", description: "Multi-level security system" },
   ],
     gallery: [
     "/skyon-gallery-01.webp",
     "/skyon-gallery-02.webp",
     "/skyon-gallery-03.webp",
     "/skyon-gallery-04.webp",
     "/skyon-gallery-05.webp",
     "/skyon-gallery-06.webp",
   ],
  locationHighlights: {
    description:
      "Sector 66, Gurgaon is a premium residential area known for its upscale developments and excellent infrastructure. The location offers the perfect balance of urban connectivity and peaceful suburban living.",
    benefits: [
      "2 minutes to Golf Course Road",
      "5 minutes to major shopping centers",
      "10 minutes to business districts",
      "15 minutes to IGI Airport",
      "Premium schools nearby",
      "World-class healthcare facilities",
    ],
         images: [
       "/location-map-upptown.webp",
     ],
  },
}

export default function UptownPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
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
                <img src="/placeholder.svg?height=40&width=120&text=IREO+Logo" alt="IREO Projects" className="h-10" />
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

      {/* Pricing Table Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Pricing & Availability</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our range of luxury villas with transparent pricing and flexible payment options.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <div className="grid grid-cols-5 gap-4 p-6">
                  <div className="font-bold text-lg">Typology</div>
                  <div className="font-bold text-lg">Block</div>
                  <div className="font-bold text-lg">Size (SQ.FT)</div>
                  <div className="font-bold text-lg">Resale Price</div>
                  <div className="font-bold text-lg">Rental</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-5 gap-4 p-6 hover:bg-blue-50 transition-colors duration-200">
                  <div className="font-semibold text-gray-900">2 BHK + SQ</div>
                  <div className="text-gray-700">Apartments</div>
                  <div className="text-gray-700">1450</div>
                  <div className="text-blue-600 font-semibold">₹ 8,200/- SQ.FT</div>
                  <div className="text-blue-600 font-semibold">Coming Soon</div>
                </div>
                
                <div className="grid grid-cols-5 gap-4 p-6 hover:bg-blue-50 transition-colors duration-200">
                  <div className="font-semibold text-gray-900">3 BHK + SQ</div>
                  <div className="text-gray-700">Apartments</div>
                  <div className="text-gray-700">1670 – 1837</div>
                  <div className="text-blue-600 font-semibold">₹ 8,000/- SQ.FT</div>
                  <div className="text-blue-600 font-semibold">Coming Soon</div>
                </div>
                
                <div className="grid grid-cols-5 gap-4 p-6 hover:bg-blue-50 transition-colors duration-200">
                  <div className="font-semibold text-gray-900">4 BHK + SQ</div>
                  <div className="text-gray-700">Apartments</div>
                  <div className="text-gray-700">2027</div>
                  <div className="text-blue-600 font-semibold">₹ 8,000/- SQ.FT</div>
                  <div className="text-blue-600 font-semibold">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">2 BHK + SQ</h3>
                <p className="text-blue-600 font-semibold">Apartments</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Size (SQ.FT):</span>
                  <span className="font-semibold text-gray-900">1450</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Resale Price:</span>
                  <span className="text-blue-600 font-semibold">₹ 8,200/- SQ.FT</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Rental:</span>
                  <span className="text-blue-600 font-semibold">Coming Soon</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">3 BHK + SQ</h3>
                <p className="text-blue-600 font-semibold">Apartments</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Size (SQ.FT):</span>
                  <span className="font-semibold text-gray-900">1670 – 1837</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Resale Price:</span>
                  <span className="text-blue-600 font-semibold">₹ 8,000/- SQ.FT</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Rental:</span>
                  <span className="text-blue-600 font-semibold">Coming Soon</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">4 BHK + SQ</h3>
                <p className="text-blue-600 font-semibold">Apartments</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Size (SQ.FT):</span>
                  <span className="font-semibold text-gray-900">2027</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Resale Price:</span>
                  <span className="text-blue-600 font-semibold">₹ 8,000/- SQ.FT</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Rental:</span>
                  <span className="text-blue-600 font-semibold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg font-semibold">
              <Phone className="h-5 w-5 mr-2" />
              Get Detailed Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Luxury Villa Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the ultimate in luxury living with exclusive amenities designed for villa residents.
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

             {/* Image Gallery */}
       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Villa Gallery</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
               Discover the luxurious interiors and beautiful exteriors of our premium villas.
             </p>
             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
           </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projectData.gallery.map((image, index) => (
               <div
                 key={index}
                 className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
               >
                 <img
                   src={image || "/placeholder.svg"}
                   alt={`Gallery ${index + 1}`}
                   className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </div>
             ))}
           </div>
         </div>
       </section>

       {/* Floor Plan Section */}
       <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Floor Plans</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
               Explore our thoughtfully designed floor plans that maximize space utilization and create the perfect living environment for your family.
             </p>
             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
               <div className="aspect-[4/3] relative">
                 <img
                   src="/uptown-floor-plan-01.webp"
                   alt="Uptown Floor Plan 1"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                     <svg
                       className="w-6 h-6 text-white"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                       />
                     </svg>
                   </div>
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                 <h3 className="text-white font-semibold text-sm">Villa Floor Plan 1</h3>
               </div>
             </div>

             <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
               <div className="aspect-[4/3] relative">
                 <img
                   src="/uptown-floor-plan-02.webp"
                   alt="Uptown Floor Plan 2"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                     <svg
                       className="w-6 h-6 text-white"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                       />
                     </svg>
                   </div>
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                 <h3 className="text-white font-semibold text-sm">Villa Floor Plan 2</h3>
               </div>
             </div>

             <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
               <div className="aspect-[4/3] relative">
                 <img
                   src="/uptown-floor-plan-03.webp"
                   alt="Uptown Floor Plan 3"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                     <svg
                       className="w-6 h-6 text-white"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                       />
                     </svg>
                   </div>
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                 <h3 className="text-white font-semibold text-sm">Villa Floor Plan 3</h3>
               </div>
             </div>

             <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
               <div className="aspect-[4/3] relative">
                 <img
                   src="/uptown-floor-plan-04.webp"
                   alt="Uptown Floor Plan 4"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                     <svg
                       className="w-6 h-6 text-white"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                       />
                     </svg>
                   </div>
                 </div>
               </div>
               <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                 <h3 className="text-white font-semibold text-sm">Villa Floor Plan 4</h3>
               </div>
             </div>
           </div>

                       {/* Floor Plan CTA */}
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  // Create a link to download the floor plans
                  const link = document.createElement('a');
                  link.href = '/uptown-floor-plan-01.webp';
                  link.download = 'Uptown-Floor-Plans.zip';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Floor Plans
              </Button>
            </div>
         </div>
       </section>

       {/* Location Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
         <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Premium Location</h2>
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

             <div className="relative overflow-hidden rounded-2xl shadow-xl">
               <img
                 src={projectData.locationHighlights.images[0]}
                 alt="Uptown Location Map"
                 className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
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
               Discover the comprehensive master plan of IREO Uptown, showcasing the strategic layout and world-class infrastructure that makes Uptown the perfect place to call home.
             </p>
             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Premium Villa Community</h3>
               <div className="space-y-4 text-gray-700">
                 <div className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                   <p>Strategic location in Sector 66 with excellent connectivity to major business hubs</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                   <p>Exclusive gated community with only 180 carefully planned luxury villas</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                   <p>Extensive open spaces and landscaped gardens throughout the development</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                   <p>World-class amenities and infrastructure designed for luxury living</p>
                 </div>
                 <div className="flex items-start space-x-3">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                   <p>Seamless connectivity to major business hubs and lifestyle destinations</p>
                 </div>
               </div>
             </div>

             <div className="relative">
               <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                 <img
                   src="/uptown-master-plan.webp"
                   alt="Uptown Master Plan"
                   className="w-full h-auto object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                     <svg
                       className="w-8 h-8 text-white"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                     >
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                       />
                     </svg>
                   </div>
                 </div>
               </div>
             </div>
           </div>

                       {/* Master Plan CTA */}
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  // Open master plan in a new tab
                  window.open('/uptown-master-plan.webp', '_blank');
                }}
              >
                View Full Master Plan
              </Button>
            </div>
         </div>
       </section>

       {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Own Your Dream Villa Today</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Limited villas available in this exclusive community. Book your villa now!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">RERA Approved</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">Luxury Villas</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">Gated Community</Badge>
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
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="/placeholder.svg?height=50&width=150&text=IREO+Logo"
                alt="IREO Projects"
                className="h-12 mx-auto mb-6"
              />
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Creating world-class residential and commercial spaces that redefine modern living in Gurgaon.
              </p>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400">© 2025. All Rights Reserved. | IREO Projects | 9811750130</p>
            </div>
          </div>
        </div>
      </footer>

      {showPopup && (
        <ScheduleVisitPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  )
}
