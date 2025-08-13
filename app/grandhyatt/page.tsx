"use client"
import { useState } from "react"

import { Phone, MapPin, Home, Users, Calendar, Star, CheckCircle, Award, Building, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { StructuredData } from "@/components/structured-data"
import ScheduleVisitPopup from "@/components/schedule-visit-popup"
import Footer from "@/components/footer"


const projectData = {
  name: "IREO Grand Hyatt Residences",
  slug: "grandhyatt",
  heroImages: [
    "/grandhyatt-gallery-01.jpg"
  ],
  quickFacts: {
    type: "Residential Apartments",
    location: "Sector 58, Gurgaon",
    area: "Call for Enquiry",
    price: "₹ Call for Price",
    accommodation: "Comming Soon",
    status: "Booking Open",
    possession: "December 2025",
    rating: 4.8,
  },
  description: [
    "The Grand Hyatt Gurgaon Residences, dramatic in scale and breathtaking in design, nestled within an exclusive lifestyle complex which promises you a transformative living experience.",
    "A perfect venue to celebrate life’s every occasion. Relax at a tranquil world-class resort spa, delight in cuisines from international restaurants or indulge in a shopping spree at the adjacent high street retail boulevard.",
    "Situated adjacent to a lush green park within the upcoming master-planned Ireo City in Gurgaon, the Grand Hyatt Gurgaon Residences represent a seamless and harmonious blend of art and science that inspire a new definition of “life well lived”.",
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
    "/grandhyatt-gallery-01.jpg",
    "/grandhyatt01.webp",
    "/grandhyatt02.webp",
    "/grandhyatt03.webp",
    "/grandhyatt04.webp",
    "/grandhyatt05.webp",
  ],
  locationHighlights: {
    description:
      "Sector 58, Gurgaon is one of the most sought-after residential destinations, offering excellent connectivity and premium lifestyle amenities. The location provides easy access to major business hubs, shopping centers, and entertainment destinations.",
    benefits: [
      "Intersection of Golf Course Extension Road",
      "84 meter wide sector road in Ireo City",
      "Centred in Grandview neighbourhood",
      "Epicentre of luxury in India",
      "Sweeping views of lush green park",
      "Nearby Aravali range views",
      "Effortless access to NH8",
      "Easy connectivity to South Delhi",
      "Direct access to IGI Airport",
    ],
    images: [
      "/location-map-grandhyatt.webp",
    ],
  },
}

export default function GrandHyattPage() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${projectData.heroImages[0]})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
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
                <div className="text-lg">Starting {projectData.quickFacts.price}</div>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About {projectData.name}</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">World-Class Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience luxury living with our comprehensive range of premium amenities designed for your comfort and convenience.
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

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Project Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Take a visual tour of our stunning residences and world-class amenities that define luxury living at Grand Hyatt.
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
                    alt={`Grand Hyatt Gallery ${index + 1}`}
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
                    {index === 0 && "Grand Hyatt Exterior"}
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

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Grand Hyatt?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-6 mx-auto">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
                <p className="text-gray-600">
                  Award-winning architecture and construction with attention to every detail, ensuring the highest standards of quality and craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-6 mx-auto">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hyatt Branded</h3>
                <p className="text-gray-600">
                  Experience the legendary Hyatt hospitality with personalized services, world-class amenities, and unmatched luxury standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full mb-6 mx-auto">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Living</h3>
                <p className="text-gray-600">
                  State-of-the-art smart home automation, 24/7 security, and concierge services for a truly modern living experience.
                </p>
              </CardContent>
            </Card>
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

            <div className="grid grid-cols-1 gap-6">
              {projectData.locationHighlights.images.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Location ${index + 1}`}
                    className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}
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