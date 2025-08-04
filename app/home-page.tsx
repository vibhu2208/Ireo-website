import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, Clock, Award, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { OrganizationStructuredData } from "@/components/structured-data"

const projects = [
  {
    name: "IREO Grand Hyatt Residences",
    slug: "grandhyatt",
    location: "Sector 58, Gurgaon",
    type: "Luxury Branded Residences",
    status: "Ready to Move",
    price: "₹Call for Price",
    image: "/grandhyatt-gallery-01.jpg",
    description: "Ultra-luxury branded residences with Hyatt hospitality services and world-class amenities.",
  },
  {
    name: "IREO Grand Arch",
    slug: "grandarch",
    location: "Sector 58, Gurgaon",
    type: "Premium Apartments",
    status: "Ready to Move",
    price: "₹2.8 Cr onwards",
    image: "/grandarch-gallery-01.webp",
    description: "Architectural marvel with premium 3 & 4 BHK apartments and luxury amenities.",
  },
  {
    name: "IREO Uptown",
    slug: "uptown",
    location: "Sector 66, Gurgaon",
    type: "Modern Apartments",
    status: "Ready to Move",
    price: "₹2.2 Cr onwards",
    image: "/uptown-gallery.webp",
    description: "Contemporary living spaces with modern amenities and excellent connectivity.",
  },
  {
    name: "IREO Skyon",
    slug: "skyon",
    location: "Sector 60, Gurgaon",
    type: "Sky-high Residences",
    status: "Ready to Move",
    price: "₹3.2 Cr onwards",
    image: "/placeholder.svg?height=300&width=400&text=IREO+Skyon",
    description: "High-rise luxury apartments with panoramic city views and premium facilities.",
  },
  {
    name: "IREO The Corridors",
    slug: "corridors",
    location: "Sector 67, Gurgaon",
    type: "Commercial Spaces",
    status: "Ready to Move",
    price: "₹1.8 Cr onwards",
    image: "/placeholder.svg?height=300&width=400&text=The+Corridors",
    description: "Premium commercial spaces and retail outlets in a prime business location.",
  },
  {
    name: "IREO City Central",
    slug: "citycentral",
    location: "Sector 59, Gurgaon",
    type: "Mixed-use Development",
    status: "Under Construction",
    price: "₹2.5 Cr onwards",
    image: "/placeholder.svg?height=300&width=400&text=City+Central",
    description: "Integrated township with residential, commercial, and retail spaces.",
  },
  {
    name: "IREO Waterfront",
    slug: "waterfront",
    location: "Sector 58, Gurgaon",
    type: "Waterfront Residences",
    status: "Ready to Move",
    price: "₹3.8 Cr onwards",
    image: "/placeholder.svg?height=300&width=400&text=IREO+Waterfront",
    description: "Luxury waterfront living with yacht club and premium water-facing amenities.",
  },
  {
    name: "IREO The Village",
    slug: "thevillage",
    location: "Sohna Road, Gurgaon",
    type: "Independent Villas",
    status: "Ready to Move",
    price: "₹5.2 Cr onwards",
    image: "/placeholder.svg?height=300&width=400&text=The+Village",
    description: "Exclusive independent villas with private gardens and luxury amenities.",
  },
]

const stats = [
  { icon: Building, label: "Projects Delivered", value: "25+" },
  { icon: Users, label: "Happy Families", value: "10,000+" },
  { icon: Award, label: "Awards Won", value: "50+" },
  { icon: Clock, label: "Years of Excellence", value: "15+" },
]

export default function HomePage() {
  return (
    <>
      <OrganizationStructuredData />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/banner0.webp')` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-6xl">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                IREO Projects
              </h1>
              <p className="text-2xl md:text-3xl mb-6 text-gray-200">
                Luxury Living Redefined
              </p>
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
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Premium Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover luxury living at its finest with our handpicked selection of premium properties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.slug} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={`${project.name} - ${project.location}`}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className={`absolute top-4 left-4 ${
                      project.status === "Ready to Move" ? "bg-green-500" : "bg-orange-500"
                    } text-white`}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-1">
                      {project.type}
                    </CardDescription>
                    <p className="text-gray-600 mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mb-3">
                      {project.price}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link href={`/${project.slug}`}>
                        <Button variant="outline" size="sm">
                          View Details
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Trusted by Thousands
              </h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Our commitment to excellence has made us the preferred choice for discerning homebuyers
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-blue-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-blue-200">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our expert team to explore our premium properties and find the perfect home for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
      </main>
    </>
  )
}
