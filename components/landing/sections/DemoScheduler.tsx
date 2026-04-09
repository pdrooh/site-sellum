'use client'

import { useMemo, useState } from 'react'
import { FadeIn } from '../motion/FadeIn'

type FormState = {
  fullName: string
  email: string
  whatsapp: string
  company: string
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
                  className="h-11 rounded-[8px] px-4"
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
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  className="h-11 rounded-[8px] px-4"
                  placeholder="voce@empresa.com"
                  required
                />
              </div>

              <div className="grid gap-2 sm:col-span-1">
                <label className="text-sm font-medium text-white/75" htmlFor="whatsapp">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  inputMode="tel"
                  autoComplete="tel"
                  value={form.whatsapp}
                  onChange={(e) => setForm((s) => ({ ...s, whatsapp: e.target.value }))}
                  className="h-11 rounded-[8px] px-4"
                  placeholder="+55 (11) 99999-9999"
                  required
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
                  className="h-11 rounded-[8px] px-4"
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

