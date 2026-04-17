import Image from 'next/image'
import Link from 'next/link'
import type { BlogPostMeta } from '@/lib/blog/types'

function formatDate(iso: string) {
  const d = new Date(iso)
  if (!Number.isFinite(d.getTime())) return '—'
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

function PostCover({ post, className }: { post: BlogPostMeta; className?: string }) {
  const base = `relative overflow-hidden bg-[#0a0a12] ${className ?? ''}`

  if (post.image?.startsWith('/')) {
    return (
      <div className={`${base} radius-14`}>
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30"
          aria-hidden
        />
      </div>
    )
  }

  if (post.image?.startsWith('http')) {
    return (
      <div className={`${base} radius-14`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
          aria-hidden
        />
      </div>
    )
  }

  return (
    <div
      className={`${base} radius-14 min-h-0 bg-[linear-gradient(145deg,rgba(22,27,169,0.55)_0%,rgba(10,10,18,0.95)_48%,#0a0a12_100%)]`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_20%,rgba(77,130,255,0.15),transparent_55%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" aria-hidden />
    </div>
  )
}

function FeaturedCard({ post }: { post: BlogPostMeta }) {
  const dateLabel = formatDate(post.publishedAt)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group radius-14 relative grid overflow-hidden border border-white/[0.07] bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(0,0,0,0.2)_100%)] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition duration-300 hover:border-[#2a3dd6]/25 hover:shadow-[0_40px_100px_-56px_rgba(22,27,169,0.55)] lg:grid-cols-12 lg:items-stretch lg:gap-0"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden lg:col-span-5 lg:aspect-auto lg:h-full lg:min-h-[260px]">
        <PostCover post={post} className="absolute inset-0 h-full w-full" />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-7 lg:p-10 lg:pl-12">
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
          {post.category ? (
            <span className="rounded-[6px] border border-[#2a3dd6]/30 bg-[#161ba9]/20 px-2 py-0.5 text-[#a8b9ff]">
              {post.category}
            </span>
          ) : (
            <span className="text-white/35">Artigo em destaque</span>
          )}
          <span className="text-white/20" aria-hidden>
            ·
          </span>
          <time dateTime={post.publishedAt}>{dateLabel}</time>
        </div>
        <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-[1.15]">
          {post.title}
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-white/55 sm:text-[1.05rem] sm:leading-relaxed">
          {post.description}
        </p>
        <p className="mt-6 flex items-center gap-2 text-sm font-medium text-[#7ea3ff] transition group-hover:gap-3">
          <span>Ler na íntegra</span>
          <span aria-hidden className="inline-block translate-y-px">
            →
          </span>
        </p>
        <p className="mt-3 text-xs text-white/35">{post.readingTimeMinutes} min de leitura</p>
      </div>
    </Link>
  )
}

function CompactCard({ post }: { post: BlogPostMeta }) {
  const dateLabel = formatDate(post.publishedAt)

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group radius-14 flex flex-col overflow-hidden border border-white/[0.06] bg-[linear-gradient(165deg,rgba(255,255,255,0.03),rgba(0,0,0,0.15))] transition duration-300 hover:border-white/[0.11] hover:bg-[linear-gradient(165deg,rgba(255,255,255,0.045),rgba(0,0,0,0.12))]"
    >
      <div className="relative aspect-[16/9] shrink-0 border-b border-white/[0.05]">
        <PostCover post={post} className="h-full w-full" />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/40">
          {post.category ? (
            <span className="font-medium text-[#8fa8ff]">{post.category}</span>
          ) : null}
          {post.category ? <span className="text-white/15">·</span> : null}
          <time dateTime={post.publishedAt}>{dateLabel}</time>
          <span className="text-white/15">·</span>
          <span>{post.readingTimeMinutes} min</span>
        </div>
        <h2 className="mt-3 text-balance text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
          {post.title}
        </h2>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-white/50">{post.description}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#7ea3ff] transition group-hover:gap-2">
          Ler artigo
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  )
}

export function BlogPostList({ posts }: { posts: BlogPostMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-sm text-white/45">Nenhum artigo publicado ainda.</p>
  }

  const [featured, ...rest] = posts

  return (
    <div className="space-y-12 sm:space-y-14">
      <FeaturedCard post={featured} />
      {rest.length > 0 ? (
        <div>
          <h2 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">Mais artigos</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {rest.map((p) => (
              <CompactCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
