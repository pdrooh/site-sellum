import Link from 'next/link'
import { getAllPostsMeta } from '@/lib/blog'
import { AdminDeletePostButton } from '@/components/admin/AdminDeletePostButton'
import { canWriteAdminFilesystem } from '@/lib/admin/fs-access'
import { AdminFilesystemBanner } from '@/components/admin/AdminFilesystemBanner'

export default async function AdminArtigosPage() {
  const posts = await getAllPostsMeta()
  const canWrite = canWriteAdminFilesystem()

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-zinc-800/80 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-[1.65rem]">Artigos</h1>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">
            Arquivos em <code className="rounded bg-zinc-900 px-1 py-0.5 font-mono text-[11px] text-zinc-400">content/blog</code>
            . Datas e indexação vêm do frontmatter.
          </p>
        </div>
        <Link href="/admin/artigos/novo" className="btn-primary shrink-0 justify-center self-start sm:self-auto">
          Novo artigo
        </Link>
      </div>

      <AdminFilesystemBanner enabled={canWrite} />

      <div className="mt-8 overflow-hidden rounded-lg border border-zinc-800/80">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-800/80 bg-zinc-900/40">
              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-zinc-500">Título</th>
              <th className="hidden px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-zinc-500 sm:table-cell">
                Slug
              </th>
              <th className="hidden px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-zinc-500 md:table-cell">
                Publicação
              </th>
              <th className="px-4 py-3 text-left text-[11px] font-medium uppercase tracking-wide text-zinc-500">Index</th>
              <th className="px-4 py-3 text-right text-[11px] font-medium uppercase tracking-wide text-zinc-500">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60">
            {posts.map((p) => {
              const date = new Date(p.publishedAt)
              const label = Number.isFinite(date.getTime()) ? date.toLocaleDateString('pt-BR') : '—'
              return (
                <tr key={p.slug} className="text-zinc-400 transition hover:bg-zinc-900/25">
                  <td className="px-4 py-3.5 align-top">
                    <div className="font-medium text-zinc-200">{p.title}</div>
                    <div className="mt-1 font-mono text-[11px] text-zinc-500 sm:hidden">{p.slug}</div>
                  </td>
                  <td className="hidden px-4 py-3.5 align-top font-mono text-xs text-zinc-500 sm:table-cell">{p.slug}</td>
                  <td className="hidden px-4 py-3.5 align-top tabular-nums text-zinc-500 md:table-cell">{label}</td>
                  <td className="px-4 py-3.5 align-top">
                    <span
                      className={`inline-block rounded px-2 py-0.5 text-[11px] font-medium ${
                        p.index !== false
                          ? 'bg-emerald-950/60 text-emerald-400/90 ring-1 ring-emerald-800/50'
                          : 'bg-zinc-900 text-zinc-500 ring-1 ring-zinc-700/80'
                      }`}
                    >
                      {p.index !== false ? 'index' : 'noindex'}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right align-top">
                    <div className="inline-flex flex-wrap justify-end gap-2">
                      <Link
                        href={`/blog/${p.slug}`}
                        className="rounded-md border border-zinc-700/90 bg-zinc-900/40 px-2.5 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-zinc-600 hover:text-zinc-200"
                        target="_blank"
                      >
                        Ver
                      </Link>
                      <AdminDeletePostButton slug={p.slug} />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {posts.length === 0 ? <p className="p-6 text-sm text-zinc-500">Nenhum artigo encontrado.</p> : null}
      </div>
    </div>
  )
}
