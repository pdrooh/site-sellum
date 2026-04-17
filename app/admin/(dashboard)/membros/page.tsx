import { getMembers } from '@/lib/members'
import { AdminMembrosForm } from '@/components/admin/AdminMembrosForm'
import { AdminMembrosTable } from '@/components/admin/AdminMembrosTable'
import { AdminFilesystemBanner } from '@/components/admin/AdminFilesystemBanner'
import { canWriteAdminFilesystem } from '@/lib/admin/fs-access'

export default async function AdminMembrosPage() {
  const members = await getMembers()
  const canWrite = canWriteAdminFilesystem()

  return (
    <div>
      <div className="border-b border-zinc-800/80 pb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-[1.65rem]">Membros</h1>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-zinc-500">
          Lista interna em{' '}
          <code className="rounded bg-zinc-900 px-1 py-0.5 font-mono text-[11px] text-zinc-400">data/members.json</code>.
        </p>
      </div>

      <div className="mt-8">
        <AdminFilesystemBanner enabled={canWrite} />
        <AdminMembrosForm disabled={!canWrite} />
        <div className="mt-8">
          <AdminMembrosTable members={members} canWrite={canWrite} />
        </div>
      </div>
    </div>
  )
}
