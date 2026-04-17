'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/admin/artigos', label: 'Artigos' },
  { href: '/admin/artigos/novo', label: 'Novo' },
  { href: '/admin/membros', label: 'Membros' },
] as const

function isActive(pathname: string, href: string) {
  if (href === '/admin/artigos') return pathname === '/admin/artigos'
  if (href === '/admin/artigos/novo') return pathname === '/admin/artigos/novo'
  return pathname === '/admin/membros'
}

export function AdminMobileNav() {
  const pathname = usePathname()

  return (
    <nav className="mb-6 flex flex-wrap gap-1.5 lg:hidden" aria-label="Admin (mobile)">
      {items.map((item) => {
        const on = isActive(pathname, item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-3 py-2 text-xs font-medium transition ${
              on ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-200'
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
