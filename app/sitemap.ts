import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ireo-projects.vercel.app'
  
  const projects = [
    'grandarch',
    'grandhyatt', 
    'uptown',
    'skyon',
    'corridors',
    'citycentral',
    'gurgaonhills',
    'victoryvalley'
  ]

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/${project}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...projectUrls,
  ]
} 