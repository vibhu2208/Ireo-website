"use client"

import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, Clock, Award, Users, Building } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    name: "IREO Grand Hyatt Residences",
    slug: "grandhyatt",
    location: "Sector 58, Gurgaon",
    type: "Luxury Branded Residences",
    status: "Ready to Move",
    price: "₹4.5 Cr onwards",
    image: "/placeholder.svg?height=300&width=400&text=Grand+Hyatt+Residences",
    description: "Ultra-luxury branded residences with Hyatt hospitality services and world-class amenities.",
  },
  {
    name: "IREO Grand Arch",
    slug: "grandarch",
    location: "Sector 58, Gurgaon",
    type: "Premium Apartments",
    status: "Ready to Move",
    price: "₹2.8 Cr onwards",
    image: "/placeholder.svg?height=300&width=400&text=Grand+Arch",
    description: "Architectural marvel with premium 3 & 4 BHK apartments and luxury amenities.",
  },
  {
    name: "IREO Uptown",
    slug: "uptown",
    location: "Sector 66, Gurgaon",
    type: "Modern Apartments",
    status: "Ready to Move",
    price: "₹2.2 Cr onwards",
    image: "/placeholder.svg?height=300&width=400&text=IREO+Uptown",
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white pt-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Real Estate
              <span className="block text-yellow-400">in Gurgaon</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
              Discover luxury residential and commercial properties by IREO. Experience world-class amenities and prime
              locations in the heart of Gurgaon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link href="#projects">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Premium Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of luxury residential and commercial properties across prime locations in Gurgaon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.slug} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant={project.status === "Ready to Move" ? "default" : "secondary"}
                      className={project.status === "Ready to Move" ? "bg-green-600" : "bg-orange-500"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                  <CardDescription className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{project.type}</span>
                      <span className="font-bold text-blue-600">{project.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{project.description}</p>
                    <Button asChild className="w-full">
                      <Link href={`/${project.slug}`}>
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose IREO Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose IREO?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With over 15 years of excellence in real estate development, IREO has established itself as a trusted name
              in luxury living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 mx-auto">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle>Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Award-winning architecture and construction with attention to every detail, ensuring the highest
                  standards of quality and craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 mx-auto">
                  <MapPin className="h-8 w-8" />
                </div>
                <CardTitle>Prime Locations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategically located properties in Gurgaon's most sought-after areas with excellent connectivity and
                  infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 mx-auto">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Over 10,000 happy families trust IREO for their dream homes. Our commitment to customer satisfaction
                  is unmatched.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to find your dream property? Contact our expert team today for personalized assistance and exclusive
              offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Call Us</h3>
              <p className="text-blue-100">+91 9999-888-777</p>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <a href="tel:+919999888777">Call Now</a>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <p className="text-blue-100">info@ireo.com</p>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <a href="mailto:info@ireo.com">Send Email</a>
              </Button>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Visit Us</h3>
              <p className="text-blue-100">Sector 58, Gurgaon, Haryana</p>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
              >
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">IREO</h3>
              <p className="text-gray-300">
                Premium real estate developer creating luxury living experiences in Gurgaon for over 15 years.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-300 hover:text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Featured Projects</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/grandhyatt" className="text-gray-300 hover:text-white">
                    Grand Hyatt Residences
                  </Link>
                </li>
                <li>
                  <Link href="/waterfront" className="text-gray-300 hover:text-white">
                    IREO Waterfront
                  </Link>
                </li>
                <li>
                  <Link href="/thevillage" className="text-gray-300 hover:text-white">
                    The Village
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>+91 9999-888-777</p>
                <p>info@ireo.com</p>
                <p>Sector 58, Gurgaon, Haryana</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 IREO Projects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
