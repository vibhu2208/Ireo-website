# How to Convert Client-Side Rendering to Server-Side Rendering

## ✅ **What I've Fixed:**

1. **Home Page (`app/home-page.tsx`)**
   - ✅ Removed `"use client"`
   - ✅ Added structured data
   - ✅ Improved semantic HTML

2. **Grand Arch Page (`app/grandarch/page.tsx`)**
   - ✅ Removed `"use client"`
   - ✅ Added proper metadata export
   - ✅ Added structured data
   - ✅ Removed client-side state management

## 🔧 **Steps to Convert Other Pages:**

### **1. Remove Client-Side Dependencies**
```typescript
// REMOVE these lines from the top of each file:
"use client"
import { useState, useEffect } from "react"

// REMOVE all useState and useEffect hooks
```

### **2. Add Metadata Export**
```typescript
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Name - Location",
  description: "Project description for SEO",
  keywords: "relevant, keywords, for, seo",
  alternates: {
    canonical: "/project-slug",
  },
  openGraph: {
    title: "Project Name - Location",
    description: "Project description",
    url: "/project-slug",
    images: [
      {
        url: "/project-image.jpg",
        width: 1200,
        height: 630,
        alt: "Project Name",
      },
    ],
  },
}
```

### **3. Add Structured Data**
```typescript
import { StructuredData } from "@/components/structured-data"

// Add inside the component:
<StructuredData 
  data={{
    name: "Project Name",
    description: "Project description",
    image: "/project-image.jpg",
    price: "₹X Cr",
    area: "X SQ.FT",
    location: "Location",
    type: "Property Type",
    status: "Status",
    url: "https://ireo-projects.vercel.app/project-slug"
  }}
  type="Apartment" // or "House" or "RealEstateListing"
/>
```

### **4. Remove Interactive Features**
- Remove carousel/slider functionality
- Remove scroll-based navigation changes
- Remove client-side state management
- Keep static content only

### **5. Pages to Convert:**
- [ ] `app/grandhyatt/page.tsx`
- [ ] `app/uptown/page.tsx`
- [ ] `app/skyon/page.tsx`
- [ ] `app/corridors/page.tsx`
- [ ] `app/citycentral/page.tsx`
- [ ] `app/waterfront/page.tsx`
- [ ] `app/thevillage/page.tsx`

## 📈 **SEO Benefits:**

1. **✅ Server-Side Rendering** - Search engines can crawl content immediately
2. **✅ Faster Initial Load** - No JavaScript required for content
3. **✅ Better Core Web Vitals** - Improved LCP, FID, CLS scores
4. **✅ Proper Meta Tags** - Each page has unique SEO metadata
5. **✅ Structured Data** - Rich snippets in search results

## 🎯 **Next Steps:**

1. **Convert remaining project pages** using the template above
2. **Add real images** to replace placeholders
3. **Create favicon.ico** and app icons
4. **Add breadcrumb navigation**
5. **Implement internal linking strategy**

## 📊 **Expected SEO Score After Conversion: 8/10** 