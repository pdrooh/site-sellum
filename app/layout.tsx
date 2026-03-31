import type { Metadata, Viewport } from 'next'
import { Red_Hat_Text } from 'next/font/google'
import './globals.css'

const redHat = Red_Hat_Text({
  subsets: ['latin'],
  variable: '--font-red-hat',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: true,
})

export const viewport: Viewport = {
  themeColor: '#161BA9',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sellum.app'),
  title: {
    default: 'Sellum | Plataforma comercial B2B',
    template: '%s | Sellum',
  },
  description:
    'A Sellum centraliza o funil B2B do primeiro contato ao fechamento, com governança, integrações e previsibilidade para escalar.',
  openGraph: {
    title: 'Sellum | Plataforma comercial B2B',
    description:
      'Funil B2B do primeiro contato ao fechamento — dados, governança e integração para previsibilidade comercial.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sellum.app',
    siteName: 'Sellum',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sellum | Plataforma comercial B2B',
    description:
      'Funil B2B do primeiro contato ao fechamento — previsibilidade para escalar.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${redHat.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full bg-black">{children}</body>
    </html>
  )
}

