import { AdminNovaArtigoForm } from '@/components/admin/AdminNovaArtigoForm'
import { AdminFilesystemBanner } from '@/components/admin/AdminFilesystemBanner'
import { canWriteAdminFilesystem } from '@/lib/admin/fs-access'

export default function AdminNovoArtigoPage() {
  const canWrite = canWriteAdminFilesystem()

  return (
    <div>
      <div className="border-b border-zinc-800/80 pb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-[1.65rem]">Novo artigo</h1>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">
          Cria um Markdown em{' '}
          <code className="rounded bg-zinc-900 px-1 py-0.5 font-mono text-[11px] text-zinc-400">content/blog</code> com
          frontmatter compatível com o site.
        </p>
      </div>

      <div className="mt-8">
        <AdminFilesystemBanner enabled={canWrite} />
        <AdminNovaArtigoForm disabled={!canWrite} />
      </div>
    </div>
  )
}
