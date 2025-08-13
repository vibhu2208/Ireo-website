import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const allProjects = [
  { name: "IREO Grand Hyatt Residences", slug: "grandhyatt", type: "Luxury Branded Residences" },
  { name: "IREO Grand Arch", slug: "grandarch", type: "Premium Apartments" },
  { name: "IREO Uptown", slug: "uptown", type: "Modern Apartments" },
  { name: "IREO Skyon", slug: "skyon", type: "Sky-high Residences" },
  { name: "IREO The Corridors", slug: "corridors", type: "Commercial Spaces" },
  { name: "IREO City Central", slug: "citycentral", type: "Mixed-use Development" },
  { name: "IREO Gurgaon Hills", slug: "gurgaonhills", type: "Gurgaon Hills Residences" },
  { name: "IREO Victory Valley", slug: "victoryvalley", type: "Independent Villas" },
]

interface ProjectLinksProps {
  currentSlug: string
}

export default function ProjectLinks({ currentSlug }: ProjectLinksProps) {
  const otherProjects = allProjects.filter((project) => project.slug !== currentSlug).slice(0, 3)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Other Projects</h2>
          <p className="text-lg text-gray-600">Discover more luxury properties by IREO</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <Card key={project.slug} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.type}</p>
                <Button asChild className="w-full">
                  <Link href={`/${project.slug}`}>
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link href="/#projects">
              View All Projects
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
