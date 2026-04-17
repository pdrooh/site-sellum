import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { getAllPostsMeta, blogDir } from '@/lib/blog'
import { buildMarkdownFile } from '@/lib/blog/write'
import type { BlogFrontmatter } from '@/lib/blog/types'
import { canWriteAdminFilesystem } from '@/lib/admin/fs-access'
import { verifyAdminSession } from '@/lib/admin/session'

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 })
  }
  const posts = await getAllPostsMeta()
  return NextResponse.json({ posts })
}

export async function POST(request: Request) {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 })
  }
  if (!canWriteAdminFilesystem()) {
    return NextResponse.json(
      {
        error:
          'Escrita em disco desabilitada neste ambiente. Use desenvolvimento local ou ALLOW_BLOG_FS_ADMIN com storage persistente.',
      },
      { status: 503 },
    )
  }

  let body: {
    slug?: string
    title?: string
    description?: string
    publishedAt?: string
    author?: string
    authorRole?: string
    category?: string
    image?: string
    index?: boolean
    content?: string
  } = {}

  try {
    body = (await request.json()) as typeof body
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 })
  }

  const slug = String(body.slug ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return NextResponse.json({ error: 'Slug inválido (use letras minúsculas, números e hífens).' }, { status: 400 })
  }

  const title = String(body.title ?? '').trim()
  const description = String(body.description ?? '').trim()
  const content = String(body.content ?? '')
  const publishedAt = String(body.publishedAt ?? new Date().toISOString())
  const author = String(body.author ?? 'Sellum').trim()

  if (!title || !description) {
    return NextResponse.json({ error: 'Título e descrição são obrigatórios.' }, { status: 400 })
  }

  const fm: BlogFrontmatter = {
    title,
    description,
    publishedAt,
    author,
    authorRole: body.authorRole ? String(body.authorRole) : undefined,
    category: body.category ? String(body.category) : undefined,
    image: body.image ? String(body.image) : undefined,
    index: body.index !== false,
  }

  const filePath = path.join(blogDir(), `${slug}.md`)
  try {
    await fs.access(filePath)
    return NextResponse.json({ error: 'Já existe um artigo com este slug.' }, { status: 409 })
  } catch {
    // ok
  }

  const md = buildMarkdownFile(fm, content)
  await fs.mkdir(blogDir(), { recursive: true })
  await fs.writeFile(filePath, md, 'utf8')

  return NextResponse.json({ ok: true, slug })
}
