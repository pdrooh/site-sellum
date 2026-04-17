'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AdminLogoutButton() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function logout() {
    setLoading(true)
    try {
      await fetch('/api/admin/logout', { method: 'POST', credentials: 'include' })
      router.replace('/admin/login')
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      className="rounded-md border border-zinc-700/90 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-zinc-600 hover:bg-zinc-800/50 hover:text-zinc-200 disabled:opacity-50"
      onClick={logout}
      disabled={loading}
    >
      {loading ? 'Saindo…' : 'Sair'}
    </button>
  )
}
