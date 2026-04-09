'use client'

import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { FadeIn } from '../motion/FadeIn'

type FormState = {
  fullName: string
  email: string
  whatsapp: string
  company: string
}

const INPUT_CLASS =
  'h-11 w-full rounded-[8px] border border-white/[0.12] bg-black px-4 text-[15px] leading-snug text-white/[0.92] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[border-color,box-shadow] placeholder:text-white/35 focus-visible:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2a3dd6]/45'

/** Sanitiza e padroniza o e-mail (minúsculas, um @, caracteres permitidos). */
function formatEmailInput(raw: string): string {
  const t = raw
    .toLowerCase()
    .replace(/\s/g, '')
    .replace(/[^a-z0-9@._+-]/g, '')
  const at = t.indexOf('@')
  if (at === -1) return t.slice(0, 254)
  const local = t.slice(0, at).replace(/[^a-z0-9._+-]/g, '')
  const domain = t
    .slice(at + 1)
    .replace(/@/g, '')
    .replace(/[^a-z0-9.-]/g, '')
    .replace(/\.{2,}/g, '.')
  return `${local}@${domain}`.slice(0, 254)
}

function digitCountBeforeCaret(value: string, caret: number): number {
  let n = 0
  const end = Math.min(Math.max(caret, 0), value.length)
  for (let i = 0; i < end; i++) {
    if (/\d/.test(value[i]!)) n++
  }
  return n
}

function caretAfterDigitIndex(formatted: string, targetDigits: number): number {
  if (targetDigits <= 0) {
    const i = formatted.indexOf('(')
    return i >= 0 ? i + 1 : formatted.length
  }
  let seen = 0
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i]!)) {
      seen++
      if (seen >= targetDigits) return i + 1
    }
  }
  return formatted.length
}

/** Máscara visual BR: +55 (DD) 9XXXX-XXXX (celular) ou +55 (DD) XXXX-XXXX (fixo). */
function formatWhatsAppBR(raw: string): string {
  let d = raw.replace(/\D/g, '')
  if (d.startsWith('55')) d = d.slice(2)
  d = d.slice(0, 11)
  if (d.length === 0) return ''
  if (d.length <= 2) return `+55 (${d}`
  const ddd = d.slice(0, 2)
  const rest = d.slice(2)
  if (rest.length === 0) return `+55 (${ddd}) `
  const mobile = rest[0] === '9'
  const maxLocal = mobile ? 9 : 8
  const r = rest.slice(0, maxLocal)
  if (r.length === 0) return `+55 (${ddd}) `
  if (mobile) {
    if (r.length <= 5) return `+55 (${ddd}) ${r}`
    return `+55 (${ddd}) ${r.slice(0, 5)}-${r.slice(5)}`
  }
  if (r.length <= 4) return `+55 (${ddd}) ${r}`
  return `+55 (${ddd}) ${r.slice(0, 4)}-${r.slice(4)}`
}

function normalizeWhatsApp(value: string) {
  const digits = value.replace(/\D/g, '')
  if (!digits) return ''
  if (digits.startsWith('55')) return `+${digits}`
  return `+55${digits}`
}

export function DemoScheduler() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    whatsapp: '',
    company: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  const whatsappRef = useRef<HTMLInputElement>(null)
  const whatsappCaret = useRef<number | null>(null)

  useLayoutEffect(() => {
    const el = whatsappRef.current
    const pos = whatsappCaret.current
    if (el == null || pos == null) return
    whatsappCaret.current = null
    el.setSelectionRange(pos, pos)
  }, [form.whatsapp])

  const canSubmit = useMemo(() => {
    const ok =
      form.fullName.trim().length >= 3 &&
      /.+@.+\..+/.test(form.email.trim()) &&
      form.company.trim().length >= 2 &&
      form.whatsapp.replace(/\D/g, '').length >= 10
    return ok && status !== 'sending'
  }, [form, status])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('sending')
    setMessage('')
    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          whatsapp: normalizeWhatsApp(form.whatsapp),
          company: form.company.trim(),
          source: 'landing',
        }),
      })

      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string }
      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || 'Não foi possível enviar agora.')
      }

      setStatus('success')
      setMessage('Recebido. Em instantes entraremos em contato para agendar a demonstração.')
      setForm({ fullName: '', email: '', whatsapp: '', company: '' })
      whatsappCaret.current = null
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Não foi possível enviar agora.')
    }
  }

  return (
    <section id="agendar-demonstracao" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <FadeIn>
            <h2 className="max-w-xl text-balance text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl">
              Agende uma demonstração.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="max-w-xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg">
              Envie seus dados. Em seguida nosso time de especialista entrara em contato.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-10 sm:mt-12">
          <div
            className="relative overflow-hidden bg-white/[0.035] p-6 backdrop-blur-xl sm:p-7"
            style={{ borderRadius: '14px' }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
              <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#161BA9]/14 blur-[130px]" />
              <div className="absolute -right-44 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#2a3dd6]/10 blur-[140px]" />
            </div>

            <form onSubmit={onSubmit} className="relative grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2 sm:col-span-2">
                <label className="text-sm font-medium text-white/75" htmlFor="fullName">
                  Nome completo
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => setForm((s) => ({ ...s, fullName: e.target.value }))}
                  className={INPUT_CLASS}
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="grid gap-2 sm:col-span-1">
                <label className="text-sm font-medium text-white/75" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: formatEmailInput(e.target.value) }))}
                  className={INPUT_CLASS}
                  placeholder="voce@empresa.com.br"
                  required
                  maxLength={254}
                />
              </div>

              <div className="grid gap-2 sm:col-span-1">
                <label className="text-sm font-medium text-white/75" htmlFor="whatsapp">
                  WhatsApp
                </label>
                <input
                  ref={whatsappRef}
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.whatsapp}
                  onChange={(e) => {
                    const el = e.target
                    const before = digitCountBeforeCaret(el.value, el.selectionStart ?? 0)
                    const formatted = formatWhatsAppBR(el.value)
                    whatsappCaret.current = caretAfterDigitIndex(formatted, before)
                    setForm((s) => ({ ...s, whatsapp: formatted }))
                  }}
                  className={`${INPUT_CLASS} tabular-nums tracking-tight`}
                  placeholder="+55 (11) 98765-4321"
                  required
                  maxLength={20}
                />
              </div>

              <div className="grid gap-2 sm:col-span-2">
                <label className="text-sm font-medium text-white/75" htmlFor="company">
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                  className={INPUT_CLASS}
                  placeholder="Nome da empresa"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? 'Enviando…' : 'Agendar demonstração'}
                </button>
                {message ? (
                  <p
                    className={`mt-3 text-sm ${
                      status === 'success' ? 'text-white/75' : status === 'error' ? 'text-red-200/80' : 'text-white/60'
                    }`}
                    role={status === 'error' ? 'alert' : undefined}
                  >
                    {message}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

