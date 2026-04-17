import 'server-only'

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogFrontmatter, BlogPost, BlogPostMeta } from './types'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

function readingTimeFromText(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

function parseFrontmatter(data: Record<string, unknown>): BlogFrontmatter {
  const title = String(data.title ?? '')
  const description = String(data.description ?? '')
  const publishedAt = String(data.publishedAt ?? data.published ?? '')
  const updatedAt = data.updatedAt != null ? String(data.updatedAt) : undefined
  const author = String(data.author ?? 'Sellum')
  const authorRole = data.authorRole != null ? String(data.authorRole) : undefined
  const category = data.category != null ? String(data.category) : undefined
  const image = data.image != null ? String(data.image) : undefined
  const index = data.index !== false

  return {
    title,
    description,
    publishedAt,
    updatedAt,
    author,
    authorRole,
    category,
    image,
    index,
  }
}

export async function getPostSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true })
    return entries
      .filter((e) => e.isFile() && e.name.endsWith('.md'))
      .map((e) => e.name.replace(/\.md$/, ''))
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  try {
    const raw = await fs.readFile(filePath, 'utf8')
    const parsed = matter(raw)
    const fm = parseFrontmatter(parsed.data as Record<string, unknown>)
    const content = String(parsed.content ?? '')
    return {
      slug,
      ...fm,
      readingTimeMinutes: readingTimeFromText(content),
      content,
    }
  } catch {
    return null
  }
}

export async function getAllPostsMeta(): Promise<BlogPostMeta[]> {
  const slugs = await getPostSlugs()
  const posts: BlogPostMeta[] = []
  for (const slug of slugs) {
    const p = await getPostBySlug(slug)
    if (p) {
      const { content: _c, ...meta } = p
      posts.push(meta)
    }
  }
  return posts.sort((a, b) => {
    const ta = Date.parse(a.publishedAt) || 0
    const tb = Date.parse(b.publishedAt) || 0
    return tb - ta
  })
}

export async function getIndexedPostsMeta(): Promise<BlogPostMeta[]> {
  const all = await getAllPostsMeta()
  return all.filter((p) => p.index !== false)
}

export { readingTimeFromText }

export function blogDir() {
  return BLOG_DIR
}
