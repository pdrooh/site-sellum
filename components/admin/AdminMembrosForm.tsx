'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AdminMembrosForm({ disabled }: { disabled: boolean }) {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (disabled) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ name, email, role }),
      })
      const data = (await res.json().catch(() => null)) as { error?: string } | null
      if (!res.ok) {
        setError(data?.error ?? 'Não foi possível adicionar.')
        return
      }
      setName('')
      setEmail('')
      setRole('')
      router.refresh()
    } catch {
      setError('Erro de rede. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="grid max-w-2xl gap-4 rounded-lg border border-zinc-800/80 bg-zinc-900/20 p-5 sm:p-6" onSubmit={onSubmit}>
      <p className="text-sm font-medium text-zinc-300">Adicionar membro</p>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-500" htmlFor="m-name">
            Nome
          </label>
          <input id="m-name" className="h-11 px-4" value={name} onChange={(e) => setName(e.target.value)} required disabled={disabled} />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-500" htmlFor="m-email">
            Email
          </label>
          <input
            id="m-email"
            type="email"
            className="h-11 px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={disabled}
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-500" htmlFor="m-role">
            Função
          </label>
          <input id="m-role" className="h-11 px-4" value={role} onChange={(e) => setRole(e.target.value)} required disabled={disabled} />
        </div>
      </div>
      {error ? <p className="text-sm text-red-400/90">{error}</p> : null}
      <button type="submit" className="btn-primary w-full max-w-xs justify-center sm:w-auto" disabled={disabled || loading}>
        {loading ? 'Adicionando…' : 'Adicionar'}
      </button>
    </form>
  )
}
