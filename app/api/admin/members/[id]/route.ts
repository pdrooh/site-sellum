import { NextResponse } from 'next/server'
import { getMembers, saveMembers } from '@/lib/members'
import { canWriteAdminFilesystem } from '@/lib/admin/fs-access'
import { verifyAdminSession } from '@/lib/admin/session'

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
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

  const { id } = await context.params
  const members = await getMembers()
  const next = members.filter((m) => m.id !== id)
  if (next.length === members.length) {
    return NextResponse.json({ error: 'Membro não encontrado.' }, { status: 404 })
  }
  await saveMembers(next)
  return NextResponse.json({ ok: true })
}
