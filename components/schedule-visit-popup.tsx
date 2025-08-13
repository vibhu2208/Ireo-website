"use client"

import { useState } from "react"
import { X, Send } from "lucide-react"
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
  { name: "IREO Gurgaon Hills", slug: "gurgaonhills" }
]

interface ScheduleVisitPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleVisitPopup({ isOpen, onClose }: ScheduleVisitPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    property: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Reset form
      setFormData({ name: "", number: "", property: "" })
      setIsSubmitting(false)
      onClose()

      // Show success message
      alert("Thank you for your inquiry! We'll get back to you within 24 hours to schedule your site visit.")
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      alert("Sorry, there was an error submitting your form. Please try again or call us directly at 9811750130.")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Schedule Site Visit</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                  Schedule Visit
                </div>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Our team will contact you within 24 hours to confirm your site visit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 