import 'server-only'

import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { BlogFrontmatter, BlogPost, BlogPostMeta } from './types'
import { hasSupabase, hasSupabaseAdmin } from '@/lib/supabase/env'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { createSupabaseAdminClient } from '@/lib/supabase/admin'

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
  if (hasSupabase()) {
    try {
      const supabase = createSupabaseServerClient()
      const { data, error } = await supabase.from('blog_posts').select('slug').eq('index', true).order('published_at', {
        ascending: false,
      })
      if (error) return []
      return (data ?? []).map((r) => String(r.slug))
    } catch {
      return []
    }
  }

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

  if (hasSupabase()) {
    try {
      const supabase = createSupabaseServerClient()
      const { data, error } = await supabase
        .from('blog_posts')
        .select('slug,title,description,published_at,updated_at,author,author_role,category,image,index,content_md')
        .eq('slug', slug)
        .eq('index', true)
        .maybeSingle()

      if (error) return null
      if (!data) return null
      const content = String((data as any).content_md ?? '')
      return {
        slug: String(data.slug),
        title: String(data.title),
        description: String(data.description),
        publishedAt: new Date(String((data as any).published_at)).toISOString(),
        updatedAt: (data as any).updated_at ? new Date(String((data as any).updated_at)).toISOString() : undefined,
        author: String((data as any).author ?? 'Sellum'),
        authorRole: (data as any).author_role ? String((data as any).author_role) : undefined,
        category: (data as any).category ? String((data as any).category) : undefined,
        image: (data as any).image ? String((data as any).image) : undefined,
        index: (data as any).index !== false,
        readingTimeMinutes: readingTimeFromText(content),
        content,
      }
    } catch {
      return null
    }
  }

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
  // Em Supabase, por padrão retorna apenas posts indexáveis (públicos).
  if (hasSupabase()) {
    try {
      const supabase = createSupabaseServerClient()
      const { data, error } = await supabase
        .from('blog_posts')
        .select('slug,title,description,published_at,updated_at,author,author_role,category,image,index,content_md')
        .eq('index', true)
        .order('published_at', { ascending: false })
      if (error) return []
      return (data ?? []).map((row: any) => {
        const content = String(row.content_md ?? '')
        return {
          slug: String(row.slug),
          title: String(row.title),
          description: String(row.description),
          publishedAt: new Date(String(row.published_at)).toISOString(),
          updatedAt: row.updated_at ? new Date(String(row.updated_at)).toISOString() : undefined,
          author: String(row.author ?? 'Sellum'),
          authorRole: row.author_role ? String(row.author_role) : undefined,
          category: row.category ? String(row.category) : undefined,
          image: row.image ? String(row.image) : undefined,
          index: row.index !== false,
          readingTimeMinutes: readingTimeFromText(content),
        }
      })
    } catch {
      return []
    }
  }

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

export async function getAllPostsMetaAdmin(): Promise<BlogPostMeta[]> {
  if (hasSupabaseAdmin()) {
    try {
      const supabase = createSupabaseAdminClient()
      const { data, error } = await supabase
        .from('blog_posts')
        .select('slug,title,description,published_at,updated_at,author,author_role,category,image,index,content_md')
        .order('published_at', { ascending: false })
      if (error) return []
      return (data ?? []).map((row: any) => {
        const content = String(row.content_md ?? '')
        return {
          slug: String(row.slug),
          title: String(row.title),
          description: String(row.description),
          publishedAt: new Date(String(row.published_at)).toISOString(),
          updatedAt: row.updated_at ? new Date(String(row.updated_at)).toISOString() : undefined,
          author: String(row.author ?? 'Sellum'),
          authorRole: row.author_role ? String(row.author_role) : undefined,
          category: row.category ? String(row.category) : undefined,
          image: row.image ? String(row.image) : undefined,
          index: row.index !== false,
          readingTimeMinutes: readingTimeFromText(content),
        }
      })
    } catch {
      return []
    }
  }
  return await getAllPostsMeta()
}

export { readingTimeFromText }

export function blogDir() {
  return BLOG_DIR
}
