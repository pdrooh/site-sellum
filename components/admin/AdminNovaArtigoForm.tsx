'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AdminNovaArtigoForm({ disabled }: { disabled: boolean }) {
  const router = useRouter()
  const [slug, setSlug] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [author, setAuthor] = useState('Sellum')
  const [authorRole, setAuthorRole] = useState('')
  const [category, setCategory] = useState('')
  const [publishedAt, setPublishedAt] = useState(() => new Date().toISOString().slice(0, 16))
  const [index, setIndex] = useState(true)
  const [content, setContent] = useState('# Título\n\nEscreva em Markdown.\n')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (disabled) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          slug,
          title,
          description,
          author,
          authorRole: authorRole.trim() || undefined,
          category: category.trim() || undefined,
          publishedAt: new Date(publishedAt).toISOString(),
          index,
          content,
        }),
      })
      const data = (await res.json().catch(() => null)) as { error?: string; slug?: string } | null
      if (!res.ok) {
        setError(data?.error ?? 'Não foi possível salvar.')
        return
      }
      router.push('/admin/artigos')
      router.refresh()
    } catch {
      setError('Erro de rede. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="grid max-w-3xl gap-5" onSubmit={onSubmit}>
      <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-500" htmlFor="slug">
            Slug (URL)
          </label>
          <input
            id="slug"
            className="h-11 rounded-[8px] px-4 font-mono text-sm"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="meu-artigo-b2b"
            required
            disabled={disabled}
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-500" htmlFor="publishedAt">
            Publicação (local)
          </label>
          <input
            id="publishedAt"
            type="datetime-local"
            className="h-11 rounded-[8px] px-4"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            required
            disabled={disabled}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-zinc-500" htmlFor="title">
          Título
        </label>
        <input
          id="title"
          className="h-11 rounded-[8px] px-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={disabled}
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-zinc-500" htmlFor="description">
          Descrição (SEO)
        </label>
        <textarea
          id="description"
          className="min-h-[90px] rounded-[8px] px-4 py-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          disabled={disabled}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-500" htmlFor="author">
            Autor
          </label>
          <input
            id="author"
            className="h-11 rounded-[8px] px-4"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            disabled={disabled}
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium text-zinc-500" htmlFor="authorRole">
            Função (opcional)
          </label>
          <input
            id="authorRole"
            className="h-11 rounded-[8px] px-4"
            value={authorRole}
            onChange={(e) => setAuthorRole(e.target.value)}
            disabled={disabled}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-zinc-500" htmlFor="category">
          Categoria (opcional)
        </label>
        <input
          id="category"
          className="h-11 rounded-[8px] px-4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={disabled}
        />
      </div>

      <label className="flex items-center gap-3 text-sm text-zinc-500">
        <input type="checkbox" checked={index} onChange={(e) => setIndex(e.target.checked)} disabled={disabled} />
        Permitir indexação (SEO)
      </label>

      <div className="grid gap-2">
        <label className="text-sm font-medium text-zinc-500" htmlFor="content">
          Conteúdo (Markdown)
        </label>
        <textarea
          id="content"
          className="min-h-[320px] rounded-[8px] px-4 py-3 font-mono text-sm leading-relaxed"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          disabled={disabled}
        />
      </div>

      {error ? <p className="text-sm text-red-300/90">{error}</p> : null}

      <button type="submit" className="btn-primary w-full max-w-xs justify-center" disabled={disabled || loading}>
        {loading ? 'Salvando…' : 'Publicar artigo'}
      </button>
    </form>
  )
}
