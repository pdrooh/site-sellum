'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AdminDeletePostButton({ slug }: { slug: string }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function onDelete() {
    if (!confirm(`Remover o artigo “${slug}”? Esta ação não pode ser desfeita.`)) return
    setLoading(true)
    try {
      const res = await fetch(`/api/admin/posts/${encodeURIComponent(slug)}`, {
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
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      className="rounded-md border border-red-900/50 bg-red-950/20 px-2.5 py-1.5 text-xs font-medium text-red-400/90 transition hover:border-red-800/70 hover:bg-red-950/35 disabled:opacity-40"
      onClick={onDelete}
      disabled={loading}
    >
      {loading ? 'Removendo…' : 'Remover'}
    </button>
  )
}
