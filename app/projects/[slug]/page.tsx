"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, MapPin, Home, Ruler, DollarSign, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Sample project data - in a real app, this would come from a database or API
const projectsData = {
  "grand-arch": {
    name: "IREO The Grand Arch",
    type: "Residential Apartments",
    location: "Sector 58, Gurgaon",
    area: "1375 – 2850 SQ.FT",
    price: "Call for Price",
    accommodation: "2, 3 & 4 BHK",
    status: "Booking Open",
    statusColor: "bg-green-500",
    heroImages: [
      "/placeholder.svg?height=500&width=800&text=Grand+Arch+Exterior",
      "/placeholder.svg?height=500&width=800&text=Grand+Arch+Lobby",
      "/placeholder.svg?height=500&width=800&text=Grand+Arch+Amenities",
      "/placeholder.svg?height=500&width=800&text=Grand+Arch+Interior",
    ],
    description: {
      title: "IREO The Grand Arch - Premium Living Redefined",
      paragraphs: [
        "IREO The Grand Arch stands as a testament to architectural excellence and modern living in the heart of Sector 58, Gurgaon. This premium residential development offers spacious 2, 3, and 4 BHK apartments designed to cater to the sophisticated lifestyle needs of contemporary families.",
        "Each residence at The Grand Arch is meticulously crafted with attention to detail, featuring high-quality finishes, modern fixtures, and thoughtful layouts that maximize space and natural light. The project combines luxury with functionality, creating homes that are both beautiful and practical for everyday living.",
        "Located in one of Gurgaon's most sought-after sectors, The Grand Arch provides residents with excellent connectivity to major business districts, educational institutions, and entertainment hubs, making it an ideal choice for those seeking convenience without compromising on luxury.",
      ],
    },
    amenities: [
      { icon: "🏊", name: "Swimming Pool" },
      { icon: "🏋️", name: "Fitness Center" },
      { icon: "🏛️", name: "Clubhouse" },
      { icon: "🎾", name: "Tennis Court" },
      { icon: "🌳", name: "Landscaped Gardens" },
      { icon: "🚗", name: "Covered Parking" },
      { icon: "🔒", name: "24/7 Security" },
      { icon: "🏪", name: "Retail Spaces" },
      { icon: "👶", name: "Kids Play Area" },
      { icon: "🧘", name: "Yoga Deck" },
      { icon: "🎮", name: "Games Room" },
      { icon: "📚", name: "Library" },
    ],
    galleryImages: [
      "/placeholder.svg?height=300&width=400&text=Living+Room",
      "/placeholder.svg?height=300&width=400&text=Master+Bedroom",
      "/placeholder.svg?height=300&width=400&text=Kitchen",
      "/placeholder.svg?height=300&width=400&text=Balcony+View",
      "/placeholder.svg?height=300&width=400&text=Bathroom",
      "/placeholder.svg?height=300&width=400&text=Dining+Area",
      "/placeholder.svg?height=300&width=400&text=Swimming+Pool",
      "/placeholder.svg?height=300&width=400&text=Clubhouse",
    ],
    locationHighlights: {
      description:
        "Sector 58, Gurgaon is strategically located with excellent connectivity to major business hubs and lifestyle destinations. The area offers easy access to Golf Course Road, NH-8, and the upcoming metro connectivity, making it one of the most preferred residential locations in Gurgaon.",
      features: [
        "5 minutes to Golf Course Road",
        "10 minutes to Cyber Hub",
        "15 minutes to IGI Airport",
        "Close to top schools and hospitals",
        "Shopping malls and restaurants nearby",
        "Upcoming metro connectivity",
      ],
      locationImages: [
        "/placeholder.svg?height=250&width=350&text=Location+Map",
        "/placeholder.svg?height=250&width=350&text=Nearby+Landmarks",
      ],
    },
  },
}

interface ProjectDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Get project data based on slug
  const project = projectsData[params.slug as keyof typeof projectsData]

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate hero slides
  useEffect(() => {
    if (project?.heroImages) {
      const timer = setInterval(() => {
        setCurrentHeroSlide((prev) => (prev + 1) % project.heroImages.length)
      }, 4000)
      return () => clearInterval(timer)
    }
  }, [project])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % project.heroImages.length)
  }

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + project.heroImages.length) % project.heroImages.length)
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
              <a href="/">
                <img src="/logo.webp" alt="IREO Projects" className="h-10" />
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">9811750130</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Image Carousel */}
      <section className="relative h-[70vh] overflow-hidden mt-16">
        {project.heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`${project.name} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevHeroSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextHeroSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {project.heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentHeroSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <Home className="h-8 w-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-300 mb-1">Property Type</p>
              <p className="font-semibold">{project.type}</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-300 mb-1">Location</p>
              <p className="font-semibold">{project.location}</p>
            </div>
            <div className="text-center">
              <Ruler className="h-8 w-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-300 mb-1">Area</p>
              <p className="font-semibold">{project.area}</p>
            </div>
            <div className="text-center">
              <DollarSign className="h-8 w-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-300 mb-1">Price</p>
              <p className="font-semibold">{project.price}</p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-300 mb-1">Accommodation</p>
              <p className="font-semibold">{project.accommodation}</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-blue-400" />
              <p className="text-sm text-gray-300 mb-1">Status</p>
              <Badge className={`${project.statusColor} text-white`}>{project.status}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">{project.description.title}</h1>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            {project.description.paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Amenities</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {project.amenities.map((amenity, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl mb-3">{amenity.icon}</div>
                  <p className="font-semibold text-gray-900">{amenity.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Location Highlights</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.locationHighlights.description}</p>
              <ul className="space-y-3">
                {project.locationHighlights.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Location Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.locationHighlights.locationImages.map((image, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Location highlight ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in {project.name}?</h2>
          <p className="text-xl mb-8">Contact us today for more information and site visits</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-blue-600">
              <Phone className="h-5 w-5 mr-2" />
              Call 9811750130
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Site Visit
            </Button>
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
