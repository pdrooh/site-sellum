import { NextResponse } from 'next/server'

type DemoRequest = {
  fullName?: string
  email?: string
  whatsapp?: string
  company?: string
  source?: string
}

function isEmail(value: string) {
  return /.+@.+\..+/.test(value)
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as DemoRequest | null
  if (!body) {
    return NextResponse.json({ ok: false, message: 'JSON inválido.' }, { status: 400 })
  }

  const fullName = (body.fullName ?? '').trim()
  const email = (body.email ?? '').trim()
  const whatsapp = (body.whatsapp ?? '').trim()
  const company = (body.company ?? '').trim()
  const source = (body.source ?? 'unknown').trim()

  if (fullName.length < 3) {
    return NextResponse.json({ ok: false, message: 'Informe seu nome completo.' }, { status: 400 })
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, message: 'Informe um e-mail válido.' }, { status: 400 })
  }
  if (company.length < 2) {
    return NextResponse.json({ ok: false, message: 'Informe a empresa.' }, { status: 400 })
  }
  if (whatsapp.replace(/\D/g, '').length < 10) {
    return NextResponse.json({ ok: false, message: 'Informe um WhatsApp válido.' }, { status: 400 })
  }

  const webhookUrl = process.env.CLINT_WEBHOOK_URL?.trim()
  const isDev = process.env.NODE_ENV === 'development'

  if (!webhookUrl) {
    console.warn('[demo-request] CLINT_WEBHOOK_URL não definido — lead não encaminhado ao CRM.')
    console.log('[demo-request]', { fullName, email, whatsapp, company, source })
    if (!isDev) {
      return NextResponse.json(
        { ok: false, message: 'Serviço temporariamente indisponível.' },
        { status: 503 }
      )
    }
    return NextResponse.json({ ok: true })
  }

  const payload = {
    name: fullName,
    email,
    phone: whatsapp,
    company,
    source: source || 'landing',
  }

  const controller = new AbortController()
  const timeoutMs = 15_000
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    clearTimeout(timeout)

    if (!res.ok) {
      const text = await res.text().catch(() => '')
      console.error('[demo-request] Clint webhook', res.status, text.slice(0, 500))
      return NextResponse.json(
        { ok: false, message: 'Não foi possível enviar agora. Tente novamente.' },
        { status: 502 }
      )
    }
  } catch (e) {
    clearTimeout(timeout)
    console.error('[demo-request] Clint webhook', e)
    return NextResponse.json(
      { ok: false, message: 'Não foi possível enviar agora. Tente novamente.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}

