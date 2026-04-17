import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Header } from '@/components/landing/sections/Header'
import { Footer } from '@/components/landing/sections/Footer'
import { BlogReadingProgress } from '@/components/blog/BlogReadingProgress'
import { BlogMarkdown } from '@/components/blog/BlogMarkdown'
import { BlogArticleCta } from '@/components/blog/BlogArticleCta'
import { getBlogArticleJsonLd } from '@/lib/blog/jsonld'
import { getPostBySlug, getPostSlugs } from '@/lib/blog'

type PageProps = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post || post.index === false) {
    return { title: 'Artigo', robots: { index: false, follow: false } }
  }

  const url = `https://sellum.app/blog/${post.slug}`
  const title = `${post.title} | Sellum`
  const published = new Date(post.publishedAt)
  const modified = post.updatedAt ? new Date(post.updatedAt) : published

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    authors: [{ name: post.author, url: 'https://sellum.app' }],
    openGraph: {
      title,
      description: post.description,
      url,
      type: 'article',
      locale: 'pt_BR',
      publishedTime: published.toISOString(),
      modifiedTime: modified.toISOString(),
      authors: [post.author],
      ...(post.image ? { images: [{ url: post.image, alt: post.title }] } : {}),
    },
    twitter: {
      card: post.image ? 'summary_large_image' : 'summary',
      title,
      description: post.description,
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post || post.index === false) {
    notFound()
  }

  const published = new Date(post.publishedAt)
  const dateShort = published.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' })
  const jsonLd = getBlogArticleJsonLd(post)

  const initials = post.author
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="page-atmosphere min-h-full bg-[#030306]">
      <BlogReadingProgress />
      <Header />

      {/* Separação visual header ↔ conteúdo (estilo editorial) */}
      <div
        className="pointer-events-none fixed left-0 right-0 top-20 z-[48] h-px bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
        aria-hidden
      />

      <main className="relative z-[1] border-t border-white/[0.04] bg-[linear-gradient(180deg,#06060c_0%,#030306_32%,#030306_100%)] pb-32 pt-[calc(7.5rem+env(safe-area-inset-top,0px))]">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[min(52vh,520px)] w-[min(100%,42rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(22,27,169,0.12),transparent_65%)]"
          aria-hidden
        />

        <article className="relative mx-auto w-full max-w-[min(100%-2rem,38rem)] px-1 sm:px-0">
          <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[12px]" aria-label="Trilha">
            <Link href="/blog" className="text-white/42 transition hover:text-white/85">
              Blog
            </Link>
            <span className="text-white/12 select-none" aria-hidden>
              /
            </span>
            <span className="max-w-[min(100%,18rem)] truncate text-white/32 sm:max-w-[24rem]">{post.title}</span>
          </nav>

          <header className="mt-12 sm:mt-14">
            {post.category ? (
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#93a8ff]/95">{post.category}</p>
            ) : null}
            <h1
              className={`text-balance font-semibold tracking-[-0.035em] text-white ${post.category ? 'mt-4' : 'mt-0'} text-[1.65rem] leading-[1.18] sm:text-[2rem] sm:leading-[1.14]`}
            >
              {post.title}
            </h1>
            <p className="mt-6 max-w-[34rem] text-pretty text-[1.05rem] font-normal leading-[1.65] text-white/52 sm:text-[1.125rem] sm:leading-[1.62]">
              {post.description}
            </p>

            {/* Meta leve — sem “caixa” pesada */}
            <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-white/42">
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[linear-gradient(145deg,#2f45d4,#1a2088)] text-[10px] font-semibold tracking-tight text-white/95 ring-1 ring-white/[0.08]"
                  aria-hidden
                >
                  {initials}
                </span>
                <span className="min-w-0">
                  <span className="font-medium text-white/[0.88]">{post.author}</span>
                  {post.authorRole ? (
                    <>
                      <span className="text-white/18"> · </span>
                      <span className="text-white/38">{post.authorRole}</span>
                    </>
                  ) : null}
                </span>
              </div>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:inline" aria-hidden />
              <time dateTime={published.toISOString()} className="tabular-nums text-white/40">
                {dateShort}
              </time>
              <span className="text-white/15">·</span>
              <span className="tabular-nums">{post.readingTimeMinutes} min</span>
            </div>

            <div className="mt-10 h-px w-full max-w-[6rem] bg-gradient-to-r from-[#4d82ff]/50 to-transparent" aria-hidden />
          </header>

          <div className="mt-12 sm:mt-14">
            <BlogMarkdown content={post.content} />
          </div>

          <BlogArticleCta />
        </article>
      </main>

      <Footer />

      <Script id="ld-article" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(jsonLd)}
      </Script>
    </div>
  )
}
