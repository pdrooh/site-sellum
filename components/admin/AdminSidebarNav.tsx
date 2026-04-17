'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/admin/artigos', label: 'Artigos' },
  { href: '/admin/artigos/novo', label: 'Novo artigo' },
  { href: '/admin/membros', label: 'Membros' },
] as const

export function AdminSidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="space-y-0.5" aria-label="Seções">
      {nav.map((item) => {
        const on =
          item.href === '/admin/artigos'
            ? pathname === '/admin/artigos'
            : item.href === '/admin/artigos/novo'
              ? pathname === '/admin/artigos/novo'
              : pathname === '/admin/membros'

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-md border-l-2 py-2 pl-3 pr-2 text-[13px] font-medium transition ${
              on
                ? 'border-[#5b6fd8] bg-zinc-800/50 text-zinc-50'
                : 'border-transparent text-zinc-500 hover:bg-zinc-800/30 hover:text-zinc-200'
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
