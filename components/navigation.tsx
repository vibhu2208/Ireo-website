"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  { name: "IREO Gurgaon Hills", slug: "gurgaonhills" },
  { name: "IREO Victory Valley", slug: "victoryvalley" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isProjectsActive = projects.some((p) => pathname?.startsWith(`/${p.slug}`))

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.webp" alt="IREO Projects" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium relative text-gray-700 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-indigo-500 after:transition-all hover:after:w-full ${pathname === "/" ? "text-blue-600 after:w-full" : ""}`}
            >
              Home
            </Link>
            <div className="relative group">
              <button className={`font-medium relative text-gray-700 hover:text-blue-600 transition-colors ${isProjectsActive ? "text-blue-600" : ""}`}>Projects</button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {projects.map((project) => (
                    <Link
                      key={project.slug}
                      href={`/${project.slug}`}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className={`font-medium relative text-gray-700 hover:text-blue-600 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-blue-500 to-indigo-500 after:transition-all hover:after:w-full ${pathname?.startsWith("/contact") ? "text-blue-600 after:w-full" : ""}`}
            >
              Contact
            </Link>

            {/* Phone Tel Pill + WhatsApp Button */}
            <div className="flex items-center space-x-3">
              <a
                href="tel:+919811750130"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 bg-white/70 px-3 py-1.5 text-gray-700 backdrop-blur-sm transition hover:bg-white"
              >
                <span>📞</span>
                <span className="font-medium">+91 9811 750 130</span>
              </a>
              <a
                href="https://wa.me/919811750130"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-white shadow-sm backdrop-blur transition hover:shadow-[0_0_0_4px_rgba(16,185,129,0.25)] active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/90" />
                <span className="font-medium">WhatsApp</span>
              </a>
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
                    href="/contact"
                    className="text-lg font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>

                  {/* Mobile Phone Section */}
                  <div className="pt-4 border-t space-y-3">
                    <a
                      href="tel:+919811750130"
                      className="inline-flex items-center gap-2 rounded-full border border-gray-300/70 bg-white px-3 py-2 text-gray-700 w-full justify-center"
                    >
                      <span>📞</span>
                      <span className="font-medium">+91 9811 750 130</span>
                    </a>
                    <a
                      href="https://wa.me/919811750130"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-4 py-2 text-white shadow-sm w-full justify-center transition hover:shadow-[0_0_0_4px_rgba(16,185,129,0.25)] active:scale-95"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="inline-block h-2.5 w-2.5 rounded-full bg-white/90" />
                      <span className="font-medium">WhatsApp</span>
                    </a>
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
