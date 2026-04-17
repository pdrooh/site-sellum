import type { MetadataRoute } from 'next'
import { getIndexedPostsMeta } from '@/lib/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://sellum.app'
  const lastModified = new Date()
  const posts = await getIndexedPostsMeta()

  const blogEntries: MetadataRoute.Sitemap = [
    { url: `${base}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.72 },
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt ?? p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.68,
    })),
  ]

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    { url: `${base}/produtos`, lastModified, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/planos`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/demonstracao`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${base}/recursos`, lastModified, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${base}/api`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/academy`, lastModified, changeFrequency: 'weekly', priority: 0.65 },
    { url: `${base}/ajuda`, lastModified, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/partners`, lastModified, changeFrequency: 'weekly', priority: 0.65 },
    { url: `${base}/contato`, lastModified, changeFrequency: 'weekly', priority: 0.6 },
    ...blogEntries,
    { url: `${base}/privacy`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/terms`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/dpa`, lastModified, changeFrequency: 'monthly', priority: 0.3 },
  ]
}
