"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
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

export default function Footer() {
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
      
      // Show success message
      alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      alert("Sorry, there was an error submitting your form. Please try again or call us directly at 9811750130.")
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p className="text-gray-400">
                Ready to find your dream home? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="number" className="text-white">Phone Number *</Label>
                  <Input
                    id="number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.number}
                    onChange={(e) => handleInputChange("number", e.target.value)}
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="property" className="text-white">Interested Property *</Label>
                <Select value={formData.property} onValueChange={(value) => handleInputChange("property", value)}>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select a property" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    {allProjects.map((project) => (
                      <SelectItem key={project.slug} value={project.slug} className="text-white hover:bg-gray-700">
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
                    Submit Inquiry
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+91 9811-750-130</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">info@ireoprojects.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-400">IREO House, Plot No. 1, Sector 18, Gurgaon, Haryana 122001</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Our Projects</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {allProjects.slice(0, 8).map((project) => (
                  <a
                    key={project.slug}
                    href={`/${project.slug}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {project.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <img
                src="/logo.webp"
                alt="IREO Logo"
                className="h-10 w-auto"
              />
              <p className="text-gray-400">
                Creating world-class residential and commercial spaces that redefine modern living in Gurgaon.
              </p>
            </div>
            <p className="text-gray-400">© 2025. All Rights Reserved. | IREO Projects | 9811750130</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 