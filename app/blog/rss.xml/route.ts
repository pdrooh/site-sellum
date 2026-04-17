import { getIndexedPostsMeta } from '@/lib/blog'

const site = 'https://sellum.app'

function escapeXml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const posts = await getIndexedPostsMeta()

  const items = posts
    .map((p) => {
      const pub = new Date(p.publishedAt).toUTCString()
      const link = `${site}/blog/${p.slug}`
      return [
        '<item>',
        `<title>${escapeXml(p.title)}</title>`,
        `<link>${link}</link>`,
        `<guid isPermaLink="true">${link}</guid>`,
        `<pubDate>${pub}</pubDate>`,
        `<description>${escapeXml(p.description)}</description>`,
        '</item>',
      ].join('')
    })
    .join('')

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    `<title>Sellum Blog</title>`,
    `<link>${site}/blog</link>`,
    `<description>Artigos sobre vendas B2B e operação comercial.</description>`,
    `<language>pt-BR</language>`,
    `<atom:link href="${site}/blog/rss.xml" rel="self" type="application/rss+xml" />`,
    items,
    '</channel>',
    '</rss>',
  ].join('')

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
