"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Home, Users, Calendar, Star, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"
import ScheduleVisitPopup from "@/components/schedule-visit-popup"

const projectData = {
  name: "IREO Gurgaon Hills",
  slug: "gurgaonhills",
  heroImages: [
    "/gurgaonhills-gallery-01.webp"
  ],
  quickFacts: {
    type: "Residential Apartments",
    location: "Gwal Pahari, Gurgaon",
    area: "4787 - 10901 SQ.FT",
    price: "₹ 6.20 Cr Onwards",
    accommodation: "3, 4 & 5 BHK",
    status: "Under Construction",
    possession: "Under Construction",
    rating: 4.8,
  },
  description: [
    "IREO Gurgaon Hills which is set among tranquil environ is a perfectly executed residential project. The project is spread over 11 acres of lush greens. Resort like entrance to ritzy interiors, everything here mesmerize home seekers and visitors. This has Aravalli Range at one end and Delhe ridge at another end.",
    "Nestled in the lush green forests on Gurgaon-Faridabad Road, Ireo Gurgaon Hills is not even a kilometer from Delhi and just 5 minutes from Gurgaon's famous Golf Course Road. These exclusive premium residences are flanked by the protected Aravalli forests on one side, and the magnificent Delhi Ridge on the other, creating a haven that stands in harmony with the chirping birds and evergreen trees. Spacious, low density apartment layouts further accentuate its idyllic, old-world charm. Come, experience the perfect union of nature and architecture at Ireo Gurgaon Hills.",
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
    "/gurgaonhills-gallery-01.webp",
    "/gurgaonhills-gallery-02.webp",
    "/gurgaonhills-gallery-03.webp",
    "/gurgaonhills-gallery-04.webp",
    "/gurgaonhills-gallery-05.webp",
    "/gurgaonhills-gallery-06.webp",
  ],
  floorPlans: [
    "/gurgaonhills-floor-plan-4787.webp",
    "/gurgaonhills-floor-plan-6388.webp",
    "/gurgaonhills-floor-plan-10901.webp",
  ],
  locationHighlights: {
    description:
      "IREO Gurgaon Hills offers a premium residential experience with innovative design features and world-class amenities. The development is strategically designed to maximize comfort, luxury, and modern living standards.",
    benefits: [
      "Located on Gurgaon-Faridabad Road",
      "15-20 minutes away from IGI Airport",
      "5 minutes driving distance to Gurgaon's prime golf course road",
      "In close proximity to the bright lights of both Gurgaon and South Delhi",
      "Within easy reach of other prime areas of the city",
      "PLP Payment Plan - pay 35% within 30 days and 60% on offer to commence interior work and 5% on possession",
      "Subvention Plan - pay 20% now and 5% on possession, balance in EMI after possession",
      "Floor to Floor height of 12 feet providing maximum flexibility for ceiling design and service run",
      "surrounded by the non buildable Delhi ridge on one side and protected Aravali forest on the other",
    ],
    images: [
      "/gurgaonhills-location-map.webp",
    ],
  },
  masterPlan: "/gurgaonhills-master-plan.webp",
  pricing: [
    {
      typology: "3 BHK + SQ + ST",
      type: "Apartments",
      size: "4787",
      price: "₹ 11,900/- SQ.FT",
      block: "A, B, C, D"
    },
    {
      typology: "4 BHK + SQ + ST",
      type: "Apartments",
      size: "6388",
      price: "₹ 11,900/- SQ.FT",
      block: "A, B, C, D"
    },
    {
      typology: "5 BHK + SQ + ST",
      type: "Duplex",
      size: "10901",
      price: "₹ 11,900/- SQ.FT",
      block: "A, B, C, D"
    }
  ]
}

    export default function GurgaonHillsPage() {
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
                <MapPin className="h-12 w-12 mx-auto mb-4 text-blue-300" />
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
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">IREO Gurgaon Hills Gwal Pahari Price</h2>
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
                   <th className="px-6 py-4 text-left font-bold text-lg">Type</th>
                   <th className="px-6 py-4 text-left font-bold text-lg">Size (SQ.FT)</th>
                   <th className="px-6 py-4 text-left font-bold text-lg">Price (Per SQ.FT)</th>
                   <th className="px-6 py-4 text-left font-bold text-lg">Block</th>
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
                     <td className="px-6 py-4 text-gray-700">{item.type}</td>
                     <td className="px-6 py-4 text-gray-700">{item.size}</td>
                     <td className="px-6 py-4 text-blue-600 font-semibold">{item.price}</td>
                     <td className="px-6 py-4 text-gray-700">{item.block}</td>
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
                       <span className="font-semibold text-gray-900">Type:</span>
                       <span className="text-gray-700">{item.type}</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="font-semibold text-gray-900">Size:</span>
                       <span className="text-gray-700">{item.size} SQ.FT</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="font-semibold text-gray-900">Price:</span>
                       <span className="text-blue-600 font-semibold">{item.price}</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="font-semibold text-gray-900">Block:</span>
                       <span className="text-gray-700">{item.block}</span>
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
               const floorSizes = ["4787 SQ.FT", "6388 SQ.FT", "10901 SQ.FT"];
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
                     <p className="text-lg font-semibold text-gray-900">{floorSizes[index]}</p>
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
               Discover the luxurious living experience at Gurgaon Hills.
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
                 alt="Gurgaon Hills Location"
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
               Discover the comprehensive master plan that showcases the strategic layout and development vision of Gurgaon Hills.
             </p>
             <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
           </div>

           <div className="flex justify-center">
             <div className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group max-w-6xl" onClick={() => setExpandedImage(projectData.masterPlan)}>
               <img
                 src={projectData.masterPlan || "/placeholder.svg"}
                 alt="Gurgaon Hills Master Plan"
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
             Discover the perfect blend of comfort and luxury at Gurgaon Hills. Book your dream home today!
           </p>

           <div className="flex flex-wrap justify-center gap-4 mb-12">
             <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">RERA Approved</Badge>
             <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
               Under Construction
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

      {/* Popup Form */}
      {showPopup && (
        <ScheduleVisitPopup
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
        />
      )}

      <Footer />
    </div>
  )
}
