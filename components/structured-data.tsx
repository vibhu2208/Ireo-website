import Script from 'next/script'

interface RealEstateData {
  name: string
  description: string
  image: string
  price: string
  area: string
  location: string
  type: string
  status: string
  url: string
}

interface StructuredDataProps {
  data: RealEstateData
  type: 'RealEstateListing' | 'Apartment' | 'House'
}

export function StructuredData({ data, type }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": data.name,
    "description": data.description,
    "image": data.image,
    "url": data.url,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurgaon",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      }
    },
    "numberOfRooms": data.area,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": data.area,
      "unitText": "SQ.FT"
    },
    "offers": {
      "@type": "Offer",
      "price": data.price,
      "priceCurrency": "INR",
      "availability": data.status === "Ready to Move" ? "https://schema.org/InStock" : "https://schema.org/PreOrder"
    },
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Swimming Pool",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Fitness Center",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "24/7 Security",
        "value": true
      }
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "IREO Projects",
    "description": "Leading real estate developer in India, known for creating world-class residential and commercial spaces in Gurgaon.",
    "url": "https://ireo-projects.vercel.app",
    "logo": "https://ireo-projects.vercel.app/placeholder-logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana", 
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9811750130",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/ireoprojects",
      "https://www.linkedin.com/company/ireo-projects"
    ]
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 