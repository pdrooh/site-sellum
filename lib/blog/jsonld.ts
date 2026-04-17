import type { BlogPostMeta } from './types'

const site = 'https://sellum.app'

export function getBlogArticleJsonLd(post: BlogPostMeta) {
  const published = new Date(post.publishedAt).toISOString()
  const modified = post.updatedAt ? new Date(post.updatedAt).toISOString() : published

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: published,
    dateModified: modified,
    inLanguage: 'pt-BR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${site}/blog/${post.slug}`,
    },
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sellum',
      url: site,
      logo: {
        '@type': 'ImageObject',
        url: `${site}/images/logo/logo-dark.svg`,
      },
    },
    ...(post.image
      ? {
          image: [post.image],
        }
      : {}),
  }
}
