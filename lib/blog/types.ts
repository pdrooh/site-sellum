export type BlogFrontmatter = {
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author: string
  authorRole?: string
  category?: string
  image?: string
  /** Se false, não indexa (rascunho) */
  index?: boolean
}

export type BlogPostMeta = BlogFrontmatter & {
  slug: string
  readingTimeMinutes: number
}

export type BlogPost = BlogPostMeta & {
  content: string
}
