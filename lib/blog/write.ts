import type { BlogFrontmatter } from './types'

export function buildMarkdownFile(fm: BlogFrontmatter, body: string) {
  const lines = [
    '---',
    `title: ${JSON.stringify(fm.title)}`,
    `description: ${JSON.stringify(fm.description)}`,
    `publishedAt: ${JSON.stringify(fm.publishedAt)}`,
  ]
  if (fm.updatedAt) lines.push(`updatedAt: ${JSON.stringify(fm.updatedAt)}`)
  lines.push(`author: ${JSON.stringify(fm.author)}`)
  if (fm.authorRole) lines.push(`authorRole: ${JSON.stringify(fm.authorRole)}`)
  if (fm.category) lines.push(`category: ${JSON.stringify(fm.category)}`)
  if (fm.image) lines.push(`image: ${JSON.stringify(fm.image)}`)
  lines.push(`index: ${fm.index !== false}`)
  lines.push('---', '', body.trimEnd(), '')
  return lines.join('\n')
}
