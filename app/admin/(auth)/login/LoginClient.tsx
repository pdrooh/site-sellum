'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export function LoginClient() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const nextPath = searchParams.get('next') ?? '/admin'
  const config = searchParams.get('config') === '1'

  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        credentials: 'include',
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        setError(data?.error ?? 'Não foi possível entrar.')
        return
      }
      router.replace(nextPath.startsWith('/admin') ? nextPath : '/admin')
      router.refresh()
    } catch {
      setError('Erro de rede. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030306] px-4 py-10 sm:py-12">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(22,27,169,0.22),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="relative z-10 w-full max-w-[22rem] sm:max-w-[24rem]">
        <div className="radius-14 border border-white/[0.08] bg-black/50 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_24px_64px_-28px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:p-7">
          <div className="flex flex-col items-center text-center">
            <Image src="/images/logo/logo-dark.svg" alt="Sellum" width={112} height={26} className="h-6 w-auto" />
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">Admin</p>
          </div>

          <h1 className="mt-6 text-center text-lg font-semibold tracking-tight text-white sm:text-xl">Entrar no painel</h1>
          <p className="mx-auto mt-1.5 max-w-[18rem] text-center text-xs leading-relaxed text-white/45">
            Acesso restrito. Use a senha fornecida pela equipe.
          </p>

          <Link
            href="/"
            className="mx-auto mt-4 block w-fit text-[11px] font-medium text-white/40 transition hover:text-white/70"
          >
            ← Voltar ao site
          </Link>

          {config ? (
            <div className="mt-5 rounded-[8px] border border-amber-400/25 bg-amber-400/5 p-3 text-left text-xs leading-relaxed text-amber-100/90">
              <p className="font-semibold text-amber-50">Configuração necessária</p>
              <p className="mt-1.5">
                Defina <span className="font-mono text-[10px] text-amber-50">ADMIN_PASSWORD</span> e{' '}
                <span className="font-mono text-[10px] text-amber-50">ADMIN_SESSION_TOKEN</span> no ambiente.
              </p>
            </div>
          ) : null}

          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-1.5">
              <label className="text-left text-xs font-medium text-white/55" htmlFor="admin-password">
                Senha
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  className="h-10 w-full pl-10 pr-[4.5rem] font-mono text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/35" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-3.5 w-3.5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-1.5 0h12a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5Z"
                    />
                  </svg>
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-[6px] px-2 py-1 text-[10px] font-semibold text-white/50 transition hover:bg-white/[0.06] hover:text-white"
                  aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                >
                  {showPassword ? 'Ocultar' : 'Ver'}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-2 text-left">
              <input type="checkbox" className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded-[4px]" defaultChecked />
              <span className="text-[11px] leading-snug text-white/45">Manter sessão neste dispositivo (7 dias)</span>
            </label>

            {error ? (
              <div className="rounded-[8px] border border-red-400/25 bg-red-400/5 px-3 py-2 text-left text-xs text-red-200">
                {error}
              </div>
            ) : null}

            <button type="submit" className="btn-primary h-10 w-full justify-center text-sm" disabled={loading}>
              {loading ? 'Entrando…' : 'Entrar'}
            </button>
          </form>

          <p className="mt-5 text-center text-[10px] leading-relaxed text-white/35">
            Sessão HTTPOnly · rate limit por IP
          </p>

          <p className="mt-3 text-center text-[10px] text-white/30">
            © {new Date().getFullYear()} Sellum ·{' '}
            <Link href="/ajuda" className="text-[#7ea3ff]/90 underline decoration-white/10 underline-offset-2 hover:text-[#a8b9ff]">
              Ajuda
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
