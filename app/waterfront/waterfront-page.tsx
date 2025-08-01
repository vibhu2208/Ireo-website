"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Home, Users, Calendar, Star, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import BreadcrumbNav from "@/components/breadcrumb-nav"
import ProjectLinks from "@/components/project-links"
import Image from "next/image"
import Link from "next/link"

const projectData = {
  name: "IREO Waterfront",
  slug: "waterfront",
  heroImages: [
    {
      src: "/projects/waterfront/hero-lake-view.jpg",
      alt: "IREO Waterfront luxury residences with stunning lake views in Sector 58 Gurgaon",
    },
    {
      src: "/projects/waterfront/hero-residences.jpg",
      alt: "Premium waterfront apartments at IREO Waterfront with modern architecture",
    },
    {
      src: "/projects/waterfront/hero-amenities.jpg",
      alt: "World-class amenities including yacht club and infinity pool at IREO Waterfront",
    },
    {
      src: "/projects/waterfront/hero-interior.jpg",
      alt: "Luxury interiors and spacious layouts at IREO Waterfront residences",
    },
  ],
  quickFacts: {
    type: "Waterfront Residences",
    location: "Sector 58, Gurgaon",
    area: "1750 – 5200 SQ.FT",
    price: "₹4.2 Cr - ₹12.8 Cr",
    accommodation: "3, 4 & 5 BHK",
    status: "Ready to Move",
    possession: "Ready",
    rating: 4.7,
  },
  description: [
    "IREO Waterfront offers a unique living experience with stunning water views and premium amenities. These ready-to-move-in residences are designed for those who appreciate the tranquility of waterfront living combined with urban convenience.",
    "Located in the prestigious Sector 58, Waterfront provides excellent connectivity while offering a serene environment. Each residence features panoramic water views, premium finishes, and spacious layouts that maximize natural light and ventilation.",
    "The development boasts exclusive amenities including a waterfront promenade, yacht club, swimming pool, and landscaped gardens. With immediate possession available, residents can enjoy luxury waterfront living right away.",
  ],
  amenities: [
    { name: "Waterfront Promenade", icon: "🌊", description: "Beautiful waterfront walkway with scenic views" },
    { name: "Yacht Club", icon: "⛵", description: "Exclusive yacht club facilities for residents" },
    { name: "Swimming Pool", icon: "🏊", description: "Infinity pool with stunning water views" },
    { name: "Fitness Center", icon: "💪", description: "State-of-the-art gymnasium with modern equipment" },
    { name: "Spa & Wellness", icon: "🧘", description: "Luxury spa and wellness center" },
    { name: "Kids Play Area", icon: "🎮", description: "Safe waterfront children's play zone" },
    { name: "24/7 Security", icon: "🛡️", description: "Premium security systems and personnel" },
    { name: "Concierge", icon: "🎩", description: "Personal concierge services for residents" },
    { name: "Landscaped Gardens", icon: "🌳", description: "Beautiful water-themed gardens and green spaces" },
    { name: "Business Center", icon: "💼", description: "Modern business facilities and meeting rooms" },
    { name: "Banquet Hall", icon: "🎉", description: "Elegant waterfront event and celebration spaces" },
    { name: "Valet Parking", icon: "🚗", description: "Premium valet parking services" },
  ],
  gallery: [
    {
      src: "/projects/waterfront/gallery/living-room.jpg",
      alt: "Spacious living room with panoramic water views at IREO Waterfront",
    },
    {
      src: "/projects/waterfront/gallery/balcony-view.jpg",
      alt: "Private balcony overlooking the waterfront at IREO Waterfront residences",
    },
    {
      src: "/projects/waterfront/gallery/master-suite.jpg",
      alt: "Luxurious master bedroom suite with water views at IREO Waterfront",
    },
    {
      src: "/projects/waterfront/gallery/kitchen.jpg",
      alt: "Modern modular kitchen with premium appliances at IREO Waterfront",
    },
    {
      src: "/projects/waterfront/gallery/promenade.jpg",
      alt: "Waterfront promenade walkway for residents at IREO Waterfront",
    },
    {
      src: "/projects/waterfront/gallery/pool.jpg",
      alt: "Infinity swimming pool with water views at IREO Waterfront",
    },
    {
      src: "/projects/waterfront/gallery/yacht-club.jpg",
      alt: "Exclusive yacht club facilities at IREO Waterfront",
    },
    {
      src: "/projects/waterfront/gallery/exterior.jpg",
      alt: "Modern architecture and exterior design of IREO Waterfront",
    },
  ],
  locationHighlights: {
    description:
      "Sector 58, Gurgaon offers the perfect combination of urban connectivity and natural beauty. The waterfront location provides a unique living experience with stunning views and peaceful surroundings while maintaining easy access to business districts.",
    benefits: [
      "5 minutes to Golf Course Road",
      "10 minutes to Cyber Hub",
      "15 minutes to IGI Airport",
      "Walking distance to Metro Station",
      "Premium schools nearby",
      "World-class healthcare facilities",
    ],
    images: [
      {
        src: "/projects/waterfront/location/location-map.jpg",
        alt: "Strategic location map of IREO Waterfront in Sector 58 Gurgaon",
      },
      {
        src: "/projects/waterfront/location/connectivity.jpg",
        alt: "Excellent connectivity from IREO Waterfront to major landmarks",
      },
    ],
  },
}

const breadcrumbItems = [{ label: "Projects", href: "/#projects" }, { label: "IREO Waterfront" }]

export default function WaterfrontPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectData.heroImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectData.heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectData.heroImages.length) % projectData.heroImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BreadcrumbNav items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {projectData.heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
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
                    asChild
                  >
                    <a href="tel:+919811750130">
                      <Phone className="h-5 w-5 mr-2" />
                      Call for Price
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 bg-transparent px-8 py-4 text-lg"
                    asChild
                  >
                    <Link href="/contact">Schedule Site Visit</Link>
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
          {projectData.heroImages.map((_, index) => (
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

      {/* Quick Facts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Waterfront Amenities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience luxury living with exclusive waterfront amenities and services designed for modern lifestyles.
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Waterfront Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Immerse yourself in the beauty of waterfront living at IREO Waterfront with stunning interiors and
              amenities.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData.gallery.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Waterfront Location</h2>
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
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={350}
                    height={250}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectLinks currentSlug="waterfront" />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern-bg.png')] opacity-10"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Live by the Water</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Experience the tranquility of waterfront living. Ready-to-move-in homes available now!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">RERA Approved</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">Ready to Move</Badge>
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2">
              Waterfront Living
            </Badge>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/logo-white.png"
                alt="IREO Projects Logo"
                width={120}
                height={40}
                className="h-10 w-auto mb-4"
              />
              <p className="text-gray-400">
                Experience luxury living at IREO Waterfront with stunning water views and premium amenities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>
                  <a href="tel:+919811750130" className="hover:text-white">
                    📞 9811750130
                  </a>
                </p>
                <p>
                  📧{" "}
                  <a href="mailto:info@ireo.in" className="hover:text-white">
                    info@ireo.in
                  </a>
                </p>
                <p>📍 Sector 58, Gurgaon</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="text-gray-400 hover:text-white block">
                  Home
                </Link>
                <Link href="/waterfront" className="text-gray-400 hover:text-white block">
                  Waterfront
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white block">
                  Contact
                </Link>
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
