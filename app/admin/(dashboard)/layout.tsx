import Link from 'next/link'
import Image from 'next/image'
import { AdminLogoutButton } from '@/components/admin/AdminLogoutButton'
import { AdminSidebarNav } from '@/components/admin/AdminSidebarNav'
import { AdminMobileNav } from '@/components/admin/AdminMobileNav'

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#09090b]">
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-30%,rgba(24,28,48,0.4),transparent_52%)]" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-[#09090b]/90 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-3">
            <Link href="/" className="inline-flex shrink-0 opacity-90 transition hover:opacity-100">
              <Image src="/images/logo/logo-dark.svg" alt="Sellum" width={100} height={24} className="h-[1.35rem] w-auto sm:h-6" />
            </Link>
            <span className="hidden text-zinc-600 sm:inline" aria-hidden>
              /
            </span>
            <span className="hidden truncate text-sm text-zinc-500 sm:inline">Painel</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/blog"
              target="_blank"
              className="hidden text-sm text-zinc-500 transition hover:text-zinc-300 sm:inline"
            >
              Blog público
            </Link>
            <AdminLogoutButton />
          </div>
        </div>
      </header>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 pt-[calc(3.5rem+1.75rem)] sm:px-6 lg:flex-row lg:gap-10 lg:pt-[calc(3.5rem+2rem)]">
        <aside className="hidden shrink-0 lg:block lg:w-44">
          <div className="sticky top-[calc(3.5rem+1rem)] lg:top-[calc(3.5rem+1.25rem)]">
            <AdminSidebarNav />
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <AdminMobileNav />
          <div className="rounded-xl border border-zinc-800/90 bg-zinc-950/50 p-6 sm:p-8">{children}</div>
        </div>
      </div>
    </div>
  )
}
