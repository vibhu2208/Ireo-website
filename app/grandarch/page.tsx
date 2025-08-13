import { MapPin, Home, Users, Calendar, Star, CheckCircle, Award, Building, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { StructuredData } from "@/components/structured-data"
import ScheduleVisitCTA from "@/components/schedule-visit-cta"

export const dynamic = "force-static"

const projectData = {
  name: "IREO The Grand Arch",
  slug: "grandarch",
  heroImages: [
    "/grandarch-gallery-01.webp",
    "/placeholder.svg?height=600&width=1000&text=Grand+Arch+Lobby",
    "/placeholder.svg?height=600&width=1000&text=Grand+Arch+Amenities",
    "/placeholder.svg?height=600&width=1000&text=Grand+Arch+Interior",
  ],
  quickFacts: {
    type: "Residential Apartments",
    location: "Sector 58, Gurgaon",
    area: "1375 - 2864 SQ.FT",
    price: "₹Call for Price",
    accommodation: "2,3 & 4 BHK",
    status: "Ready to Move",
    possession: "Ready",
    rating: 4.7,
  },
  description: [
    "IREO Grand Arch, is part of a 700+ acre township called the IREO City, located at the Golf Course Road Extension on 60 meter wide sector road, in Sector-58. The construction is being done by L&T and follow the Shear Wall Construction concept. The Shear Wall Construction method ensures a completely brick less structure, and hence delivering a quality finish and a seepage free product for the lifetime. A lot of thought has gone into planning The Grand Arch. Unlike most developments, The Grand Arch has a very Multi-dimensional feel to it, as the towers are well placed, and of different heights (4 Towers of G+7, 4 Towers of G+29 and 1 Tower of G+22). Also, there are plenty of open spaces & landscaped gardens, giving each resident a sense of space & freedom."
  ],
  amenities: [
    { name: "Club House", icon: "🏛️", description: "Exclusive residents' club with premium facilities", category: "social" },
    { name: "Meditation Centre", icon: "🧘", description: "Peaceful meditation and wellness center", category: "wellness" },
    { name: "Sports Facility", icon: "⚽", description: "Multi-sport facilities for active living", category: "fitness" },
    { name: "Kids Play Area", icon: "🎮", description: "Safe and fun play zone for children", category: "family" },
    { name: "Swimming Pool", icon: "🏊", description: "Olympic-size infinity pool", category: "leisure" },
    { name: "Gymnasium", icon: "💪", description: "Fully equipped modern fitness center", category: "fitness" },
    { name: "Parks", icon: "🌳", description: "Beautiful landscaped green spaces", category: "outdoor" },
    { name: "Power Backup", icon: "⚡", description: "24/7 uninterrupted power supply", category: "utility" },
    { name: "24x7 Water Supply", icon: "💧", description: "Round-the-clock water availability", category: "utility" },
    { name: "Covered Parking", icon: "🚗", description: "Secure covered parking spaces", category: "parking" },
    { name: "Open Spaces", icon: "🌿", description: "Spacious open areas for recreation", category: "outdoor" },
    { name: "3 Tier Security", icon: "🛡️", description: "Multi-level security system", category: "security" },
  ],
  gallery: [
    "/grandarch-gallery-01.webp",
    "/grandarch-gallery-02.webp",
    "/grandarch-gallery-03.webp",
    "/grandarch-gallery-04.webp",
    "/grandarch-gallery-05.webp",
    "/grandarch-gallery-06.webp",
  ],
  locationHighlights: {
    description:
      "Sector 58, Gurgaon offers the perfect blend of urban convenience and peaceful living. The location provides seamless connectivity to major business hubs while maintaining a serene residential environment.",
    benefits: [
      "3 minutes to Sohna Road",
      "8 minutes to Golf Course Road",
      "12 minutes to Cyber Hub",
      "20 minutes to IGI Airport",
      "Close to reputed schools",
      "Near healthcare facilities",
    ],
    images: [
      "/location-map-grandarch.webp",
    ],
  },
}

export default function GrandArchPage() {

  return (
    <>
      <StructuredData 
        data={{
          name: projectData.name,
          description: projectData.description[0],
          image: projectData.heroImages[0],
          price: projectData.quickFacts.price,
          area: projectData.quickFacts.area,
          location: projectData.quickFacts.location,
          type: projectData.quickFacts.type,
          status: projectData.quickFacts.status,
          url: "https://ireo-projects.vercel.app/grandarch"
        }}
        type="Apartment"
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${projectData.heroImages[0]})` }}>
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative h-full flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{projectData.name}</h1>
                <p className="text-xl md:text-2xl mb-6">{projectData.quickFacts.location}</p>
                <p className="text-lg md:text-xl mb-8">{projectData.quickFacts.type}</p>
                <ScheduleVisitCTA
                  callButtonClassName="bg-blue-600 hover:bg-blue-700"
                  scheduleButtonClassName="border-white text-white hover:bg-white hover:text-gray-900"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=Pattern')] opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Highlights</h2>
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
                  <Building className="h-12 w-12 mx-auto mb-4 text-orange-300" />
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

        {/* Description Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">About {projectData.name}</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {projectData.description.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
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
                Explore our range of premium residences designed for modern living with flexible payment options.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <div className="grid grid-cols-5 gap-4 p-6">
                    <div className="font-bold text-lg">Typology</div>
                    <div className="font-bold text-lg">Type</div>
                    <div className="font-bold text-lg">Unit Size</div>
                    <div className="font-bold text-lg">Price (Per SQ.FT)</div>
                    <div className="font-bold text-lg">Rental</div>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-200">
                  <div className="grid grid-cols-5 gap-4 p-6 hover:bg-blue-50 transition-colors duration-200">
                    <div className="font-semibold text-gray-900">2 BHK + 2T</div>
                    <div className="text-gray-700">Apartments</div>
                    <div className="text-gray-700">1375 SQ.FT</div>
                    <div className="text-blue-600 font-semibold">Call for Price</div>
                    <div className="text-blue-600 font-semibold">Call for Rental</div>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-4 p-6 hover:bg-blue-50 transition-colors duration-200">
                    <div className="font-semibold text-gray-900">2 BHK + 2T + SQ</div>
                    <div className="text-gray-700">Duplex</div>
                    <div className="text-gray-700">1632 SQ.FT</div>
                    <div className="text-blue-600 font-semibold">Call for Price</div>
                    <div className="text-blue-600 font-semibold">Call for Rental</div>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-4 p-6 hover:bg-blue-50 transition-colors duration-200">
                    <div className="font-semibold text-gray-900">3 BHK + SQ</div>
                    <div className="text-gray-700">Apartments</div>
                    <div className="text-gray-700">2156 - 2896 SQ.FT</div>
                    <div className="text-blue-600 font-semibold">Call for Price</div>
                    <div className="text-blue-600 font-semibold">Call for Rental</div>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-4 p-6 hover:bg-blue-50 transition-colors duration-200">
                    <div className="font-semibold text-gray-900">4 BHK + SQ</div>
                    <div className="text-gray-700">Apartments</div>
                    <div className="text-gray-700">2857 - 2864 SQ.FT</div>
                    <div className="text-blue-600 font-semibold">Call for Price</div>
                    <div className="text-blue-600 font-semibold">Call for Rental</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">2 BHK + 2T</h3>
                  <p className="text-blue-600 font-semibold">Apartments</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Unit Size:</span>
                    <span className="font-semibold text-gray-900">1375 SQ.FT</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Price (Per SQ.FT):</span>
                    <span className="text-blue-600 font-semibold">Call for Price</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Rental:</span>
                    <span className="text-blue-600 font-semibold">Call for Rental</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900">2 BHK + 2T + SQ</h3>
                  <p className="text-blue-600 font-semibold">Duplex</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Unit Size:</span>
                    <span className="font-semibold text-gray-900">1632 SQ.FT</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Price (Per SQ.FT):</span>
                    <span className="text-blue-600 font-semibold">Call for Price</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Rental:</span>
                    <span className="text-blue-600 font-semibold">Call for Rental</span>
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
                    <span className="text-gray-600">Unit Size:</span>
                    <span className="font-semibold text-gray-900">2156 - 2896 SQ.FT</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Price (Per SQ.FT):</span>
                    <span className="text-blue-600 font-semibold">Call for Price</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Rental:</span>
                    <span className="text-blue-600 font-semibold">Call for Rental</span>
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
                    <span className="text-gray-600">Unit Size:</span>
                    <span className="font-semibold text-gray-900">2857 - 2864 SQ.FT</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Price (Per SQ.FT):</span>
                    <span className="text-blue-600 font-semibold">Call for Price</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Rental:</span>
                    <span className="text-blue-600 font-semibold">Call for Rental</span>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">World-Class Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectData.amenities.map((amenity, index) => (
                <Card key={index} className="p-6">
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{amenity.icon}</span>
                      <h3 className="text-lg font-semibold">{amenity.name}</h3>
                    </div>
                    <p className="text-gray-600">{amenity.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Project Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Take a visual tour of our stunning residences and world-class amenities that define luxury living at Grand Arch.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectData.gallery.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={image}
                      alt={`Grand Arch Gallery ${index + 1}`}
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
                    <h3 className="text-white font-semibold text-sm">
                      {index === 0 && "Grand Arch Exterior"}
                      {index === 1 && "Luxury Living Space"}
                      {index === 2 && "Modern Interior Design"}
                      {index === 3 && "Premium Amenities"}
                      {index === 4 && "Elegant Architecture"}
                      {index === 5 && "World-Class Facilities"}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Gallery Navigation */}
            <div className="mt-12 text-center">
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  View All Photos
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white transition-colors duration-300"
                >
                  Virtual Tour
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors duration-300"
                >
                  Floor Plans
                </Button>
              </div>
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
                    src="/grandarch-floorplan-01.webp"
                    alt="Grand Arch Floor Plan 1"
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
                  <h3 className="text-white font-semibold text-sm">2 BHK + 2T Floor Plan</h3>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/grandarch-floor-plan-02.webp"
                    alt="Grand Arch Floor Plan 2"
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
                  <h3 className="text-white font-semibold text-sm">2 BHK + 2T + SQ Floor Plan</h3>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/grandarch-floor-plan-03.webp"
                    alt="Grand Arch Floor Plan 3"
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
                  <h3 className="text-white font-semibold text-sm">3 BHK + SQ Floor Plan</h3>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="aspect-[4/3] relative">
                  <img
                    src="/grandarch-floor-plan-04.webp"
                    alt="Grand Arch Floor Plan 4"
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
                  <h3 className="text-white font-semibold text-sm">4 BHK + SQ Floor Plan</h3>
                </div>
              </div>
            </div>

            {/* Floor Plan CTA */}
            <div className="text-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg font-semibold">
                Download Floor Plans
              </Button>
            </div>
          </div>
        </section>

        {/* Location Highlights */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Prime Location</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {projectData.locationHighlights.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectData.locationHighlights.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {projectData.locationHighlights.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Location highlight ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
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
                Discover the comprehensive master plan of IREO City, showcasing the strategic layout and world-class infrastructure that makes Grand Arch the perfect place to call home.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">700+ Acre Integrated Township</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Strategic location at Golf Course Road Extension with 60-meter wide sector road</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Multi-dimensional tower layout with varying heights for optimal views and privacy</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Extensive open spaces and landscaped gardens throughout the development</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>World-class amenities and infrastructure designed for modern living</p>
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
                    src="/grandarch-master-plan.webp"
                    alt="Grand Arch Master Plan"
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
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-8 py-4 text-lg font-semibold">
                View Full Master Plan
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Luxury Living?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Contact our expert team to schedule a site visit and explore your dream home at {projectData.name}.
            </p>
            <ScheduleVisitCTA />
          </div>
        </section>
      </main>
    </>
  )
}
