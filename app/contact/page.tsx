"use client"

import { useState } from "react"
import { Send, Phone, MessageCircle, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const allProjects = [
  { name: "IREO Grand Hyatt Residences", slug: "grandhyatt" },
  { name: "IREO Grand Arch", slug: "grandarch" },
  { name: "IREO Uptown", slug: "uptown" },
  { name: "IREO Skyon", slug: "skyon" },
  { name: "IREO The Corridors", slug: "corridors" },
  { name: "IREO City Central", slug: "citycentral" },
  { name: "IREO Victory Valley", slug: "victoryvalley" },
  { name: "IREO Gurgaon Hills", slug: "gurgaonhills" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    property: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<null | { ok: boolean; message: string }>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to submit form")

      setFormData({ name: "", number: "", property: "" })
      setStatus({ ok: true, message: "Thank you! We'll contact you within 24 hours." })
    } catch (err) {
      console.error(err)
      setStatus({ ok: false, message: "Something went wrong. Please try again or call us at 9811750130." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get in Touch</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Have a question or want to schedule a site visit? Fill out the form and our team will reach out shortly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="number" className="text-gray-700 font-medium">Phone Number *</Label>
                <Input
                  id="number"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.number}
                  onChange={(e) => handleInputChange("number", e.target.value)}
                  required
                  className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="property" className="text-gray-700 font-medium">Interested Property *</Label>
                <Select value={formData.property} onValueChange={(value) => handleInputChange("property", value)}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select a property" />
                  </SelectTrigger>
                  <SelectContent>
                    {allProjects.map((project) => (
                      <SelectItem key={project.slug} value={project.slug}>
                        {project.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-4 w-4 mr-2" />
                    Submit
                  </div>
                )}
              </Button>

              {status && (
                <div className={`text-sm ${status.ok ? "text-green-600" : "text-red-600"}`}>{status.message}</div>
              )}
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">Contact Details</h2>
              <p className="text-gray-600 mt-1">We’re available 7 days a week.</p>
            </div>

            <div className="space-y-4">
              <a href="tel:+919811750130" className="block">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Phone className="h-4 w-4 mr-2" /> Call Now: +91 9811 750 130
                </Button>
              </a>
              <a href="https://wa.me/919811750130" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full">
                  <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
                </Button>
              </a>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Office</div>
                  <div className="text-gray-600">Golf Course Ext. Road, Gurgaon</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium text-gray-900">Hours</div>
                  <div className="text-gray-600">Mon–Sun: 9:00 AM – 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
