import { NextResponse } from 'next/server'
import { createMember, getMembers, saveMembers } from '@/lib/members'
import { canWriteAdminFilesystem } from '@/lib/admin/fs-access'
import { verifyAdminSession } from '@/lib/admin/session'

export async function GET() {
  if (!(await verifyAdminSession())) {
    return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 })
  }
  const members = await getMembers()
  return NextResponse.json({ members })
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

  let body: { name?: string; email?: string; role?: string } = {}
  try {
    body = (await request.json()) as typeof body
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 })
  }

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const role = String(body.role ?? '').trim()

  if (!name || !email || !role) {
    return NextResponse.json({ error: 'Nome, email e função são obrigatórios.' }, { status: 400 })
  }

  const members = await getMembers()
  if (members.some((m) => m.email.toLowerCase() === email.toLowerCase())) {
    return NextResponse.json({ error: 'Já existe um membro com este email.' }, { status: 409 })
  }

  const next = [...members, createMember({ name, email, role })]
  await saveMembers(next)

  return NextResponse.json({ ok: true })
}
