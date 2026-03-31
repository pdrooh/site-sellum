import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.06] bg-black pb-[max(2rem,env(safe-area-inset-bottom))] pt-12 sm:pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <div>
            <Link href="/" className="inline-flex items-center opacity-90 transition hover:opacity-100">
              <Image
                src="/images/logo/logo-dark.svg"
                alt="Sellum"
                width={108}
                height={26}
                className="h-6 w-auto"
              />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Product</p>
              <nav className="grid gap-2 text-sm text-white/55">
                <Link href="/produtos" className="transition hover:text-white">Produtos</Link>
                <Link href="/planos" className="transition hover:text-white">Planos</Link>
                <Link href="/demonstracao" className="transition hover:text-white">Demonstração</Link>
              </nav>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Features</p>
              <nav className="grid gap-2 text-sm text-white/55">
                <Link href="/recursos" className="transition hover:text-white">Recursos</Link>
                <Link href="/api" className="transition hover:text-white">API</Link>
                <Link href="/partners" className="transition hover:text-white">Partners</Link>
              </nav>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Company</p>
              <nav className="grid gap-2 text-sm text-white/55">
                <Link href="/contato" className="transition hover:text-white">Contato</Link>
              </nav>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Resources</p>
              <nav className="grid gap-2 text-sm text-white/55">
                <Link href="/academy" className="transition hover:text-white">Academy</Link>
              </nav>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">Connect</p>
              <nav className="grid gap-2 text-sm text-white/55">
                <Link href="/contato" className="transition hover:text-white">Contact us</Link>
                <a href="mailto:contato@sellum.app" className="transition hover:text-white">Email</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/[0.06] pb-8 pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/45">
              <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
              <Link href="/terms" className="transition hover:text-white">Terms</Link>
              <Link href="/dpa" className="transition hover:text-white">DPA</Link>
            </nav>
            <p className="text-xs text-white/35">© {new Date().getFullYear()} Sellum. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

