export function AdminFilesystemBanner({ enabled }: { enabled: boolean }) {
  if (enabled) return null
  return (
    <div className="mb-6 rounded-lg border border-amber-900/40 bg-amber-950/25 p-4 text-sm text-amber-200/90">
      <p className="font-medium text-amber-100">Sem escrita no disco neste ambiente</p>
      <p className="mt-2 text-[13px] leading-relaxed text-amber-200/75">
        Edite localmente ou defina <code className="rounded bg-black/30 px-1 font-mono text-[11px]">ALLOW_BLOG_FS_ADMIN</code>{' '}
        com storage persistente. Em serverless, use Git ou um CMS com API.
      </p>
    </div>
  )
}
