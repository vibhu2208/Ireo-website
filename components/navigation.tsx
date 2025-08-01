"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const projects = [
  { name: "IREO Grand Hyatt Residences", slug: "grandhyatt" },
  { name: "IREO Grand Arch", slug: "grandarch" },
  { name: "IREO Uptown", slug: "uptown" },
  { name: "IREO Skyon", slug: "skyon" },
  { name: "IREO The Corridors", slug: "corridors" },
  { name: "IREO City Central", slug: "citycentral" },
  { name: "IREO Waterfront", slug: "waterfront" },
  { name: "IREO The Village", slug: "thevillage" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">IREO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/${project.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>

            {/* Phone Number and Call Button */}
            <div className="flex items-center space-x-3">
              <div className="text-sm text-gray-600">
                <div className="font-semibold">+91 9999-888-777</div>
              </div>
              <Button asChild size="sm" className="bg-green-600 hover:bg-green-700">
                <a href="tel:+919999888777" className="flex items-center">
                  <Phone className="h-4 w-4 mr-1" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  <div className="space-y-2">
                    <div className="text-lg font-medium text-gray-700 mb-2">Projects</div>
                    {projects.map((project) => (
                      <Link
                        key={project.slug}
                        href={`/${project.slug}`}
                        className="block pl-4 py-1 text-gray-600 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {project.name}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/#contact"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>

                  {/* Mobile Phone Section */}
                  <div className="pt-4 border-t">
                    <div className="text-sm text-gray-600 mb-3">
                      <div className="font-semibold">+91 9999-888-777</div>
                    </div>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <a href="tel:+919999888777" className="flex items-center justify-center">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
