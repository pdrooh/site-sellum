import Image from 'next/image'
import Link from 'next/link'

/** Apenas rotas que existem em `app/**/page.tsx` (site público). */
const footerNav = [
  { href: '/produtos', label: 'Produtos' },
  { href: '/planos', label: 'Planos' },
  { href: '/demonstracao', label: 'Demonstração' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/blog', label: 'Blog' },
  { href: '/academy', label: 'Academy' },
  { href: '/ajuda', label: 'Central de Ajuda' },
  { href: '/comparativo', label: 'Comparativo' },
  { href: '/partners', label: 'Partners' },
  { href: '/api', label: 'API' },
  { href: '/contato', label: 'Contato' },
] as const

const legal = [
  { href: '/privacy', label: 'Privacidade' },
  { href: '/terms', label: 'Termos' },
  { href: '/dpa', label: 'DPA' },
] as const

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.06] bg-transparent pb-[max(2rem,env(safe-area-inset-bottom))] pt-12 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14">
          <div className="shrink-0">
            <Link href="/" className="inline-flex items-center opacity-90 transition hover:opacity-100">
              <Image
                src="/images/logo/logo-dark.svg"
                alt="Sellum"
                width={108}
                height={26}
                className="theme-logo h-6 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
              <a href="mailto:contato@sellum.app" className="transition hover:text-white/80">
                contato@sellum.app
              </a>
            </p>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Mapa do site</p>
            <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3 lg:grid-cols-4" aria-label="Rodapé">
              {footerNav.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/55 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pb-8 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/45" aria-label="Legal">
              {legal.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-white/35">© {new Date().getFullYear()} Sellum. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
