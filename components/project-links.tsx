import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const relatedProjects = [
  { name: "Grand Hyatt Residences", slug: "grandhyatt", type: "Luxury Branded Residences" },
  { name: "Grand Arch", slug: "grandarch", type: "Premium Apartments" },
  { name: "Uptown", slug: "uptown", type: "Modern Living" },
  { name: "Skyon", slug: "skyon", type: "Sky Residences" },
  { name: "The Corridors", slug: "corridors", type: "Commercial Spaces" },
  { name: "City Central", slug: "citycentral", type: "Mixed Development" },
  { name: "Waterfront", slug: "waterfront", type: "Waterfront Living" },
  { name: "The Village", slug: "thevillage", type: "Independent Villas" },
]

interface ProjectLinksProps {
  currentSlug?: string
}

export default function ProjectLinks({ currentSlug }: ProjectLinksProps) {
  const otherProjects = relatedProjects.filter((project) => project.slug !== currentSlug)
  const displayProjects = otherProjects.slice(0, 4)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other IREO Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover more premium properties across Gurgaon's most sought-after locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map((project) => (
            <div key={project.slug} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IREO {project.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.type}</p>
              <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                <Link href={`/${project.slug}`}>
                  View Details
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
            <Link href="/">
              View All Projects
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
