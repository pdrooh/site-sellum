import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'
import { BlogPostList } from '@/components/blog/BlogPostList'
import { getIndexedPostsMeta } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos sobre vendas B2B, operação comercial, integrações e previsibilidade — Sellum.',
  alternates: { canonical: 'https://sellum.app/blog' },
  openGraph: {
    title: 'Blog | Sellum',
    description: 'Artigos sobre vendas B2B e operação comercial.',
    url: 'https://sellum.app/blog',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default async function BlogIndexPage() {
  const posts = await getIndexedPostsMeta()

  return (
    <div className="page-atmosphere min-h-full">
      <Header />
      <main className="relative z-[1] pb-28 pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[min(52vh,520px)] bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(22,27,169,0.22),transparent_58%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px max-w-3xl bg-gradient-to-r from-transparent via-white/12 to-transparent mx-auto" aria-hidden />

        <header className="relative mx-auto max-w-6xl px-4 pb-16 text-center lg:px-8 lg:pb-20">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#7ea3ff]/90">Sellum · Blog</p>
          <h1 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.05]">
            Operação comercial B2B, com clareza
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/50 sm:text-lg sm:leading-relaxed">
            Artigos curtos sobre vendas, dados e integrações — para quem precisa escalar sem perder governança.
          </p>
        </header>

        <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
          <BlogPostList posts={posts} />

          <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/[0.06] pt-10 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-3 text-sm text-white/40">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">Feed</span>
              <Link
                href="/blog/rss.xml"
                className="inline-flex items-center gap-2 rounded-[8px] border border-white/[0.08] bg-white/[0.03] px-3 py-2 font-mono text-xs font-medium text-[#a8b9ff] transition hover:border-white/[0.12] hover:text-white"
              >
                /blog/rss.xml
              </Link>
            </div>
            <Link href="/contato" className="text-sm font-medium text-white/45 transition hover:text-white">
              Fale com a equipe →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
