'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import type { Member } from '@/lib/types/member'

export function AdminMembrosTable({ members, canWrite }: { members: Member[]; canWrite: boolean }) {
  const router = useRouter()
  const [loadingId, setLoadingId] = useState<string | null>(null)

  async function remove(id: string) {
    if (!canWrite) return
    if (!confirm('Remover este membro?')) return
    setLoadingId(id)
    try {
      const res = await fetch(`/api/admin/members/${encodeURIComponent(id)}`, {
        method: 'DELETE',
        credentials: 'include',
      })
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        alert(data?.error ?? 'Não foi possível remover.')
        return
      }
      router.refresh()
    } finally {
      setLoadingId(null)
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-zinc-800/80">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-800/80 bg-zinc-900/40">
            <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-zinc-500">Nome</th>
            <th className="hidden px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-zinc-500 sm:table-cell">
              Email
            </th>
            <th className="hidden px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-zinc-500 md:table-cell">
              Função
            </th>
            <th className="px-4 py-3 text-right text-[11px] font-medium uppercase tracking-wide text-zinc-500">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800/60">
          {members.map((m) => (
            <tr key={m.id} className="text-zinc-400 transition hover:bg-zinc-900/25">
              <td className="px-4 py-3.5 align-top">
                <div className="font-medium text-zinc-200">{m.name}</div>
                <div className="mt-1 text-xs text-zinc-500 sm:hidden">{m.email}</div>
              </td>
              <td className="hidden px-4 py-3.5 align-top text-zinc-500 sm:table-cell">{m.email}</td>
              <td className="hidden px-4 py-3.5 align-top text-zinc-500 md:table-cell">{m.role}</td>
              <td className="px-4 py-3.5 text-right align-top">
                <button
                  type="button"
                  className="rounded-md border border-red-900/50 bg-red-950/20 px-2.5 py-1.5 text-xs font-medium text-red-400/90 transition hover:border-red-800/70 hover:bg-red-950/35 disabled:opacity-40"
                  onClick={() => remove(m.id)}
                  disabled={!canWrite || loadingId === m.id}
                >
                  {loadingId === m.id ? 'Removendo…' : 'Remover'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {members.length === 0 ? <p className="p-6 text-sm text-zinc-500">Nenhum membro cadastrado.</p> : null}
    </div>
  )
}
