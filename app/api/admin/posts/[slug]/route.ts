import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { blogDir } from '@/lib/blog'
import { canWriteAdminFilesystem } from '@/lib/admin/fs-access'
import { verifyAdminSession } from '@/lib/admin/session'

export async function DELETE(_request: Request, context: { params: Promise<{ slug: string }> }) {
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

  const { slug } = await context.params
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return NextResponse.json({ error: 'Slug inválido.' }, { status: 400 })
  }

  const filePath = path.join(blogDir(), `${slug}.md`)
  try {
    await fs.unlink(filePath)
  } catch {
    return NextResponse.json({ error: 'Artigo não encontrado.' }, { status: 404 })
  }

  return NextResponse.json({ ok: true })
}
