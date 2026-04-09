import Script from 'next/script'
import { Landing } from '@/components/landing/Landing'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sellum',
  url: 'https://sellum.app',
  logo: 'https://sellum.app/images/logo/logo-dark.svg',
  description:
    'Plataforma comercial B2B com funil completo — do primeiro contato ao fechamento.',
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Sellum',
  brand: { '@type': 'Brand', name: 'Sellum' },
  description:
    'Plataforma comercial B2B para centralizar pipeline, governança e integrações com previsibilidade.',
  offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="ld-org"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Script
        id="ld-product"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <Landing />
    </>
  )
}

