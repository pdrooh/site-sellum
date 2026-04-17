import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const expectedPassword = process.env.ADMIN_PASSWORD
  const sessionToken = process.env.ADMIN_SESSION_TOKEN

  if (!expectedPassword || !sessionToken) {
    return NextResponse.json({ error: 'Admin não configurado.' }, { status: 503 })
  }

  let body: { password?: string } = {}
  try {
    body = (await request.json()) as { password?: string }
  } catch {
    return NextResponse.json({ error: 'JSON inválido.' }, { status: 400 })
  }

  if (body.password !== expectedPassword) {
    return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 })
  }

  const cookieStore = await cookies()
  cookieStore.set('sellum_admin', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return NextResponse.json({ ok: true })
}
