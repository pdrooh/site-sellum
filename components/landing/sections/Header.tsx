'use client'

import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'

const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL ?? '#'

const primaryLinks = [
  { href: '/produtos', label: 'Produtos' },
  { href: '/planos', label: 'Planos' },
  { href: '/demonstracao', label: 'Demonstração' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/contato', label: 'Contato' },
] as const

const resourceLinks = [
  { href: '/api', label: 'API' },
  { href: '/academy', label: 'Academy' },
  { href: '/partners', label: 'Partners' },
] as const

export function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const drawerRef = useRef<HTMLElement>(null)
  const menuBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        e.preventDefault()
        setOpen(false)
        menuBtnRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-200 ${
        solid || open
          ? 'border-b border-white/[0.06] bg-[#1c1c1c]/88 backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-h-[44px] min-w-[44px] items-center gap-2 py-1">
          <Image
            src="/images/logo/logo-dark.svg"
            alt="Sellum"
            width={120}
            height={28}
            className="h-6 w-auto opacity-95 sm:h-7"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {primaryLinks
            .filter((l) => l.href !== '/recursos')
            .map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-[8px] px-2.5 py-2 text-[13px] font-medium text-white/70 transition hover:text-white"
              >
                {l.label}
              </Link>
            ))}

          <div className="relative">
            <Link
              href="/recursos"
              className="group inline-flex items-center gap-1 rounded-[8px] px-2.5 py-2 text-[13px] font-medium text-white/70 transition hover:text-white"
            >
              Recursos
              <span className="translate-y-[0.5px] text-white/40 transition group-hover:text-white/70" aria-hidden>
                ▾
              </span>
            </Link>

            <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-[220px] translate-y-1 opacity-0 transition duration-150 ease-out [filter:drop-shadow(0_20px_60px_rgba(0,0,0,0.6))] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="overflow-hidden rounded-[8px] border border-white/[0.08] bg-black/85 backdrop-blur-xl backdrop-saturate-150">
                <div className="px-2 py-2">
                  {resourceLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex items-center justify-between rounded-[8px] px-3 py-2 text-[13px] font-medium text-white/70 transition hover:bg-white/[0.05] hover:text-white"
                    >
                      {l.label}
                      <span className="text-[#4d82ff] opacity-70">›</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <span className="mx-3 hidden h-4 w-px bg-white/10 xl:block" aria-hidden />
          <Link
            href={dashboardUrl}
            className="rounded-[8px] px-3 py-2 text-[13px] font-medium text-white/70 transition hover:text-white"
          >
            Log in
          </Link>
          <Link
            href="/demonstracao"
            className="inline-flex h-9 items-center justify-center rounded-[8px] bg-white px-3.5 text-[13px] font-semibold text-black transition hover:bg-white/90"
          >
            Sign up
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/demonstracao"
            className="inline-flex h-10 items-center justify-center rounded-[8px] bg-white px-3 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Sign up
          </Link>
          <button
            ref={menuBtnRef}
            type="button"
            className="btn-secondary h-11 w-11 !px-0 !py-0"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-haspopup="dialog"
            aria-labelledby={titleId}
            onClick={() => setOpen(true)}
          >
            <span id={titleId} className="sr-only">
              Abrir menu
            </span>
            <span className="relative block h-5 w-6" aria-hidden>
              <m.span
                className="absolute left-0 top-[1px] h-0.5 w-full rounded-full bg-current"
                animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.18 }}
              />
              <m.span
                className="absolute left-0 top-[8px] h-0.5 w-full rounded-full bg-current"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <m.span
                className="absolute left-0 top-[15px] h-0.5 w-full rounded-full bg-current"
                animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.18 }}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            key="mobile-root"
            className="fixed inset-0 z-[60] bg-black lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            onClick={() => setOpen(false)}
          >
            <m.nav
              ref={drawerRef}
              id="mobile-nav"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              className="relative z-[1] flex h-full w-full flex-col bg-black px-5 pt-[calc(1rem+env(safe-area-inset-top,0px))] pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between gap-3 pb-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#4d82ff]">
                  Navegação
                </p>
                <button type="button" className="btn-secondary !px-4 !py-2 !text-xs" onClick={() => setOpen(false)}>
                  Fechar
                </button>
              </div>

              <div className="min-h-0 flex flex-1 flex-col gap-2 overflow-y-auto overscroll-contain">
                {primaryLinks
                  .filter((l) => l.href !== '/recursos')
                  .map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="flex min-h-[56px] items-center justify-between rounded-[8px] border border-white/[0.08] bg-white/[0.02] px-5 text-lg font-semibold tracking-tight text-white transition hover:border-[#2a3dd6]/35 hover:bg-white/[0.05]"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                      <span className="text-[#4d82ff]">›</span>
                    </Link>
                  ))}

                <div className="mt-2">
                  <Link
                    href="/recursos"
                    className="flex min-h-[56px] items-center justify-between rounded-[8px] border border-white/[0.10] bg-white/[0.03] px-5 text-lg font-semibold tracking-tight text-white transition hover:border-[#2a3dd6]/35 hover:bg-white/[0.06]"
                    onClick={() => setOpen(false)}
                  >
                    Recursos
                    <span className="text-[#4d82ff]">›</span>
                  </Link>

                  <div className="mt-2 grid gap-2 pl-3">
                    {resourceLinks.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex min-h-[48px] items-center justify-between rounded-[8px] border border-white/[0.06] bg-white/[0.015] px-5 text-base font-semibold tracking-tight text-white/85 transition hover:border-[#2a3dd6]/30 hover:bg-white/[0.04]"
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                        <span className="text-[#4d82ff] opacity-80">›</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.08] pt-5">
                <Link href={dashboardUrl} className="btn-secondary w-full justify-center" onClick={() => setOpen(false)}>
                  Log in
                </Link>
                <Link href="/demonstracao" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
                  Sign up
                </Link>
              </div>
            </m.nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

