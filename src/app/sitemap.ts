import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rdsx.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://rdsx.vercel.app/blogs',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://rdsx.vercel.app/experience',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://rdsx.vercel.app/til',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ]
}